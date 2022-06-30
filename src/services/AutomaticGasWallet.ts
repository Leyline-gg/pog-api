import {Provider, TransactionRequest} from '@ethersproject/abstract-provider';
import {ExternallyOwnedAccount} from '@ethersproject/abstract-signer';
import {BytesLike} from '@ethersproject/bytes';
import {Deferrable} from '@ethersproject/properties';
import {SigningKey} from '@ethersproject/signing-key';
import fetch from 'cross-fetch';
import {ethers, Wallet as EthersWallet} from 'ethers';

type GasData = {
  fast: {
    maxPriorityFee: number;
    maxFee: number;
  };
};

const DEFAULT_GAS_DATA: GasData = {
  fast: {
    maxPriorityFee: 40,
    maxFee: 40,
  },
};

class AutomaticGasWallet extends EthersWallet {
  gasStationUrl: string;

  constructor(
    privateKey: BytesLike | ExternallyOwnedAccount | SigningKey,
    provider: Provider,
    gasStationUrl: string,
  ) {
    super(privateKey, provider);
    this.gasStationUrl = gasStationUrl;
  }

  async populateTransaction(
    transaction: Deferrable<TransactionRequest>,
  ): Promise<TransactionRequest> {
    const tx = await super.populateTransaction(transaction);

    const data = await this.getGasData();
    const maxFee = ethers.utils.parseUnits(
      Math.ceil(data.fast.maxFee).toString(),
      'gwei',
    );
    const maxPriorityFee = ethers.utils.parseUnits(
      Math.ceil(data.fast.maxPriorityFee).toString(),
      'gwei',
    );

    tx.maxFeePerGas = maxFee;
    tx.maxPriorityFeePerGas = maxPriorityFee;

    return tx;
  }

  async getGasData(): Promise<GasData> {
    if (!this.gasStationUrl) {
      return DEFAULT_GAS_DATA;
    }

    try {
      const response = await fetch(this.gasStationUrl);
      const data = (await response.json()) as GasData;
      return data;
    } catch (e) {
      console.error(
        `Could not fetch gas data from ${this.gasStationUrl}: ${e.toString()}`,
      );
      return DEFAULT_GAS_DATA;
    }
  }
}

export default AutomaticGasWallet;
