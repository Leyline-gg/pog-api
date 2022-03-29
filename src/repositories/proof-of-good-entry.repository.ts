import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {ProofOfGoodEntry, ProofOfGoodEntryRelations} from '../models';

export class ProofOfGoodEntryRepository extends DefaultCrudRepository<
  ProofOfGoodEntry,
  typeof ProofOfGoodEntry.prototype.id,
  ProofOfGoodEntryRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(ProofOfGoodEntry, dataSource);
  }
}
