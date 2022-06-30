import {authenticate} from '@loopback/authentication';
import {authorize} from '@loopback/authorization';
import {inject, service} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  api,
  getModelSchemaRef,
  post,
  requestBody,
  response,
} from '@loopback/rest';
import {SecurityBindings} from '@loopback/security';
import {GoodOracle, OracleApiKey} from '../models';
import {AUTH_STRATEGY_NAME} from '../providers/passport-bearer-auth.provider';
import {AuthRepository} from '../repositories';
import {AuthService} from '../services';

@api({basePath: '/auth'})
@authenticate(AUTH_STRATEGY_NAME)
export class AuthController {
  constructor(
    @repository(AuthRepository) public authRepository: AuthRepository,
    @service(AuthService) public authService: AuthService,
    @inject(SecurityBindings.USER, {optional: true})
    private oracle: GoodOracle,
  ) {}

  @authorize({resource: 'SYSTEM_ONLY'})
  @post('/')
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
    oracleApiKey.apikey = this.authService.generateApiKey();

    // invalidate previous oracle api key if exists
    await this.authService.invalidateLastApiKey(oracleApiKey.oracleId);

    // return the generated document with all props instead of just the apiKey
    return this.authRepository.create(oracleApiKey);
  }

  @post('/refresh')
  @response(200, {
    description: 'OracleApiKey model instance',
    content: {'application/json': {schema: getModelSchemaRef(OracleApiKey)}},
  })
  async refreshApiKey(): Promise<OracleApiKey> {
    const oracleApiKey = new OracleApiKey({oracleId: this.oracle.id});

    // generate new api key for oracle
    oracleApiKey.apikey = this.authService.generateApiKey();

    // invalidate previous oracle api key if exists
    await this.authService.invalidateLastApiKey(oracleApiKey.oracleId);

    // return the generated document with all props instead of just the apiKey
    return this.authRepository.create(oracleApiKey);
  }
}
