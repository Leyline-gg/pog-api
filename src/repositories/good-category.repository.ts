import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {GoodCategory, GoodCategoryRelations} from '../models';

export class GoodCategoryRepository extends DefaultCrudRepository<
  GoodCategory,
  typeof GoodCategory.prototype.id,
  GoodCategoryRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(GoodCategory, dataSource);
  }
}
