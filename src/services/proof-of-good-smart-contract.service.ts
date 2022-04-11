import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {ethers} from 'ethers';
import ProofOfGoodLedger from '../abi/ProofOfGoodLedger';
import {GoodCategory, GoodOracle, GoodType} from '../models';

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
    const oracleData = Object.assign(oracle, {
      id: 0,
    });
    const response = await ethers.utils.poll(
      async () => {
        const txResponse = await this.contract.addGoodOracle(oracleData);
        const receipt = await txResponse.wait();
        const events = receipt.events;
        console.log(receipt);
        return events[0].args.slice(0, 5);
      },
      {retryLimit: 5, interval: 5000},
    );
    console.log('Response:', response);
    return response;
  }

  async updateGoodOracle(oracle: Partial<GoodOracle>) {
    const {id, name, goodOracleURI, status, approvedActivityIdArray} = oracle;

    console.log(`Updating oracle ${id} with properties:`);
    if (goodOracleURI) console.log('- goodOracleURI:', goodOracleURI);
    if (status || status == 0) console.log('- status:', status);
    if (approvedActivityIdArray)
      console.log('- approvedActivityIdArray:', approvedActivityIdArray);

    let attempt: number = 0;
    const response = await ethers.utils.poll(
      async () => {
        attempt++;
        console.log('Transaction attempt:', attempt);
        const txResponse = await this.contract.updateGoodOracle(
          id,
          name,
          goodOracleURI,
          status,
          approvedActivityIdArray,
        );

        const receipt = await txResponse.wait();
        const events = receipt.events;

        if (events) console.log('Events:', events);
        return events[0].args.slice(0, 5);
      },
      {retryLimit: 5, interval: 5000},
    );
    console.log('Response:', response);
    return response;
  }

  async addGoodCategory(goodCategory: Partial<GoodCategory>) {
    const goodCategoryData = Object.assign(goodCategory, {
      id: 0,
    });

    let attempt: number = 0;
    const response = await ethers.utils.poll(
      async () => {
        attempt++;
        console.log('Transaction attempt:', attempt);
        // function doesn't exist on smart contract yet
        const txResponse = await this.contract.addGoodCategory(
          goodCategoryData,
        );

        const receipt = await txResponse.wait();
        const events = receipt.events;

        if (events) console.log('Events:', events);
        return events[0].args.slice(0, 3);
      },
      {retryLimit: 5, interval: 5000},
    );
    console.log('Response:', response);
    return response;
  }

  async updateGoodCategory(goodCategory: Partial<GoodCategory>) {
    const {id, name, status} = goodCategory;

    let attempt: number = 0;
    const response = await ethers.utils.poll(
      async () => {
        attempt++;
        console.log('Transaction attempt:', attempt);
        // function doesn't exist on smart contract yet
        const txResponse = await this.contract.updateGoodCategory(
          id,
          name,
          status,
        );

        const receipt = await txResponse.wait();
        const events = receipt.events;

        if (events) console.log('Events:', events);
        return events[0].args.slice(0, 3);
      },
      {retryLimit: 5, interval: 5000},
    );
    console.log('Response:', response);
    return response;
  }

  async addGoodType(goodType: Partial<GoodType>) {
    const goodTypeData = Object.assign(goodType, {
      id: 0,
    });

    let attempt: number = 0;
    const response = await ethers.utils.poll(
      async () => {
        attempt++;
        console.log('Transaction attempt:', attempt);
        // function doesn't exist on smart contract yet
        const txResponse = await this.contract.addGoodType(goodTypeData);

        const receipt = await txResponse.wait();
        const events = receipt.events;

        if (events) console.log('Events:', events);
        return events[0].args.slice(0, 3);
      },
      {retryLimit: 5, interval: 5000},
    );
    console.log('Response:', response);
    return response;
  }

  async updateGoodType(goodType: Partial<GoodType>) {
    const {id, name, status} = goodType;

    let attempt: number = 0;
    const response = await ethers.utils.poll(
      async () => {
        attempt++;
        console.log('Transaction attempt:', attempt);
        // function doesn't exist on smart contract yet
        const txResponse = await this.contract.updateGoodType(id, name, status);

        const receipt = await txResponse.wait();
        const events = receipt.events;

        if (events) console.log('Events:', events);
        return events[0].args.slice(0, 3);
      },
      {retryLimit: 5, interval: 5000},
    );
    console.log('Response:', response);
    return response;
  }
}
