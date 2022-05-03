import {
  AuthenticationBindings,
  AuthenticationStrategy,
  UserProfileFactory,
} from '@loopback/authentication';
import {StrategyAdapter} from '@loopback/authentication-passport';
import {inject, Provider} from '@loopback/core';
import {Strategy, VerifyFunction} from 'passport-http-bearer';

export const AUTH_STRATEGY_NAME = 'bearer';
export class PassportBearerAuthProvider<GoodOracle>
  implements Provider<AuthenticationStrategy>
{
  constructor(
    @inject('authentication.bearer.verify')
    private verifyFn: VerifyFunction,
    @inject(AuthenticationBindings.USER_PROFILE_FACTORY)
    private oracleProfileFactory: UserProfileFactory<GoodOracle>,
  ) {}

  value(): AuthenticationStrategy {
    const strategy = this.configuredStrategy(this.verifyFn);
    return this.convertToAuthStrategy(strategy);
  }

  // Takes in the verify callback function and returns a configured bearer strategy.
  configuredStrategy(verifyFn: VerifyFunction): Strategy<VerifyFunction> {
    return new Strategy(verifyFn);
  }

  convertToAuthStrategy(
    bearer: Strategy<VerifyFunction>,
  ): AuthenticationStrategy {
    return new StrategyAdapter(
      bearer,
      AUTH_STRATEGY_NAME,
      this.oracleProfileFactory,
    );
  }
}
