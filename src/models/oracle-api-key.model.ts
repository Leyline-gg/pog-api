import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - OracleApiKey
 * OracleApiKey
 */
@model({name: 'oracleapikey', settings: {strict: false}})
export class OracleApiKey extends Entity {
  constructor(data?: Partial<OracleApiKey>) {
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
   * Oracle ID
   */
  @property({
    jsonSchema: {
      type: 'number',
      description: 'Oracle ID',
    },
  })
  oracleId: number;

  /**
   * API Key
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'Oracle API Key',
    },
  })
  apikey: string;

  /**
   * API Key still in use?
   */
  @property({
    jsonSchema: {
      type: 'boolean',
      description: 'API Key still in use?',
      default: false,
    },
  })
  expired: boolean;
}

export interface OracleApiKeyRelations {
  // describe navigational properties here
}

export type OracleApiKeyWithRelations = OracleApiKey & OracleApiKeyRelations;
