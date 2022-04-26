import {StrategyAdapter} from '@loopback/authentication-passport';
import {Strategy} from 'passport-http-bearer';
import {OracleProfileFactory} from './oracleprofile.factory';

function verify(token: string, cb: Function) {
  console.log('in verify', token);
  return cb(null, token);
}
const bearerStrategy = new Strategy(verify);

// Apply the adapter
export const AUTH_STRATEGY_NAME = 'bearer';
export const bearerAuthStrategy = new StrategyAdapter(
  bearerStrategy,
  AUTH_STRATEGY_NAME,
  OracleProfileFactory,
);
