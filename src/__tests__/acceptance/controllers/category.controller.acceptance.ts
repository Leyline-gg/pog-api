import {Client, expect, toJSON} from '@loopback/testlab';
import {PogApiApplication} from '../../../application';
import {GoodCategory} from '../../../models';
import {GoodCategoryRepository} from '../../../repositories';
import {
  delay,
  givenGoodCategory,
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
    expect(response.body).to.containDeep(goodCategory);
    const result = await goodCategoryRepo.findById(response.body.id);
    expect(result).to.containDeep(goodCategory);
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

    it('returns 204 when replacing a Good Category that does not exist', () => {
      return client
        .put('/category/99999')
        .send(givenGoodCategory())
        .expect(204);
    });

    it('updates the Good Category by ID ', async () => {
      const updatedGoodCategory = givenGoodCategory({
        name: 'DO SOMETHING AWESOME',
        status: 1,
      });
      await client
        .patch(`/category/${persistedGoodCategory.id}`)
        .send(updatedGoodCategory)
        .expect(204);
      const result = await goodCategoryRepo.findById(persistedGoodCategory.id);
      expect(result.name).to.be.equal(updatedGoodCategory.name);
      expect(result.status).to.be.equal(updatedGoodCategory.status);
    });

    it('returns 204 when updating a Good Category that does not exist', () => {
      return client
        .patch('/category/99999')
        .send(givenGoodCategory({status: 1}))
        .expect(204);
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
    return goodCategoryRepo.create(givenGoodCategory(goodCategory));
  }
});
