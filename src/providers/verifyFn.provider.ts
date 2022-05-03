import {Provider} from '@loopback/core';
import {repository} from '@loopback/repository';
import {VerifyFunction} from 'passport-http-bearer';
import {AuthRepository, GoodOracleRepository} from '../repositories';
import AuthError from './auth-error';

export class VerifyFunctionProvider implements Provider<VerifyFunction> {
  constructor(
    @repository(AuthRepository)
    private authRepository: AuthRepository,
    @repository(GoodOracleRepository)
    private goodOracleRepository: GoodOracleRepository,
  ) {}

  value(): VerifyFunction {
    const self = this;

    return async function (token: string, cb: Function) {
      console.log('in value! token:', token);
      try {
        const oracleApiKey = await self.authRepository.findOne({
          where: {
            apikey: token,
          },
        });
        console.log(oracleApiKey);
        if (
          !oracleApiKey ||
          oracleApiKey?.apikey !== token ||
          !!oracleApiKey?.expired
        ) {
          throw new AuthError(401);
        }

        const oracle = await self.goodOracleRepository.findById(
          oracleApiKey.oracleId,
        );
        console.log(oracle);
        if (!oracle) throw new AuthError(500);

        cb(null, oracle);
      } catch (err) {
        cb(err.code, null);
      }
    };
  }
}
