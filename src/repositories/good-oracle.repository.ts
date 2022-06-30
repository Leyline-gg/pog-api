import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FirestoreDataSource} from '../datasources';
import {GoodOracle, GoodOracleRelations} from '../models';

export class GoodOracleRepository extends DefaultCrudRepository<
  GoodOracle,
  typeof GoodOracle.prototype.id,
  GoodOracleRelations
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(GoodOracle, dataSource);
  }
}
