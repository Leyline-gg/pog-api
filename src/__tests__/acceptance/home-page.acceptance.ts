import {Client} from '@loopback/testlab';
import {PogApiApplication} from '../..';
import {givenRunningApplicationWithCustomConfiguration} from './test-helper';

describe('HomePage', () => {
  let app: PogApiApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await givenRunningApplicationWithCustomConfiguration());
  });

  after(async () => {
    await app.stop();
  });

  it('exposes a default home page', async () => {
    await client
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/);
  });

  it('exposes self-hosted explorer', async () => {
    await client
      .get('/explorer/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(/<title>LoopBack API Explorer/);
  });
});
