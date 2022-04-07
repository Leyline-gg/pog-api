import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {ethers} from 'ethers';
import ProofOfGoodLedger from '../abi/ProofOfGoodLedger';
import {GoodOracle} from '../models';

@injectable({scope: BindingScope.TRANSIENT})
export class ProofOfGoodSmartContractService {
  secret: string;
  address: string;
  provider: ethers.providers.JsonRpcProvider;
  signer: ethers.Wallet;
  contract: ethers.Contract;

  constructor(/* Add @inject to inject parameters */) {
    this.secret =
      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
    this.address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    this.provider = new ethers.providers.JsonRpcProvider(
      'http://localhost:8545',
    );

    this.signer = new ethers.Wallet(this.secret, this.provider);
    this.contract = new ethers.Contract(
      this.address,
      ProofOfGoodLedger.abi,
      this.provider,
    ).connect(this.signer);
  }

  async addGoodOracle(oracle: Partial<GoodOracle>) {
    console.log(oracle);
    const oracleData = Object.assign(oracle, {
      id: 0,
    });
    const txResponse = await this.contract.addGoodOracle(oracleData);
    const receipt = await txResponse.wait();
    const events = receipt.events;
    console.log(receipt);
    return events[0].args.slice(0, 5);
  }

  async updateGoodOracle(oracle: Partial<GoodOracle>) {
    const {id, goodOracleURI, status, approvedActivityIdArray} = oracle;
    try {
      const txResponse = await this.contract.updateGoodOracle(
        id,
        goodOracleURI,
        status,
        approvedActivityIdArray,
      );
      const receipt = await txResponse.wait();
      const events = receipt.events;
      console.log(events);
      return events[0].args.slice(0, 5);
    } catch (err) {
      console.log(err);
    } finally {
      return;
    }
  }

  async updateGoodOracleName(goodOracleId: number, name: string) {
    try {
      const txResponse = await this.contract.updateGoodOracleName(
        goodOracleId,
        name,
      );
      const receipt = await txResponse.wait();
      const events = receipt.events;
      console.log(events);
      return events[0].args.slice(0, 5);
    } catch (err) {
      console.log('something');
    } finally {
      return;
    }
  }
}
