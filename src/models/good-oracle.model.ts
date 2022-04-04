import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - GoodOracle
 * GoodOracle
 */
@model({name: 'goodoracle', settings: {strict: false}})
export class GoodOracle extends Entity {
  constructor(data?: Partial<GoodOracle>) {
    super(data);
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({
    id: true,
    jsonSchema: {
      type: 'number',
    },
  })
  id: number = Date.now();

  /**
   * Oracle name
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'Oracle name',
    },
  })
  name?: string;

  /**
   * reference to metadata on IPFS
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'reference to metadata on IPFS',
    },
  })
  goodOracleURI?: string;

  /**
   * if true, cannot write to ledger with this oracle
   */
  @property({
    jsonSchema: {
      type: 'boolean',
      default: false,
      description: 'if true, cannot write to ledger with this oracle',
    },
  })
  deleted?: boolean = false;

  @property({
    jsonSchema: {
      type: 'number',
      default: 0,
      description:
        'enum for status of oracle, defaults to 0 - ACTIVE, others: 1 - DELETED, 2 - PAUSED, 3 - QUARANTINED',
    },
  })
  status?: number;

  @property.array(Number)
  approvedActivityIdArray?: number[];

  @property({
    jsonSchema: {
      type: 'boolean',
      default: false,
      description: 'flag whether changes has been persisted to the ledger',
    },
  })
  isUpdatedOnLedger?: boolean;
}

export interface GoodOracleRelations {
  // describe navigational properties here
}

export type GoodOracleWithRelations = GoodOracle & GoodOracleRelations;
