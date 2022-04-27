import {Provider} from '@loopback/core';
import {repository} from '@loopback/repository';
import {VerifyFunction} from 'passport-http-bearer';
import {AuthRepository} from '../repositories';
import AuthError from './auth-error';

export class VerifyFunctionProvider implements Provider<VerifyFunction> {
  constructor(
    @repository(AuthRepository)
    private authRepository: AuthRepository,
  ) {}

  value(): VerifyFunction {
    const self = this;

    return async function (token: string, cb: Function) {
      console.log('in value! token:', token);
      try {
        const oracle = await self.authRepository.findOne({
          where: {
            apikey: token,
          },
        });
        if (!oracle || oracle?.apikey !== token || !!oracle?.expired)
          throw new AuthError(401);
        cb(null, oracle);
      } catch (err) {
        cb(err.code, null);
      }
    };
  }
}
