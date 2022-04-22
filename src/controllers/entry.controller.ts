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
import {GoodEntry} from '../models';
import {GoodEntryRepository, UserRepository} from '../repositories';
import {ProofOfGoodSmartContractService} from '../services';
export class GoodEntryController {
  constructor(
    @repository(GoodEntryRepository)
    public goodEntryRepository: GoodEntryRepository,
    @repository(UserRepository) public userRepository: UserRepository,
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
    entry: Partial<GoodEntry>,
  ): Promise<unknown> {
    // userId here refers to the profileId that will be stored in the user doc
    if (!entry.userId && !entry.email && !entry.doGooder) {
      // fail request
      throw new HttpErrors.BadRequest();
    }

    switch (true) {
      case !!entry.userId && !!entry.email && !!entry.doGooder:
        break;
      case !!entry.userId && !!entry.email && !entry.doGooder:
        const userOnFirestore = await this.userRepository.find({
          where: {profileId: entry.userId},
        });
        const userOnLedger =
          await this.proofOfGoodSmartContractService.getProfileByUserId(
            entry.userId,
          );
    }

    if (entry.doGooder) {
      // find userid
      // if no user -> generate nanoId and format it
      // if there is a user associated to email, then grab profileId and pass as userId
      // hash email and add to entry params
    } else if (entry.email) {
      // find userid
      // if no user -> generate nanoId and format it
      // if there is a user associated to email, then grab profileId and pass as userId
      // hash email and add to entry params
    }

    // if no wallet address, generate custodial address and add to user wallets
    // do check with ledger to make sure email not associated to another wallet or userId

    //check cases:
    //dogooder no email
    //email no dogooder
    //both email and dogooder is set - make sure email and dogood address tied to the same user

    const goodEntry = new GoodEntry(entry);
    const entryData = await this.proofOfGoodSmartContractService.updateLedger(
      'post',
      goodEntry,
    );

    const response = await this.goodEntryRepository.create({
      id: entryData.id,
      doGooder: entryData.doGooder,
      userId: entryData.userId,
      goodActivityId: entryData.goodActivityId,
      goodOracleId: entryData.goodOracleId,
      proofURL: entryData.proofURL,
      value: entryData.value,
      units: entryData.units,
      timestamp: entryData.timestamp,
      externalId: entryData.externalId,
    });

    return response;
  }
}
