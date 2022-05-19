import {service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, requestBody} from '@loopback/rest';
import {utils} from 'ethers';
import {GoodEntry} from '../models';
import {GoodActivityRepository, GoodEntryRepository} from '../repositories';
import {PogProfileService, ProofOfGoodSmartContractService} from '../services';
export class GoodEntryController {
  constructor(
    @repository(GoodEntryRepository)
    public goodEntryRepository: GoodEntryRepository,
    @repository(GoodActivityRepository)
    public goodActivityRepository: GoodActivityRepository,
    @service(ProofOfGoodSmartContractService)
    private proofOfGoodSmartContractService: ProofOfGoodSmartContractService,
    @service(PogProfileService)
    private pogProfileService: PogProfileService,
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
              $ref: '#/components/schemas/GoodEntry',
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
        Oracle_API_Key: [],
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
    })
    entry: Partial<GoodEntry>,
  ): Promise<unknown> {
    console.log('Data received:', entry);
    const pogProfileParams: any = {};

    const goodActivity = await this.goodActivityRepository.findById(
      entry.goodActivityId,
    );

    if (goodActivity && goodActivity.valuePerUnit) {
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

      const pogProfile = await this.pogProfileService.findOrCreatePogProfile(
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
        console.log('encoded externalId:', encodedExternalId);
        console.log(
          'decoded externalId:',
          utils.parseBytes32String(encodedExternalId),
        );
      }

      const entryData = await this.proofOfGoodSmartContractService.updateLedger(
        'post',
        goodEntry,
      );
      console.log('entryData:', entryData);
      console.log('entryData tokenId', entryData.tokenId.toNumber());

      const response = await this.goodEntryRepository.createGoodEntry({
        id: entryData.tokenId.toNumber(),
        doGooder: pogProfile?.doGooder,
        userId: pogProfile?.userId,
        goodActivityId: entryData.goodActivityId,
        goodOracleId: entryData.goodOracleId,
        value: entryData.units * goodActivity.valuePerUnit,
        units: entryData.units,
        timestamp: entryData.timestamp,
        externalId: entryData.externalId,
        email: entry.email,
      });
      console.log('response:', response);
      return response;
    }
  }
}
