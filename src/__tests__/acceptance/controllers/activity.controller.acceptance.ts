import {Client, expect, toJSON} from '@loopback/testlab';
import {BigNumber, ethers} from 'ethers';
import {PogApiApplication} from '../../../application';
import {GoodActivity, GoodCategory, GoodType} from '../../../models';
import {GoodActivityRepository} from '../../../repositories';
import {
  delay,
  givenGoodActivity,
  givenProofOfGoodLedger,
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

    it('gets a Good Activity by ID', () => {
      return client
        .get(`/activity/${persistedGoodActivity.id}`)
        .send()
        .expect(200, toJSON(persistedGoodActivity));
    });

    it('returns 404 when getting a Good Activity that does not exist', () => {
      return client.get('/activity/99999').expect(404);
    });

    it('replaces the Good Activity by ID', async () => {
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
      // console.log('result:', result);
      // console.log('updatedGoodActivity:', updatedGoodActivity);
      const {id: _, ...updatedGoodActivityBody} = updatedGoodActivity;
      expect(result).to.containEql(updatedGoodActivityBody);
    });

    it('returns 404 when replacing a Good Activity that does not exist', () => {
      return client
        .put('/activity/99999')
        .send(givenGoodActivity())
        .expect(404);
    });

    it('updates the Good Activity by ID ', async () => {
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

    it('returns 404 when updating a Good Activity that does not exist', () => {
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

  context('When executing Good Activity transactions on the ledger', () => {
    let persistedGoodTypeId: number;
    let persistedGoodCategoryId: number;
    let persistedGoodActivity: GoodActivity;
    let contract: ethers.Contract;

    before('initialize contract', async () => {
      contract = givenProofOfGoodLedger();
    });

    beforeEach(async () => {
      const activeTypeAndCategory = await givenActiveCategoryAndTypeInstances();
      persistedGoodTypeId = activeTypeAndCategory.activeGoodType.id;
      persistedGoodCategoryId = activeTypeAndCategory.activeGoodCategory.id;
      persistedGoodActivity = await givenGoodActivityInstance(
        givenGoodActivity(),
      );
    });

    it('can add a new Good Activity', async () => {
      const goodActivityArgs = await contract.getGoodActivity(
        persistedGoodActivity.id,
      );

      const goodActivityOnLedger = new GoodActivity({
        id: goodActivityArgs.id.toNumber(),
        name: goodActivityArgs.name,
        status: goodActivityArgs.status,
        unitDescription: goodActivityArgs.unitDescription,
        goodTypeIdArray: goodActivityArgs.goodTypeIdArray.map(
          (typeId: BigNumber) => typeId.toNumber(),
        ),
        goodCategoryId: goodActivityArgs.goodCategoryId.toNumber(),
        valuePerUnit: goodActivityArgs.valuePerUnit.toNumber(),
      });

      const result = await goodActivityRepo.findById(persistedGoodActivity.id);

      expect(result).to.containDeep(goodActivityOnLedger);
    });

    it('can update a Good Activity', async () => {
      const updatedGoodActivity = await givenGoodActivityInstance({
        name: Math.random().toString(16).substring(2, 10),
        status: 1,
        unitDescription: 'some description of the good activity',
        valuePerUnit: 500,
        goodTypeIdArray: [persistedGoodTypeId],
        goodCategoryId: persistedGoodCategoryId,
      });

      await client
        .put(`/activity/${persistedGoodActivity.id}`)
        .send(updatedGoodActivity)
        .expect(204);

      const goodActivityArgs = await contract.getGoodActivity(
        persistedGoodActivity.id,
      );

      const goodActivityOnLedger = new GoodActivity({
        id: goodActivityArgs.id.toNumber(),
        name: goodActivityArgs.name,
        status: goodActivityArgs.status,
        unitDescription: goodActivityArgs.unitDescription,
        goodTypeIdArray: goodActivityArgs.goodTypeIdArray.map(
          (typeId: BigNumber) => typeId.toNumber(),
        ),
        goodCategoryId: goodActivityArgs.goodCategoryId.toNumber(),
        valuePerUnit: goodActivityArgs.valuePerUnit.toNumber(),
      });

      const result = await goodActivityRepo.findById(persistedGoodActivity.id);

      expect(result).to.containDeep(goodActivityOnLedger);

      delete goodActivityOnLedger.id;
      delete updatedGoodActivity.id;

      expect(goodActivityOnLedger).to.containDeep(updatedGoodActivity);
    });

    it('can update only the name of the Activity', async () => {
      const updatedGoodActivity = new GoodActivity({
        name: Math.random().toString(16).substring(2, 10),
      });

      delete updatedGoodActivity.goodTypeIdArray;

      await client
        .put(`/activity/${persistedGoodActivity.id}`)
        .send(updatedGoodActivity)
        .expect(204);

      const goodActivityArgs = await contract.getGoodActivity(
        persistedGoodActivity.id,
      );

      const goodActivityOnLedger = new GoodActivity({
        id: goodActivityArgs.id.toNumber(),
        name: goodActivityArgs.name,
        status: goodActivityArgs.status,
        unitDescription: goodActivityArgs.unitDescription,
        goodTypeIdArray: goodActivityArgs.goodTypeIdArray.map(
          (typeId: BigNumber) => typeId.toNumber(),
        ),
        goodCategoryId: goodActivityArgs.goodCategoryId.toNumber(),
        valuePerUnit: goodActivityArgs.valuePerUnit.toNumber(),
      });

      const result = await goodActivityRepo.findById(persistedGoodActivity.id);

      expect(result).to.containDeep(goodActivityOnLedger);

      delete goodActivityOnLedger.id;
      delete updatedGoodActivity.id;

      expect(goodActivityOnLedger).to.containDeep(updatedGoodActivity);
    });

    it('can update only the good types of the Activity', async () => {
      const updatedGoodActivity = new GoodActivity({
        goodTypeIdArray: [persistedGoodTypeId],
      });

      await client
        .put(`/activity/${persistedGoodActivity.id}`)
        .send(updatedGoodActivity)
        .expect(204);

      const goodActivityArgs = await contract.getGoodActivity(
        persistedGoodActivity.id,
      );

      const goodActivityOnLedger = new GoodActivity({
        id: goodActivityArgs.id.toNumber(),
        name: goodActivityArgs.name,
        status: goodActivityArgs.status,
        unitDescription: goodActivityArgs.unitDescription,
        goodTypeIdArray: goodActivityArgs.goodTypeIdArray.map(
          (typeId: BigNumber) => typeId.toNumber(),
        ),
        goodCategoryId: goodActivityArgs.goodCategoryId.toNumber(),
        valuePerUnit: goodActivityArgs.valuePerUnit.toNumber(),
      });

      const result = await goodActivityRepo.findById(persistedGoodActivity.id);

      expect(result).to.containDeep(goodActivityOnLedger);

      delete goodActivityOnLedger.id;
      delete updatedGoodActivity.id;

      expect(goodActivityOnLedger).to.containDeep(updatedGoodActivity);
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
      .post('/type')
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
      goodActivity as GoodActivity,
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
