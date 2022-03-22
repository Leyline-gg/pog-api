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
    required: true,
    jsonSchema: {
      type: 'number',
    },
  })
  id: number;

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
}

export interface GoodOracleRelations {
  // describe navigational properties here
}

export type GoodOracleWithRelations = GoodOracle & GoodOracleRelations;
