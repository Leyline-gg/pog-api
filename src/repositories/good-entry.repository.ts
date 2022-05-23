import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {GoodEntry, GoodEntryRelations} from '../models';

export class GoodEntryRepository extends DefaultCrudRepository<
  GoodEntry,
  typeof GoodEntry.prototype.id,
  GoodEntryRelations
> {
  db: any;
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(GoodEntry, dataSource);
    this.db = dataSource.connector?.db;
  }

  async createGoodEntry(goodEntry: GoodEntry): Promise<GoodEntry | undefined> {
    const trackerDocRef: FirebaseFirestore.DocumentReference =
      await this.db.doc(`transaction_trackers/goodentries`);
    return await this.db.runTransaction(
      async (transaction: FirebaseFirestore.Transaction) => {
        try {
          const trackerDoc: FirebaseFirestore.DocumentSnapshot =
            await transaction.get(trackerDocRef);
          console.log('trackDoc exists:', trackerDoc.exists);
          console.log('trackerDoc:', trackerDoc);
          if (!trackerDoc.exists) {
            transaction.set(trackerDocRef, {
              transactionType: 'goodentry',
              nonce: 0,
            });
          }
          const trackerData = trackerDoc.data();
          const previousNonce = trackerData?.nonce;
          const newNonce = previousNonce + 1;
          Object.assign(goodEntry, {nonce: newNonce});
          const response = await super.create(goodEntry);
          console.log('incrementing tracker doc nonce')
          transaction.update(trackerDocRef, {
            nonce: newNonce,
          });
          return response;
        } catch (error) {
          console.log(error);
          return undefined;
        }
      },
    );
  }
}
