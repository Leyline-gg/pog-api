import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - GoodCategory_Input
 * GoodCategory_Input
 */
@model({name: 'goodcategory'})
export class GoodCategoryInput {
  constructor(data?: Partial<GoodCategoryInput>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * Category name
   */
  @property({
    required: true,
    jsonSchema: {
      type: 'string',
      description: 'Category name',
    },
  })
  name: string;

  /**
   * If true, cannot write to ledger with this category
   */
  @property({
    jsonSchema: {
      type: 'boolean',
      default: false,
      description: 'If true, cannot write to ledger with this category',
    },
  })
  deleted?: boolean = false;
}

export interface GoodCategoryInputRelations {
  // describe navigational properties here
}

export type GoodCategoryInputWithRelations = GoodCategoryInput &
  GoodCategoryInputRelations;
