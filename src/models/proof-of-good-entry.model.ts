import {Entity, model, property} from '@loopback/repository';

@model({name: 'proofofgoodentry', settings: {strict: false}})
export class ProofOfGoodEntry extends Entity {
  constructor(data?: Partial<ProofOfGoodEntry>) {
    super(data);
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * id
   */
  @property({
    id: true,
    jsonSchema: {
      type: 'number',
      description: 'ID',
    },
  })
  id: number = Date.now();

  /**
   * token ID of the NFT after it has been minted
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'token ID of the NFT after it has been minted',
    },
  })
  tokenId: string;

  /**
   * Wallet address of the user who did good
   */
  @property({
    required: true,
    jsonSchema: {
      type: 'string',
      description: 'Wallet address of the user who did good',
    },
  })
  doGooder: string;

  /**
   * GoodActivity for this entry
   */
  @property({
    required: true,
    jsonSchema: {
      type: 'integer',
      description: 'GoodActivity for this entry',
    },
  })
  goodActivityId: number;

  /**
   * Good points associated with the entry, calculated from this entry's `units` and the corresponding GoodActivity's `valuePerUnit`
   */
  @property({
    jsonSchema: {
      type: 'integer',
      description:
        "Good points associated with the entry, calculated from this entry's `units` and the corresponding GoodActivity's `valuePerUnit`",
      readOnly: true,
    },
  })
  value: number;

  /**
   * Number of units performed for the `GoodActivity`
   */
  @property({
    required: true,
    jsonSchema: {
      type: 'number',
      exclusiveMinimum: 0,
      description: 'Number of units performed for the `GoodActivity`',
    },
  })
  units: number;

  /**
   * Oracle-provided IFPS file
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'Oracle-provided IFPS file',
    },
  })
  proofURL?: string;

  /**
   * Unix timestamp (in ms) representing when the good deed was done
   */
  @property({
    required: true,
    jsonSchema: {
      type: 'integer',
      description:
        'Unix timestamp (in ms) representing when the good deed was done',
    },
  })
  timestamp: number;

  /**
   * awaiting clarification
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'awaiting clarification',
    },
  })
  userId?: string;

  /**
   * ID of the oracle submitting the entry
   */
  @property({
    jsonSchema: {
      type: 'integer',
      description: 'ID of the oracle submitting the entry',
      readOnly: true,
    },
  })
  goodOracleId: number;

  /**
   * awaiting clarification
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'awaiting clarification',
    },
  })
  externalId?: string;
}

export interface ProofOfGoodEntryRelations {
  // describe navigational properties here
}

export type ProofOfGoodEntryWithRelations = ProofOfGoodEntry &
  ProofOfGoodEntryRelations;
