import {service} from '@loopback/core';
import {post, requestBody} from '@loopback/rest';
import {PogProfileService} from '../services';

export class ProfileController {
  constructor(
    @service(PogProfileService)
    private pogProfileService: PogProfileService,
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
      await this.pogProfileService.getPogProfileByEmail(email),
      await this.pogProfileService.getPogProfileByWalletAddress(walletAddress),
    ];

    return body.email;
  }
}
