import {UserProfileFactory} from '@loopback/authentication';
import {securityId, UserProfile} from '@loopback/security';
import {GoodOracle} from './models';

export const OracleProfileFactory: UserProfileFactory<GoodOracle> = function (
  oracle: GoodOracle,
): UserProfile {
  console.log('in OracleProfileFactory', oracle);
  const userProfile = {[securityId]: oracle?.id?.toString() || ''};
  return userProfile;
};
