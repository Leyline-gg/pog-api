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

    return (async (token: string, cb: Function) => {
      try {
        const oracleApiKey = await self.authRepository.findOne({
          where: {
            apikey: token,
            expired: false,
          },
        });
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
        if (!oracle) throw new AuthError(500);

        cb(null, oracle);
      } catch (err) {
        cb(err.code, null);
      }
    }) as VerifyFunction;
  }
}
