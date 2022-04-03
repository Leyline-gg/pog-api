import {
  Client, createRestAppClient,
  givenHttpServerConfig
} from '@loopback/testlab';
import {PogApiApplication} from '../..';
import {GoodActivity, GoodCategory, GoodOracle} from '../../models/index';

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
      deleted: false,
    },
    goodCategory,
  );
  return new GoodCategory(data);
}

/**
 * Generate a complete Good Oracle object for use with tests.
 * @param goodOracle A partial (or complete) GoodOracle object.
 */
export function givenGoodOracle(goodOracle?: Partial<GoodOracle>) {
  const data = Object.assign(
    {
      name: 'Awesome Oracle',
      deleted: false,
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
      deleted: false,
      goodCategoryId: 1234,
      goodTypeId: 2345,
      valuePerUnit: 100,
      unitDescription: "Per Test"
    },
    goodActivity,
  );
  return new GoodActivity(data);
}
