import {service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  post,
  requestBody,
} from '@loopback/rest';
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
      doGooder: entry?.doGooder?.toLowerCase() ?? '',
    };

    const pogProfile = await this.pogProfileRepository.findOrCreatePogProfile(
      pogProfileParams,
    );

    console.log('pogProfile:', pogProfile);

    const goodEntry = new GoodEntry(entry);
    Object.assign(goodEntry, pogProfile);
    const encodedExternalId = utils.formatBytes32String(
      entry?.externalId ?? '',
    );
    Object.assign(goodEntry, {
      externalId: encodedExternalId,
    });
    const persistGoodEntryData = new GoodEntry({
      ...goodEntry,
      doGooder: goodEntry?.doGooder?.toLowerCase(),
      email: entry.email,
      externalId: entry?.externalId,
    });
    try {
      const entryData = await this.proofOfGoodSmartContractService.updateLedger(
        'post',
        goodEntry,
      );
      Object.assign(persistGoodEntryData, {id: entryData.tokenId.toNumber()});

      const response = await this.goodEntryRepository.create(
        persistGoodEntryData,
      );
      console.log('response:', response);
      return response;
    } catch (err) {
      await this.goodEntryRepository.createFailedGoodEntry({
        ...persistGoodEntryData,
        error: err.message,
      } as GoodEntry);
      throw new HttpErrors.BadRequest('Failed Good Entry creation');
    }
  }
}
