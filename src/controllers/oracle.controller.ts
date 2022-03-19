import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {GoodOracle} from '../models';
import {GoodOracleRepository} from '../repositories';

export class OracleController {
  constructor(
    @repository(GoodOracleRepository)
    public goodOracleRepository : GoodOracleRepository,
  ) {}

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

  @get('/oracle')
  @response(200, {
    description: 'Array of GoodOracle model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(GoodOracle, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(GoodOracle) filter?: Filter<GoodOracle>,
  ): Promise<GoodOracle[]> {
    return this.goodOracleRepository.find(filter);
  }

  @patch('/oracle')
  @response(200, {
    description: 'GoodOracle PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodOracle, {partial: true}),
        },
      },
    })
    goodOracle: GoodOracle,
    @param.where(GoodOracle) where?: Where<GoodOracle>,
  ): Promise<Count> {
    return this.goodOracleRepository.updateAll(goodOracle, where);
  }

  @get('/oracle/{id}')
  @response(200, {
    description: 'GoodOracle model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(GoodOracle, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GoodOracle, {exclude: 'where'}) filter?: FilterExcludingWhere<GoodOracle>
  ): Promise<GoodOracle> {
    return this.goodOracleRepository.findById(id, filter);
  }

  @patch('/oracle/{id}')
  @response(204, {
    description: 'GoodOracle PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodOracle, {partial: true}),
        },
      },
    })
    goodOracle: GoodOracle,
  ): Promise<void> {
    await this.goodOracleRepository.updateById(id, goodOracle);
  }

  @put('/oracle/{id}')
  @response(204, {
    description: 'GoodOracle PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() goodOracle: GoodOracle,
  ): Promise<void> {
    await this.goodOracleRepository.replaceById(id, goodOracle);
  }

  @del('/oracle/{id}')
  @response(204, {
    description: 'GoodOracle DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.goodOracleRepository.deleteById(id);
  }
}
