import {BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {v1 as uuidv1} from 'uuid';
import {AuthRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(
    @repository(AuthRepository) public authRepository: AuthRepository,
  ) {}

  generateApiKey() {
    return uuidv1();
  }

  /**
   * Invalidates the last api key for the given oracleId, if any.
   * @param oracleId ID of oracle
   * @returns Promise that resolves to null if no api key was found for the given oracleId
   */
  async invalidateLastApiKey(oracleId: number) {
    // find latest api key for oracle (if exists) (null check)
    const lastApiKey = await this.authRepository.findLatest(oracleId);
    if (lastApiKey) {
      await this.authRepository.updateById(lastApiKey.id, {expired: true});
    }
  }
}
