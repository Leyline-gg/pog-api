import {service} from '@loopback/core';
import {repository} from '@loopback/repository';
import {getModelSchemaRef, post, requestBody, response} from '@loopback/rest';
import {OracleApiKey} from '../models';
import {AuthRepository} from '../repositories';
import {AuthService} from '../services';

export class AuthController {
  constructor(
    @repository(AuthRepository) public authRepository: AuthRepository,
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
    // generate new api key for oracle
    oracleApiKey.apikey = this.authService.generateApiKey(); //refactor this method

    //invalidate previous oracle api key if exists
    await this.authService.invalidateLastApiKey(oracleApiKey.oracleId); //refactor this method

    // return the generated document with all props instead of just the apiKey
    return this.authRepository.create(oracleApiKey);
  }
}
