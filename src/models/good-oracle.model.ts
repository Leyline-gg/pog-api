import {Entity, model, property} from '@loopback/repository';
import {securityId} from '@loopback/security';

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
  id?: number = 0;

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

  @property({
    jsonSchema: {
      type: 'string',
      description: 'wallet address associated to oracle',
    },
  })
  wallet?: string;

  @property({
    default: 0,
    jsonSchema: {
      type: 'number',
      description: 'status of oracle',
    },
  })
  status?: number;

  @property({
    default: 0,
    jsonSchema: {
      type: 'number',
      description: 'Type of Oracle (profit, non-profit, etc)',
    },
  })
  organizationType?: number = 0;

  @property({
    type: 'array',
    itemType: 'number',
  })
  approvedActivityIdArray?: number[] = [];

  @property({
    hidden: true,
  })
  [securityId]: string = this.id?.toString() ?? '';
}

export interface GoodOracleRelations {
  // describe navigational properties here
}
export interface OracleCap {
  activityId: number;
  oracleId: number;
  duration: number;
  points: number;
}
export type GoodOracleWithRelations = GoodOracle & GoodOracleRelations;
