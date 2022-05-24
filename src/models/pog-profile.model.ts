import {Entity, model, property} from '@loopback/repository';

@model({name: 'pogprofiles', settings: {strict: false}})
export class PogProfile extends Entity {
  @property({
    type: 'date',
  })
  created?: number;

  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  userId?: string;

  @property({
    type: 'string',
  })
  emailHash?: string;

  @property({
    type: 'string',
  })
  pogId?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  walletAddresses?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PogProfile>) {
    super(data);
  }
}

export interface PogProfileRelations {
  // describe navigational properties here
}

export type PogProfileWithRelations = PogProfile & PogProfileRelations;
