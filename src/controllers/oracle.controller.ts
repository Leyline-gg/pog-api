import {Count, CountSchema, repository, Where} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  HttpErrors,
  operation,
  param,
  post,
  requestBody,
  response,
} from '@loopback/rest';
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
    oracle: GoodOracleInput,
  ): Promise<unknown> {
    return this.goodOracleRepository.create(oracle);
  }

  @post('/oracle')
  @response(200, {
    description: 'GoodOracle model instance',
    content: {'application/json': {schema: getModelSchemaRef(GoodOracle)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodOracle, {
            title: 'NewGoodOracle',
            exclude: ['id'],
          }),
        },
      },
    })
    goodOracle: Omit<GoodOracle, 'id'>,
  ): Promise<GoodOracle> {
    return this.goodOracleRepository.create(goodOracle);
  }

  @get('/oracle/count')
  @response(200, {
    description: 'GoodOracle model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(GoodOracle) where?: Where<GoodOracle>,
  ): Promise<Count> {
    return this.goodOracleRepository.count(where);
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
    const res = await this.goodOracleRepository.find({where: {id}});
    if (!res.length) throw new HttpErrors.NotFound('Oracle Not Found');
    return res.shift()!;
  }

  // @get('/oracle')
  // @response(200, {
  //   description: 'Array of GoodOracle model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'array',
  //         items: getModelSchemaRef(GoodOracle, {includeRelations: true}),
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(GoodOracle) filter?: Filter<GoodOracle>,
  // ): Promise<GoodOracle[]> {
  //   return this.goodOracleRepository.find(filter);
  // }
}
