import {service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {GoodType} from '../models';
import {GoodTypeRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';

export class GoodTypeController {
  constructor(
    @repository(GoodTypeRepository)
    public goodTypeRepository: GoodTypeRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
  ) {}

  @post('/good-types', {
    summary: 'Create a Good Type',
    operationId: 'post-good-type',
    responses: {
      '201': {
        description: 'Good Type Created',
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
        description: 'Category Not Found',
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
          schema: getModelSchemaRef(GoodType, {
            title: 'New Category',
            exclude: ['id'],
          }),
          examples: {
            'Create a Good Type': {
              value: {
                name: 'Quality Education',
              },
            },
          },
        },
      },
      description: '',
    },
    description: 'Create a new Good Type',
    parameters: [],
    security: [
      {
        Oracle_API_Key: [],
      },
    ],
  })
  async postGoodType(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodType, {
            title: 'New Good Type',
            exclude: ['id'],
          }),
          examples: {
            'Create a Good Type': {
              value: {
                name: 'Quality Education',
              },
            },
          },
        },
      },
    })
    goodType: Partial<GoodType>,
  ): Promise<GoodType> {
    const tempGoodType = new GoodType(goodType);
    const categoryData = await this.proofOfGoodSmartContractService.addGoodType(
      tempGoodType,
    );
    const [id, name, status] = categoryData;
    return this.goodTypeRepository.create({
      id: id.toString(),
      name,
      status: status.toString(),
    } as GoodType);
  }

  @patch('/good-types', {
    summary: 'Update a Good Type',
    operationId: 'patch-good-type',
    responses: {
      '200': {
        description: 'Good Type Updated',
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
        description: 'Good Type Not Found',
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
          schema: getModelSchemaRef(GoodType, {partial: true}),
          examples: {
            'Change Category Details': {
              value: {
                name: 'Animal Welfare',
              },
            },
          },
        },
      },
      description: '',
    },
    description: "Update a Good Type's details",
    security: [
      {
        Category_API_Key: [],
      },
    ],
    parameters: [
      {
        schema: {
          type: 'integer',
          example: 3,
        },
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the Good Type',
      },
    ],
  })
  async patchGoodType(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the Good Type',
    })
    id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodType, {partial: true}),
          examples: {
            'Change Good Type Details': {
              value: {
                name: 'Quality Education',
              },
            },
          },
        },
      },
      description: '',
    })
    goodType: Partial<GoodType>,
  ): Promise<unknown> {
    delete goodType?.id;

    const fetchedGoodType = await this.goodTypeRepository.findById(id);

    const goodTypeData = new GoodType(
      Object.assign(fetchedGoodType, {
        id,
        goodType,
      }),
    );

    await this.proofOfGoodSmartContractService.updateGoodType(goodTypeData);

    return this.goodTypeRepository
      .updateById(id, goodTypeData)
      .catch((err: Error) => {
        if (err.message === 'Document not found')
          throw new HttpErrors.NotFound('Oracle Not Found');
      });
  }

  @put('/good-types/{id}', {
    summary: 'Change Good Type Details',
    operationId: 'put-good-type',
    responses: {
      '200': {
        description: 'Good Type Updated',
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
        description: 'Good Type Not Found',
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
          schema: getModelSchemaRef(GoodType, {partial: true}),
          examples: {
            'Change Good Type Details': {
              value: {
                name: 'Quality Education',
              },
            },
          },
        },
      },
      description: '',
    },
    description: "Update a Good Type's details",
    security: [
      {
        Category_API_Key: [],
      },
    ],
    parameters: [
      {
        schema: {
          type: 'integer',
          example: 3,
        },
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the Good Type',
      },
    ],
  })
  async putGoodType(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the Good Type',
    })
    id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodType, {partial: true}),
          examples: {},
        },
      },
    })
    goodType: Partial<GoodType>,
  ): Promise<unknown> {
    return this.patchGoodType(id, goodType);
  }

  @get('/good-types/{id}', {
    summary: 'Get Good Type',
    operationId: 'get-good-type',
    responses: {
      '200': {
        description: 'A Proof of Good Type',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/GoodType',
            },
            examples: {},
          },
        },
      },
      '404': {
        description: 'Good Type not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
    },
    description: 'Retrieve a Proof of Good Type',
    parameters: [
      {
        schema: {
          type: 'integer',
          example: 3,
        },
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the Good Type',
      },
    ],
  })
  async getGoodType(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the Good Type',
    })
    id: number,
  ): Promise<GoodType> {
    return this.goodTypeRepository.findById(id);
  }

  @get('/good-types', {
    responses: {
      '200': {
        description: 'Retrieve all Proof of Good Categories',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GoodType, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async getAllGoodType(
    @param.filter(GoodType) filter?: Filter<GoodType>,
  ): Promise<GoodType[]> {
    return this.goodTypeRepository.find(filter);
  }
}
