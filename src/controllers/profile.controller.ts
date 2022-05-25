import {repository} from '@loopback/repository';
import {post, requestBody} from '@loopback/rest';
import {PogProfileRepository} from '../repositories';

export class ProfileController {
  constructor(
    @repository(PogProfileRepository)
    private pogProfileRepository: PogProfileRepository,
  ) {}

  @post('/merge')
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
    const [emailProfile, walletProfile] = [
      await this.pogProfileRepository.getPogProfileByEmail(email),
      await this.pogProfileRepository.getPogProfileByWalletAddress(
        walletAddress,
      ),
    ];

    if (!emailProfile && !walletProfile) {
      // no profiles for wallet
      console.log('!emailProfile && !walletProfile');
    } else if (!emailProfile && !!walletProfile) {
      // no profile for email, but wallet profile exists
      console.log('!emailProfile && !!walletProfile');
      await this.pogProfileRepository.addEmailToProfile(
        walletProfile.userId!,
        email,
      );
    } else if (!!emailProfile && !walletProfile) {
      // no profile for wallet, but email profile exists
      console.log('!!emailProfile && !walletProfile');
      await this.pogProfileRepository.addWalletAddressToProfile(
        emailProfile.userId!,
        walletAddress,
      );
    } else if (emailProfile?.userId !== walletProfile?.userId) {
      // profiles for wallet and email exist, but are not the same
      console.log('emailProfile.id !== walletProfile.id');
    }

    return body.email;
  }
}
