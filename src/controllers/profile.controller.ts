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

    return body.email;
  }
}
