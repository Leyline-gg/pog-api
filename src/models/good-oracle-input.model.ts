import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - GoodOracle_Input
 * GoodOracle_Input
 */
@model({name: 'goodoracle'})
export class GoodOracleInput extends Entity {
  constructor(data?: Partial<GoodOracleInput>) {
    super(data);
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * Oracle name
   */
  @property({
    required: true,
    jsonSchema: {
      type: 'string',
      description: 'Oracle name',
    },
  })
  name: string;

  /**
   * reference to metadata on IPFS
   */
  @property({
    required: true,
    jsonSchema: {
      type: 'string',
      description: 'reference to metadata on IPFS',
    },
  })
  goodOracleURI: string;

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

export interface GoodOracleInputRelations {
  // describe navigational properties here
}

export type GoodOracleInputWithRelations = GoodOracleInput &
  GoodOracleInputRelations;
