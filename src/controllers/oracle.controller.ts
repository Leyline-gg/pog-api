import {repository} from '@loopback/repository';
import {HttpErrors, operation, param, requestBody} from '@loopback/rest';
import {GoodOracle, GoodOracleInput} from '../models';
import {GoodOracleRepository} from '../repositories';

export class OracleController {
  constructor(
    @repository(GoodOracleRepository)
    public goodOracleRepository: GoodOracleRepository,
  ) {}

  /**
   * Create a new Oracle
   *
   * @param id The PoG ID of the oracle
   * @param oracle
   */
  @operation('post', '/oracle/{id}', {
    summary: 'Create an Oracle',
    operationId: 'post-oracle',
    responses: {
      '201': {
        description: 'Oracle Created',
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
        description: 'Oracle Not Found',
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
            $ref: '#/components/schemas/GoodOracle_Input',
          },
          examples: {
            'Create an Oracle': {
              value: {
                name: 'Leyline',
                goodOracleURI: 'leyline.gg',
              },
            },
          },
        },
      },
      description: '',
    },
    description: 'Create a new Oracle',
    parameters: [
      {
        schema: {
          type: 'integer',
          example: 3,
        },
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the oracle',
      },
    ],
    security: [
      {
        Oracle_API_Key: [],
      },
    ],
  })
  async postOracle(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the oracle',
    })
    id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/GoodOracle_Input',
          },
          examples: {
            'Create an Oracle': {
              value: {
                name: 'Leyline',
                goodOracleURI: 'leyline.gg',
              },
            },
          },
        },
      },
      description: '',
    })
    oracle: GoodOracle,
  ): Promise<unknown> {
    oracle.id = id;
    return this.goodOracleRepository.create(oracle);
  }

  /**
   * Retrieve a Proof of Good Oracle
   *
   * @param id The PoG ID of the oracle
   * @returns A Proof of Good Oracle
   */
  @operation('get', '/oracle/{id}', {
    summary: 'Get Oracle',
    operationId: 'get-oracle',
    responses: {
      '200': {
        description: 'A Proof of Good Oracle',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/GoodOracle',
            },
            examples: {},
          },
        },
      },
      '404': {
        description: 'Oracle Not Found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
    },
    description: 'Retrieve a Proof of Good Oracle',
    parameters: [
      {
        schema: {
          type: 'integer',
          example: 3,
        },
        name: 'id',
        in: 'path',
        required: true,
        description: 'The PoG ID of the oracle',
      },
    ],
  })
  async getOracle(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the oracle',
    })
    id: number,
  ): Promise<GoodOracle> {
    return this.goodOracleRepository.findById(id);
  }

  /**
   * Update an Oracle's details
   *
   * @param id The PoG ID of the oracle
   * @param oracle
   */
  @operation('put', '/oracle/{id}', {
    summary: 'Change Oracle Details',
    operationId: 'put-oracle',
    responses: {
      '200': {
        description: 'Oracle Updated',
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
        description: 'Oracle Not Found',
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
            $ref: '#/components/schemas/GoodOracle_Input',
          },
          examples: {},
        },
      },
    },
    description: "Update an Oracle's details",
    security: [
      {
        Oracle_API_Key: [],
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
        description: 'The PoG ID of the oracle',
      },
    ],
  })
  async putOracle(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The PoG ID of the oracle',
    })
    id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/GoodOracle_Input',
          },
          examples: {},
        },
      },
    })
    oracle: GoodOracleInput | any,
  ): Promise<unknown> {
    delete oracle?.id;
    return this.goodOracleRepository
      .updateById(id, oracle)
      .catch((err: Error) => {
        if (err.message == '404')
          throw new HttpErrors.NotFound('Oracle Not Found');
      });
  }
}
