import {
  Client, expect, toJSON
} from '@loopback/testlab';
import {PogApiApplication} from '../../application';
import {GoodOracle} from '../../models';
import {GoodOracleRepository} from '../../repositories';
import {
  delay,
  givenGoodOracle,
  givenRunningApplicationWithCustomConfiguration
} from './test-helper';

describe('PogApiApplication - Oracle', () => {
  let app: PogApiApplication;
  let client: Client;
  let goodOracleRepo: GoodOracleRepository;

  before('setupApplication', async () => {
    ({app, client} = await givenRunningApplicationWithCustomConfiguration());
  });
  after(() => app.stop());

  before(givenGoodOracleRepository);
  beforeEach(async () => {
    await goodOracleRepo.deleteAll();
  });

  it('creates a Good Oracle', async function () {
    const goodOracle = givenGoodOracle();
    const response = await client
      .post('/oracle')
      .send(goodOracle)
      .expect(200);
    expect(response.body).to.containDeep(goodOracle);
    const result = await goodOracleRepo.findById(response.body.id);
    expect(result).to.containDeep(goodOracle);
  });

  context('when dealing with a single persisted Good Category', () => {
    let persistedGoodOracle: GoodOracle;

    beforeEach(async () => {
      persistedGoodOracle = await givenGoodOracleInstance();
    });

    it('gets a Good Oracle by ID', () => {
      return client
        .get(`/oracle/${persistedGoodOracle.id}`)
        .send()
        .expect(200, toJSON(persistedGoodOracle));
    });

    it('returns 404 when getting a Good Oracle that does not exist', () => {
      return client.get('/oracle/99999').expect(404);
    });

    it('replaces the Good Oracle by ID', async () => {
      const updatedGoodOracle = givenGoodOracle({
        name: 'DO SOMETHING AWESOME',
        deleted: false,
      });
      await client
        .put(`/oracle/${persistedGoodOracle.id}`)
        .send(updatedGoodOracle)
        .expect(204);
      const result = await goodOracleRepo.findById(persistedGoodOracle.id);
      const {id, ...updatedGoodOracleBody} = updatedGoodOracle;
      expect(result).to.containEql(updatedGoodOracleBody);
    });

    it('returns 204 when replacing a Good Oracle that does not exist', () => {
      return client
        .put('/oracle/99999')
        .send(givenGoodOracle())
        .expect(204);
    });

    it('updates the Good Oracle by ID ', async () => {
      const updatedGoodOracle = givenGoodOracle({
        name: 'DO SOMETHING AWESOME',
        deleted: true,
      });
      await client
        .patch(`/oracle/${persistedGoodOracle.id}`)
        .send(updatedGoodOracle)
        .expect(204);
      const result = await goodOracleRepo.findById(persistedGoodOracle.id);
      expect(result.name).to.be.equal(updatedGoodOracle.name);
      expect(result.deleted).to.be.equal(updatedGoodOracle.deleted);
    });

    it('returns 204 when updating a Good Oracle that does not exist', () => {
      return client
        .patch('/oracle/99999')
        .send(givenGoodOracle({deleted: true}))
        .expect(204);
    });

  });

  it('queries Good Oracle with a filter', async () => {
    await givenGoodOracleInstance({name: 'wake up', deleted: true});
    await delay(1000);
    const goodOracleInProgress = await givenGoodOracleInstance({
      name: 'go to sleep',
      deleted: false,
    });

    await client
      .get('/oracle')
      .query({filter: {where: {deleted: false}}})
      .expect(200, [toJSON(goodOracleInProgress)]);
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

  async function givenGoodOracleRepository() {
    goodOracleRepo = await app.getRepository(GoodOracleRepository);
  }

  async function givenGoodOracleInstance(goodOracle?: Partial<GoodOracle>) {
    return goodOracleRepo.create(givenGoodOracle(goodOracle));
  }
});
