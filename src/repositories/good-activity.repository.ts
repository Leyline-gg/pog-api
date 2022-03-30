import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {GoodActivity, GoodActivityRelations} from '../models';

export class GoodActivityRepository extends DefaultCrudRepository<
  GoodActivity,
  typeof GoodActivity.prototype.id,
  GoodActivityRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(GoodActivity, dataSource);
  }
}
