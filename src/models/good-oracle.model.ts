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
    default: 0,
    jsonSchema: {
      type: 'number',
      description: 'status of oracle',
    },
  })
  status?: number;

  @property({
    type: 'array',
    itemType: 'number',
  })
  approvedActivityIdArray?: number[];

  @property({
<<<<<<< HEAD
    jsonSchema: {
      type: 'number',
      description: 'Type of organization',
    },
  })
  organizationType?: number;
=======
    hidden: true,
  })
  [securityId]: string = this.id?.toString() ?? '';
>>>>>>> def1bd474443b1197c2e9354ca521f27ea1d4a00
}

export interface GoodOracleRelations {
  // describe navigational properties here
}

export type GoodOracleWithRelations = GoodOracle & GoodOracleRelations;
