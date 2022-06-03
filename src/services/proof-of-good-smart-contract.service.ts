import {NonceManager} from '@ethersproject/experimental';
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
  | Partial<GoodActivity>
  | Partial<GoodEntry>;
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
    ).connect(new NonceManager(this.signer));
  }

  async updateLedger(crudOperation: string, data: InputModel) {
    let attempt = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let response: any;
    try {
      response = await ethers.utils.poll(
        async () => {
          attempt++;
          console.log('Transaction attempt:', attempt);
          let txResponse;
          let eventName: string;
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
              eventName = 'GoodOracleUpdated';
              break;

            case data instanceof GoodCategory:
              txResponse = await this.contract.addOrUpdateGoodCategory(
                (data as GoodCategory).id,
                (data as GoodCategory).name,
                (data as GoodCategory).status,
              );
              eventName = 'GoodCategoryUpdated';
              break;

            case data instanceof GoodType:
              txResponse = await this.contract.addOrUpdateGoodType(
                (data as GoodType).id,
                (data as GoodType).name,
                (data as GoodType).status,
              );
              eventName = 'GoodTypeUpdated';
              break;

            case data instanceof GoodActivity:
              txResponse = await this.contract.addOrUpdateGoodActivity(data);
              eventName = 'GoodActivityUpdated';
              break;

            case data instanceof GoodEntry:
              txResponse = await this.contract.createProofOfGoodEntry(data);
              eventName = 'ProofOfGoodEntryCreated';
              break;
          }

          const receipt = await txResponse.wait();
          const events = receipt.events;

          if (events) {
            console.log('Events Args:', events);
          }
          return events.find(
            (event: ethers.Event) => event?.event === eventName,
          ).args;
        },
        {retryLimit: 5, interval: 5000},
      );
    } catch (error) {
      console.error(error);
    }
    return response;
  }

  async updateProfile(contractFunction: string, data: Record<string, unknown>) {
    let attempt = 0;
    let response: any;
    try {
      response = await ethers.utils.poll(
        async () => {
          attempt++;
          console.log('Transaction attempt:', attempt);
          let txResponse;
          let eventName: string;
          switch (true) {
            case contractFunction == 'associateWalletAddressToUserId':
              if (data?.walletAddress && data?.userId) {
                txResponse = await this.contract.associateWalletAddressToUserId(
                  data.walletAddress,
                  data.userId,
                );
                eventName = 'WalletAddedToProfile';
              }
              break;

            case contractFunction == 'mergeProfiles':
              if (data?.toUserId && data?.fromUserId) {
                txResponse = await this.contract.mergeProfiles(
                  data.toUserId,
                  data.fromUserId,
                );
                eventName = 'ProfilesMerged';
              }
              break;
          }

          const receipt = await txResponse.wait();
          const events = receipt.events;
          if (events) {
            console.log('Events Args:', events);
          }
          return events.find(
            (event: ethers.Event) => event?.event === eventName,
          ).args;
        },
        {retryLimit: 5, interval: 5000},
      );
    } catch (error) {
      console.error(error);
    }
    return response;
  }
}
