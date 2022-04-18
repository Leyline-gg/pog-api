import {
  Client,
  createRestAppClient,
  givenHttpServerConfig,
} from '@loopback/testlab';
import {PogApiApplication} from '../..';
import {
  GoodActivity,
  GoodCategory,
  GoodEntry,
  GoodOracle,
  GoodType,
} from '../../models/index';

export async function givenRunningApplication(): Promise<AppWithClient> {
  const restConfig = givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
  });

  const app = new PogApiApplication({
    rest: restConfig,
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export async function givenRunningApplicationWithCustomConfiguration() {
  const app = new PogApiApplication({
    rest: givenHttpServerConfig(),
  });

  await app.boot();

  /**
   * Override default config for DataSource for testing so we don't write
   * test data to file when using the memory connector.
   */
  app.bind('datasources.config.firestore').to({
    name: 'db',
    connector: 'memory',
    debug: true,
  });

  // Start Application
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: PogApiApplication;
  client: Client;
}

export const delay = (ms: number) => new Promise(_ => setTimeout(_, ms));

/*
 ==============================================================================
 HELPER FUNCTIONS
 If you find yourself creating the same helper functions across different
 test files, then extracting those functions into helper modules is an easy
 way to reduce duplication.
 Other tips:
 - Using the super awesome Partial<T> type in conjunction with Object.assign
   means you can:
   * customize the object you get back based only on what's important
   to you during a particular test
   * avoid writing test logic that is brittle with respect to the properties
   of your object
 - Making the input itself optional means you don't need to do anything special
   for tests where the particular details of the input don't matter.
 ==============================================================================
 */

/**
 * Generate a complete Good Category object for use with tests.
 * @param goodCategory A partial (or complete) GoodCategory object.
 */
export function givenGoodCategory(goodCategory?: Partial<GoodCategory>) {
  const data = Object.assign(
    {
      name: 'Awesome Category',
      status: 0,
    },
    goodCategory,
  );
  return new GoodCategory(data);
}
/**
 * Generate a complete Good Category object for use with tests.
 * @param goodCategory A partial (or complete) GoodCategory object.
 */
export function givenGoodType(goodType?: Partial<GoodType>) {
  const data = Object.assign(
    {
      name: 'Awesome Type',
      status: 0,
    },
    goodType,
  );
  return new GoodType(data);
}
/**
 * Generate a complete Good Oracle object for use with tests.
 * @param goodOracle A partial (or complete) GoodOracle object.
 */
export function givenGoodOracle(goodOracle?: Partial<GoodOracle>) {
  const data = Object.assign(
    {
      name: Math.random().toString(16).substring(2, 10),
      status: 0,
      id: 0,
      approvedActivityIdArray: [],
      goodOracleURI: 'awesome.io',
    },
    goodOracle,
  );
  return new GoodOracle(data);
}

/**
 * Generate a complete Good Activity object for use with tests.
 * @param goodActivity A partial (or complete) GoodActivity object.
 */
export function givenGoodActivity(goodActivity?: Partial<GoodActivity>) {
  const data = Object.assign(
    {
      name: 'Awesome Activity',
      status: 0,
      goodCategoryId: 1234,
      goodTypeIdArray: [1, 2, 3, 4],
      valuePerUnit: 100,
      unitDescription: 'Per Test',
    },
    goodActivity,
  );
  return new GoodActivity(data);
}

/**
 * Generate a complete Good Activity object for use with tests.
 * @param goodEntry A partial (or complete) GoodEntry object.
 */
export function givenGoodEntry(goodEntry?: Partial<GoodEntry>) {
  const data = Object.assign(
    {
      doGooder: '0x9999999999999999999999999',
      goodActivityId: 0,
      units: 1,
      proofURL: 'https://proof.url',
      timestamp: 1231456789123,
      userId: '1234567890',
      externalId: 'string',
    },
    goodEntry,
  );
  return new GoodEntry(data);
}
