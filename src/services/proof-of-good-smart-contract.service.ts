import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {ethers} from 'ethers';
import ProofOfGoodLedger from '../abi/ProofOfGoodLedger';
import {
  GoodActivity,
  GoodCategory,
  GoodEntry,
  GoodOracle,
  GoodType,
} from '../models';

type InputModel =
  | Partial<GoodOracle>
  | Partial<GoodCategory>
  | Partial<GoodType>
  | Partial<GoodActivity>;
@injectable({scope: BindingScope.TRANSIENT})
export class ProofOfGoodSmartContractService {
  secret: string;
  address: string;
  provider: ethers.providers.JsonRpcProvider;
  signer: ethers.Wallet;
  contract: ethers.Contract;

  constructor(/* Add @inject to inject parameters */) {
    this.secret = `${process.env.SIGNER_SECRET}`;
    this.address = `${process.env.POG_LEDGER_CONTRACT_ADDRESS}`;
    this.provider = new ethers.providers.JsonRpcProvider(
      `${process.env.RPC_PROVIDER}`,
    );

    this.signer = new ethers.Wallet(this.secret, this.provider);
    this.contract = new ethers.Contract(
      this.address,
      ProofOfGoodLedger.abi,
      this.provider,
    ).connect(this.signer);
  }

  async updateLedger(crudOperation: string, data: InputModel) {
    let attempt = 0;
    const response = await ethers.utils.poll(
      async () => {
        attempt++;
        console.log('Transaction attempt:', attempt);
        let txResponse;
        if (crudOperation === 'post') {
          Object.assign(data, {id: 0});
        }
        console.log('Incoming data: ', crudOperation, data);
        switch (true) {
          case data instanceof GoodOracle:
            if (crudOperation === 'post') {
              txResponse = await this.contract.addOrUpdateGoodOracle(data);
            } else {
              const oracle = new GoodOracle(data);
              txResponse = await this.contract.addOrUpdateGoodOracle(oracle);
            }
            break;

          case data instanceof GoodCategory:
            txResponse = await this.contract.addOrUpdateGoodCategory(
              data.id,
              data.name,
              data.status,
            );
            break;

          case data instanceof GoodType:
            txResponse = await this.contract.addOrUpdateGoodType(
              data.id,
              data.name,
              data.status,
            );
            break;

          case data instanceof GoodActivity:
            txResponse = await this.contract.addOrUpdateGoodActivity(data);
            break;

          case data instanceof GoodEntry:
            txResponse = await this.contract.createProofOfGoodEntry(data);
            break;
        }

        const receipt = await txResponse.wait();
        const events = receipt.events;

        // if (events) console.log('Events Args:', events[0].args);
        return events[0].args;
      },
      {retryLimit: 5, interval: 5000},
    );
    return response;
  }

  async getProfileByUserId(userId: string) {
    return await this.contract.profileByUserId(userId);
  }

  async getUserIdFromEmail(email: string) {
    const emailHash = ethers.utils.id(email);
    return await this.contract.userByEmailHash(emailHash);
  }

  async getUserIdFromAddress(doGooder: string) {
    return await this.contract.profileByWallet(doGooder);
  }
}
