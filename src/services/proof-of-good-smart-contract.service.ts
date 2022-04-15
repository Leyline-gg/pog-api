import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {ethers} from 'ethers';
import ProofOfGoodLedger from '../abi/ProofOfGoodLedger';
import {GoodActivity, GoodCategory, GoodOracle, GoodType} from '../models';

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
    let attempt: number = 0;
    const response = await ethers.utils.poll(
      async () => {
        attempt++;
        console.log('Transaction attempt:', attempt);
        let txResponse: any;
        if (crudOperation == 'post') {
          Object.assign(data, {id: 0});
        }
        switch (true) {
          case data instanceof GoodOracle:
            console.log('Incoming Oracle data: ', crudOperation, data);
            if (crudOperation == 'post') {
              txResponse = await this.contract.addGoodOracle(data);
            } else {
              const oracle = new GoodOracle(data);
              txResponse = await this.contract.updateGoodOracle(
                oracle.id,
                oracle.name,
                oracle.goodOracleURI,
                oracle.status,
                oracle.approvedActivityIdArray,
              );
            }
            break;

          case data instanceof GoodCategory:
            console.log('Incoming category data:', crudOperation, data);
            txResponse = await this.contract.addOrUpdateGoodCategory(
              data.id,
              data.name,
              data.status,
            );
            break;

          case data instanceof GoodType:
            console.log('Incoming Good Type data:', crudOperation, data);
            txResponse = await this.contract.addOrUpdateGoodType(
              data.id,
              data.name,
              data.status,
            );
            break;

          case data instanceof GoodActivity:
            console.log('Incoming Good Activity data:', crudOperation, data);
            txResponse = await this.contract.addOrUpdateGoodActivity(data);
            break;
        }

        const receipt = await txResponse.wait();
        const events = receipt.events;

        if (events) console.log('Events Args:', events[0].args);
        return events[0].args;
      },
      {retryLimit: 5, interval: 5000},
    );
    return response;
  }
}
