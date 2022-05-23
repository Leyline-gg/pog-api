import {Entity, model, property} from '@loopback/repository';

@model({name: 'goodentry', settings: {strict: false}})
export class GoodEntry extends Entity {
  constructor(data?: Partial<GoodEntry>) {
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
  id?: number;

  /**
   * Wallet address of the user who did good
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'Wallet address of the user who did good',
    },
  })
  doGooder?: string;

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
  value?: number;

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
   * Unix timestamp (in ms) representing when the good deed was done
   */
  @property({
    jsonSchema: {
      type: 'integer',
      description:
        'Unix timestamp (in ms) representing when the good deed was done',
    },
  })
  timestamp?: number = 0;

  /**
   * awaiting clarification
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'user email',
    },
  })
  email?: string;

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
      description: 'External ID, optional from Oracle',
    },
  })
  externalId?: string;

  @property({
    jsonSchema: {
      type: 'string',
      description: 'Image URL',
    },
  })
  imageURL?: string;

  @property({
    jsonSchema: {
      type: 'string',
      description: 'Media URL',
    },
  })
  mediaURL?: string;

  @property({
    jsonSchema: {
      type: 'number',
      description: 'Transaction nonce',
    },
  })
  nonce?: number;
}

export interface GoodEntryRelations {
  // describe navigational properties here
}

export type GoodEntryWithRelations = GoodEntry & GoodEntryRelations;
