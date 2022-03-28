import {api, operation, param, requestBody} from '@loopback/rest';
import {GoodCategoryInput} from '../models/good-category-input.model';
import {GoodCategory} from '../models/good-category.model';
import {ProofOfGoodEntryInput} from '../models/proof-of-good-entry-input.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 *
 */
@api({
  components: {
    schemas: {
      ErrorResponse: {
        title: 'ErrorResponse',
        type: 'object',
        properties: {
          status: {
            type: 'integer',
            description: 'The HTTP status code for the error',
            example: 401,
            minimum: 400,
            maximum: 599,
            readOnly: true,
          },
          message: {
            type: 'string',
            description: 'A brief description of the cause of the error',
            example: 'API key missing or invalid',
            readOnly: true,
          },
        },
        required: ['status', 'message'],
        examples: [
          {
            status: 401,
            message: 'API key missing or invalid',
          },
        ],
        description:
          'Standard error object to be sent in the HTTP response body',
      },
      GoodActivity_Input: {
        title: 'GoodActivity.input',
        type: 'object',
        examples: [
          {
            name: 'Good Deed Post on Discord - Local Cleanup',
            deleted: false,
            goodCategoryId: 8,
            goodTypeId: 6,
            valuePerUnit: 100,
            unitDescription: 'per post',
          },
        ],

        properties: {
          name: {
            type: 'string',
            description: 'Activity name',
            example: 'Good Deed Post on Discord - Local Cleanup',
          },
          deleted: {
            type: 'boolean',
            default: false,
            description: 'If true, cannot write to ledger with this type',
          },
          goodCategoryId: {
            type: 'integer',
            example: 8,
          },
          goodTypeId: {
            type: 'integer',
            example: 6,
          },
          valuePerUnit: {
            type: 'number',
            description: 'Good points per unit',
            example: 100,
          },
          unitDescription: {
            type: 'string',
            description: 'Activity description',
            example: 'per post',
          },
        },
        required: [
          'name',
          'goodCategoryId',
          'goodTypeId',
          'valuePerUnit',
          'unitDescription',
        ],
      },
      GoodActivity: {
        title: 'GoodActivity',
        type: 'object',
        examples: [
          {
            id: '1',
            name: 'Good Deed Post on Discord - Blood Donation',
            deleted: false,
            goodCategoryId: 1,
            goodTypeId: 3,
            valuePerUnit: 100,
            unitDescription: 'per post',
          },
        ],

        properties: {
          id: {
            type: 'string',
            example: '1',
            readOnly: true,
          },
          name: {
            type: 'string',
            description: 'Activity name',
            example: 'Good Deed Post on Discord - Blood Donation',
          },
          deleted: {
            type: 'boolean',
            default: false,
            description: 'If true, cannot write to ledger with this type',
          },
          goodCategoryId: {
            type: 'integer',
            example: 1,
            readOnly: true,
          },
          goodTypeId: {
            type: 'integer',
            example: 3,
            readOnly: true,
          },
          valuePerUnit: {
            type: 'number',
            description: 'Good points per unit',
            example: 100,
          },
          unitDescription: {
            type: 'string',
            description: 'Activity description',
            example: 'per post',
          },
        },
        required: ['id'],
      },
      GoodCategory_Input: {
        title: 'GoodCategory.input',
        type: 'object',
        examples: [
          {
            name: 'Education',
          },
        ],

        properties: {
          name: {
            type: 'string',
            description: 'Category name',
          },
          deleted: {
            type: 'boolean',
            default: false,
            description: 'If true, cannot write to ledger with this category',
          },
        },
        required: ['name'],
      },
      GoodCategory: {
        title: 'GoodCategory',
        type: 'object',
        examples: [
          {
            id: '2',
            name: 'Mental Health',
            deleted: false,
            totalGood: 88000,
          },
        ],

        properties: {
          id: {
            type: 'string',
            example: '2',
            readOnly: true,
          },
          name: {
            type: 'string',
            description: 'Category name',
            example: 'Mental Health',
          },
          deleted: {
            type: 'boolean',
            default: false,
            description: 'If true, cannot write to ledger with this category',
          },
          totalGood: {
            type: 'integer',
            description: 'non-decrementing summary of total good by category',
            example: 88000,
          },
        },
        required: ['id'],
      },
      GoodOracle_Input: {
        title: 'GoodOracle.input',
        type: 'object',
        examples: [
          {
            name: 'Leyline DAO',
            goodOracleURI: 'leyline.io',
          },
        ],

        properties: {
          name: {
            type: 'string',
            description: 'Oracle name',
          },
          goodOracleURI: {
            type: 'string',
            description: 'reference to metadata on IPFS',
          },
          deleted: {
            type: 'boolean',
            default: false,
            description: 'if true, cannot write to ledger with this oracle',
          },
        },
        required: ['name', 'goodOracleURI'],
      },
      GoodOracle: {
        title: 'GoodOracle',
        type: 'object',
        examples: [
          {
            id: '1',
            name: 'Leyline',
            goodOracleURI: 'leyline.gg',
            deleted: false,
          },
        ],

        properties: {
          id: {
            type: 'string',
            example: '1',
            readOnly: true,
          },
          name: {
            type: 'string',
            description: 'Oracle name',
            example: 'Leyline',
          },
          goodOracleURI: {
            type: 'string',
            description: 'reference to metadata on IPFS',
            example: 'leyline.gg',
          },
          deleted: {
            type: 'boolean',
            default: false,
            description: 'if true, cannot write to ledger with this oracle',
          },
        },
        required: ['id'],
      },
      ProofOfGoodEntry_Input: {
        title: 'ProofOfGoodEntry.input',
        type: 'object',
        examples: [],

        description: '',
        properties: {
          doGooder: {
            type: 'string',
            description: 'Wallet address of the user who did good',
          },
          goodActivityId: {
            type: 'integer',
            description: 'GoodActivity for this entry',
          },
          units: {
            type: 'number',
            exclusiveMinimum: true,
            minimum: 0,
            description: 'Number of units performed for the `GoodActivity`',
          },
          proofURL: {
            type: 'string',
            description: 'Oracle-provided IFPS file',
          },
          timestamp: {
            type: 'integer',
            description:
              'Unix timestamp (in ms) representing when the good deed was done',
          },
          userId: {
            type: 'string',
            description: 'awaiting clarification',
          },
          externalId: {
            type: 'string',
            description: 'awaiting clarification',
          },
        },
        required: ['doGooder', 'goodActivityId', 'units', 'timestamp'],
      },
    },
    securitySchemes: {
      Oracle_API_Key: {
        name: 'oracle-auth',
        type: 'apiKey',
        in: 'header',
        description: 'Oracle authorization via API key.',
      },
    },
  },
  paths: {},
})
export class OpenApiController {
  constructor() {}

