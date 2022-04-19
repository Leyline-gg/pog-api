import {Client, expect, toJSON} from '@loopback/testlab';
import {ethers} from 'ethers';
import {PogApiApplication} from '../../../application';
import {GoodType} from '../../../models';
import {GoodTypeRepository} from '../../../repositories';
import {
  delay,
  givenGoodType,
  givenProofOfGoodLedger,
  givenRunningApplicationWithCustomConfiguration
} from '../test-helper';

describe('PogApiApplication - Good Type', () => {
  let app: PogApiApplication;
  let client: Client;
  let goodTypeRepo: GoodTypeRepository;

  before('setupApplication - Good Type', async () => {
    ({app, client} = await givenRunningApplicationWithCustomConfiguration());
  });
  after(() => app.stop());

  before(givenGoodTypeRepository);
  beforeEach(async () => {
    await goodTypeRepo.deleteAll();
  });

  it('creates a Good Type', async function () {
    const goodType = givenGoodType();
    const response = await client
      .post('/types')
      .send(goodType)
      .expect(200);

    expect(response.body.id).not.to.equal(goodType.id);
    expect(response.body.name).to.equal(goodType.name);
    expect(response.body.status).to.equal(goodType.status);

    const result = await goodTypeRepo.findById(response.body.id);
    expect(response.body.id).to.equal(result.id);
    expect(result.status).to.equal(goodType.status);
    expect(result.name).to.equal(goodType.name);
  });

  context('when dealing with a single persisted Good Category', () => {
    let persistedGoodType: GoodType;

    beforeEach(async () => {
      persistedGoodType = await givenGoodTypeInstance();
    });

    it('gets a Good Type by ID', () => {
      return client
        .get(`/types/${persistedGoodType.id}`)
        .send()
        .expect(200, toJSON(persistedGoodType));
    });

    it('returns 404 when getting a Good Type that does not exist', () => {
      return client.get('/category/99999').expect(404);
    });

    it('replaces the Good Category by ID', async () => {
      const updatedGoodType = givenGoodType({
        name: 'DO SOMETHING AWESOME',
        status: 0,
      });
      await client
        .put(`/types/${persistedGoodType.id}`)
        .send(updatedGoodType)
        .expect(204);
      const result = await goodTypeRepo.findById(persistedGoodType.id);
      const {id: _, ...updatedGoodCategoryBody} = updatedGoodType;
      expect(result).to.containEql(updatedGoodCategoryBody);
    });

    it('returns 404 when replacing a Good Type that does not exist', () => {
      return client.put('/types/99999').send(givenGoodType()).expect(404);
    });

    it('updates the Good Type by ID ', async () => {
      const updatedGoodType = givenGoodType({
        name: 'DO SOMETHING AWESOME',
        status: 1,
      });
      await client
        .patch(`/types/${persistedGoodType.id}`)
        .send(updatedGoodType)
        .expect(204);
      const result = await goodTypeRepo.findById(persistedGoodType.id);
      expect(result.name).to.be.equal(updatedGoodType.name);
      expect(result.status).to.be.equal(updatedGoodType.status);
    });

    it('returns 404 when updating a Good Type that does not exist', () => {
      return client
        .patch('/types/99999')
        .send(givenGoodType({status: 1}))
        .expect(404);
    });
  });

  it('queries Good Type with a filter', async () => {
    await givenGoodTypeInstance({name: 'wake up', status: 1});
    await delay(1000);
    const goodTypeInProgress = await givenGoodTypeInstance({
      name: 'go to sleep',
      status: 0,
    });

    await client
      .get('/types')
      .query({filter: {where: {status: 0}}})
      .expect(200, [toJSON(goodTypeInProgress)]);
  });

  context('When executing Good Type transactions on the ledger', () => {
    let persistedGoodType: GoodType;
    let contract: ethers.Contract;

    before('initialize contract', async () => {
      contract = givenProofOfGoodLedger();
    });

    beforeEach(async () => {
      persistedGoodType = await givenGoodTypeInstance(givenGoodType());
    });

    it('can add a new Good Type', async () => {
      const goodTypeOnLedger = await contract.goodTypes(persistedGoodType.id);
      console.log('goodTypeOnLedger:', goodTypeOnLedger);
      console.log('persistedGoodType:', persistedGoodType);
      expect(goodTypeOnLedger.name).to.equal(persistedGoodType.name);
      expect(goodTypeOnLedger.status).to.equal(persistedGoodType.status);
    });

    it('can update a Good Type', async () => {
      const updatedGoodType = new GoodType({
        name: Math.random().toString(16).substring(2, 10),
        status: 1,
      });

      await client
        .put(`/types/${persistedGoodType.id}`)
        .send(updatedGoodType)
        .expect(204);

      const goodTypeArgs = await contract.goodTypes(persistedGoodType.id);

      const goodTypeOnLedger = new GoodType({
        id: goodTypeArgs.id,
        name: goodTypeArgs.name,
        status: goodTypeArgs.status,
      });

      const result = await goodTypeRepo.findById(persistedGoodType.id);

      expect(result).to.containDeep(goodTypeOnLedger);

      delete goodTypeOnLedger.id;
      delete updatedGoodType.id;

      expect(goodTypeOnLedger).to.containDeep(updatedGoodType);
    });

    it('can update only the name of the Type', async () => {
      const updatedGoodType = givenGoodType({
        name: Math.random().toString(16).substring(2, 10),
      });

      await client
        .put(`/types/${persistedGoodType.id}`)
        .send(updatedGoodType)
        .expect(204);

      const goodTypeArgs = await contract.goodTypes(persistedGoodType.id);

      const goodTypeOnLedger = new GoodType({
        id: goodTypeArgs.id,
        name: goodTypeArgs.name,
        status: goodTypeArgs.status,
      });

      const result = await goodTypeRepo.findById(persistedGoodType.id);

      expect(result).to.containDeep(goodTypeOnLedger);

      delete goodTypeOnLedger.id;
      delete updatedGoodType.id;

      expect(goodTypeOnLedger).to.containDeep(updatedGoodType);
    });

    it('can update only the status of the Oracle', async () => {
      const updatedGoodType = givenGoodType({
        status: 2,
      });

      await client
        .put(`/types/${persistedGoodType.id}`)
        .send(updatedGoodType)
        .expect(204);

      const goodTypeArgs = await contract.goodTypes(persistedGoodType.id);

      const goodTypeOnLedger = new GoodType({
        id: goodTypeArgs.id,
        name: goodTypeArgs.name,
        status: goodTypeArgs.status,
      });

      const result = await goodTypeRepo.findById(persistedGoodType.id);

      expect(result).to.containDeep(goodTypeOnLedger);

      delete goodTypeOnLedger.id;
      delete updatedGoodType.id;

      expect(goodTypeOnLedger).to.containDeep(updatedGoodType);
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

  async function givenGoodTypeRepository() {
    goodTypeRepo = await app.getRepository(GoodTypeRepository);
  }

  async function givenGoodTypeInstance(goodType?: Partial<GoodType>) {
    const response = await client
      .post(`/types`)
      .send(givenGoodType(goodType))
      .expect(200);

    return response.body;
  }
});
