import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {GoodEntry, GoodEntryRelations} from '../models';

export class GoodEntryRepository extends DefaultCrudRepository<
  GoodEntry,
  typeof GoodEntry.prototype.id,
  GoodEntryRelations
> {
  db: FirebaseFirestore.Firestore;
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(GoodEntry, dataSource);
    this.db = dataSource.connector?.db;
  }

  async createFailedGoodEntry(
    goodEntry: GoodEntry,
  ): Promise<GoodEntry | undefined> {
    const failedDocRef = await this.db.collection('failed_goodentries').add({
      ...goodEntry,
    });
    const failedDocSnapshot = await failedDocRef.get();
    const failedDocData = failedDocSnapshot.data() as GoodEntry;
    console.log('Added entry to failed good entries:', failedDocData);
    return failedDocData;
  }
}
