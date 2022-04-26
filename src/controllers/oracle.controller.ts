import {authenticate} from '@loopback/authentication';
import {inject, service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  getModelSchemaRef,
  HttpErrors,
  operation,
  param,
  patch,
  requestBody,
} from '@loopback/rest';
import {SecurityBindings, UserProfile} from '@loopback/security';
import {ethers} from 'ethers';
import {GoodOracle} from '../models';
import {AUTH_STRATEGY_NAME} from '../providers/passport-bearer-auth';
import {GoodOracleRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';

export class OracleController {
  constructor(
    @repository(GoodOracleRepository)
    public goodOracleRepository: GoodOracleRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
    @inject(SecurityBindings.USER, {optional: true})
    private oracle: UserProfile,
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
    if (!oracle.approvedActivityIdArray) oracle['approvedActivityIdArray'] = [];
    const tempOracle = new GoodOracle(oracle);
    const oracleData = await this.proofOfGoodSmartContractService.updateLedger(
      'post',
      tempOracle,
    );

    const [id, name, goodOracleURI, status, approvedActivityIdArray] =
      oracleData;

    const response = await this.goodOracleRepository.create({
      id: id,
      name,
      goodOracleURI,
      status: status,
      approvedActivityIdArray,
    } as GoodOracle);

    return response;
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
  @authenticate(AUTH_STRATEGY_NAME)
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
    console.log('in getOracle/id');
    console.log(this.oracle);
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
                goodOracleURI: 'Leyline.gg',
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
                goodOracleURI: 'leyline.gg',
                approvedActivityIdArray: [],
                status: 0,
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
    // fetch current doc for good oracle
    const fetchedGoodOracle = await this.goodOracleRepository.findById(id);
    // create temp objects and merge current values into incoming inputs IF input fields are excluded
    const tempOracle: Record<string, unknown> = {...oracle};
    const fetchedData: Record<string, unknown> = {...fetchedGoodOracle};

    Object.keys(fetchedGoodOracle).forEach(key => {
      if (!tempOracle[key]) {
        tempOracle[key] = fetchedData[key];
      }
    });
    // initialize GoodType to pass into updateLedger method
    // then destructure returned event arguments
    const oracleData = new GoodOracle(tempOracle);

    const [goodOracleId, name, goodOracleURI, status, approvedActivityIdArray] =
      await this.proofOfGoodSmartContractService.updateLedger(
        'patch',
        oracleData,
      );
    // convert activityIds from BigNumber to number
    const activitiesToNumbers = approvedActivityIdArray.map(
      (activityId: ethers.BigNumber) => activityId.toNumber(),
    );
    // persist event arguments to firestore doc
    const response = this.goodOracleRepository
      .updateById(id, {
        id: goodOracleId.toNumber(),
        name,
        goodOracleURI,
        status,
        approvedActivityIdArray: activitiesToNumbers,
      })
      .catch((err: Error) => {
        if (err.message === 'Document not found')
          throw new HttpErrors.NotFound('Oracle Not Found');
      });

    return response;
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
