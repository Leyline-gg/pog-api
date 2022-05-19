import {Client, expect, toJSON} from '@loopback/testlab';
import {PogApiApplication} from '../../../application';
import {GoodEntry} from '../../../models';
import {GoodEntryRepository} from '../../../repositories';
import {
  delay,
  givenGoodEntry,
  givenRunningApplicationWithCustomConfiguration,
} from '../test-helper';

describe('PogApiApplication - Entry', () => {
  let app: PogApiApplication;
  let client: Client;
  let goodEntryRepo: GoodEntryRepository;

  before('setupApplication', async () => {
    ({app, client} = await givenRunningApplicationWithCustomConfiguration());
  });
  after(() => app.stop());

  before(givenGoodEntryRepository);
  beforeEach(async () => {
    await goodEntryRepo.deleteAll();
  });

  it('creates a Good Entry', async function () {
    const goodEntry = givenGoodEntry();
    const response = await client.post('/entry').send(goodEntry).expect(200);
    expect(response.body).to.containDeep(goodEntry);
    const result = await goodEntryRepo.findById(response.body.id);
    expect(result).to.containDeep(goodEntry);
  });

  it('queries Good Entry with a filter', async () => {
    await givenGoodEntryInstance({
      goodActivityId: 1,
      userId: '1234567890',
    });
    await delay(500);
    await givenGoodEntryInstance({
      goodActivityId: 2,
      userId: '1234567890',
    });
    await delay(500);
    await givenGoodEntryInstance({
      goodActivityId: 2,
      userId: '1234567890',
    });
    const response = await client
      .get('/entry')
      .query({filter: {where: {goodActivityId: 2}}})
      .expect(200);
    expect(response.body).to.have.lengthOf(2);
  });

  context('when dealing with a single persisted Good Category', () => {
    let persistedGoodEntry: GoodEntry;

    beforeEach(async () => {
      persistedGoodEntry = await givenGoodEntryInstance();
    });

    it('gets a Good Entry by ID', () => {
      return client
        .get(`/entry/${persistedGoodEntry.id}`)
        .send()
        .expect(200, toJSON(persistedGoodEntry));
    });

    it('returns 404 when getting a Good Oracle that does not exist', () => {
      return client.get('/entry/99999').expect(404);
    });
  });

  /*
   ============================================================================
   TEST HELPERS
   These functions help simplify setup of your test fixtures so that your tests
   can:
   - operate on a "clean" environment each time (a fresh in-memory database)
   - avoid polluting the test with large quantities of setup logic to keep
   them clear and easy to read
   - keep them DRY (who wants to write the same stuff over and over?)
   ============================================================================
   */

  async function givenGoodEntryRepository() {
    goodEntryRepo = await app.getRepository(GoodEntryRepository);
  }

  async function givenGoodEntryInstance(goodEntry?: Partial<GoodEntry>) {
    return goodEntryRepo.create(givenGoodEntry(goodEntry));
  }
});
