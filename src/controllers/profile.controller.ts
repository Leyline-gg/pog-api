import {repository} from '@loopback/repository';
import {post, requestBody} from '@loopback/rest';
import {PogProfileRepository} from '../repositories';

export class ProfileController {
  constructor(
    @repository(PogProfileRepository)
    private pogProfileRepository: PogProfileRepository,
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
      console.log('!emailProfile && !walletProfile');
      await this.pogProfileRepository.createPogProfile({
        email,
        doGooder: walletAddress,
      });
      // ledger updates handled in contract
    } else if (!emailProfile && !!walletProfile) {
      // no profile for email, but wallet profile exists
      console.log('!emailProfile && !!walletProfile');
      await this.pogProfileRepository.addEmailToProfile(
        walletProfile.userId!,
        email,
      );
      // ledger updates handled in contract
    } else if (!!emailProfile && !walletProfile) {
      // no profile for wallet, but email profile exists
      console.log('!!emailProfile && !walletProfile');
      await this.pogProfileRepository.addWalletAddressToProfile(
        emailProfile.userId!,
        walletAddress,
      );
      //ledger stuff here
    } else if (emailProfile?.userId !== walletProfile?.userId) {
      // profiles for wallet and email exist, but are not the same
      console.log('emailProfile.id !== walletProfile.id');
      //merge profiles
      await this.pogProfileRepository.addWalletAddressToProfile(
        emailProfile!.userId!,
        walletAddress,
      );
      //ledger stuff here
    }

    return body.email;
  }
}
