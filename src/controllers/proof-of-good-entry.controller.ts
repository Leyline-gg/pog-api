import {repository} from '@loopback/repository';
import {post, requestBody} from '@loopback/rest';
import {ProofOfGoodEntry} from '../models';
import {ProofOfGoodEntryRepository} from '../repositories';

export class ProofOfGoodEntryController {
  constructor(
    @repository(ProofOfGoodEntryRepository)
    public repository: ProofOfGoodEntryRepository,
  ) {}

  /**
   *
   *
   * @param entry
   */
  @post('/pog', {
    summary: 'Create a ProofOfGoodEntry',
    operationId: 'post-pog-entry',
    responses: {
      '201': {
        description: 'Entry Created',
      },
      '400': {
        description: 'Missing Required Information',
      },
      '401': {
        description: 'Unauthorized',
      },
    },
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ProofOfGoodEntry_Input',
          },
          examples: {
            'New Entry': {
              value: {
                tokenId: 'string',
                doGooder: 'string',
                goodActivityId: 0,
                units: 1,
                proofURL: 'string',
                timestamp: 0,
                externalId: 'string',
              },
            },
          },
        },
      },
      description: '',
    },
    description: '',
    parameters: [],
    security: [
      {
        Oracle_API_Key: [],
      },
    ],
  })
  async postPogEntry(
    @requestBody({
      content: {
        'application/json': {
          examples: {
            'New Entry': {
              value: {
                doGooder: 'string',
                goodActivityId: 0,
                units: 1,
                proofURL: 'string',
                timestamp: 0,
                userId: 'string',
                externalId: 'string',
              },
            },
          },
        },
      },
      description: '',
    })
    entry: Omit<ProofOfGoodEntry, 'id'>,
  ): Promise<unknown> {
    return this.repository.create(entry);
  }
}
