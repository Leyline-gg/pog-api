import {Client, expect, toJSON} from '@loopback/testlab';
import {ethers, Wallet} from 'ethers';
import {PogApiApplication} from '../../../application';
import {GoodOracle, OracleApiKey} from '../../../models';
import {AuthRepository, GoodOracleRepository} from '../../../repositories';
import {
  delay,
  givenGoodOracle,
  givenProofOfGoodLedger,
  givenRunningApplicationWithCustomConfiguration,
} from '../test-helper';

const oracleAdmin = new GoodOracle({id: 1, name: 'SYSTEM'});
const authInitia = new OracleApiKey({
  apikey: '1234',
  oracleId: 1,
});
const headers = {
  Authorization: 'Bearer 1234',
};

describe('PogApiApplication - Oracle', () => {
  let app: PogApiApplication;
  let client: Client;
  let goodOracleRepo: GoodOracleRepository;
  let authRepo: AuthRepository;

  before('setupApplication', async () => {
    ({app, client} = await givenRunningApplicationWithCustomConfiguration());
  });
  after(() => app.stop());

  before(givenGoodOracleRepository);
  before(givenAuthRepository);
  beforeEach(async () => {
    await goodOracleRepo.deleteAll();
    await authRepo.deleteAll();
    await goodOracleRepo.create(oracleAdmin);
    await authRepo.create(authInitia);
  });

  it('creates a Good Oracle', async function () {
    const goodOracle = givenGoodOracle({
      wallet: Wallet.createRandom().address.toLowerCase(),
    });
    const response = await client
      .post('/oracle')
      .set(headers)
      .send(goodOracle)
      .expect(200);
    delete goodOracle.id;
    expect(response.body).to.containDeep(goodOracle);
    const result = await goodOracleRepo.findById(response.body.id);
    expect(result).to.containDeep(goodOracle);
  });

  context('when dealing with a single persisted Good Oracle', () => {
    let persistedGoodOracle: GoodOracle;
    let oracleWallet: string;
    beforeEach(async () => {
      oracleWallet = Wallet.createRandom().address.toLowerCase();
      persistedGoodOracle = await givenGoodOracleInstance(
        givenGoodOracle({wallet: oracleWallet}),
      );
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
        name: Math.random().toString(16).substring(2, 10),
        status: 1,
      });
      await client
        .put(`/oracle/${persistedGoodOracle.id}`)
        .set(headers)
        .send(updatedGoodOracle)
        .expect(204);
      const result = await goodOracleRepo.findById(persistedGoodOracle.id);
      const {id: _, ...updatedGoodOracleBody} = updatedGoodOracle;
      expect(result).to.containEql(updatedGoodOracleBody);
    });

    it('returns 404 when replacing a Good Oracle that does not exist', () => {
      return client
        .put('/oracle/99999')
        .set(headers)
        .send(givenGoodOracle())
        .expect(404);
    });

    it('updates the Good Oracle by ID ', async () => {
      const updatedGoodOracle = givenGoodOracle({
        name: Math.random().toString(16).substring(2, 10),
        status: 0,
      });
      await client
        .patch(`/oracle/${persistedGoodOracle.id}`)
        .set(headers)
        .send(updatedGoodOracle)
        .expect(204);
      const result = await goodOracleRepo.findById(persistedGoodOracle.id);
      expect(result.name).to.be.equal(updatedGoodOracle.name);
      expect(result.status).to.be.equal(updatedGoodOracle.status);
    });

    it('returns 404 when updating a Good Oracle that does not exist', () => {
      return client
        .patch('/oracle/99999')
        .set(headers)
        .send(givenGoodOracle({status: 0}))
        .expect(404);
    });
  });

  it('queries Good Oracle with a filter', async () => {
    await givenGoodOracleInstance(
      givenGoodOracle({
        name: Math.random().toString(16).substring(2, 10),
        status: 0,
        wallet: Wallet.createRandom().address,
      }),
    );
    await delay(1000);
    const goodOracleInProgress = await givenGoodOracleInstance(
      givenGoodOracle({
        name: Math.random().toString(16).substring(2, 10),
        status: 1,
        wallet: Wallet.createRandom().address,
      }),
    );

    await client
      .get('/oracle')
      .query({filter: {where: {status: 1}}})
      .expect(200, [toJSON(goodOracleInProgress)]);
  });

  context('When executing Good Oracle transactions on the ledger', () => {
    let persistedGoodOracle: GoodOracle;
    let contract: ethers.Contract;

    before('initialize contract', async () => {
      contract = givenProofOfGoodLedger();
    });

    beforeEach(async () => {
      persistedGoodOracle = await givenGoodOracleInstance(
        givenGoodOracle({wallet: Wallet.createRandom().address}),
      );
    });

    it('can add a new Good Oracle', async () => {
      const goodOracleArgs = await contract.getGoodOracle(
        persistedGoodOracle.id,
      );

      const goodOracleOnLedger = new GoodOracle({
        id: goodOracleArgs.id.toNumber(),
        name: goodOracleArgs.name,
        status: goodOracleArgs.status,
        goodOracleURI: goodOracleArgs.goodOracleURI,
        approvedActivityIdArray: goodOracleArgs.approvedActivityIdArray.map(
          (id: ethers.BigNumber) => id.toNumber(),
        ),
      });

      const result = await goodOracleRepo.findById(persistedGoodOracle.id);

      expect(result).to.containDeep(goodOracleOnLedger);
    });

    it('can update a Good Oracle', async () => {
      const updatedGoodOracle = new GoodOracle({
        name: Math.random().toString(16).substring(2, 10),
        status: 1,
        approvedActivityIdArray: [1, 2, 3],
        goodOracleURI: 'loremipsum.gg',
      });

      await client
        .put(`/oracle/${persistedGoodOracle.id}`)
        .set(headers)
        .send(updatedGoodOracle)
        .expect(204);

      const goodOracleArgs = await contract.getGoodOracle(
        persistedGoodOracle.id,
      );

      const goodOracleOnLedger = new GoodOracle({
        id: goodOracleArgs.id.toNumber(),
        name: goodOracleArgs.name,
        status: goodOracleArgs.status,
        goodOracleURI: goodOracleArgs.goodOracleURI,
        approvedActivityIdArray: goodOracleArgs.approvedActivityIdArray.map(
          (id: ethers.BigNumber) => id.toNumber(),
        ),
      });

      const result = await goodOracleRepo.findById(persistedGoodOracle.id);

      expect(result).to.containDeep(goodOracleOnLedger);

      delete goodOracleOnLedger.id;
      delete updatedGoodOracle.id;

      expect(goodOracleOnLedger).to.containDeep(updatedGoodOracle);
    });

    it('can update only the name of the Oracle', async () => {
      const updatedGoodOracle = givenGoodOracle({
        name: Math.random().toString(16).substring(2, 10),
      });

      await client
        .put(`/oracle/${persistedGoodOracle.id}`)
        .set(headers)
        .send(updatedGoodOracle)
        .expect(204);

      const goodOracleArgs = await contract.getGoodOracle(
        persistedGoodOracle.id,
      );

      const goodOracleOnLedger = new GoodOracle({
        id: goodOracleArgs.id.toNumber(),
        name: goodOracleArgs.name,
        status: goodOracleArgs.status,
        goodOracleURI: goodOracleArgs.goodOracleURI,
        approvedActivityIdArray: goodOracleArgs.approvedActivityIdArray.map(
          (id: ethers.BigNumber) => id.toNumber(),
        ),
      });

      const result = await goodOracleRepo.findById(persistedGoodOracle.id);

      expect(result).to.containDeep(goodOracleOnLedger);

      delete goodOracleOnLedger.id;
      delete updatedGoodOracle.id;

      expect(goodOracleOnLedger).to.containDeep(updatedGoodOracle);
    });

    it('can update only the status of the Oracle', async () => {
      const updatedGoodOracle = givenGoodOracle({
        status: 2,
      });

      await client
        .put(`/oracle/${persistedGoodOracle.id}`)
        .set(headers)
        .send(updatedGoodOracle)
        .expect(204);

      const goodOracleArgs = await contract.getGoodOracle(
        persistedGoodOracle.id,
      );

      const goodOracleOnLedger = new GoodOracle({
        id: goodOracleArgs.id.toNumber(),
        name: goodOracleArgs.name,
        status: goodOracleArgs.status,
        goodOracleURI: goodOracleArgs.goodOracleURI,
        approvedActivityIdArray: goodOracleArgs.approvedActivityIdArray.map(
          (id: ethers.BigNumber) => id.toNumber(),
        ),
      });

      const result = await goodOracleRepo.findById(persistedGoodOracle.id);

      expect(result).to.containDeep(goodOracleOnLedger);

      delete goodOracleOnLedger.id;
      delete updatedGoodOracle.id;

      expect(goodOracleOnLedger).to.containDeep(updatedGoodOracle);
    });

    it('can update only the good oracle URI of the Oracle', async () => {
      const updatedGoodOracle = givenGoodOracle({
        goodOracleURI: 'urichange.io',
      });

      await client
        .put(`/oracle/${persistedGoodOracle.id}`)
        .set(headers)
        .send(updatedGoodOracle)
        .expect(204);

      const goodOracleArgs = await contract.getGoodOracle(
        persistedGoodOracle.id,
      );

      const goodOracleOnLedger = new GoodOracle({
        id: goodOracleArgs.id.toNumber(),
        name: goodOracleArgs.name,
        status: goodOracleArgs.status,
        goodOracleURI: goodOracleArgs.goodOracleURI,
        approvedActivityIdArray: goodOracleArgs.approvedActivityIdArray.map(
          (id: ethers.BigNumber) => id.toNumber(),
        ),
      });

      const result = await goodOracleRepo.findById(persistedGoodOracle.id);

      expect(result).to.containDeep(goodOracleOnLedger);

      delete goodOracleOnLedger.id;
      delete updatedGoodOracle.id;

      expect(goodOracleOnLedger).to.containDeep(updatedGoodOracle);
    });

    it('can update only the approved activities of the Oracle', async () => {
      const updatedGoodOracle = givenGoodOracle({
        approvedActivityIdArray: [5, 6, 7],
      });

      await client
        .put(`/oracle/${persistedGoodOracle.id}`)
        .set(headers)
        .send(updatedGoodOracle)
        .expect(204);

      const goodOracleArgs = await contract.getGoodOracle(
        persistedGoodOracle.id,
      );

      const goodOracleOnLedger = new GoodOracle({
        id: goodOracleArgs.id.toNumber(),
        name: goodOracleArgs.name,
        status: goodOracleArgs.status,
        goodOracleURI: goodOracleArgs.goodOracleURI,
        approvedActivityIdArray: goodOracleArgs.approvedActivityIdArray.map(
          (id: ethers.BigNumber) => id.toNumber(),
        ),
      });

      const result = await goodOracleRepo.findById(persistedGoodOracle.id);

      expect(result).to.containDeep(goodOracleOnLedger);

      delete goodOracleOnLedger.id;
      delete updatedGoodOracle.id;

      expect(goodOracleOnLedger).to.containDeep(updatedGoodOracle);
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

  async function givenGoodOracleRepository() {
    goodOracleRepo = await app.getRepository(GoodOracleRepository);
  }

  async function givenAuthRepository() {
    authRepo = await app.getRepository(AuthRepository);
  }

  async function givenGoodOracleInstance(goodOracle?: Partial<GoodOracle>) {
    const response = await client
      .post(`/oracle`)
      .set(headers)
      .send(goodOracle)
      .expect(200);

    return response.body;
  }
});
