import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, requestBody} from '@loopback/rest';
import {ProofOfGoodEntry} from '../models';
import {ProofOfGoodEntryRepository} from '../repositories';

export class ProofOfGoodEntryController {
  constructor(
    @repository(ProofOfGoodEntryRepository)
    public repository: ProofOfGoodEntryRepository,
  ) {}

  /**
   * Retrieve a Proof of Good Entry
   *
   * @param id The PoG ID of the entry
   * @returns A Proof of Good Entry
   */
  @get('/entry/{id}', {
    summary: 'Get Proof of Good Entry',
    operationId: 'get-entry',
    responses: {
      '200': {
        description: 'A Proof of Good Entry',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ProofOfGoodEntry',
            },
            examples: {},
          },
        },
      },
      '404': {
        description: 'Entry Not Found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorResponse',
            },
          },
        },
      },
    },
    description: 'Retrieve a Proof of Good Entry',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'The ID of the PoG entry',
      },
    ],
  })
  async getEntry(
    @param({
      schema: {
        type: 'integer',
        example: 3,
      },
      name: 'id',
      in: 'path',
      required: true,
      description: 'The ID of the PoG entry',
    })
    id: number,
  ): Promise<ProofOfGoodEntry> {
    return this.repository.findById(id);
  }

  @get('/entry', {
    responses: {
      '200': {
        description: 'Retrieve all Proof of Good Entries',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ProofOfGoodEntry, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async getAllEntries(
    @param.filter(ProofOfGoodEntry) filter?: Filter<ProofOfGoodEntry>,
  ): Promise<ProofOfGoodEntry[]> {
    return this.repository.find(filter);
  }

  /**
   *
   *
   * @param entry
   */
  @post('/entry', {
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
