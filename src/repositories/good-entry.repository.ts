import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {GoodEntry, GoodEntryRelations} from '../models';

export class GoodEntryRepository extends DefaultCrudRepository<
  GoodEntry,
  typeof GoodEntry.prototype.id,
  GoodEntryRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(GoodEntry, dataSource);
  }
}
