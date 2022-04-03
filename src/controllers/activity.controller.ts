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
  requestBody
} from '@loopback/rest';
import {GoodActivity} from '../models';
import {GoodActivityRepository} from '../repositories';

export class ActivityController {
  constructor(
    @repository(GoodActivityRepository)
    public goodActivityRepository: GoodActivityRepository,
  ) { }

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
            exclude: ['id']
          }),
          examples: {
            'Create an Activity': {
              value: {
                name: 'Good Deed Post on Discord - Local Cleanup',
                deleted: false,
                goodCategoryId: 8,
                goodTypeId: 6,
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
            exclude: ['id']
          }),
          examples: {
            'Create an Activity': {
              value: {
                name: 'Good Deed Post on Discord - Local Cleanup',
                deleted: false,
                goodCategoryId: 8,
                goodTypeId: 6,
                valuePerUnit: 100,
                unitDescription: 'per post',
              },
            },
          },
        },
      },
      description: '',
    })
    activity: Omit<GoodActivity, 'id'>,
  ): Promise<unknown> {
    return this.goodActivityRepository.create(activity);
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
    delete activity?.id;
    return this.goodActivityRepository.updateById(id, activity).catch((err: Error) => {
      if (err.message === 'Document not found')
        throw new HttpErrors.NotFound('Category Not Found');
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
