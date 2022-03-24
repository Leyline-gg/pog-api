import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as dotenv from 'dotenv';
import BetterFirestoreConnector from '../connectors/BetterFirestoreConnector';
dotenv.config();

const config = {
  name: 'firestore',
  connector: BetterFirestoreConnector,
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FirestoreDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'firestore';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.firestore', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
    console.log('Firestore datasource instantiated');
  }
}
