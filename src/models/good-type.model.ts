import {Entity, model, property} from '@loopback/repository';

@model({name: 'goodtype', settings: {strict: false}})
export class GoodType extends Entity {
  constructor(data?: Partial<GoodType>) {
    super(data);
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  @property({
    id: true,
    jsonSchema: {
      type: 'number',
    },
  })
  id?: number = 0;

  /**
   * type name
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'Good Type name',
    },
  })
  name?: string;

  @property({
    default: 0,
    jsonSchema: {
      type: 'number',
      description: 'Status of Good Type',
    },
  })
  status?: number = 0;
}

export interface GoodTypeRelations {
  // describe navigational properties here
}

export type GoodTypeWithRelations = GoodType & GoodTypeRelations;
