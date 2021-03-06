import {authenticate} from '@loopback/authentication';
import {authorize} from '@loopback/authorization';
import {inject, service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  api,
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {SecurityBindings} from '@loopback/security';
import {ethers} from 'ethers';
import {ErrorResponse, GoodOracle, OracleCap} from '../models';
import {AUTH_STRATEGY_NAME} from '../providers/passport-bearer-auth.provider';
import {GoodOracleRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';

@api({basePath: '/oracle'})
@authenticate(AUTH_STRATEGY_NAME)
@authorize({resource: 'oracle'})
export class OracleController {
  constructor(
    @repository(GoodOracleRepository)
    public goodOracleRepository: GoodOracleRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
    @inject(SecurityBindings.USER, {optional: true})
    private oracle: GoodOracle,
  ) {}

  /**
   * Create a new Oracle
   *
   * @param oracle
   */
  @post('/', {
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
            schema: getModelSchemaRef(ErrorResponse),
          },
        },
      },
      '401': {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
          },
        },
      },
      '404': {
        description: 'Oracle Not Found',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
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
                organizationType: 0,
                goodOracleOwner: '0x1234567890123456789',
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
        pog_api_key: [],
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
                organizationType: 0,
                goodOracleOwner: '0x1234567890123456789',
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
      wallet: oracle.wallet,
    } as GoodOracle);

    return response;
  }

  /**
   * Retrieve a Proof of Good Oracle
   *
   * @param id The PoG ID of the oracle
   * @returns A Proof of Good Oracle
   */
  @get('/{id}', {
    summary: 'Get Oracle',
    operationId: 'get-oracle',
    responses: {
      '200': {
        description: 'A Proof of Good Oracle',
        content: {
          'application/json': {
            schema: getModelSchemaRef(GoodOracle),
            examples: {},
          },
        },
      },
      '404': {
        description: 'Oracle Not Found',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
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
        description: 'The ID of the oracle',
      },
    ],
  })
  @authenticate.skip()
  @authorize.skip()
  async getOracle(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The ID of the oracle',
    })
    id: number,
  ): Promise<GoodOracle> {
    return this.goodOracleRepository.findById(id);
  }

  @get('/', {
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
  @authenticate.skip()
  @authorize.skip()
  async getAllOracles(
    @param.filter(GoodOracle) filter?: Filter<GoodOracle>,
  ): Promise<GoodOracle[]> {
    return this.goodOracleRepository.find(filter);
  }

  /**
   * Update an Oracle's details
   *
   * @param id The ID of the oracle
   * @param oracle
   */
  @patch('/{id}', {
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
            schema: getModelSchemaRef(ErrorResponse),
          },
        },
        headers: {},
      },
      '404': {
        description: 'Oracle Not Found',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
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
                organizationType: 0,
                goodOracleOwner: '0x1234567890123456789',
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
        pog_api_key: [],
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
                organizationType: 0,
                goodOracleOwner: '0x1234567890123456789',
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
  @put('/{id}', {
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
            schema: getModelSchemaRef(ErrorResponse),
          },
        },
        headers: {},
      },
      '404': {
        description: 'Oracle Not Found',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
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
        pog_api_key: [],
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

  /**
   * Create a new Oracle
   *
   * @param oracle
   */
  @post('/cap', {
    summary: 'Set Oracle cap',
    operationId: 'post-oracle-cap',
    responses: {
      '201': {
        description: 'Oracle Cap rule Created',
      },
      '400': {
        description: 'Missing Required Information',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
          },
        },
      },
      '401': {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
          },
        },
      },
      '404': {
        description: 'Oracle Cap Not Found',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
          },
        },
      },
    },
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              activityId: {
                description:
                  'Id of the Activity you want to set a cap for. 0 sets a global cap for the oracle.',
                type: 'number',
              },
              oracleId: {
                description: 'Id of the Oracle you want to set a cap for',
                type: 'number',
              },
              duration: {
                description: 'Duration in seconds of the interval for the Cap',
                type: 'number',
              },
              points: {
                description: "Amount of the points that can't b",
                type: 'number',
              },
            },
            required: ['oracleId', 'duration', 'points'],
          },
        },
      },
      description:
        'Sets the maximum amount of points that a given oracle can reward over a specific interval of time. It can also be limited by Good Activity',
    },
    description:
      'Sets the maximum amount of points that a given oracle can reward over a specific interval of time. It can also be limited by Good Activity',
    parameters: [],
    security: [
      {
        pog_api_key: [],
      },
    ],
  })
  async setCap(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              activityId: {
                description:
                  'Id of the Activity you want to set a cap for. 0 sets a global cap for the oracle.',
                type: 'number',
                default: 0,
              },
              oracleId: {
                description: 'Id of the Oracle you want to set a cap for',
                type: 'number',
              },
              duration: {
                description: 'Duration in seconds of the interval for the Cap',
                type: 'number',
              },
              points: {
                description: "Amount of the points that can't b",
                type: 'number',
              },
            },
            required: ['oracleId', 'duration', 'points'],
          },
        },
      },
      description:
        'Sets the maximum amount of points that a given oracle can reward over a specific interval of time. It can also be limited by Good Activity',
    })
    oracleCap: OracleCap,
  ): Promise<OracleCap> {
    try {
      const response = await this.proofOfGoodSmartContractService.setCap(
        oracleCap,
      );
      return response as OracleCap;
    } catch (error) {
      console.error(error);
    }
    return oracleCap;
  }
}
