import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - GoodCategory
 * GoodCategory
 */
@model({name: 'goodcategory', settings: {strict: false}})
export class GoodCategory extends Entity {
  constructor(data?: Partial<GoodCategory>) {
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
   * Category name
   */
  @property({
    jsonSchema: {
      type: 'string',
      description: 'Category name',
    },
  })
  name?: string;

  @property({
    default: 0,
    jsonSchema: {
      type: 'number',
      description: 'status of good category',
    },
  })
  status?: number = 0;

  /**
   * non-decrementing summary of total good by category
   */
  @property({
    jsonSchema: {
      type: 'integer',
      description: 'non-decrementing summary of total good by category',
    },
  })
  totalGood?: number;
}

export interface GoodCategoryRelations {
  // describe navigational properties here
}

export type GoodCategoryWithRelations = GoodCategory & GoodCategoryRelations;
