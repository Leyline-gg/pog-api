import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {GoodType, GoodTypeRelations} from '../models';

export class GoodTypeRepository extends DefaultCrudRepository<
  GoodType,
  typeof GoodType.prototype.id,
  GoodTypeRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(GoodType, dataSource);
  }
}
