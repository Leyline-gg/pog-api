import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {OracleApiKey, OracleApiKeyRelations} from '../models';

export class AuthRepository extends DefaultCrudRepository<
  OracleApiKey,
  typeof OracleApiKey.prototype.id,
  OracleApiKeyRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(OracleApiKey, dataSource);
  }

  findLatest(oracleId: number): Promise<OracleApiKey | null> {
    return this.findOne({
      where: {
        oracleId,
      },
      order: ['id DESC'],
    });
  }
}
