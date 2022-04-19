import {service} from '@loopback/core';
import {repository} from '@loopback/repository';
import {getModelSchemaRef, post, requestBody, response} from '@loopback/rest';
import {OracleApiKey} from '../models';
import {AuthRepository} from '../repositories';
import {AuthService} from '../services';

export class AuthController {
  constructor(
    @repository(AuthRepository) public apiRepository: AuthRepository,
    @service(AuthService) public authService: AuthService,
  ) {}

  @post('/auth')
  @response(200, {
    description: 'OracleApiKey model instance',
    content: {'application/json': {schema: getModelSchemaRef(OracleApiKey)}},
  })
  async regenerateApiKey(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OracleApiKey, {
            title: 'NewOracleApiKey',
            exclude: ['id'],
          }),
        },
      },
    })
    oracleApiKey: Omit<OracleApiKey, 'id'>,
  ): Promise<OracleApiKey> {
    // return the generated document with all props instead of just the apiKey
    // continue leveraging dataSource in controller
    oracleApiKey.apikey = this.authService.generateApiKey();
    return this.apiRepository.create(oracleApiKey);
  }
}
