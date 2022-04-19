import {Client, expect, toJSON} from '@loopback/testlab';
import {ethers} from 'ethers';
import {PogApiApplication} from '../../../application';
import {GoodCategory} from '../../../models';
import {GoodCategoryRepository} from '../../../repositories';
import {
  delay,
  givenGoodCategory,
  givenProofOfGoodLedger,
  givenRunningApplicationWithCustomConfiguration,
} from '../test-helper';

describe('PogApiApplication - Category', () => {
  let app: PogApiApplication;
  let client: Client;
  let goodCategoryRepo: GoodCategoryRepository;

  before('setupApplication - Category', async () => {
    ({app, client} = await givenRunningApplicationWithCustomConfiguration());
  });
  after(() => app.stop());

  before(givenGoodCategoryRepository);
  beforeEach(async () => {
    await goodCategoryRepo.deleteAll();
  });

  it('creates a Good Category', async function () {
    const goodCategory = givenGoodCategory();
    const response = await client
      .post('/category')
      .send(goodCategory)
      .expect(200);

    expect(response.body.id).not.to.equal(goodCategory.id);
    expect(response.body.name).to.equal(goodCategory.name);
    expect(response.body.status).to.equal(goodCategory.status);

    const result = await goodCategoryRepo.findById(response.body.id);
    expect(response.body.id).to.equal(result.id);
    expect(result.status).to.equal(goodCategory.status);
    expect(result.name).to.equal(goodCategory.name);
  });

  context('when dealing with a single persisted Good Category', () => {
    let persistedGoodCategory: GoodCategory;

    beforeEach(async () => {
      persistedGoodCategory = await givenGoodCategoryInstance();
    });

    it('gets a Good Category by ID', () => {
      return client
        .get(`/category/${persistedGoodCategory.id}`)
        .send()
        .expect(200, toJSON(persistedGoodCategory));
    });

    it('returns 404 when getting a Good Category that does not exist', () => {
      return client.get('/category/99999').expect(404);
    });

    it('replaces the Good Category by ID', async () => {
      const updatedGoodCategory = givenGoodCategory({
        name: 'DO SOMETHING AWESOME',
        status: 0,
      });
      await client
        .put(`/category/${persistedGoodCategory.id}`)
        .send(updatedGoodCategory)
        .expect(204);
      const result = await goodCategoryRepo.findById(persistedGoodCategory.id);
      const {id: _, ...updatedGoodCategoryBody} = updatedGoodCategory;
      expect(result).to.containEql(updatedGoodCategoryBody);
    });

    it('returns 404 when replacing a Good Category that does not exist', async () => {
      return client
        .put('/category/99999')
        .send(givenGoodCategory())
        .expect(404);
    });

    it('updates the Good Category by ID ', async () => {
      const updatedGoodCategory = givenGoodCategory({
        name: 'DO SOMETHING AWESOME',
        status: 1,
      });
      console.log('persistedGoodCategory', persistedGoodCategory);
      await client
        .patch(`/category/${persistedGoodCategory.id}`)
        .send(updatedGoodCategory)
        .expect(204);
      const result = await goodCategoryRepo.findById(persistedGoodCategory.id);

      expect(result.name).to.be.equal(updatedGoodCategory.name);
      expect(result.status).to.be.equal(updatedGoodCategory.status);
    });

    it('returns 404 when updating a Good Category that does not exist', () => {
      return client
        .patch('/category/99999')
        .send(givenGoodCategory({status: 1}))
        .expect(404);
    });
  });

  it('queries Good Categories with a filter', async () => {
    await givenGoodCategoryInstance({name: 'wake up', status: 1});
    await delay(1000);
    const goodCategoryInProgress = await givenGoodCategoryInstance({
      name: 'go to sleep',
      status: 0,
    });

    await client
      .get('/category')
      .query({filter: {where: {status: 0}}})
      .expect(200, [toJSON(goodCategoryInProgress)]);
  });

  context('When executing Good Category transactions on the ledger', () => {
    let persistedGoodCategory: GoodCategory;
    let contract: ethers.Contract;

    before('initialize contract', async () => {
      contract = givenProofOfGoodLedger();
    });

    beforeEach(async () => {
      persistedGoodCategory = await givenGoodCategoryInstance(
        givenGoodCategory(),
      );
    });

    it('can add a new Good Category', async () => {
      const goodCategoryOnLedger = await contract.goodCategories(
        persistedGoodCategory.id,
      );
      console.log('goodCategoryOnLedger:', goodCategoryOnLedger);
      console.log('persistedGoodCategory:', persistedGoodCategory);
      expect(goodCategoryOnLedger.name).to.equal(persistedGoodCategory.name);
      expect(goodCategoryOnLedger.status).to.equal(
        persistedGoodCategory.status,
      );
    });

    it('can update a Good Category', async () => {
      const updatedGoodCategory = new GoodCategory({
        name: Math.random().toString(16).substring(2, 10),
        status: 1,
      });

      await client
        .put(`/category/${persistedGoodCategory.id}`)
        .send(updatedGoodCategory)
        .expect(204);

      const goodCategoryArgs = await contract.goodCategories(
        persistedGoodCategory.id,
      );

      const goodCategoryOnLedger = new GoodCategory({
        id: goodCategoryArgs.id,
        name: goodCategoryArgs.name,
        status: goodCategoryArgs.status,
      });

      const result = await goodCategoryRepo.findById(persistedGoodCategory.id);

      expect(result).to.containDeep(goodCategoryOnLedger);

      delete goodCategoryOnLedger.id;
      delete updatedGoodCategory.id;

      expect(goodCategoryOnLedger).to.containDeep(updatedGoodCategory);
    });

    it('can update only the name of the Category', async () => {
      const updatedGoodCategory = givenGoodCategory({
        name: Math.random().toString(16).substring(2, 10),
      });

      await client
        .put(`/category/${persistedGoodCategory.id}`)
        .send(updatedGoodCategory)
        .expect(204);

      const goodCategoryArgs = await contract.goodCategories(
        persistedGoodCategory.id,
      );

      const goodCategoryOnLedger = new GoodCategory({
        id: goodCategoryArgs.id,
        name: goodCategoryArgs.name,
        status: goodCategoryArgs.status,
      });

      const result = await goodCategoryRepo.findById(persistedGoodCategory.id);

      expect(result).to.containDeep(goodCategoryOnLedger);

      delete goodCategoryOnLedger.id;
      delete updatedGoodCategory.id;

      expect(goodCategoryOnLedger).to.containDeep(updatedGoodCategory);
    });

    it('can update only the status of the Category', async () => {
      const updatedGoodCategory = givenGoodCategory({
        status: 2,
      });

      await client
        .put(`/category/${persistedGoodCategory.id}`)
        .send(updatedGoodCategory)
        .expect(204);

      const goodCategoryArgs = await contract.goodCategories(
        persistedGoodCategory.id,
      );

      const goodCategoryOnLedger = new GoodCategory({
        id: goodCategoryArgs.id,
        name: goodCategoryArgs.name,
        status: goodCategoryArgs.status,
      });

      const result = await goodCategoryRepo.findById(persistedGoodCategory.id);

      expect(result).to.containDeep(goodCategoryOnLedger);

      delete goodCategoryOnLedger.id;
      delete updatedGoodCategory.id;

      expect(goodCategoryOnLedger).to.containDeep(updatedGoodCategory);
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

  async function givenGoodCategoryRepository() {
    goodCategoryRepo = await app.getRepository(GoodCategoryRepository);
  }

  async function givenGoodCategoryInstance(
    goodCategory?: Partial<GoodCategory>,
  ) {
    const response = await client
      .post(`/category`)
      .send(givenGoodCategory(goodCategory))
      .expect(200);

    return response.body;
  }
});
