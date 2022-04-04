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
      'http://127.0.0.1:8545',
    );

    this.signer = new ethers.Wallet(this.secret, this.provider);
    this.contract = new ethers.Contract(
      this.address,
      ProofOfGoodLedger.abi,
      this.provider,
    ).connect(this.signer);
  }

  async addGoodOracle(oracle: GoodOracle) {
    const {id, name, goodOracleURI} = oracle;
    const status = 0;
    const approvedActivityIdArray: number[] = [];
    try {
      const txResponse = await this.contract.addGoodOracle({
        id,
        name,
        goodOracleURI,
        status,
        approvedActivityIdArray,
      });
      const receipt = await txResponse.wait();
      const events = receipt.events;
      console.log(events);
    } catch (err) {
      console.log('Woops', err);
    }
  }

  updateGoodOracle(
    goodOracleId: number,
    uri: string,
    status: number,
    approvedActivityIdArray: number[],
  ) {
    this.contract.updateGoodOracle(
      goodOracleId,
      uri,
      status,
      approvedActivityIdArray,
    );
  }

  updateGoodOracleName(goodOracleId: number, name: string) {
    this.contract.updateGoodOracleName(goodOracleId, name);
  }
  updateGoodOracleUser(address: string, goodOracleId: number, active: boolean) {
    this.contract.updateGoodOracleName(address, goodOracleId, active);
  }
}
