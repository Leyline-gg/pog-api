import {UserProfileFactory} from '@loopback/authentication';
import {securityId} from '@loopback/security';
import {GoodOracle} from './models';

export const OracleProfileFactory: UserProfileFactory<GoodOracle> = function (
  oracle: GoodOracle,
): GoodOracle {
  return {...oracle, [securityId]: oracle?.id?.toString() || ''} as GoodOracle;
};
