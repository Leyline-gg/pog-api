import {service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, requestBody} from '@loopback/rest';
import {utils} from 'ethers';
import {ErrorResponse, GoodEntry} from '../models';
import {
  GoodActivityRepository,
  GoodEntryRepository,
  PogProfileRepository,
} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';

export type PogProfileParams = {
  userId: string;
  email: string;
  doGooder: string;
};
export class GoodEntryController {
  constructor(
    @repository(GoodEntryRepository)
    public goodEntryRepository: GoodEntryRepository,
    @repository(GoodActivityRepository)
    public goodActivityRepository: GoodActivityRepository,
    @repository(PogProfileRepository)
    public pogProfileRepository: PogProfileRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
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
            schema: getModelSchemaRef(GoodEntry),
            examples: {},
          },
        },
      },
      '404': {
        description: 'Entry Not Found',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ErrorResponse),
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
  ): Promise<GoodEntry> {
    return this.goodEntryRepository.findById(id);
  }

  @get('/entry', {
    responses: {
      '200': {
        description: 'Retrieve all Proof of Good Entries',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GoodEntry, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async getAllEntries(
    @param.filter(GoodEntry) filter?: Filter<GoodEntry>,
  ): Promise<GoodEntry[]> {
    return this.goodEntryRepository.find(filter);
  }

  /**
   * Create a Proof of Good Entry
   *
   * @param entry The PoG ID of the entry
   * @returns A Proof of Good Entry
   */
  @post('/entry', {
    summary: 'Create a GoodEntry',
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
          schema: getModelSchemaRef(GoodEntry, {
            title: 'New Entry',
            exclude: ['id'],
          }),
          examples: {
            'New Entry': {
              value: {
                doGooder: 'string',
                email: 'string',
                goodActivityId: 0,
                units: 1,
                externalId: 'string',
                imageURL: 'string',
                mediaURL: 'string',
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
        pog_api_key: [],
      },
    ],
  })
  async postEntry(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GoodEntry, {
            title: 'New Entry',
            exclude: ['id'],
          }),
          examples: {
            'New Entry': {
              value: {
                doGooder: 'string',
                email: 'string',
                goodActivityId: 'number',
                goodOracleId: 'number',
                units: 'number',
                externalId: 'string',
                imageURL: 'string',
                mediaURL: 'string',
              },
            },
          },
        },
      },
      description: '',
    })
    entry: Partial<GoodEntry>,
  ): Promise<unknown> {
    console.log('Data received:', entry);
    const pogProfileParams: PogProfileParams = {
      userId: entry?.userId ?? '',
      email: entry?.email ?? '',
      doGooder: entry?.doGooder ?? '',
    };

    if (entry.userId) {
      Object.assign(pogProfileParams, {userId: entry.userId});
    }

    if (entry.email) {
      Object.assign(pogProfileParams, {email: entry.email});
    }

    if (entry.doGooder) {
      Object.assign(pogProfileParams, {
        doGooder: entry.doGooder.toLowerCase(),
      });
    }

    const pogProfile = await this.pogProfileRepository.findOrCreatePogProfile(
      pogProfileParams,
    );

    console.log('pogProfile:', pogProfile);

    const goodEntry = new GoodEntry(entry);
    Object.assign(goodEntry, pogProfile);
    if (entry.externalId) {
      const encodedExternalId = utils.formatBytes32String(entry.externalId);
      Object.assign(goodEntry, {
        externalId: encodedExternalId,
      });
    }

    try {
      const entryData = await this.proofOfGoodSmartContractService.updateLedger(
        'post',
        goodEntry,
      );

      const persistGoodEntryData = new GoodEntry({
        id: entryData.tokenId.toNumber(),
        doGooder: entryData.doGooder.toLowerCase(),
        userId: entryData.userId,
        email: entry.email,
        goodActivityId: entryData.goodActivityId,
        goodOracleId: entryData.goodOracleId,
        goodPoints: entryData.goodPoints,
        units: entryData.units,
        timestamp: entryData.timestamp,
        externalId: entryData.externalId,
      });

      const response = await this.goodEntryRepository.create(
        persistGoodEntryData,
      );
      console.log('response:', response);
      return response;
    } catch (err) {
      console.log(err);
      return await this.goodEntryRepository.createFailedGoodEntry({
        doGooder: pogProfile?.doGooder,
        userId: pogProfile?.userId,
        email: pogProfile?.email,
        goodActivityId: entry.goodActivityId,
        goodOracleId: entry.goodOracleId,
        units: entry.units,
        timestamp: entry.timestamp,
        externalId: entry.externalId,
        error: err.message,
      } as GoodEntry);
    }
  }
}
