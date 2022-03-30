import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - GoodEntry_Input
 * GoodEntry_Input
 */
@model({name: 'goodentry', settings: {strict: false}})
export class GoodEntryInput {
  constructor(data?: Partial<GoodEntryInput>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

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

export interface GoodEntryInputRelations {
  // describe navigational properties here
}

export type GoodEntryInputWithRelations = GoodEntryInput &
  GoodEntryInputRelations;
