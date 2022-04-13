import {service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  HttpErrors,
  operation,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {GoodActivity} from '../models';
import {GoodActivityRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';
export class ActivityController {
  constructor(
    @repository(GoodActivityRepository)
    public goodActivityRepository: GoodActivityRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
  ) {}

  /**
   * Create a new Activity
   *
   * @param activity
   */
  @post('/activity', {
    summary: 'Create an Activity',
    operationId: 'post-activity',
    responses: {
      '201': {
        description: 'Activity Created',
      },
      '400': {
        description: 'Missing Required Information',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
      '401': {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
      '404': {
        description: 'Activity Not Found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
    },
    requestBody: {
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodActivity, {
            title: 'New Activity',
            exclude: ['id'],
          }),
          examples: {
            'Create an Activity': {
              value: {
                name: 'Good Deed Post on Discord - Local Cleanup',
                status: 0,
                goodCategoryId: 8,
                goodTypeIdArray: [],
                valuePerUnit: 100,
                unitDescription: 'per post',
              },
            },
          },
        },
      },
      description: '',
    },
    description: 'Create a new Activity',
    parameters: [],
    security: [
      {
        Activity_API_Key: [],
      },
    ],
  })
  async postActivity(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodActivity, {
            title: 'New Activity',
            exclude: ['id'],
          }),
          examples: {
            'Create an Activity': {
              value: {
                name: 'Good Deed Post on Discord - Local Cleanup',
                status: 0,
                goodCategoryId: 8,
                goodTypeIdArray: [],
                valuePerUnit: 100,
                unitDescription: 'per post',
              },
            },
          },
        },
      },
      description: '',
    })
    activity: Partial<GoodActivity>,
  ): Promise<unknown> {
    if (!activity.goodTypeIdArray) activity['goodTypeIdArray'] = [];
    const goodActivity = new GoodActivity(activity);
    const categoryData =
      await this.proofOfGoodSmartContractService.updateLedger(
        'post',
        goodActivity,
      );
    const [
      id,
      goodTypeIdArray,
      goodCategoryId,
      name,
      valuePerUnit,
      unitDescription,
      status,
    ] = categoryData;

    return await this.goodActivityRepository.create({
      id: id,
      goodTypeIdArray,
      goodCategoryId,
      name,
      valuePerUnit,
      unitDescription,
      status,
    } as GoodActivity);
  }

  /**
   * Update an Activity's details
   *
   * @param id The PoG ID of the Activity
   * @param oracle
   */
  @patch('/activity/{id}', {
    summary: 'Change Activity Details',
    operationId: 'put-activity',
    responses: {
      '200': {
        description: 'Activity Updated',
      },
      '401': {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
        headers: {},
      },
      '404': {
        description: 'Activity Not Found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
    },
    requestBody: {
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodActivity, {partial: true}),
          examples: {
            'Change Activity Details': {
              value: {
                name: 'Good Deed Post on Discord - Local Cleanup',
                goodCategoryId: 8,
                goodTypeId: 6,
                valuePerUnit: 100,
                unitDescription: 'per image',
              },
            },
          },
        },
      },
    },
    description: "Update an Activity's details",
    security: [
      {
        Activity_API_Key: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the activity',
      },
    ],
  })
  async patchActivity(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the activity',
    })
    id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodActivity, {partial: true}),
          examples: {
            'Change Activity Details': {
              value: {
                name: 'Good Deed Post on Discord - Local Cleanup',
                status: 0,
                goodCategoryId: 8,
                goodTypeIdArray: [],
                valuePerUnit: 100,
                unitDescription: 'per post',
              },
            },
          },
        },
      },
    })
    activity: Partial<GoodActivity>,
  ): Promise<unknown> {
    delete activity?.id;
    // fetch current doc for good type
    const fetchedGoodActivity = await this.goodActivityRepository.findById(id);
    // create temp objects and merge current values into incoming inputs IF input fields are excluded
    const tempGoodActivity: any = {...activity};
    const fetchedData: any = {...fetchedGoodActivity};

    Object.keys(fetchedData).forEach(key => {
      if (!tempGoodActivity[key]) {
        tempGoodActivity[key] = fetchedData[key];
      }
    });

    // initialize GoodType to pass into updateLedger method
    // then destructure returned event arguments
    const goodActivity = new GoodActivity(tempGoodActivity);

    const [
      goodActivityId,
      goodTypeIdArray,
      goodCategoryId,
      name,
      valuePerUnit,
      unitDescription,
      status,
    ] = await this.proofOfGoodSmartContractService.updateLedger(
      'patch',
      goodActivity,
    );
    // persist event arguments to firestore doc
    return this.goodActivityRepository
      .updateById(id, {
        id: goodActivityId,
        goodTypeIdArray,
        goodCategoryId,
        name,
        valuePerUnit,
        unitDescription,
        status,
      })
      .catch((err: Error) => {
        if (err.message === 'Document not found')
          throw new HttpErrors.NotFound('Oracle Not Found');
      });
  }

  /**
   * Update an Activity's details
   *
   * @param id The PoG ID of the activity
   * @param activity
   */
  @put('/activity/{id}', {
    summary: 'Change Activity Details',
    operationId: 'put-activity',
    responses: {
      '200': {
        description: 'Activity Updated',
      },
      '401': {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
        headers: {},
      },
      '404': {
        description: 'Activity Not Found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
    },
    requestBody: {
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodActivity, {partial: true}),
          examples: {
            'Change Activity Details': {
              value: {
                name: 'Good Deed Post on Discord - Local Cleanup',
                goodCategoryId: 8,
                goodTypeId: 6,
                valuePerUnit: 100,
                unitDescription: 'per image',
              },
            },
          },
        },
      },
    },
    description: "Update an Activity's details",
    security: [
      {
        Activity_API_Key: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the activity',
      },
    ],
  })
  async putActivity(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the activity',
    })
    id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodActivity, {partial: true}),
          examples: {
            'Change Activity Details': {
              value: {
                name: 'Good Deed Post on Discord - Local Cleanup',
                goodCategoryId: 8,
                goodTypeId: 6,
                valuePerUnit: 100,
                unitDescription: 'per image',
              },
            },
          },
        },
      },
    })
    activity: Partial<GoodActivity>,
  ): Promise<unknown> {
    return this.patchActivity(id, activity);
  }

  /**
   * Retrieve a Proof of Good Activity
   *
   * @param id The PoG ID of the activity
   * @returns A Proof of Good Activity
   */
  @get('/activity/{id}', {
    summary: 'Get Activity',
    operationId: 'get-activity',
    responses: {
      '200': {
        description: 'A Proof of Good Activity',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/GoodActivity',
            },
            examples: {},
          },
        },
      },
      '404': {
        description: 'Activity Not Found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
    },
    description: 'Retrieve a Proof of Good Activity',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the activity',
      },
    ],
  })
  async getActivity(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the activity',
    })
    id: number,
  ): Promise<GoodActivity> {
    return this.goodActivityRepository.findById(id);
  }

  @operation('get', '/activity', {
    responses: {
      '200': {
        description: 'Retrieve all Proof of Good Activities',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GoodActivity, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async getAllActivities(
    @param.filter(GoodActivity) filter?: Filter<GoodActivity>,
  ): Promise<GoodActivity[]> {
    return this.goodActivityRepository.find(filter);
  }
}
