import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {v1 as uuidv1} from 'uuid';
import {AuthRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(
    @repository(AuthRepository) public apiRepository: AuthRepository,
  ) {}

  generateApiKey() {
    return uuidv1();
  }

  invalidateApiKey(oracleId: number) {
    return this.apiRepository.updateById(oracleId, {expired: true});
  }
}
