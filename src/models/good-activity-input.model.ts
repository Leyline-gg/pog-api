import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - GoodActivity_Input
 * GoodActivity_Input
 */
@model({name: 'GoodActivity_Input'})
export class GoodActivityInput {
  constructor(data?: Partial<GoodActivityInput>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * Activity name
   */
  @property({required: true, jsonSchema: {
  type: 'string',
  description: 'Activity name',
}})
  name: string;

  /**
   * If true, cannot write to ledger with this type
   */
  @property({jsonSchema: {
  type: 'boolean',
  default: false,
  description: 'If true, cannot write to ledger with this type',
}})
  deleted?: boolean = false;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
}})
  goodCategoryId: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
}})
  goodTypeId: number;

  /**
   * Good points per unit
   */
  @property({required: true, jsonSchema: {
  type: 'number',
  description: 'Good points per unit',
}})
  valuePerUnit: number;

  /**
   * Activity description
   */
  @property({required: true, jsonSchema: {
  type: 'string',
  description: 'Activity description',
}})
  unitDescription: string;

}

export interface GoodActivityInputRelations {
  // describe navigational properties here
}

export type GoodActivityInputWithRelations = GoodActivityInput & GoodActivityInputRelations;


