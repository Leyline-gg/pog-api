import {service} from '@loopback/core';
import {repository} from '@loopback/repository';
import {post, requestBody} from '@loopback/rest';
import {PogProfile} from '../models';
import {PogProfileRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';

export class ProfileController {
  constructor(
    @repository(PogProfileRepository)
    private pogProfileRepository: PogProfileRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
  ) {}

  @post('/consolidate')
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
    body: any,
  ): Promise<any> {
    const {email, walletAddress} = body;
    const [emailProfile, walletProfile] = await Promise.all([
      await this.pogProfileRepository.getPogProfileByEmail(email),
      await this.pogProfileRepository.getPogProfileByWalletAddress(
        walletAddress,
      ),
    ]);

    if (!emailProfile && !walletProfile) {
      // no profiles for either email or wallet
      // - create profile
      // - contract handles update on good entry submission
      console.log('!emailProfile && !walletProfile');
      await this.pogProfileRepository.createPogProfile({
        email,
        doGooder: walletAddress,
      });
    } else if (!emailProfile && !!walletProfile) {
      // no profile for email, but wallet profile exists
      // - add email to profile found from the wallet
      // - contract handles update on good entry submission
      console.log('!emailProfile && !!walletProfile');
      await this.pogProfileRepository.addEmailToProfile(
        walletProfile.userId!,
        email,
      );
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
        `Merging profile ${walletProfile?.userId} to profile ${emailProfile?.user}`,
      );
      await this.proofOfGoodSmartContractService.updateProfile(
        'mergeProfiles',
        {
          toUserId: emailProfile?.userId,
          fromUserId: walletProfile?.userId,
        },
      );
      console.log('Merge completed');
      // merge Pog Profiles on firestore
      const updatedProfiles =
        await this.pogProfileRepository.mergeProfilesInFirestore(
          emailProfile as PogProfile,
          walletProfile as PogProfile,
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
    return null;
  }
}
