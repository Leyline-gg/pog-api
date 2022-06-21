import {Model, model, property} from '@loopback/repository';

// Model to represent ProofOfGoodProfile from ProofOfGoodLedger.sol
@model({name: 'ProofOfGoodProfile', settings: {strict: false}})
export class ProofOfGoodProfile extends Model {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  profileId?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  walletAddresses?: string[];

  @property({
    type: 'number',
  })
  balance?: number;

  @property({
    type: 'number',
  })
  totalGood?: number;

  @property({
    type: 'array',
    itemType: 'number',
  })
  categories?: number[];

  @property({
    type: 'array',
    itemType: 'number',
  })
  entries?: number[];

  constructor(data?: Partial<ProofOfGoodProfile>) {
    super(data);
  }
}

export interface ProofOfGoodProfileRelations {
  // describe navigational properties here
}

export type ProofOfGoodProfileWithRelations = ProofOfGoodProfile &
  ProofOfGoodProfileRelations;