  /**
   *
   *
   * @param _requestBody
   */
  @operation('post', '/pog', {
    summary: 'Create a ProofOfGoodEntry',
    operationId: 'post-pog-entry',
    responses: {
      '201': {
        description: 'Entry Created',
      },
      '400': {
        description: 'Missing Required Information',
      },
      '401': {
        description: 'Unauthorized',
      },
    },
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ProofOfGoodEntry_Input',
          },
          examples: {
            'New Entry': {
              value: {
                tokenId: 'string',
                doGooder: 'string',
                goodActivityId: 0,
                units: 1,
                proofURL: 'string',
                timestamp: 0,
                externalId: 'string',
              },
            },
          },
        },
      },
      description: '',
    },
    description: '',
    parameters: [],
    security: [
      {
        Oracle_API_Key: [],
      },
    ],
  })
  async postPogEntry(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ProofOfGoodEntry_Input',
          },
          examples: {
            'New Entry': {
              value: {
                tokenId: 'string',
                doGooder: 'string',
                goodActivityId: 0,
                units: 1,
                proofURL: 'string',
                timestamp: 0,
                externalId: 'string',
              },
            },
          },
        },
      },
      description: '',
    })
    _requestBody: ProofOfGoodEntryInput,
  ): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   * Create a new Category
   *
   * @param id The PoG ID of the category
   * @param _requestBody
   */
  @operation('post', '/category/{id}', {
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
    security: [
      {
        Oracle_API_Key: [],
      },
    ],
  })
  async postCategory(
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
    _requestBody: GoodCategoryInput,
  ): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   * Update a Category's details
   *
   * @param id The PoG ID of the category
   * @param _requestBody
   */
  @operation('put', '/category/{id}', {
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
    _requestBody: GoodCategoryInput,
  ): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   * Retrieve a Proof of Good Category
   *
   * @param id The PoG ID of the category
   * @returns A Proof of Good Category
   */
  @operation('get', '/category/{id}', {
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
    throw new Error('Not implemented');
  }
}
