import {service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  getModelSchemaRef,
  HttpErrors,
  operation,
  param,
  patch,
  requestBody,
} from '@loopback/rest';
import {GoodOracle} from '../models';
import {GoodOracleRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';

export class OracleController {
  constructor(
    @repository(GoodOracleRepository)
    public goodOracleRepository: GoodOracleRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
  ) {}

  /**
   * Create a new Oracle
   *
   * @param id The PoG ID of the oracle
   * @param oracle
   */
  @operation('post', '/oracle', {
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
          schema: getModelSchemaRef(GoodOracle, {
            title: 'New Oracle',
            exclude: ['id'],
          }),
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
    parameters: [],
    security: [
      {
        Oracle_API_Key: [],
      },
    ],
  })
  async postOracle(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodOracle, {
            title: 'New Oracle',
            exclude: ['id'],
          }),
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
    oracle: Partial<GoodOracle>,
  ): Promise<unknown> {
    // if (!oracle.approvedActivityIdArray) {
    //   oracle.approvedActivityIdArray = [];
    // }
    // if (!oracle.status) {
    //   oracle.status = 2;
    // }
    const tempOracle = new GoodOracle(oracle);
    const highestOracleData =
      await this.proofOfGoodSmartContractService.addGoodOracle(tempOracle);
    const [id, name, goodOracleURI, status, approvedActivityIdArray] =
      highestOracleData;

    const firestorePersistedOracle = await this.goodOracleRepository.create({
      id: id.toString(),
      name,
      goodOracleURI,
      status: status.toString(),
      approvedActivityIdArray,
    } as GoodOracle);
    console.log(firestorePersistedOracle);
    return firestorePersistedOracle;
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

  @operation('get', '/oracle', {
    responses: {
      '200': {
        description: 'Retrieve all Proof of Good Oracles',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GoodOracle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async getAllOracles(
    @param.filter(GoodOracle) filter?: Filter<GoodOracle>,
  ): Promise<GoodOracle[]> {
    return this.goodOracleRepository.find(filter);
  }

  /**
   * Update an Oracle's details
   *
   * @param id The PoG ID of the oracle
   * @param oracle
   */
  @patch('/oracle/{id}', {
    summary: 'Change Oracle Details',
    operationId: 'patch-oracle',
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
          schema: getModelSchemaRef(GoodOracle, {partial: true}),
          examples: {
            'Change Oracle Details': {
              value: {
                name: 'Leyline',
              },
            },
          },
        },
      },
      description: '',
    },
    description: "Update a Oracle's details",
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
        description: 'The PoG ID of the oracle',
      },
    ],
  })
  async patchOracle(
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
          schema: getModelSchemaRef(GoodOracle, {partial: true}),
          examples: {
            'Change Oracle Details': {
              value: {
                name: 'Leyline',
              },
            },
          },
        },
      },
      description: '',
    })
    oracle: Partial<GoodOracle>,
  ): Promise<unknown> {
    delete oracle?.id;
    return this.goodOracleRepository
      .updateById(id, oracle)
      .catch((err: Error) => {
        if (err.message === 'Document not found')
          throw new HttpErrors.NotFound('Category Not Found');
      });
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
          schema: getModelSchemaRef(GoodOracle, {partial: true}),
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
          schema: getModelSchemaRef(GoodOracle, {partial: true}),
          examples: {},
        },
      },
    })
    oracle: Partial<GoodOracle>,
  ): Promise<unknown> {
    return this.patchOracle(id, oracle);
  }
}
