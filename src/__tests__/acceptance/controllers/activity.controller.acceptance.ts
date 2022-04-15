require('./goodtype.controller.acceptance');
import {Client, expect, toJSON} from '@loopback/testlab';
import {PogApiApplication} from '../../../application';
import {GoodActivity, GoodCategory, GoodType} from '../../../models';
import {GoodActivityRepository} from '../../../repositories';
import {
  delay,
  givenGoodActivity,
  givenRunningApplicationWithCustomConfiguration,
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

  it('creates a Good Activity', async function () {
    const goodActivity = givenGoodActivity();
    const response = await givenGoodActivityInstance(goodActivity);

    delete goodActivity.id;

    expect(response).to.containDeep(goodActivity);
    const result = await goodActivityRepo.findById(response.id);
    expect(result).to.containDeep(goodActivity);
  });

  context('when dealing with a single persisted Good Activity', () => {
    let persistedGoodActivity: GoodActivity;
    let goodActivity: Partial<GoodActivity>;

    beforeEach(async () => {
      goodActivity = givenGoodActivity();
      persistedGoodActivity = await givenGoodActivityInstance(goodActivity);
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
        status: 1,
        goodCategoryId: persistedGoodActivity.goodCategoryId,
        goodTypeIdArray: persistedGoodActivity.goodTypeIdArray,
      });
      await client
        .put(`/activity/${persistedGoodActivity.id}`)
        .send(updatedGoodActivity)
        .expect(204);
      const result = await goodActivityRepo.findById(persistedGoodActivity.id);
      const {id: _, ...updatedGoodActivityBody} = updatedGoodActivity;
      expect(result).to.containEql(updatedGoodActivityBody);
    });

    it('returns 404 when replacing a Good Activity that does not exist', () => {
      return client
        .put('/activity/99999')
        .send(givenGoodActivity())
        .expect(404);
    });

    it('updates the Good Oracle by ID ', async () => {
      const updatedGoodActivity = givenGoodActivity({
        name: 'DO SOMETHING AWESOME',
        status: 2,
        goodCategoryId: persistedGoodActivity.goodCategoryId,
        goodTypeIdArray: persistedGoodActivity.goodTypeIdArray,
      });
      await client
        .patch(`/activity/${persistedGoodActivity.id}`)
        .send(updatedGoodActivity)
        .expect(204);
      const result = await goodActivityRepo.findById(persistedGoodActivity.id);
      expect(result.name).to.be.equal(updatedGoodActivity.name);
      expect(result.status).to.be.equal(updatedGoodActivity.status);
    });

    it('returns 404 when updating a Good Oracle that does not exist', () => {
      return client
        .patch('/activity/99999')
        .send(givenGoodActivity({status: 2}))
        .expect(404);
    });
  });

  it('queries Good Activity with a filter', async () => {
    await givenGoodActivityInstance(
      givenGoodActivity({name: 'wake up', status: 2}),
    );
    await delay(1000);
    const goodActivityInProgress = await givenGoodActivityInstance(
      givenGoodActivity({
        name: 'go to sleep',
        status: 1,
      }),
    );

    await client
      .get('/activity')
      .query({filter: {where: {status: 1}}})
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

  async function givenActiveCategoryAndTypeInstances(
    goodCategory?: Partial<GoodCategory>,
    goodType?: Partial<GoodType>,
  ) {
    const goodCategoryData = Object.assign(
      {
        name: 'Active Good Category',
        status: 1,
      },
      goodCategory,
    );

    const goodTypeData = Object.assign(
      {
        name: 'Active Good Type',
        status: 1,
      },
      goodType,
    );

    const goodCategoryInstance = await client
      .post('/category')
      .send(goodCategoryData)
      .expect(200);

    const goodTypeInstance = await client
      .post('/good-types')
      .send(goodTypeData)
      .expect(200);

    return {
      activeGoodCategory: goodCategoryInstance.body,
      activeGoodType: goodTypeInstance.body,
    };
  }

  async function givenGoodActivityInstance(
    goodActivity?: Partial<GoodActivity>,
  ) {
    const {activeGoodCategory, activeGoodType} =
      await givenActiveCategoryAndTypeInstances();

    Object.assign(
      goodActivity,
      {goodCategoryId: activeGoodCategory.id},
      {goodTypeIdArray: [activeGoodType.id]},
    );

    const response = await client
      .post(`/activity`)
      .send(goodActivity)
      .expect(200);

    return response.body;
  }
});
