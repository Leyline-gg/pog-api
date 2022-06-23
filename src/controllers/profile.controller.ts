import {authenticate} from '@loopback/authentication';
import {authorize} from '@loopback/authorization';
import {inject, service} from '@loopback/core';
import {repository} from '@loopback/repository';
import {get, param, post, requestBody} from '@loopback/rest';
import {SecurityBindings} from '@loopback/security';
import {GoodOracle, PogProfile} from '../models';
import {AUTH_STRATEGY_NAME} from '../providers/passport-bearer-auth.provider';
import {PogProfileRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';

export class ProfileController {
  constructor(
    @repository(PogProfileRepository)
    private pogProfileRepository: PogProfileRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
    @inject(SecurityBindings.USER, {optional: true})
    private oracle: GoodOracle,
  ) {}

  @authenticate(AUTH_STRATEGY_NAME)
  @authorize({resource: 'SYSTEM_ONLY'})
  @post('/profile/consolidate')
  async merge(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
              },
              walletAddress: {
                type: 'string',
              },
            },
          },
        },
      },
    })
    body: {
      email: string;
      walletAddress: string;
    },
  ): Promise<Partial<PogProfile> | undefined> {
    const {email, walletAddress} = body;
    const [emailProfile, walletProfile] = await Promise.all([
      await this.pogProfileRepository.getPogProfileByEmail(
        this.pogProfileRepository.hashEmail(email),
      ),
      await this.pogProfileRepository.getPogProfileByWalletAddress(
        walletAddress,
      ),
    ]);

    if (!emailProfile && !walletProfile) {
      // no profiles for either email or wallet
      // - create profile
      // - contract handles update on good entry submission
      console.log('!emailProfile && !walletProfile');
      const newProfile = await this.pogProfileRepository.createPogProfile({
        email,
        doGooder: walletAddress,
      });
      return newProfile;
    } else if (!emailProfile && !!walletProfile) {
      // no profile for email, but wallet profile exists
      // - add email to profile found from the wallet
      // - contract handles update on good entry submission
      console.log('!emailProfile && !!walletProfile');
      const {emailHash} = await this.pogProfileRepository.addEmailToProfile(
        walletProfile.userId!,
        email,
      );
      return {...walletProfile, email, emailHash};
    } else if (!!emailProfile?.userId && !walletProfile) {
      // no profile for wallet, but email profile exists
      console.log('!!emailProfile && !walletProfile');

      // set userId to walletAddress in walletUser mapping and add to good profile on contract
      const [eventArgsWalletAddress, eventArgsUserId] =
        await this.proofOfGoodSmartContractService.updateProfile(
          'associateWalletAddressToUserId',
          {walletAddress, userId: emailProfile.userId},
        );
      // add wallet to the pogprofile doc found for email
      await this.pogProfileRepository.addWalletAddressToProfile(
        eventArgsUserId,
        eventArgsWalletAddress,
      );
      // fetch and return the profile
      const profileWithWallet =
        await this.pogProfileRepository.getPogProfileByWalletAddress(
          walletAddress,
        );

      return profileWithWallet;
    } else if (emailProfile?.userId !== walletProfile?.userId) {
      // profiles for wallet and email exist, but are not the same
      console.log('emailProfile.id !== walletProfile.id');
      //merge profiles on contract
      console.log(
        `Merging profile ${walletProfile?.userId} to profile ${emailProfile?.userId}`,
      );
      await this.proofOfGoodSmartContractService.updateProfile(
        'mergeProfiles',
        {
          fromUserId: walletProfile?.userId,
          toUserId: emailProfile?.userId,
        },
      );
      console.log('Merge completed');
      // merge Pog Profiles on firestore
      const updatedProfiles =
        await this.pogProfileRepository.mergeProfilesInFirestore(
          walletProfile as PogProfile,
          emailProfile as PogProfile,
        );

      // return updated Pog Profile
      if (updatedProfiles?.mergedTo && updatedProfiles?.mergedFrom) {
        console.log(
          'Created in merged_profiles collection:',
          updatedProfiles.mergedFrom,
        );
        console.log('Final merged profile:', updatedProfiles.mergedTo);
        return updatedProfiles.mergedTo;
      }
    }
    return {};
  }

  @get('/profile/{id}/points')
  async getUserGoodPoints(
    @param({
      schema: {
        type: 'string',
        example:
          '0x4471393036347831484966773861515059465a616c0000000000000000000000',
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The profile ID of the POG user',
    })
    id: string,
  ): Promise<{balance: number; totalGood: number}> {
    return this.proofOfGoodSmartContractService.getUserGoodPoints(id);
  }
}
