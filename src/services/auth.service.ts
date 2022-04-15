import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {performance} from 'perf_hooks';
import {AuthRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(
    @repository(AuthRepository) public apiRepository: AuthRepository,
  ) {}

  /*
   * Adapted from https://stackoverflow.com/a/8809472/8396479
   */
  generateApiKey() {
    let d = new Date().getTime(),
      d2 = (performance && performance.now && performance.now() * 1000) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = Math.random() * 16;
      if (d > 0) {
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c == 'x' ? r : (r & 0x7) | 0x8).toString(16);
    });
  }

  invalidateApiKey(oracleId: number) {
    return this.apiRepository.updateById(oracleId, {expired: true});
  }
}
