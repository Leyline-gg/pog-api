import {UserProfileFactory} from '@loopback/authentication';
import {securityId, UserProfile} from '@loopback/security';
import {GoodOracle} from './models';

export const OracleProfileFactory: UserProfileFactory<GoodOracle> = function (
  oracle: GoodOracle,
): UserProfile {
  const userProfile = {[securityId]: oracle?.id?.toString() || ''};
  return userProfile;
};
