import {Entity, model, property} from '@loopback/repository';

@model({name: 'users', settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
  })
  walletAddresses?: string[];

  @property({
    type: 'string',
  })
  profileId?: string;

  @property({
    type: 'number',
  })
  balance?: number;

  @property({
    type: 'number',
  })
  totalGood?: number;

  @property({
    type: 'number',
  })
  totalGoodRedeemed?: number;

  @property({
    type: 'array',
    itemType: 'object',
  })
  entries?: object[];

  @property({
    type: 'array',
    itemType: 'number',
  })
  categories?: number[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = User & UsersRelations;
