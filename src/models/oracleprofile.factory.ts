import {UserProfileFactory} from '@loopback/authentication';
import {securityId} from '@loopback/security';
import {GoodOracle} from '.';

export const OracleProfileFactory: UserProfileFactory<GoodOracle> = function (
  oracle: GoodOracle,
): GoodOracle {
  return {...oracle, [securityId]: oracle?.id?.toString() ?? ''} as GoodOracle;
};
