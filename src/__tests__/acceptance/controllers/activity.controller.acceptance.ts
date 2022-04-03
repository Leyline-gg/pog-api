import {
  Client, expect, toJSON
} from '@loopback/testlab';
import {PogApiApplication} from '../../../application';
import {GoodActivity} from '../../../models';
import {GoodActivityRepository} from '../../../repositories';
import {
  delay,
  givenGoodActivity,
  givenRunningApplicationWithCustomConfiguration
} from '../test-helper';

describe('PogApiApplication - Activity', () => {
  let app: PogApiApplication;
  let client: Client;
  let goodActivityRepo: GoodActivityRepository;

  before('setupApplication', async () => {
    ({app, client} = await givenRunningApplicationWithCustomConfiguration());
  });
  after(() => app.stop());

  before(givenGoodActivityRepository);
  beforeEach(async () => {
    await goodActivityRepo.deleteAll();
  });

  it('creates a Good Oracle', async function () {
    const goodActivity = givenGoodActivity();
    const response = await client
      .post('/activity')
      .send(goodActivity)
      .expect(200);
    expect(response.body).to.containDeep(goodActivity);
    const result = await goodActivityRepo.findById(response.body.id);
    expect(result).to.containDeep(goodActivity);
  });

  context('when dealing with a single persisted Good Category', () => {
    let persistedGoodActivity: GoodActivity;

    beforeEach(async () => {
      persistedGoodActivity = await givenGoodActivityInstance();
    });

    it('gets a Good Oracle by ID', () => {
      return client
        .get(`/activity/${persistedGoodActivity.id}`)
        .send()
        .expect(200, toJSON(persistedGoodActivity));
    });

    it('returns 404 when getting a Good Oracle that does not exist', () => {
      return client.get('/activity/99999').expect(404);
    });

    it('replaces the Good Oracle by ID', async () => {
      const updatedGoodActivity = givenGoodActivity({
        name: 'DO SOMETHING AWESOME',
        deleted: false,
      });
      await client
        .put(`/activity/${persistedGoodActivity.id}`)
        .send(updatedGoodActivity)
        .expect(204);
      const result = await goodActivityRepo.findById(persistedGoodActivity.id);
      const {id: _, ...updatedGoodActivityBody} = updatedGoodActivity;
      expect(result).to.containEql(updatedGoodActivityBody);
    });

    it('returns 204 when replacing a Good Oracle that does not exist', () => {
      return client
        .put('/activity/99999')
        .send(givenGoodActivity())
        .expect(204);
    });

    it('updates the Good Oracle by ID ', async () => {
      const updatedGoodActivity = givenGoodActivity({
        name: 'DO SOMETHING AWESOME',
        deleted: true,
      });
      await client
        .patch(`/activity/${persistedGoodActivity.id}`)
        .send(updatedGoodActivity)
        .expect(204);
      const result = await goodActivityRepo.findById(persistedGoodActivity.id);
      expect(result.name).to.be.equal(updatedGoodActivity.name);
      expect(result.deleted).to.be.equal(updatedGoodActivity.deleted);
    });

    it('returns 204 when updating a Good Oracle that does not exist', () => {
      return client
        .patch('/activity/99999')
        .send(givenGoodActivity({deleted: true}))
        .expect(204);
    });

  });

  it('queries Good Oracle with a filter', async () => {
    await givenGoodActivityInstance({name: 'wake up', deleted: true});
    await delay(1000);
    const goodActivityInProgress = await givenGoodActivityInstance({
      name: 'go to sleep',
      deleted: false,
    });

    await client
      .get('/activity')
      .query({filter: {where: {deleted: false}}})
      .expect(200, [toJSON(goodActivityInProgress)]);
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

  async function givenGoodActivityRepository() {
    goodActivityRepo = await app.getRepository(GoodActivityRepository);
  }

  async function givenGoodActivityInstance(goodActivity?: Partial<GoodActivity>) {
    return goodActivityRepo.create(givenGoodActivity(goodActivity));
  }
});
