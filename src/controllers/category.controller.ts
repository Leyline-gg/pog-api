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
import {GoodCategory} from '../models';
import {GoodCategoryRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';

export class CategoryController {
  constructor(
    @repository(GoodCategoryRepository)
    public goodCategoryRepository: GoodCategoryRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
  ) {}

  /**
   * Create a new Category
   *
   * @param id The PoG ID of the category
   * @param category
   */
  @post('/category', {
    summary: 'Create a Category',
    operationId: 'post-category',
    responses: {
      '201': {
        description: 'Category Created',
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
          schema: getModelSchemaRef(GoodCategory, {
            title: 'New Category',
            exclude: ['id'],
          }),
          examples: {
            'Create a Category': {
              value: {
                name: 'Mental Health',
              },
            },
          },
        },
      },
      description: '',
    },
    description: 'Create a new Category',
    parameters: [],
    security: [
      {
        Oracle_API_Key: [],
      },
    ],
  })
  async postCategory(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodCategory, {
            title: 'New Category',
            exclude: ['id'],
          }),
          examples: {
            'Create a Category': {
              value: {
                name: 'Mental Health',
                status: 0,
              },
            },
          },
        },
      },
      description: '',
    })
    category: Partial<GoodCategory>,
  ): Promise<unknown> {
    const tempGoodCategory = new GoodCategory(category);
    const categoryData =
      await this.proofOfGoodSmartContractService.updateLedger(
        'post',
        tempGoodCategory,
      );
    const [id, name, status] = categoryData;

    const response = await this.goodCategoryRepository.create({
      id: id,
      name,
      status: status,
    } as GoodCategory);

    return response;
  }

  @patch('/category/{id}', {
    summary: 'Change Category Details',
    operationId: 'patch-category',
    responses: {
      '200': {
        description: 'Category Updated',
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
          schema: getModelSchemaRef(GoodCategory, {partial: true}),
          examples: {
            'Change Category Details': {
              value: {
                name: 'Animal Welfare',
                status: 0,
              },
            },
          },
        },
      },
      description: '',
    },
    description: "Update a Category's details",
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
        description: 'The PoG ID of the category',
      },
    ],
  })
  async patchCategory(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the category',
    })
    id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodCategory, {partial: true}),
          examples: {
            'Change Category Details': {
              value: {
                name: 'Animal Welfare',
                status: 0,
              },
            },
          },
        },
      },
      description: '',
    })
    category: Partial<GoodCategory>,
  ): Promise<unknown> {
    delete category?.id;
    // fetch current doc for good category
    const fetchedGoodCategory = await this.goodCategoryRepository.findById(id);
    console.log('fetchedGoodCategory', fetchedGoodCategory);
    // create temp objects and merge current values into incoming inputs IF input fields are missing
    const tempCategory: Record<string, unknown> = {...category};
    const fetchedData: Record<string, unknown> = {...fetchedGoodCategory};

    Object.keys(fetchedGoodCategory).forEach(key => {
      if (!tempCategory[key]) {
        tempCategory[key] = fetchedData[key];
      }
    });
    // initialize GoodCategory and pass into updateLedger method
    // then destructure returned event arguments
    const goodCategory = new GoodCategory(tempCategory);

    const [goodCategoryId, name, status] =
      await this.proofOfGoodSmartContractService.updateLedger(
        'patch',
        goodCategory,
      );
    // persist event arguments to firestore doc
    return this.goodCategoryRepository
      .updateById(id, {
        id: goodCategoryId,
        name,
        status,
      })
      .catch((err: Error) => {
        if (err.message === 'Document not found')
          throw new HttpErrors.NotFound('Category Not Found');
      });
  }

  /**
   * Update a Category's details
   *
   * @param id The PoG ID of the category
   * @param category
   */
  @put('/category/{id}', {
    summary: 'Change Category Details',
    operationId: 'put-category',
    responses: {
      '200': {
        description: 'Category Updated',
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
          schema: getModelSchemaRef(GoodCategory, {partial: true}),
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
    description: "Update a Category's details",
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
        description: 'The PoG ID of the category',
      },
    ],
  })
  async putCategory(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the category',
    })
    id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodCategory, {partial: true}),
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
    })
    category: Partial<GoodCategory>,
  ): Promise<unknown> {
    return this.patchCategory(id, category);
  }

  /**
   * Retrieve a Proof of Good Category
   *
   * @param id The PoG ID of the category
   * @returns A Proof of Good Category
   */
  @get('/category/{id}', {
    summary: 'Get Category',
    operationId: 'get-category',
    responses: {
      '200': {
        description: 'A Proof of Good Category',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/GoodCategory',
            },
            examples: {},
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
    description: 'Retrieve a Proof of Good Category',
    parameters: [
      {
        schema: {
          type: 'integer',
          example: 3,
        },
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the category',
      },
    ],
  })
  async getCategory(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the category',
    })
    id: number,
  ): Promise<GoodCategory> {
    return this.goodCategoryRepository.findById(id);
  }

  @get('/category', {
    responses: {
      '200': {
        description: 'Retrieve all Proof of Good Categories',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GoodCategory, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async getAllCategories(
    @param.filter(GoodCategory) filter?: Filter<GoodCategory>,
  ): Promise<GoodCategory[]> {
    return this.goodCategoryRepository.find(filter);
  }
}
