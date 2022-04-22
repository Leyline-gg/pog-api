import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {nanoid} from 'nanoid';
import {FirestoreDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(User, dataSource);
  }

  async findUserByWalletAddress(
    address: string,
  ): Promise<Partial<User> | null> {
    try {
      const addressQuerySnapshot: FirebaseFirestore.QuerySnapshot =
        await super.dataSource.connector?.db
          .collectionGroup('addresses')
          .where('address', '==', address)
          .get();

      if (!addressQuerySnapshot.docs.length) {
        return null;
      }

      if (addressQuerySnapshot.docs.length > 1) {
        throw new Error('Detected multiple users associated with wallet');
      }

      const addressData = addressQuerySnapshot.docs[0].data();
      const userDocSnapshot: FirebaseFirestore.DocumentSnapshot =
        await super.dataSource.connector?.db
          .doc(`/users/${addressData.uid}`)
          .get();

      return userDocSnapshot.data();
    } catch (err) {
      console.log(err);
    } finally {
      return null;
    }
  }

  async findUserByEmail(email: string) {
    const userSnapshot: FirebaseFirestore.DocumentSnapshot =
      await super.dataSource.connector?.db
        .collection('users')
        .where('email', '==', email)
        .get();

    return userSnapshot.data();
  }

  async generateProfileIdForUser(id: string): Promise<boolean> {
    try {
      const userDocRef: FirebaseFirestore.DocumentReference =
        super.dataSource.connector?.db.doc(`users/${id}`);

      const userDocSnapshot = await userDocRef.get();
      const userData = userDocSnapshot.data();
      if (userData?.profileId) {
        throw new Error('Already exists for user.');
      }

      await userDocRef.update({
        profileId: nanoid(),
      });
      return true;
    } catch (err) {
      console.log(err);
    } finally {
      return false;
    }
  }
}