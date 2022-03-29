import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {GoodCategory, GoodCategoryInput} from '../models';
import {GoodCategoryRepository} from '../repositories';

export class CategoryController {
  constructor(
    @repository(GoodCategoryRepository)
    public repository: GoodCategoryRepository,
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
          schema: {
            $ref: '#/components/schemas/GoodCategory_Input',
          },
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
          schema: {
            $ref: '#/components/schemas/GoodCategory_Input',
          },
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
    })
    category: Omit<GoodCategory, 'id'>,
  ): Promise<unknown> {
    return this.repository.create(category);
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
          schema: {
            $ref: '#/components/schemas/GoodCategory_Input',
          },
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
          schema: {
            $ref: '#/components/schemas/GoodCategory_Input',
          },
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
    category: GoodCategoryInput | any,
  ): Promise<unknown> {
    delete category?.id;
    return this.repository.updateById(id, category).catch((err: Error) => {
      if (err.message == 'Document not found')
        throw new HttpErrors.NotFound('Oracle Not Found');
    });
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
    return this.repository.findById(id);
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
    return this.repository.find(filter);
  }
}
