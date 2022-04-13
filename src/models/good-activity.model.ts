import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - GoodActivity
 * GoodActivity
 */
@model({name: 'goodactivity', settings: {strict: false}})
export class GoodActivity extends Entity {
  constructor(data?: Partial<GoodActivity>) {
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
  id: number = 0;

  /**
   * Activity name
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'Activity name',
    },
  })
  name?: string;

  /**
   * If true, cannot write to ledger with this type
   */
  @property({
    default: 0,
    jsonSchema: {
      type: 'number',
      description: 'status of good activity',
    },
  })
  status?: number = 0;

  /**
   *
   */
  @property({
    jsonSchema: {
      type: 'integer',
    },
  })
  goodCategoryId?: number;

  /**
   *
   */
  @property({
    type: 'array',
    itemType: 'number',
  })
  goodTypeIdArray?: number[];

  /**
   * Good points per unit
   */
  @property({
    jsonSchema: {
      type: 'number',
      description: 'Good points per unit',
    },
  })
  valuePerUnit?: number;

  /**
   * Activity description
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'Activity description',
    },
  })
  unitDescription?: string;
}

export interface GoodActivityRelations {
  // describe navigational properties here
}

export type GoodActivityWithRelations = GoodActivity & GoodActivityRelations;
