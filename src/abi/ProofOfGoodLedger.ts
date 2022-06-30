export default {
  _format: 'hh-sol-artifact-1',
  contractName: 'ProofOfGoodLedger',
  sourceName: 'contracts/ProofOfGoodLedger.sol',
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'approved',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'ApprovalForAll',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'goodTypeIdArray',
          type: 'uint256[]',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'goodCategoryId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'valuePerUnit',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'unitDescription',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
      ],
      name: 'GoodActivityUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
      ],
      name: 'GoodCategoryUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'goodOracleURI',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'approvedActivityIdArray',
          type: 'uint256[]',
        },
      ],
      name: 'GoodOracleUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'doGooder',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'goodCategoryId',
          type: 'uint256',
        },
      ],
      name: 'GoodPointsRedeemed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
      ],
      name: 'GoodTypeUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'mainUserId',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'otherUserId',
          type: 'bytes32',
        },
      ],
      name: 'ProfilesMerged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'doGooder',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'goodActivityId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'goodOracleId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'goodPoints',
          type: 'uint256',
        },
      ],
      name: 'ProofOfGoodEntryBurned',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'doGooder',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'userId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'goodActivityId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'goodOracleId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'imageURL',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'goodPoints',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'units',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'timestamp',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'externalId',
          type: 'bytes32',
        },
      ],
      name: 'ProofOfGoodEntryCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'userId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'goodActivityId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'goodOracleId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'goodPoints',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'goodPointsCapped',
          type: 'uint256',
        },
      ],
      name: 'ProofOfGoodPointsCapped',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'doGooder',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'userId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'emailHash',
          type: 'bytes32',
        },
      ],
      name: 'ProofOfGoodUserCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'walletAddress',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'userId',
          type: 'bytes32',
        },
      ],
      name: 'WalletAddedToProfile',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_admin',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: '_set',
          type: 'bool',
        },
      ],
      name: 'addAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'goodTypeIdArray',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256',
              name: 'goodCategoryId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'valuePerUnit',
              type: 'uint256',
            },
            {
              internalType: 'enum ProofOfGoodLedger.Status',
              name: 'status',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'unitDescription',
              type: 'string',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.GoodActivity',
          name: 'goodActivity',
          type: 'tuple',
        },
      ],
      name: 'addOrUpdateGoodActivity',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_goodCategoryId',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: '_status',
          type: 'uint8',
        },
      ],
      name: 'addOrUpdateGoodCategory',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'wallet',
              type: 'address',
            },
            {
              internalType: 'enum ProofOfGoodLedger.Status',
              name: 'status',
              type: 'uint8',
            },
            {
              internalType: 'uint8',
              name: 'organizationType',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'goodOracleURI',
              type: 'string',
            },
            {
              internalType: 'uint256[]',
              name: 'approvedActivityIdArray',
              type: 'uint256[]',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.GoodOracle',
          name: 'goodOracle',
          type: 'tuple',
        },
      ],
      name: 'addOrUpdateGoodOracle',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_goodTypeId',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: '_status',
          type: 'uint8',
        },
      ],
      name: 'addOrUpdateGoodType',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'admins',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_walletAddress',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: '_userId',
          type: 'bytes32',
        },
      ],
      name: 'associateWalletAddressToUserId',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'burn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'cap',
      outputs: [
        {
          internalType: 'uint64',
          name: 'duration',
          type: 'uint64',
        },
        {
          internalType: 'uint256',
          name: 'goodPoints',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'doGooder',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'emailHash',
              type: 'bytes32',
            },
            {
              internalType: 'bytes32',
              name: 'userId',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'goodActivityId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'goodOracleId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'units',
              type: 'uint256',
            },
            {
              internalType: 'uint64',
              name: 'timestamp',
              type: 'uint64',
            },
            {
              internalType: 'bytes32',
              name: 'externalId',
              type: 'bytes32',
            },
            {
              internalType: 'string',
              name: 'imageURL',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'mediaURL',
              type: 'string',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.ProofOfGoodEntryParams',
          name: 'proofOfGoodEntryParams',
          type: 'tuple',
        },
      ],
      name: 'createProofOfGoodEntry',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'dataURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_account',
          type: 'address',
        },
      ],
      name: 'getAddressCategoryBalances',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'categoryId',
              type: 'uint256',
            },
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'balance',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'totalGood',
                  type: 'uint256',
                },
              ],
              internalType: 'struct ProofOfGoodLedger.Balances',
              name: 'balances',
              type: 'tuple',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.CategoryBalances[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'getApproved',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_goodActivityId',
          type: 'uint256',
        },
      ],
      name: 'getGoodActivity',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'goodTypeIdArray',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256',
              name: 'goodCategoryId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'valuePerUnit',
              type: 'uint256',
            },
            {
              internalType: 'enum ProofOfGoodLedger.Status',
              name: 'status',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'unitDescription',
              type: 'string',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.GoodActivity',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'getGoodOracle',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'wallet',
              type: 'address',
            },
            {
              internalType: 'enum ProofOfGoodLedger.Status',
              name: 'status',
              type: 'uint8',
            },
            {
              internalType: 'uint8',
              name: 'organizationType',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'goodOracleURI',
              type: 'string',
            },
            {
              internalType: 'uint256[]',
              name: 'approvedActivityIdArray',
              type: 'uint256[]',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.GoodOracle',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'uint64',
              name: 'value',
              type: 'uint64',
            },
          ],
          internalType: 'struct IProofOfGoodLedger.Reference[]',
          name: 'refs',
          type: 'tuple[]',
        },
      ],
      name: 'getLedgerDetails',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'uint64',
              name: 'timestamp',
              type: 'uint64',
            },
            {
              internalType: 'string',
              name: 'userId',
              type: 'string',
            },
            {
              internalType: 'uint16',
              name: 'goodType',
              type: 'uint16',
            },
            {
              internalType: 'uint256',
              name: 'externalId',
              type: 'uint256',
            },
            {
              internalType: 'uint32',
              name: 'orgId',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'units',
              type: 'uint32',
            },
            {
              internalType: 'uint64',
              name: 'value',
              type: 'uint64',
            },
            {
              internalType: 'string',
              name: 'proofURL',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'display',
              type: 'string',
            },
          ],
          internalType: 'struct IProofOfGoodLedger.ProofOfGoodEntryView[]',
          name: 'pogs',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_userId',
          type: 'bytes32',
        },
      ],
      name: 'getUserIdProofOfGoodEntries',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'goodActivityId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'goodOracleId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'units',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'doGooder',
              type: 'address',
            },
            {
              internalType: 'uint64',
              name: 'timestamp',
              type: 'uint64',
            },
            {
              internalType: 'uint256',
              name: 'goodPoints',
              type: 'uint256',
            },
            {
              internalType: 'bytes32',
              name: 'externalId',
              type: 'bytes32',
            },
            {
              internalType: 'string',
              name: 'imageURL',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'mediaURL',
              type: 'string',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.ProofOfGoodEntry[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'goodActivities',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'goodCategoryId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'valuePerUnit',
          type: 'uint256',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'unitDescription',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'goodCategories',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      name: 'goodOracleNames',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'goodOracleUsers',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'goodOracles',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'wallet',
          type: 'address',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
        {
          internalType: 'uint8',
          name: 'organizationType',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'goodOracleURI',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'goodPointsBridgeAddresses',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'goodTypes',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
      ],
      name: 'isApprovedForAll',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxGoodActivityId',
      outputs: [
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxGoodCategoryId',
      outputs: [
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxGoodTypeId',
      outputs: [
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'mUid',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'oUid',
          type: 'bytes32',
        },
      ],
      name: 'mergeProfiles',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'ownerOf',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'profile',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'userId',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'totalGood',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'profileByTokenId',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'userId',
              type: 'bytes32',
            },
            {
              internalType: 'address[]',
              name: 'walletAddresses',
              type: 'address[]',
            },
            {
              internalType: 'uint256',
              name: 'balance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalGood',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'categories',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'entries',
              type: 'uint256[]',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.ProofOfGoodProfile',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'userId',
          type: 'bytes32',
        },
      ],
      name: 'profileByUserId',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'userId',
              type: 'bytes32',
            },
            {
              internalType: 'address[]',
              name: 'walletAddresses',
              type: 'address[]',
            },
            {
              internalType: 'uint256',
              name: 'balance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalGood',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'categories',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'entries',
              type: 'uint256[]',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.ProofOfGoodProfile',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'wallet',
          type: 'address',
        },
      ],
      name: 'profileByWallet',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'userId',
              type: 'bytes32',
            },
            {
              internalType: 'address[]',
              name: 'walletAddresses',
              type: 'address[]',
            },
            {
              internalType: 'uint256',
              name: 'balance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalGood',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'categories',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'entries',
              type: 'uint256[]',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.ProofOfGoodProfile',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_sender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_goodCategoryId',
          type: 'uint256',
        },
      ],
      name: 'redeemGoodPoints',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: '_data',
          type: 'bytes',
        },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_uri',
          type: 'string',
        },
      ],
      name: 'setBaseURI',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_activityId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_goodOracleId',
          type: 'uint256',
        },
        {
          internalType: 'uint64',
          name: '_duration',
          type: 'uint64',
        },
        {
          internalType: 'uint256',
          name: '_points',
          type: 'uint256',
        },
      ],
      name: 'setCap',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'tokenInfo',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'goodActivityId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'goodOracleId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'units',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'doGooder',
              type: 'address',
            },
            {
              internalType: 'uint64',
              name: 'timestamp',
              type: 'uint64',
            },
            {
              internalType: 'uint256',
              name: 'goodPoints',
              type: 'uint256',
            },
            {
              internalType: 'bytes32',
              name: 'externalId',
              type: 'bytes32',
            },
            {
              internalType: 'string',
              name: 'imageURL',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'mediaURL',
              type: 'string',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.ProofOfGoodEntry',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'tokenURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'tokens',
      outputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'goodActivityId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'goodOracleId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'units',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'doGooder',
          type: 'address',
        },
        {
          internalType: 'uint64',
          name: 'timestamp',
          type: 'uint64',
        },
        {
          internalType: 'uint256',
          name: 'goodPoints',
          type: 'uint256',
        },
        {
          internalType: 'bytes32',
          name: 'externalId',
          type: 'bytes32',
        },
        {
          internalType: 'string',
          name: 'imageURL',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'mediaURL',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalGood',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_goodOracleId',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: '_active',
          type: 'bool',
        },
      ],
      name: 'updateGoodOracleUser',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_goodPointsBridgeAddress',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'add',
          type: 'bool',
        },
      ],
      name: 'updateGoodPointsBridgeAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'userByEmailHash',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_account',
          type: 'address',
        },
      ],
      name: 'walletOfOwner',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'walletUser',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  bytecode:
    '0x608060405234801561001057600080fd5b50615fea80620000216000396000f3fe608060405234801561001057600080fd5b50600436106102885760003560e01c806301ffc9a71461028d578063056a305c146102b557806306fdde03146102da578063081812fc146102ef578063095ea7b31461031a5780630c97174f1461032e5780631d3a5d2914610346578063220c7304146103505780632300b38f1461037257806323b872dd146103cf5780632b325b3b146103e2578063392b7633146104055780633b093ddc1461043057806342842e0e146103cf57806342966c681461047a578063429b62e51461048d578063438b6300146104b057806347f6acf1146104d05780634bf25ae1146104d95780634f64b2be146104f957806355f804b3146105225780635ac1e3bb146105355780635fc5f9a814610548578063618d1e5e1461055b5780636352211e1461056e5780636bfdca221461058157806370a08231146105a157806370dab1de146105b457806373bf6182146105d457806374bd35b1146105e75780637dba5f93146105fa5780638129fc1c1461060d578063838bf3e51461061557806391b5e5de1461063557806395d89b4114610648578063a22cb46514610650578063a4230bd51461065e578063aaa758b114610671578063b10be93114610691578063b30374cd146106a4578063b88d4fde146106b7578063c87b56dd146106c5578063cc33c875146106d8578063cf3b7d90146106f8578063d33e51501461071d578063d69167e51461073d578063d6918fdb14610750578063d94a28d11461075a578063dd86d01b1461076d578063dfb19bf81461078d578063e1f87749146107a0578063e204300a146107ce578063e272578e146107e1578063e44bd39b14610801578063e985e9c514610814578063efdcc47f1461082a575b600080fd5b6102a061029b3660046148a6565b61083d565b60405190151581526020015b60405180910390f35b6102c86102c33660046148d0565b61088f565b6040516102ac9695949392919061497d565b6102e26109da565b6040516102ac91906149ce565b6103026102fd3660046148d0565b610a6c565b6040516001600160a01b0390911681526020016102ac565b61032c6103283660046149f8565b5050565b005b6015546103389081565b6040519081526020016102ac565b6017546103389081565b61036361035e3660046148d0565b610a73565b6040516102ac93929190614a22565b6103b0610380366004614a51565b6013602090815260009283526040808420909152908252902080546001909101546001600160401b039091169082565b604080516001600160401b0390931683526020830191909152016102ac565b61032c6103dd366004614a73565b610b22565b6102a06103f0366004614aaf565b60066020526000908152604090205460ff1681565b610338610413366004614bd2565b8051602081830181018051600b8252928201919093012091525481565b61045f61043e3660046148d0565b60106020526000908152604090208054600282015460039092015490919083565b604080519384526020840192909252908201526060016102ac565b61032c6104883660046148d0565b610b5e565b6102a061049b366004614aaf565b600c6020526000908152604090205460ff1681565b6104c36104be366004614aaf565b610eb1565b6040516102ac9190614c41565b61033860055481565b6103386104e73660046148d0565b600f6020526000908152604090205481565b61050c6105073660046148d0565b610ec6565b6040516102ac9a99989796959493929190614c54565b61032c610530366004614bd2565b61103b565b6102e26105433660046148d0565b61107d565b61032c610556366004614d66565b611508565b61032c6105693660046149f8565b61175e565b61030261057c3660046148d0565b611888565b61059461058f3660046148d0565b611902565b6040516102ac9190614e49565b6103386105af366004614aaf565b611b77565b6105c76105c2366004614aaf565b611b8d565b6040516102ac9190614ede565b61032c6105e2366004614f48565b611cde565b61032c6105f5366004614f9b565b611d82565b6102a0610608366004615090565b6123f2565b61032c612579565b6106286106233660046148d0565b6126aa565b6040516102ac91906150c3565b61033861064336600461515e565b6128bd565b6102e2612b83565b61032c610328366004615240565b61032c61066c366004615240565b612b92565b61068461067f3660046148d0565b612bff565b6040516102ac9190615273565b61032c61069f366004615240565b612d7a565b61032c6106b236600461531d565b612dd4565b61032c6103dd36600461536a565b6102e26106d33660046148d0565b612eeb565b6106eb6106e63660046148d0565b612fb5565b6040516102ac919061548a565b61070b6107063660046148d0565b6131ff565b6040516102ac9695949392919061549d565b61073061072b3660046148d0565b6132d4565b6040516102ac91906154db565b61068461074b366004614aaf565b61356d565b6016546103389081565b61032c61076836600461531d565b613597565b61078061077b36600461553d565b6136a1565b6040516102ac91906155b1565b61036361079b3660046148d0565b6138e5565b6102a06107ae3660046149f8565b600d60209081526000928352604080842090915290825290205460ff1681565b61032c6107dc3660046156cc565b613911565b6103386107ef366004614aaf565b600e6020526000908152604090205481565b61032c61080f366004614a51565b613981565b6102a0610822366004615709565b600092915050565b6106846108383660046148d0565b613c12565b60006001600160e01b031982166380ac58cd60e01b148061086e57506001600160e01b03198216635b5e139f60e01b145b8061088957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6009602052600090815260409020805460028201546003830154600484015460058501805494959394929360ff909216926108c990615733565b80601f01602080910402602001604051908101604052809291908181526020018280546108f590615733565b80156109425780601f1061091757610100808354040283529160200191610942565b820191906000526020600020905b81548152906001019060200180831161092557829003601f168201915b50505050509080600601805461095790615733565b80601f016020809104026020016040519081016040528092919081815260200182805461098390615733565b80156109d05780601f106109a5576101008083540402835291602001916109d0565b820191906000526020600020905b8154815290600101906020018083116109b357829003601f168201915b5050505050905086565b6060600180546109e990615733565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1590615733565b8015610a625780601f10610a3757610100808354040283529160200191610a62565b820191906000526020600020905b815481529060010190602001808311610a4557829003601f168201915b5050505050905090565b6000806000fd5b600760205260009081526040902080546001820154600283018054929360ff90921692610a9f90615733565b80601f0160208091040260200160405190810160405280929190818152602001828054610acb90615733565b8015610b185780601f10610aed57610100808354040283529160200191610b18565b820191906000526020600020905b815481529060010190602001808311610afb57829003601f168201915b5050505050905083565b60405162461bcd60e51b815260206004820152600c60248201526b6e6f207472616e736665727360a01b60448201526064015b60405180910390fd5b336000908152600c602052604090205460ff1680610b9e57506000818152601260205260409020600401546001600160a01b0316336001600160a01b0316145b80610bd05750336000908152600d602090815260408083208484526012835281842060020154845290915290205460ff165b610bec5760405162461bcd60e51b8152600401610b559061576d565b6000600e6000610bfb84611888565b6001600160a01b0316815260208082019290925260409081016000908120548582526012845282822060018101548352600985528383206002908101546005909201548385526010909652938320909301805491955092939283929091610c639084906157a9565b9091555050600083815260116020908152604080832085845290915281208054839290610c919084906157a9565b90915550506000838152601060209081526040808320600301805485900390556011825280832085845282528083206001018054859003905560058054859003905586835260129091528082206004015490518692916001600160a01b031690600080516020615f95833981519152908390a4600084815260126020908152604091829020600281015460048201546001909201548451908152928301859052926001600160a01b039091169187917fefae2827954a7dcec4635167b069ceff340e9acc450f5533d25bc14f081a8743910160405180910390a460008481526012602052604081208181556001810182905560028101829055600381018290556004810180546001600160e01b0319169055600581018290556006810182905590610dbf60078301826145b0565b610dcd6008830160006145b0565b50506000838152601060205260408120905b6005820154811015610ea95785826005018281548110610e0157610e016157c0565b906000526020600020015403610e9757600582015460011015610e6d57600582018054610e30906001906157a9565b81548110610e4057610e406157c0565b9060005260206000200154826005018281548110610e6057610e606157c0565b6000918252602090912001555b81600501805480610e8057610e806157d6565b600190038181906000526020600020016000905590555b80610ea1816157ec565b915050610ddf565b505050505050565b6060610ebc8261356d565b60a0015192915050565b6012602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460078801805497989697959694956001600160a01b03851695600160a01b9095046001600160401b0316949190610f2a90615733565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5690615733565b8015610fa35780601f10610f7857610100808354040283529160200191610fa3565b820191906000526020600020905b815481529060010190602001808311610f8657829003601f168201915b505050505090806008018054610fb890615733565b80601f0160208091040260200160405190810160405280929190818152602001828054610fe490615733565b80156110315780601f1061100657610100808354040283529160200191611031565b820191906000526020600020905b81548152906001019060200180831161101457829003601f168201915b505050505090508a565b336000908152600c602052604090205460ff1661106a5760405162461bcd60e51b8152600401610b559061576d565b80516103289060039060208401906145ea565b6060600061108a83612fb5565b602080820151600090815260098252604080822081518083018352600b81526a476f6f64204f7261636c6560a81b81860152828601518452600a909452908220600201805494955090939192611169929091906110e690615733565b80601f016020809104026020016040519081016040528092919081815260200182805461111290615733565b801561115f5780601f106111345761010080835404028352916020019161115f565b820191906000526020600020905b81548152906001019060200180831161114257829003601f168201915b5050505050613c26565b6111a16040518060400160405280600d81526020016c476f6f6420416374697669747960981b8152508460050180546110e690615733565b61120760405180604001604052806009815260200168476f6f64205479706560b81b81525060076000876001016000815481106111e0576111e06157c0565b9060005260206000200154815260200190815260200160002060020180546110e690615733565b6112556040518060400160405280600d81526020016c476f6f642043617465676f727960981b815250600860008860020154815260200190815260200160002060020180546110e690615733565b61128460405180604001604052806004815260200163155b9a5d60e21b8152508760060180546110e690615733565b6112bc6040518060400160405280600a815260200169115e1d195c9b985b125160b21b8152506112b78a60e00151613c52565b613c26565b6113758860060180546112ce90615733565b80601f01602080910402602001604051908101604052809291908181526020018280546112fa90615733565b80156113475780601f1061131c57610100808354040283529160200191611347565b820191906000526020600020905b81548152906001019060200180831161132a57829003601f168201915b50505050508a6060015160405180604001604052806006815260200165373ab6b132b960d11b815250613d81565b6113c56040518060400160405280600b81526020016a476f6f6420506f696e747360a81b8152508b60c0015160405180604001604052806006815260200165373ab6b132b960d11b815250613d81565b611415604051806040016040528060048152602001634461746560e01b8152508c60a001516001600160401b0316604051806040016040528060048152602001636461746560e01b815250613d81565b60405160200161142d99989796959493929190615821565b6040516020818303038152906040529050600160fd1b816001835161145291906157a9565b81518110611462576114626157c0565b60200101906001600160f81b031916908160001a90535060006114836109da565b61148c87613db8565b8561010001518661012001516114ae8860a001516001600160401b0316613db8565b866040516020016114c4969594939291906158e2565b60405160208183030381529060405290506114de81613ec0565b6040516020016114ee9190615a03565b604051602081830303815290604052945050505050919050565b336000908152600c602052604090205460ff166115375760405162461bcd60e51b8152600401610b559061576d565b80516000036115545761154e601780546001019055565b60175481525b60005b8160200151518110156115e15760016007600084602001518481518110611580576115806157c0565b60209081029190910181015182528101919091526040016000206001015460ff1660048111156115b2576115b26148e9565b146115cf5760405162461bcd60e51b8152600401610b5590615a48565b806115d9816157ec565b915050611557565b50600160408083015160009081526008602052206001015460ff16600481111561160d5761160d6148e9565b1461162a5760405162461bcd60e51b8152600401610b5590615a48565b60008160a00151511161164f5760405162461bcd60e51b8152600401610b5590615a76565b8051600090815260096020908152604090912082518155818301518051849361167f92600185019291019061466e565b50604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908360048111156116be576116be6148e9565b021790555060a082015180516116de9160058401916020909101906145ea565b5060c082015180516116fa9160068401916020909101906145ea565b50905050806040015181600001517f29f55a4079432284bc9ab94f92115353211eb0ef8445340b16a7e1db3bd578a983602001518460a0015185606001518660c001518760800151604051611753959493929190615a9d565b60405180910390a350565b336000908152600c602052604090205460ff1661178d5760405162461bcd60e51b8152600401610b559061576d565b61179681612bff565b506001600160a01b038216158015906117c557506001600160a01b0382166000908152600e6020526040902054155b6118115760405162461bcd60e51b815260206004820152601d60248201527f77616c6c6574206164647265737320616c7265616479206578697374730000006044820152606401610b55565b6001600160a01b0382166000818152600e6020908152604080832085905584835260108252808320600190810180549182018155845291832090910180546001600160a01b03191684179055518392917f0326672e6c32e76e77f14d883f5848b4c2adfb948927e336ec6131a032ce66b191a35050565b6000818152601260205260408120600401546001600160a01b0316806108895760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610b55565b6119456040805160e08101825260008082526020820181905290918201908152602001600060ff1681526020016060815260200160608152602001606081525090565b6000828152600a602052604090205482146119725760405162461bcd60e51b8152600401610b5590615aec565b6000828152600a6020908152604091829020825160e0810184528154815260018201546001600160a01b0381169382019390935292909190830190600160a01b900460ff1660048111156119c8576119c86148e9565b60048111156119d9576119d96148e9565b81526001820154600160a81b900460ff166020820152600282018054604090920191611a0490615733565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3090615733565b8015611a7d5780601f10611a5257610100808354040283529160200191611a7d565b820191906000526020600020905b815481529060010190602001808311611a6057829003601f168201915b50505050508152602001600382018054611a9690615733565b80601f0160208091040260200160405190810160405280929190818152602001828054611ac290615733565b8015611b0f5780601f10611ae457610100808354040283529160200191611b0f565b820191906000526020600020905b815481529060010190602001808311611af257829003601f168201915b5050505050815260200160048201805480602002602001604051908101604052809291908181526020018280548015611b6757602002820191906000526020600020905b815481526020019060010190808311611b53575b5050505050815250509050919050565b6000611b828261356d565b60a001515192915050565b60606000611b9a8361356d565b608001519050600081516001600160401b03811115611bbb57611bbb614aca565b604051908082528060200260200182016040528015611bf457816020015b611be16146a8565b815260200190600190039081611bd95790505b50905060005b8251811015611cd657828181518110611c1557611c156157c0565b6020026020010151828281518110611c2f57611c2f6157c0565b602090810291909101810151919091526001600160a01b0386166000908152600e8252604080822054825260119092529081208451909190859084908110611c7957611c796157c0565b6020026020010151815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050828281518110611cc057611cc06157c0565b6020908102919091018101510152600101611bfa565b509392505050565b336000908152600c602052604090205460ff16611d0d5760405162461bcd60e51b8152600401610b559061576d565b6001600160a01b038316611d2057600080fd5b6000828152600a60205260409020548214611d4d5760405162461bcd60e51b8152600401610b5590615aec565b6001600160a01b03929092166000908152600d6020908152604080832093835292905220805460ff1916911515919091179055565b336000908152600c602052604090205460ff1680611dbe5750336000908152600d602090815260408083206080850151845290915290205460ff165b611dda5760405162461bcd60e51b8152600401610b559061576d565b600080611df4836040015184600001518560200151614024565b915091508260c001516001600160401b0316600003611e2857611e19426103e8615b0f565b6001600160401b031660c08401525b60016060840151600090815260096020526040902060049081015460ff1690811115611e5657611e566148e9565b14611e735760405162461bcd60e51b8152600401610b5590615a48565b600160608401516000908152600960209081526040808320600201548352600890915290206001015460ff166004811115611eb057611eb06148e9565b14611ecd5760405162461bcd60e51b8152600401610b5590615a48565b600160808401516000908152600a6020526040902060010154600160a01b900460ff166004811115611f0157611f016148e9565b14611f1e5760405162461bcd60e51b8152600401610b5590615a48565b6000805b60808501516000908152600a6020526040902060040154811015611f945760808501516000908152600a60205260409020600401805482908110611f6857611f686157c0565b9060005260206000200154856060015103611f8257600191505b80611f8c816157ec565b915050611f22565b5080611ff65760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610b55565b50612005600480546001019055565b600061201060045490565b6000818152601260205260409020549091501561206e5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610b55565b60405181906001600160a01b03841690600090600080516020615f95833981519152908290a4606084015160009081526009602052604081206003015460a08601516120ba9190615b3e565b905060008190506120df86606001518760800151878960c001518a60e0015187614335565b91506120fc60008760800151878960c001518a60e0015187614335565b91508082146121515760808601516060808801516040805191825260208201859052810185905287917f6fec391adcf4a54d1369c43885973442a979f72629593e40381af0e87e3966c9910160405180910390a35b8560800151846001600160a01b0316847fb944b3d86721505073906bf46a2fffc53e52b7741e8e4cd781a443c88f10c12b888a606001518b6101000151888d60a001518e60c001518f60e001516040516121b19796959493929190615b5d565b60405180910390a4600060405180610140016040528085815260200188606001518152602001886080015181526020018860a001518152602001866001600160a01b031681526020018860c001516001600160401b031681526020018481526020018860e001518152602001886101000151815260200188610120015181525090506000600960008960600151815260200190815260200160002060020154905081601260008781526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a08201518160040160146101000a8154816001600160401b0302191690836001600160401b0316021790555060c0820151816005015560e082015181600601556101008201518160070190805190602001906123199291906145ea565b5061012082015180516123369160088401916020909101906145ea565b5050506000878152601060209081526040808320600501805460018181018355918552838520018990558a84526011835281842085855290925282200154900361239f576000878152601060209081526040822060040180546001810182559083529120018190555b600096875260106020908152604080892060028101805488019055600301805487019055601182528089209289529190529095208054830181556001018054830190555060058054909101905550505050565b3360009081526006602052604081205460ff166124215760405162461bcd60e51b8152600401610b559061576d565b6001600160a01b0384166000908152600e6020908152604080832054808452601090925282206002810180549293919287929061245f9084906157a9565b9091555050600281015460408051878152602081019290925285916001600160a01b038916917fa749946c37aa038ce4cb2da01f5c7ecd058016b72f1f52c85cbc68393d5f5a3a910160405180910390a3600082815260116020526040902084156124ed57600085815260208290526040812080548892906124e29084906157a9565b9091555061256a9050565b60005b600483015481101561255e576000836004018281548110612513576125136157c0565b6000918252602080832090910154808352908590526040909120549091508881111561253c5750875b60009182526020849052604090912080548290039055909603956001016124f0565b50851561256a57600080fd5b600193505050505b9392505050565b600054610100900460ff166125945760005460ff1615612598565b303b155b6125fb5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610b55565b600054610100900460ff1615801561261d576000805461ffff19166101011790555b60408051808201909152600b8082526a141c9bdbd993d991dbdbd960aa1b602090920191825261264f916001916145ea565b5060408051808201909152600380825262504f4760e81b602090920191825261267a916002916145ea565b50336000908152600c60205260409020805460ff1916600117905580156126a7576000805461ff00191690555b50565b6126b26146dc565b60008281526009602052604081205490036126df5760405162461bcd60e51b8152600401610b5590615aec565b600082815260096020908152604091829020825160e081018452815481526001820180548551818602810186019096528086529194929385810193929083018282801561274b57602002820191906000526020600020905b815481526020019060010190808311612737575b5050509183525050600282015460208201526003820154604082015260048083015460609092019160ff1690811115612786576127866148e9565b6004811115612797576127976148e9565b81526020016005820180546127ab90615733565b80601f01602080910402602001604051908101604052809291908181526020018280546127d790615733565b80156128245780601f106127f957610100808354040283529160200191612824565b820191906000526020600020905b81548152906001019060200180831161280757829003601f168201915b5050505050815260200160068201805461283d90615733565b80601f016020809104026020016040519081016040528092919081815260200182805461286990615733565b8015611b675780601f1061288b57610100808354040283529160200191611b67565b820191906000526020600020905b81548152906001019060200180831161289957505050919092525091949350505050565b336000908152600c602052604081205460ff166128ec5760405162461bcd60e51b8152600401610b559061576d565b6000826080015151116129115760405162461bcd60e51b8152600401610b5590615a76565b81516000036129a157600b826080015160405161292e9190615bab565b9081526020016040518091039020546000146129895760405162461bcd60e51b815260206004820152601a602482015279676f6f64206f7261636c6520616c72656164792065786973747360301b6044820152606401610b55565b612997601480546001019055565b6014548252612a16565b81516000818152600a6020526040902054146129cf5760405162461bcd60e51b8152600401610b5590615aec565b60808201515115612a1657600b600a600084600001518152602001908152602001600020600201604051612a039190615c60565b9081526020016040518091039020600090555b81516000908152600a602090815260409182902084518155908401516001820180546001600160a01b039092166001600160a01b031983168117825593860151869490926001600160a81b03191617600160a01b836004811115612a7c57612a7c6148e9565b0217905550606082015160018201805460ff909216600160a81b0260ff60a81b1990921691909117905560808201518051612ac19160028401916020909101906145ea565b5060a08201518051612add9160038401916020909101906145ea565b5060c08201518051612af991600484019160209091019061466e565b509050508160000151600b8360800151604051612b169190615bab565b90815260200160405180910390208190555081600001517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5683608001518460a0015185604001518660c00151604051612b729493929190615c6c565b60405180910390a25080515b919050565b6060600280546109e990615733565b336000908152600c602052604090205460ff16612bc15760405162461bcd60e51b8152600401610b559061576d565b6001600160a01b038216612bd457600080fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b612c0761472a565b600082815260106020526040902054612c325760405162461bcd60e51b8152600401610b5590615cb2565b600082815260106020908152604091829020825160c0810184528154815260018201805485518186028101860190965280865291949293858101939290830182828015612ca857602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612c8a575b50505050508152602001600282015481526020016003820154815260200160048201805480602002602001604051908101604052809291908181526020018280548015612d1457602002820191906000526020600020905b815481526020019060010190808311612d00575b5050505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015611b675760200282019190600052602060002090815481526020019060010190808311611b53575050505050815250509050919050565b336000908152600c602052604090205460ff16612da95760405162461bcd60e51b8152600401610b559061576d565b6001600160a01b03919091166000908152600660205260409020805460ff1916911515919091179055565b336000908152600c602052604090205460ff16612e035760405162461bcd60e51b8152600401610b559061576d565b6000825111612e245760405162461bcd60e51b8152600401610b5590615a76565b82600003612e5157612e3a601580546001019055565b601554600081815260086020526040902081905592505b60008381526008602090815260409091208351612e76926002909201918501906145ea565b50600083815260086020526040902060019081018054839260ff1990911690836004811115612ea757612ea76148e9565b0217905550827f037073ee3282c3c1d6de9ffad824bebaa0375c1024dbead3a062c16e7e76d3988383604051612ede929190615cdd565b60405180910390a2505050565b6000818152601260205260409020546060908214612f635760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610b55565b600060038054612f7290615733565b90501115612fac576003612f8583613db8565b604051602001612f96929190615cff565b6040516020818303038152906040529050919050565b6108898261107d565b612fbd614763565b6000612fc883613c12565b905060005b8160a00151518110156131e657838260a001518281518110612ff157612ff16157c0565b6020026020010151036131d457601260008360a001518381518110613018576130186157c0565b6020908102919091018101518252818101929092526040908101600020815161014081018352815481526001820154938101939093526002810154918301919091526003810154606083015260048101546001600160a01b0381166080840152600160a01b90046001600160401b031660a0830152600581015460c0830152600681015460e0830152600781018054610100840191906130b790615733565b80601f01602080910402602001604051908101604052809291908181526020018280546130e390615733565b80156131305780601f1061310557610100808354040283529160200191613130565b820191906000526020600020905b81548152906001019060200180831161311357829003601f168201915b5050505050815260200160088201805461314990615733565b80601f016020809104026020016040519081016040528092919081815260200182805461317590615733565b80156131c25780601f10613197576101008083540402835291602001916131c2565b820191906000526020600020905b8154815290600101906020018083116131a557829003601f168201915b50505050508152505092505050919050565b806131de816157ec565b915050612fcd565b5060405162461bcd60e51b8152600401610b5590615aec565b600a6020526000908152604090208054600182015460028301805492936001600160a01b0383169360ff600160a01b8504811694600160a81b900416929061324690615733565b80601f016020809104026020016040519081016040528092919081815260200182805461327290615733565b80156132bf5780601f10613294576101008083540402835291602001916132bf565b820191906000526020600020905b8154815290600101906020018083116132a257829003601f168201915b50505050509080600301805461095790615733565b600081815260106020526040812060050154606091906001600160401b0381111561330157613301614aca565b60405190808252806020026020018201604052801561333a57816020015b613327614763565b81526020019060019003908161331f5790505b50905060005b6000848152601060205260409020600501548110156135665760008481526010602052604081206005018054601292919084908110613381576133816157c0565b600091825260208083209091015483528281019390935260409182019020815161014081018352815481526001820154938101939093526002810154918301919091526003810154606083015260048101546001600160a01b03811660808401526001600160401b03600160a01b9091041660a0830152600581015460c0830152600681015460e08301526007810180546101008401919061342290615733565b80601f016020809104026020016040519081016040528092919081815260200182805461344e90615733565b801561349b5780601f106134705761010080835404028352916020019161349b565b820191906000526020600020905b81548152906001019060200180831161347e57829003601f168201915b505050505081526020016008820180546134b490615733565b80601f01602080910402602001604051908101604052809291908181526020018280546134e090615733565b801561352d5780601f106135025761010080835404028352916020019161352d565b820191906000526020600020905b81548152906001019060200180831161351057829003601f168201915b505050505081525050828281518110613548576135486157c0565b6020026020010181905250808061355e906157ec565b915050613340565b5092915050565b61357561472a565b6001600160a01b0382166000908152600e602052604090205461088990612bff565b336000908152600c602052604090205460ff166135c65760405162461bcd60e51b8152600401610b559061576d565b60008251116135e75760405162461bcd60e51b8152600401610b5590615a76565b82600003613614576135fd601680546001019055565b601654600081815260076020526040902081905592505b60008381526007602090815260409091208351613639926002909201918501906145ea565b50600083815260076020526040902060019081018054839260ff199091169083600481111561366a5761366a6148e9565b0217905550827f9c72f12d46e6b2fb09fe6cb0d2e26e022402c9e96cb5f88dea9307870110ab708383604051612ede929190615cdd565b60606000826001600160401b038111156136bd576136bd614aca565b6040519080825280602002602001820160405280156136f657816020015b6136e36147cb565b8152602001906001900390816136db5790505b50905060005b83811015611cd657600061372a86868481811061371b5761371b6157c0565b90506040020160000135612fb5565b90506137346147cb565b6000878785818110613748576137486157c0565b90506040020160200160208101906137609190615d34565b6001600160401b03169050808360c00151101561377e575060c08201515b6020808401516000908152600990915260408120600301546137a09083615d65565b8451845260a08501516001600160401b031660208086019190915260808601516001600160a01b03166000908152600e82526040808220548151808501919091528151808203850181529082018252818801528288015182526009909252908120600101805492935091613816576138166157c0565b600091825260208220015461ffff1660608501526080840152604084015163ffffffff90811660a0850152811660c084018190526001600160401b03831660e0850152610100808601519085015261386d90613db8565b6009600086602001518152602001908152602001600020600601604051602001613898929190615d79565b604051602081830303815290604052836101200181905250828686815181106138c3576138c36157c0565b60200260200101819052505050505080806138dd906157ec565b9150506136fc565b600860205260009081526040902080546001820154600283018054929360ff90921692610a9f90615733565b336000908152600c602052604090205460ff166139405760405162461bcd60e51b8152600401610b559061576d565b60009384526013602090815260408086209486529390529190922080546001600160401b0319166001600160401b0393909316929092178255600190910155565b336000908152600c602052604090205460ff166139b05760405162461bcd60e51b8152600401610b559061576d565b6000828152601060205260408082208383529120828403613a025760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610b55565b83151580613a0f57508215155b613a2b5760405162461bcd60e51b8152600401610b5590615cb2565b600280820154908301805490910190556003808201549083018054909101905560005b6001820154811015613af95782600101826001018281548110613a7357613a736157c0565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b0390921691909117905590830180548792600e92909185908110613acc57613acc6157c0565b60009182526020808320909101546001600160a01b03168352820192909252604001902055600101613a4e565b5060005b6004820154811015613bc0576000826004018281548110613b2057613b206157c0565b60009182526020808320909101548883526011808352604080852083865284528085208a86529184528085208386529093529183206001830154919450919203613b7f5760048601805460018101825560009182526020909120018390555b805482540182556001908101549181018054909201909155600086815260116020908152604080832094835293905291822082815581019190915501613afd565b5060006002820181905560038201819055613bdf90600183019061481e565b604051839085907f29b215afec5f4dc18ce16b02452f35cbba1f488896ef8874b9b7a54baa6d42b090600090a350505050565b613c1a61472a565b61088961074b83611888565b60608282604051602001613c3b929190615da3565b604051602081830303815290604052905092915050565b606060005b60208160ff16108015613c8b5750828160ff1660208110613c7a57613c7a6157c0565b1a60f81b6001600160f81b03191615155b15613ca25780613c9a81615e16565b915050613c57565b60008160ff166001600160401b03811115613cbf57613cbf614aca565b6040519080825280601f01601f191660200182016040528015613ce9576020820181803683370190505b509050600091505b60208260ff16108015613d255750838260ff1660208110613d1457613d146157c0565b1a60f81b6001600160f81b03191615155b1561257257838260ff1660208110613d3f57613d3f6157c0565b1a60f81b818360ff1681518110613d5857613d586157c0565b60200101906001600160f81b031916908160001a90535081613d7981615e16565b925050613cf1565b60608382613d8e85613db8565b604051602001613da093929190615e35565b60405160208183030381529060405290509392505050565b606081600003613ddf5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115613e095780613df3816157ec565b9150613e029050600a83615d65565b9150613de3565b6000816001600160401b03811115613e2357613e23614aca565b6040519080825280601f01601f191660200182016040528015613e4d576020820181803683370190505b5090505b8415613eb857613e626001836157a9565b9150613e6f600a86615eda565b613e7a906030615eee565b60f81b818381518110613e8f57613e8f6157c0565b60200101906001600160f81b031916908160001a905350613eb1600a86615d65565b9450613e51565b949350505050565b60608151600003613edf57505060408051602081019091526000815290565b6000604051806060016040528060408152602001615f556040913990506000600384516002613f0e9190615eee565b613f189190615d65565b613f23906004615b3e565b90506000613f32826020615eee565b6001600160401b03811115613f4957613f49614aca565b6040519080825280601f01601f191660200182016040528015613f73576020820181803683370190505b509050818152600183018586518101602084015b81831015613fdf576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101613f87565b600389510660018114613ff9576002811461400a57614016565b613d3d60f01b600119830152614016565b603d60f81b6000198301525b509398975050505050505050565b600080841561418f5760008581526010602052604090205461418a576001600160a01b0384161580159061406f57506001600160a01b0384166000908152600e602052604090205415155b15614094576001600160a01b0384166000908152600e602052604090205494506141d6565b82158015906140b057506000838152600f602052604090205415155b156140cb576000838152600f602052604090205494506141d6565b6001600160a01b0384166140f15760405162461bcd60e51b8152600401610b5590615f06565b600085815260106020818152604080842089815581518084019092526001600160a01b038916825293899052919052614130916001908101919061483c565b506001600160a01b0384166000818152600e602052604090819020879055518691907f101f74814a060c243b4178543008d04967d667e5b262d151af81b054a1c2bc58906141819087815260200190565b60405180910390a35b6141d6565b6001600160a01b038416156141be576001600160a01b0384166000908152600e602052604090205494506141d6565b82156141d6576000838152600f602052604090205494505b84158015906141f2575060008581526010602052604090205485145b61420e5760405162461bcd60e51b8152600401610b5590615cb2565b6001600160a01b038416614256576000858152601060205260408120600101805490919061423e5761423e6157c0565b6000918252602090912001546001600160a01b031693505b6001600160a01b03841661427c5760405162461bcd60e51b8152600401610b5590615f06565b6001600160a01b0384166000908152600e60205260409020546142a3576142a3848661175e565b82158015906142c057506000838152600f60205260409020548514155b1561432c576000838152600f60205260409020541561431a5760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610b55565b6000838152600f602052604090208590555b50929391925050565b60008481526010602052604081208190815b600582015481101561451157600082600501828154811061436a5761436a6157c0565b60009182526020808320909101548d83526013825260408084208e85529092529120549091506143a5906001600160401b03166103e8615b0f565b6000828152601260205260409020600401546001600160401b0391821691600160a01b9091048116908a161161440757600082815260126020526040902060040154614402908a90600160a01b90046001600160401b0316615f2c565b614433565b60008281526012602052604090206004015461443390600160a01b90046001600160401b03168a615f2c565b6001600160401b0316116144605760008181526012602052604090206005015461445d9085615eee565b93505b6000818152601260205260409020600401546001600160401b03898116600160a01b909204161415806144a457506000818152601260205260409020600101548b14155b806144c057506000818152601260205260409020600601548714155b6144fe5760405162461bcd60e51b815260206004820152600f60248201526e6475706c696361746520656e74727960881b6044820152606401610b55565b5080614509816157ec565b915050614347565b5060008981526013602090815260408083208b845290915290206001015415801590614561575060008981526013602090815260408083208b845290915290206001015461455f8386615eee565b115b156145a05760008981526013602090815260408083208b845290915290206001015461458d8386615eee565b61459791906157a9565b925050506145a6565b83925050505b9695505050505050565b5080546145bc90615733565b6000825580601f106145cc575050565b601f0160209004906000526020600020908101906126a79190614891565b8280546145f690615733565b90600052602060002090601f016020900481019282614618576000855561465e565b82601f1061463157805160ff191683800117855561465e565b8280016001018555821561465e579182015b8281111561465e578251825591602001919060010190614643565b5061466a929150614891565b5090565b82805482825590600052602060002090810192821561465e579160200282018281111561465e578251825591602001919060010190614643565b6040518060400160405280600081526020016146d7604051806040016040528060008152602001600081525090565b905290565b6040518060e001604052806000815260200160608152602001600081526020016000815260200160006004811115614716576147166148e9565b815260200160608152602001606081525090565b6040518060c001604052806000801916815260200160608152602001600081526020016000815260200160608152602001606081525090565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160401b03168152602001600081526020016000801916815260200160608152602001606081525090565b604080516101408101825260008082526020820181905260609282018390528282018190526080820181905260a0820181905260c0820181905260e0820152610100810182905261012081019190915290565b50805460008255906000526020600020908101906126a79190614891565b82805482825590600052602060002090810192821561465e579160200282015b8281111561465e57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061485c565b5b8082111561466a5760008155600101614892565b6000602082840312156148b857600080fd5b81356001600160e01b03198116811461257257600080fd5b6000602082840312156148e257600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6005811061491d57634e487b7160e01b600052602160045260246000fd5b9052565b60005b8381101561493c578181015183820152602001614924565b8381111561494b576000848401525b50505050565b60008151808452614969816020860160208601614921565b601f01601f19169290920160200192915050565b86815285602082015284604082015261499960608201856148ff565b60c0608082015260006149af60c0830185614951565b82810360a08401526149c18185614951565b9998505050505050505050565b6020815260006125726020830184614951565b80356001600160a01b0381168114612b7e57600080fd5b60008060408385031215614a0b57600080fd5b614a14836149e1565b946020939093013593505050565b838152614a3260208201846148ff565b606060408201526000614a486060830184614951565b95945050505050565b60008060408385031215614a6457600080fd5b50508035926020909101359150565b600080600060608486031215614a8857600080fd5b614a91846149e1565b9250614a9f602085016149e1565b9150604084013590509250925092565b600060208284031215614ac157600080fd5b612572826149e1565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715614b0257614b02614aca565b60405290565b60405161014081016001600160401b0381118282101715614b0257614b02614aca565b604051601f8201601f191681016001600160401b0381118282101715614b5357614b53614aca565b604052919050565b60006001600160401b03831115614b7457614b74614aca565b614b87601f8401601f1916602001614b2b565b9050828152838383011115614b9b57600080fd5b828260208301376000602084830101529392505050565b600082601f830112614bc357600080fd5b61257283833560208501614b5b565b600060208284031215614be457600080fd5b81356001600160401b03811115614bfa57600080fd5b613eb884828501614bb2565b600081518084526020808501945080840160005b83811015614c3657815187529582019590820190600101614c1a565b509495945050505050565b6020815260006125726020830184614c06565b8a8152602081018a905260408101899052606081018890526001600160a01b03871660808201526001600160401b03861660a082015260c0810185905260e081018490526101406101008201819052600090614cb283820186614951565b9050828103610120840152614cc78185614951565b9d9c50505050505050505050505050565b600082601f830112614ce957600080fd5b813560206001600160401b03821115614d0457614d04614aca565b8160051b614d13828201614b2b565b9283528481018201928281019087851115614d2d57600080fd5b83870192505b84831015614d4c57823582529183019190830190614d33565b979650505050505050565b803560058110612b7e57600080fd5b600060208284031215614d7857600080fd5b81356001600160401b0380821115614d8f57600080fd5b9083019060e08286031215614da357600080fd5b614dab614ae0565b82358152602083013582811115614dc157600080fd5b614dcd87828601614cd8565b6020830152506040830135604082015260608301356060820152614df360808401614d57565b608082015260a083013582811115614e0a57600080fd5b614e1687828601614bb2565b60a08301525060c083013582811115614e2e57600080fd5b614e3a87828601614bb2565b60c08301525095945050505050565b602081528151602082015260018060a01b03602083015116604082015260006040830151614e7a60608401826148ff565b5060ff6060840151166080830152608083015160e060a0840152614ea2610100840182614951565b905060a0840151601f19808584030160c0860152614ec08383614951565b925060c08601519150808584030160e086015250614a488282614c06565b602080825282518282018190526000919060409081850190868401855b82811015614f2b578151805185528601518051878601528601518585015260609093019290850190600101614efb565b5091979650505050505050565b80358015158114612b7e57600080fd5b600080600060608486031215614f5d57600080fd5b614f66846149e1565b925060208401359150614f7b60408501614f38565b90509250925092565b80356001600160401b0381168114612b7e57600080fd5b600060208284031215614fad57600080fd5b81356001600160401b0380821115614fc457600080fd5b908301906101408286031215614fd957600080fd5b614fe1614b08565b614fea836149e1565b81526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015261502a60c08401614f84565b60c082015260e083013560e0820152610100808401358381111561504d57600080fd5b61505988828701614bb2565b828401525050610120808401358381111561507357600080fd5b61507f88828701614bb2565b918301919091525095945050505050565b6000806000606084860312156150a557600080fd5b6150ae846149e1565b95602085013595506040909401359392505050565b60208152815160208201526000602083015160e060408401526150ea610100840182614c06565b90506040840151606084015260608401516080840152608084015161511260a08501826148ff565b5060a0840151601f19808584030160c086015261512f8383614951565b925060c08601519150808584030160e086015250614a488282614951565b803560ff81168114612b7e57600080fd5b60006020828403121561517057600080fd5b81356001600160401b038082111561518757600080fd5b9083019060e0828603121561519b57600080fd5b6151a3614ae0565b823581526151b3602084016149e1565b60208201526151c460408401614d57565b60408201526151d56060840161514d565b60608201526080830135828111156151ec57600080fd5b6151f887828601614bb2565b60808301525060a08301358281111561521057600080fd5b61521c87828601614bb2565b60a08301525060c08301358281111561523457600080fd5b614e3a87828601614cd8565b6000806040838503121561525357600080fd5b61525c836149e1565b915061526a60208401614f38565b90509250929050565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156152cb5783516001600160a01b031682529284019260019290920191908401906152a2565b50604087015160608701526060870151608087015260808701519350601f199250828682030160a08701526153008185614c06565b9350505060a0850151818584030160c08601526145a68382614c06565b60008060006060848603121561533257600080fd5b8335925060208401356001600160401b0381111561534f57600080fd5b61535b86828701614bb2565b925050614f7b60408501614d57565b6000806000806080858703121561538057600080fd5b615389856149e1565b9350615397602086016149e1565b92506040850135915060608501356001600160401b038111156153b957600080fd5b8501601f810187136153ca57600080fd5b6153d987823560208401614b5b565b91505092959194509250565b600061014082518452602083015160208501526040830151604085015260608301516060850152608083015161542660808601826001600160a01b03169052565b5060a083015161544160a08601826001600160401b03169052565b5060c083015160c085015260e083015160e085015261010080840151828287015261546e83870182614951565b9250505061012080840151858303828701526145a68382614951565b60208152600061257260208301846153e5565b8681526001600160a01b03861660208201526154bc60408201866148ff565b60ff8416606082015260c0608082015260006149af60c0830185614951565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561553057603f1988860301845261551e8583516153e5565b94509285019290850190600101615502565b5092979650505050505050565b6000806020838503121561555057600080fd5b82356001600160401b038082111561556757600080fd5b818501915085601f83011261557b57600080fd5b81358181111561558a57600080fd5b8660208260061b850101111561559f57600080fd5b60209290920196919550909350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156156be57603f19898403018552815180518452878101516001600160401b031688850152868101516101408886018190529061561a82870182614951565b9150506060808301516156328288018261ffff169052565b50506080828101519086015260a08083015163ffffffff9081169187019190915260c0808401519091169086015260e0808301516001600160401b031690860152610100808301518683038288015261568b8382614951565b9250505061012080830151925085820381870152506156aa8183614951565b9689019694505050908601906001016155d8565b509098975050505050505050565b600080600080608085870312156156e257600080fd5b84359350602085013592506156f960408601614f84565b9396929550929360600135925050565b6000806040838503121561571c57600080fd5b615725836149e1565b915061526a602084016149e1565b600181811c9082168061574757607f821691505b60208210810361576757634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b1b9bdd08185c1c1c9bdd995960a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156157bb576157bb615793565b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b6000600182016157fe576157fe615793565b5060010190565b60008151615817818560208601614921565b9290920192915050565b60008a51615833818460208f01614921565b8a516158458183860160208f01614921565b8a51918401019061585a818360208e01614921565b895161586c8183850160208e01614921565b8951929091010190615882818360208c01614921565b87516158948183850160208c01614921565b87519290910101906158aa818360208a01614921565b85516158bc8183850160208a01614921565b85519290910101906158d2818360208801614921565b019b9a5050505050505050505050565b683d913730b6b2911d1160b91b81528651600090615907816009850160208c01614921565b61202360f01b600991840191820152875161592981600b840160208c01614921565b6b1116101134b6b0b3b2911d1160a11b600b92909101918201528651615956816017840160208b01614921565b7211161130b734b6b0ba34b7b72fbab936111d1160691b60179290910191820152855161598a81602a840160208a01614921565b69111610113230ba32911d60b11b602a929091019182015284516159b5816034840160208901614921565b6159f56159e66159e06034848601016f2c202261747472696275746573223a5b60801b815260100190565b87615805565b625d207d60e81b815260030190565b9a9950505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251615a3b81601d850160208701614921565b91909101601d0192915050565b6020808252601490820152731b9bdd081858dd1a5d994bdb9bdd08199bdd5b9960621b604082015260600190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b60a081526000615ab060a0830188614c06565b8281036020840152615ac28188614951565b90508560408401528281036060840152615adc8186614951565b9150506145a660808301846148ff565b6020808252600990820152681b9bdd08199bdd5b9960ba1b604082015260600190565b60006001600160401b0382811684821681151582840482111615615b3557615b35615793565b02949350505050565b6000816000190483118215151615615b5857615b58615793565b500290565b87815286602082015260e060408201526000615b7c60e0830188614951565b60608301969096525060808101939093526001600160401b039190911660a083015260c0909101529392505050565b60008251615bbd818460208701614921565b9190910192915050565b8054600090600181811c9080831680615be157607f831692505b60208084108203615c0257634e487b7160e01b600052602260045260246000fd5b818015615c165760018114615c2757615c54565b60ff19861689528489019650615c54565b60008881526020902060005b86811015615c4c5781548b820152908501908301615c33565b505084890196505b50505050505092915050565b60006125728284615bc7565b608081526000615c7f6080830187614951565b8281036020840152615c918187614951565b9050615ca060408401866148ff565b8281036060840152614d4c8185614c06565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b604081526000615cf06040830185614951565b905061257260208301846148ff565b6000615d0b8285615bc7565b8351615d1b818360208801614921565b64173539b7b760d91b9101908152600501949350505050565b600060208284031215615d4657600080fd5b61257282614f84565b634e487b7160e01b600052601260045260246000fd5b600082615d7457615d74615d4f565b500490565b60008351615d8b818460208801614921565b600160fd1b908301908152614a486001820185615bc7565b6e3d913a3930b4ba2fba3cb832911d1160891b81528251600090615dce81600f850160208801614921565b6b111610113b30b63ab2911d1160a11b600f918401918201528351615dfa81601b840160208801614921565b62089f4b60ea1b601b9290910191820152601e01949350505050565b600060ff821660ff8103615e2c57615e2c615793565b60010192915050565b6e3d913a3930b4ba2fba3cb832911d1160891b81528351600090615e6081600f850160208901614921565b711116113234b9b83630bcafba3cb832911d1160711b600f918401918201528451615e92816021840160208901614921565b6a111610113b30b63ab2911d60a91b602192909101918201528351615ebe81602c840160208801614921565b611f4b60f21b602c9290910191820152602e0195945050505050565b600082615ee957615ee9615d4f565b500690565b60008219821115615f0157615f01615793565b500190565b6020808252600c908201526b6d697373696e67206461746160a01b604082015260600190565b60006001600160401b0383811690831681811015615f4c57615f4c615793565b03939250505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b0e1c614a2eea9333cbf1d327fd795099b48136fc1e0907f4bbe0808ec17089b64736f6c634300080d0033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106102885760003560e01c806301ffc9a71461028d578063056a305c146102b557806306fdde03146102da578063081812fc146102ef578063095ea7b31461031a5780630c97174f1461032e5780631d3a5d2914610346578063220c7304146103505780632300b38f1461037257806323b872dd146103cf5780632b325b3b146103e2578063392b7633146104055780633b093ddc1461043057806342842e0e146103cf57806342966c681461047a578063429b62e51461048d578063438b6300146104b057806347f6acf1146104d05780634bf25ae1146104d95780634f64b2be146104f957806355f804b3146105225780635ac1e3bb146105355780635fc5f9a814610548578063618d1e5e1461055b5780636352211e1461056e5780636bfdca221461058157806370a08231146105a157806370dab1de146105b457806373bf6182146105d457806374bd35b1146105e75780637dba5f93146105fa5780638129fc1c1461060d578063838bf3e51461061557806391b5e5de1461063557806395d89b4114610648578063a22cb46514610650578063a4230bd51461065e578063aaa758b114610671578063b10be93114610691578063b30374cd146106a4578063b88d4fde146106b7578063c87b56dd146106c5578063cc33c875146106d8578063cf3b7d90146106f8578063d33e51501461071d578063d69167e51461073d578063d6918fdb14610750578063d94a28d11461075a578063dd86d01b1461076d578063dfb19bf81461078d578063e1f87749146107a0578063e204300a146107ce578063e272578e146107e1578063e44bd39b14610801578063e985e9c514610814578063efdcc47f1461082a575b600080fd5b6102a061029b3660046148a6565b61083d565b60405190151581526020015b60405180910390f35b6102c86102c33660046148d0565b61088f565b6040516102ac9695949392919061497d565b6102e26109da565b6040516102ac91906149ce565b6103026102fd3660046148d0565b610a6c565b6040516001600160a01b0390911681526020016102ac565b61032c6103283660046149f8565b5050565b005b6015546103389081565b6040519081526020016102ac565b6017546103389081565b61036361035e3660046148d0565b610a73565b6040516102ac93929190614a22565b6103b0610380366004614a51565b6013602090815260009283526040808420909152908252902080546001909101546001600160401b039091169082565b604080516001600160401b0390931683526020830191909152016102ac565b61032c6103dd366004614a73565b610b22565b6102a06103f0366004614aaf565b60066020526000908152604090205460ff1681565b610338610413366004614bd2565b8051602081830181018051600b8252928201919093012091525481565b61045f61043e3660046148d0565b60106020526000908152604090208054600282015460039092015490919083565b604080519384526020840192909252908201526060016102ac565b61032c6104883660046148d0565b610b5e565b6102a061049b366004614aaf565b600c6020526000908152604090205460ff1681565b6104c36104be366004614aaf565b610eb1565b6040516102ac9190614c41565b61033860055481565b6103386104e73660046148d0565b600f6020526000908152604090205481565b61050c6105073660046148d0565b610ec6565b6040516102ac9a99989796959493929190614c54565b61032c610530366004614bd2565b61103b565b6102e26105433660046148d0565b61107d565b61032c610556366004614d66565b611508565b61032c6105693660046149f8565b61175e565b61030261057c3660046148d0565b611888565b61059461058f3660046148d0565b611902565b6040516102ac9190614e49565b6103386105af366004614aaf565b611b77565b6105c76105c2366004614aaf565b611b8d565b6040516102ac9190614ede565b61032c6105e2366004614f48565b611cde565b61032c6105f5366004614f9b565b611d82565b6102a0610608366004615090565b6123f2565b61032c612579565b6106286106233660046148d0565b6126aa565b6040516102ac91906150c3565b61033861064336600461515e565b6128bd565b6102e2612b83565b61032c610328366004615240565b61032c61066c366004615240565b612b92565b61068461067f3660046148d0565b612bff565b6040516102ac9190615273565b61032c61069f366004615240565b612d7a565b61032c6106b236600461531d565b612dd4565b61032c6103dd36600461536a565b6102e26106d33660046148d0565b612eeb565b6106eb6106e63660046148d0565b612fb5565b6040516102ac919061548a565b61070b6107063660046148d0565b6131ff565b6040516102ac9695949392919061549d565b61073061072b3660046148d0565b6132d4565b6040516102ac91906154db565b61068461074b366004614aaf565b61356d565b6016546103389081565b61032c61076836600461531d565b613597565b61078061077b36600461553d565b6136a1565b6040516102ac91906155b1565b61036361079b3660046148d0565b6138e5565b6102a06107ae3660046149f8565b600d60209081526000928352604080842090915290825290205460ff1681565b61032c6107dc3660046156cc565b613911565b6103386107ef366004614aaf565b600e6020526000908152604090205481565b61032c61080f366004614a51565b613981565b6102a0610822366004615709565b600092915050565b6106846108383660046148d0565b613c12565b60006001600160e01b031982166380ac58cd60e01b148061086e57506001600160e01b03198216635b5e139f60e01b145b8061088957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6009602052600090815260409020805460028201546003830154600484015460058501805494959394929360ff909216926108c990615733565b80601f01602080910402602001604051908101604052809291908181526020018280546108f590615733565b80156109425780601f1061091757610100808354040283529160200191610942565b820191906000526020600020905b81548152906001019060200180831161092557829003601f168201915b50505050509080600601805461095790615733565b80601f016020809104026020016040519081016040528092919081815260200182805461098390615733565b80156109d05780601f106109a5576101008083540402835291602001916109d0565b820191906000526020600020905b8154815290600101906020018083116109b357829003601f168201915b5050505050905086565b6060600180546109e990615733565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1590615733565b8015610a625780601f10610a3757610100808354040283529160200191610a62565b820191906000526020600020905b815481529060010190602001808311610a4557829003601f168201915b5050505050905090565b6000806000fd5b600760205260009081526040902080546001820154600283018054929360ff90921692610a9f90615733565b80601f0160208091040260200160405190810160405280929190818152602001828054610acb90615733565b8015610b185780601f10610aed57610100808354040283529160200191610b18565b820191906000526020600020905b815481529060010190602001808311610afb57829003601f168201915b5050505050905083565b60405162461bcd60e51b815260206004820152600c60248201526b6e6f207472616e736665727360a01b60448201526064015b60405180910390fd5b336000908152600c602052604090205460ff1680610b9e57506000818152601260205260409020600401546001600160a01b0316336001600160a01b0316145b80610bd05750336000908152600d602090815260408083208484526012835281842060020154845290915290205460ff165b610bec5760405162461bcd60e51b8152600401610b559061576d565b6000600e6000610bfb84611888565b6001600160a01b0316815260208082019290925260409081016000908120548582526012845282822060018101548352600985528383206002908101546005909201548385526010909652938320909301805491955092939283929091610c639084906157a9565b9091555050600083815260116020908152604080832085845290915281208054839290610c919084906157a9565b90915550506000838152601060209081526040808320600301805485900390556011825280832085845282528083206001018054859003905560058054859003905586835260129091528082206004015490518692916001600160a01b031690600080516020615f95833981519152908390a4600084815260126020908152604091829020600281015460048201546001909201548451908152928301859052926001600160a01b039091169187917fefae2827954a7dcec4635167b069ceff340e9acc450f5533d25bc14f081a8743910160405180910390a460008481526012602052604081208181556001810182905560028101829055600381018290556004810180546001600160e01b0319169055600581018290556006810182905590610dbf60078301826145b0565b610dcd6008830160006145b0565b50506000838152601060205260408120905b6005820154811015610ea95785826005018281548110610e0157610e016157c0565b906000526020600020015403610e9757600582015460011015610e6d57600582018054610e30906001906157a9565b81548110610e4057610e406157c0565b9060005260206000200154826005018281548110610e6057610e606157c0565b6000918252602090912001555b81600501805480610e8057610e806157d6565b600190038181906000526020600020016000905590555b80610ea1816157ec565b915050610ddf565b505050505050565b6060610ebc8261356d565b60a0015192915050565b6012602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460078801805497989697959694956001600160a01b03851695600160a01b9095046001600160401b0316949190610f2a90615733565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5690615733565b8015610fa35780601f10610f7857610100808354040283529160200191610fa3565b820191906000526020600020905b815481529060010190602001808311610f8657829003601f168201915b505050505090806008018054610fb890615733565b80601f0160208091040260200160405190810160405280929190818152602001828054610fe490615733565b80156110315780601f1061100657610100808354040283529160200191611031565b820191906000526020600020905b81548152906001019060200180831161101457829003601f168201915b505050505090508a565b336000908152600c602052604090205460ff1661106a5760405162461bcd60e51b8152600401610b559061576d565b80516103289060039060208401906145ea565b6060600061108a83612fb5565b602080820151600090815260098252604080822081518083018352600b81526a476f6f64204f7261636c6560a81b81860152828601518452600a909452908220600201805494955090939192611169929091906110e690615733565b80601f016020809104026020016040519081016040528092919081815260200182805461111290615733565b801561115f5780601f106111345761010080835404028352916020019161115f565b820191906000526020600020905b81548152906001019060200180831161114257829003601f168201915b5050505050613c26565b6111a16040518060400160405280600d81526020016c476f6f6420416374697669747960981b8152508460050180546110e690615733565b61120760405180604001604052806009815260200168476f6f64205479706560b81b81525060076000876001016000815481106111e0576111e06157c0565b9060005260206000200154815260200190815260200160002060020180546110e690615733565b6112556040518060400160405280600d81526020016c476f6f642043617465676f727960981b815250600860008860020154815260200190815260200160002060020180546110e690615733565b61128460405180604001604052806004815260200163155b9a5d60e21b8152508760060180546110e690615733565b6112bc6040518060400160405280600a815260200169115e1d195c9b985b125160b21b8152506112b78a60e00151613c52565b613c26565b6113758860060180546112ce90615733565b80601f01602080910402602001604051908101604052809291908181526020018280546112fa90615733565b80156113475780601f1061131c57610100808354040283529160200191611347565b820191906000526020600020905b81548152906001019060200180831161132a57829003601f168201915b50505050508a6060015160405180604001604052806006815260200165373ab6b132b960d11b815250613d81565b6113c56040518060400160405280600b81526020016a476f6f6420506f696e747360a81b8152508b60c0015160405180604001604052806006815260200165373ab6b132b960d11b815250613d81565b611415604051806040016040528060048152602001634461746560e01b8152508c60a001516001600160401b0316604051806040016040528060048152602001636461746560e01b815250613d81565b60405160200161142d99989796959493929190615821565b6040516020818303038152906040529050600160fd1b816001835161145291906157a9565b81518110611462576114626157c0565b60200101906001600160f81b031916908160001a90535060006114836109da565b61148c87613db8565b8561010001518661012001516114ae8860a001516001600160401b0316613db8565b866040516020016114c4969594939291906158e2565b60405160208183030381529060405290506114de81613ec0565b6040516020016114ee9190615a03565b604051602081830303815290604052945050505050919050565b336000908152600c602052604090205460ff166115375760405162461bcd60e51b8152600401610b559061576d565b80516000036115545761154e601780546001019055565b60175481525b60005b8160200151518110156115e15760016007600084602001518481518110611580576115806157c0565b60209081029190910181015182528101919091526040016000206001015460ff1660048111156115b2576115b26148e9565b146115cf5760405162461bcd60e51b8152600401610b5590615a48565b806115d9816157ec565b915050611557565b50600160408083015160009081526008602052206001015460ff16600481111561160d5761160d6148e9565b1461162a5760405162461bcd60e51b8152600401610b5590615a48565b60008160a00151511161164f5760405162461bcd60e51b8152600401610b5590615a76565b8051600090815260096020908152604090912082518155818301518051849361167f92600185019291019061466e565b50604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908360048111156116be576116be6148e9565b021790555060a082015180516116de9160058401916020909101906145ea565b5060c082015180516116fa9160068401916020909101906145ea565b50905050806040015181600001517f29f55a4079432284bc9ab94f92115353211eb0ef8445340b16a7e1db3bd578a983602001518460a0015185606001518660c001518760800151604051611753959493929190615a9d565b60405180910390a350565b336000908152600c602052604090205460ff1661178d5760405162461bcd60e51b8152600401610b559061576d565b61179681612bff565b506001600160a01b038216158015906117c557506001600160a01b0382166000908152600e6020526040902054155b6118115760405162461bcd60e51b815260206004820152601d60248201527f77616c6c6574206164647265737320616c7265616479206578697374730000006044820152606401610b55565b6001600160a01b0382166000818152600e6020908152604080832085905584835260108252808320600190810180549182018155845291832090910180546001600160a01b03191684179055518392917f0326672e6c32e76e77f14d883f5848b4c2adfb948927e336ec6131a032ce66b191a35050565b6000818152601260205260408120600401546001600160a01b0316806108895760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610b55565b6119456040805160e08101825260008082526020820181905290918201908152602001600060ff1681526020016060815260200160608152602001606081525090565b6000828152600a602052604090205482146119725760405162461bcd60e51b8152600401610b5590615aec565b6000828152600a6020908152604091829020825160e0810184528154815260018201546001600160a01b0381169382019390935292909190830190600160a01b900460ff1660048111156119c8576119c86148e9565b60048111156119d9576119d96148e9565b81526001820154600160a81b900460ff166020820152600282018054604090920191611a0490615733565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3090615733565b8015611a7d5780601f10611a5257610100808354040283529160200191611a7d565b820191906000526020600020905b815481529060010190602001808311611a6057829003601f168201915b50505050508152602001600382018054611a9690615733565b80601f0160208091040260200160405190810160405280929190818152602001828054611ac290615733565b8015611b0f5780601f10611ae457610100808354040283529160200191611b0f565b820191906000526020600020905b815481529060010190602001808311611af257829003601f168201915b5050505050815260200160048201805480602002602001604051908101604052809291908181526020018280548015611b6757602002820191906000526020600020905b815481526020019060010190808311611b53575b5050505050815250509050919050565b6000611b828261356d565b60a001515192915050565b60606000611b9a8361356d565b608001519050600081516001600160401b03811115611bbb57611bbb614aca565b604051908082528060200260200182016040528015611bf457816020015b611be16146a8565b815260200190600190039081611bd95790505b50905060005b8251811015611cd657828181518110611c1557611c156157c0565b6020026020010151828281518110611c2f57611c2f6157c0565b602090810291909101810151919091526001600160a01b0386166000908152600e8252604080822054825260119092529081208451909190859084908110611c7957611c796157c0565b6020026020010151815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050828281518110611cc057611cc06157c0565b6020908102919091018101510152600101611bfa565b509392505050565b336000908152600c602052604090205460ff16611d0d5760405162461bcd60e51b8152600401610b559061576d565b6001600160a01b038316611d2057600080fd5b6000828152600a60205260409020548214611d4d5760405162461bcd60e51b8152600401610b5590615aec565b6001600160a01b03929092166000908152600d6020908152604080832093835292905220805460ff1916911515919091179055565b336000908152600c602052604090205460ff1680611dbe5750336000908152600d602090815260408083206080850151845290915290205460ff165b611dda5760405162461bcd60e51b8152600401610b559061576d565b600080611df4836040015184600001518560200151614024565b915091508260c001516001600160401b0316600003611e2857611e19426103e8615b0f565b6001600160401b031660c08401525b60016060840151600090815260096020526040902060049081015460ff1690811115611e5657611e566148e9565b14611e735760405162461bcd60e51b8152600401610b5590615a48565b600160608401516000908152600960209081526040808320600201548352600890915290206001015460ff166004811115611eb057611eb06148e9565b14611ecd5760405162461bcd60e51b8152600401610b5590615a48565b600160808401516000908152600a6020526040902060010154600160a01b900460ff166004811115611f0157611f016148e9565b14611f1e5760405162461bcd60e51b8152600401610b5590615a48565b6000805b60808501516000908152600a6020526040902060040154811015611f945760808501516000908152600a60205260409020600401805482908110611f6857611f686157c0565b9060005260206000200154856060015103611f8257600191505b80611f8c816157ec565b915050611f22565b5080611ff65760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610b55565b50612005600480546001019055565b600061201060045490565b6000818152601260205260409020549091501561206e5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610b55565b60405181906001600160a01b03841690600090600080516020615f95833981519152908290a4606084015160009081526009602052604081206003015460a08601516120ba9190615b3e565b905060008190506120df86606001518760800151878960c001518a60e0015187614335565b91506120fc60008760800151878960c001518a60e0015187614335565b91508082146121515760808601516060808801516040805191825260208201859052810185905287917f6fec391adcf4a54d1369c43885973442a979f72629593e40381af0e87e3966c9910160405180910390a35b8560800151846001600160a01b0316847fb944b3d86721505073906bf46a2fffc53e52b7741e8e4cd781a443c88f10c12b888a606001518b6101000151888d60a001518e60c001518f60e001516040516121b19796959493929190615b5d565b60405180910390a4600060405180610140016040528085815260200188606001518152602001886080015181526020018860a001518152602001866001600160a01b031681526020018860c001516001600160401b031681526020018481526020018860e001518152602001886101000151815260200188610120015181525090506000600960008960600151815260200190815260200160002060020154905081601260008781526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a08201518160040160146101000a8154816001600160401b0302191690836001600160401b0316021790555060c0820151816005015560e082015181600601556101008201518160070190805190602001906123199291906145ea565b5061012082015180516123369160088401916020909101906145ea565b5050506000878152601060209081526040808320600501805460018181018355918552838520018990558a84526011835281842085855290925282200154900361239f576000878152601060209081526040822060040180546001810182559083529120018190555b600096875260106020908152604080892060028101805488019055600301805487019055601182528089209289529190529095208054830181556001018054830190555060058054909101905550505050565b3360009081526006602052604081205460ff166124215760405162461bcd60e51b8152600401610b559061576d565b6001600160a01b0384166000908152600e6020908152604080832054808452601090925282206002810180549293919287929061245f9084906157a9565b9091555050600281015460408051878152602081019290925285916001600160a01b038916917fa749946c37aa038ce4cb2da01f5c7ecd058016b72f1f52c85cbc68393d5f5a3a910160405180910390a3600082815260116020526040902084156124ed57600085815260208290526040812080548892906124e29084906157a9565b9091555061256a9050565b60005b600483015481101561255e576000836004018281548110612513576125136157c0565b6000918252602080832090910154808352908590526040909120549091508881111561253c5750875b60009182526020849052604090912080548290039055909603956001016124f0565b50851561256a57600080fd5b600193505050505b9392505050565b600054610100900460ff166125945760005460ff1615612598565b303b155b6125fb5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610b55565b600054610100900460ff1615801561261d576000805461ffff19166101011790555b60408051808201909152600b8082526a141c9bdbd993d991dbdbd960aa1b602090920191825261264f916001916145ea565b5060408051808201909152600380825262504f4760e81b602090920191825261267a916002916145ea565b50336000908152600c60205260409020805460ff1916600117905580156126a7576000805461ff00191690555b50565b6126b26146dc565b60008281526009602052604081205490036126df5760405162461bcd60e51b8152600401610b5590615aec565b600082815260096020908152604091829020825160e081018452815481526001820180548551818602810186019096528086529194929385810193929083018282801561274b57602002820191906000526020600020905b815481526020019060010190808311612737575b5050509183525050600282015460208201526003820154604082015260048083015460609092019160ff1690811115612786576127866148e9565b6004811115612797576127976148e9565b81526020016005820180546127ab90615733565b80601f01602080910402602001604051908101604052809291908181526020018280546127d790615733565b80156128245780601f106127f957610100808354040283529160200191612824565b820191906000526020600020905b81548152906001019060200180831161280757829003601f168201915b5050505050815260200160068201805461283d90615733565b80601f016020809104026020016040519081016040528092919081815260200182805461286990615733565b8015611b675780601f1061288b57610100808354040283529160200191611b67565b820191906000526020600020905b81548152906001019060200180831161289957505050919092525091949350505050565b336000908152600c602052604081205460ff166128ec5760405162461bcd60e51b8152600401610b559061576d565b6000826080015151116129115760405162461bcd60e51b8152600401610b5590615a76565b81516000036129a157600b826080015160405161292e9190615bab565b9081526020016040518091039020546000146129895760405162461bcd60e51b815260206004820152601a602482015279676f6f64206f7261636c6520616c72656164792065786973747360301b6044820152606401610b55565b612997601480546001019055565b6014548252612a16565b81516000818152600a6020526040902054146129cf5760405162461bcd60e51b8152600401610b5590615aec565b60808201515115612a1657600b600a600084600001518152602001908152602001600020600201604051612a039190615c60565b9081526020016040518091039020600090555b81516000908152600a602090815260409182902084518155908401516001820180546001600160a01b039092166001600160a01b031983168117825593860151869490926001600160a81b03191617600160a01b836004811115612a7c57612a7c6148e9565b0217905550606082015160018201805460ff909216600160a81b0260ff60a81b1990921691909117905560808201518051612ac19160028401916020909101906145ea565b5060a08201518051612add9160038401916020909101906145ea565b5060c08201518051612af991600484019160209091019061466e565b509050508160000151600b8360800151604051612b169190615bab565b90815260200160405180910390208190555081600001517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5683608001518460a0015185604001518660c00151604051612b729493929190615c6c565b60405180910390a25080515b919050565b6060600280546109e990615733565b336000908152600c602052604090205460ff16612bc15760405162461bcd60e51b8152600401610b559061576d565b6001600160a01b038216612bd457600080fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b612c0761472a565b600082815260106020526040902054612c325760405162461bcd60e51b8152600401610b5590615cb2565b600082815260106020908152604091829020825160c0810184528154815260018201805485518186028101860190965280865291949293858101939290830182828015612ca857602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612c8a575b50505050508152602001600282015481526020016003820154815260200160048201805480602002602001604051908101604052809291908181526020018280548015612d1457602002820191906000526020600020905b815481526020019060010190808311612d00575b5050505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015611b675760200282019190600052602060002090815481526020019060010190808311611b53575050505050815250509050919050565b336000908152600c602052604090205460ff16612da95760405162461bcd60e51b8152600401610b559061576d565b6001600160a01b03919091166000908152600660205260409020805460ff1916911515919091179055565b336000908152600c602052604090205460ff16612e035760405162461bcd60e51b8152600401610b559061576d565b6000825111612e245760405162461bcd60e51b8152600401610b5590615a76565b82600003612e5157612e3a601580546001019055565b601554600081815260086020526040902081905592505b60008381526008602090815260409091208351612e76926002909201918501906145ea565b50600083815260086020526040902060019081018054839260ff1990911690836004811115612ea757612ea76148e9565b0217905550827f037073ee3282c3c1d6de9ffad824bebaa0375c1024dbead3a062c16e7e76d3988383604051612ede929190615cdd565b60405180910390a2505050565b6000818152601260205260409020546060908214612f635760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610b55565b600060038054612f7290615733565b90501115612fac576003612f8583613db8565b604051602001612f96929190615cff565b6040516020818303038152906040529050919050565b6108898261107d565b612fbd614763565b6000612fc883613c12565b905060005b8160a00151518110156131e657838260a001518281518110612ff157612ff16157c0565b6020026020010151036131d457601260008360a001518381518110613018576130186157c0565b6020908102919091018101518252818101929092526040908101600020815161014081018352815481526001820154938101939093526002810154918301919091526003810154606083015260048101546001600160a01b0381166080840152600160a01b90046001600160401b031660a0830152600581015460c0830152600681015460e0830152600781018054610100840191906130b790615733565b80601f01602080910402602001604051908101604052809291908181526020018280546130e390615733565b80156131305780601f1061310557610100808354040283529160200191613130565b820191906000526020600020905b81548152906001019060200180831161311357829003601f168201915b5050505050815260200160088201805461314990615733565b80601f016020809104026020016040519081016040528092919081815260200182805461317590615733565b80156131c25780601f10613197576101008083540402835291602001916131c2565b820191906000526020600020905b8154815290600101906020018083116131a557829003601f168201915b50505050508152505092505050919050565b806131de816157ec565b915050612fcd565b5060405162461bcd60e51b8152600401610b5590615aec565b600a6020526000908152604090208054600182015460028301805492936001600160a01b0383169360ff600160a01b8504811694600160a81b900416929061324690615733565b80601f016020809104026020016040519081016040528092919081815260200182805461327290615733565b80156132bf5780601f10613294576101008083540402835291602001916132bf565b820191906000526020600020905b8154815290600101906020018083116132a257829003601f168201915b50505050509080600301805461095790615733565b600081815260106020526040812060050154606091906001600160401b0381111561330157613301614aca565b60405190808252806020026020018201604052801561333a57816020015b613327614763565b81526020019060019003908161331f5790505b50905060005b6000848152601060205260409020600501548110156135665760008481526010602052604081206005018054601292919084908110613381576133816157c0565b600091825260208083209091015483528281019390935260409182019020815161014081018352815481526001820154938101939093526002810154918301919091526003810154606083015260048101546001600160a01b03811660808401526001600160401b03600160a01b9091041660a0830152600581015460c0830152600681015460e08301526007810180546101008401919061342290615733565b80601f016020809104026020016040519081016040528092919081815260200182805461344e90615733565b801561349b5780601f106134705761010080835404028352916020019161349b565b820191906000526020600020905b81548152906001019060200180831161347e57829003601f168201915b505050505081526020016008820180546134b490615733565b80601f01602080910402602001604051908101604052809291908181526020018280546134e090615733565b801561352d5780601f106135025761010080835404028352916020019161352d565b820191906000526020600020905b81548152906001019060200180831161351057829003601f168201915b505050505081525050828281518110613548576135486157c0565b6020026020010181905250808061355e906157ec565b915050613340565b5092915050565b61357561472a565b6001600160a01b0382166000908152600e602052604090205461088990612bff565b336000908152600c602052604090205460ff166135c65760405162461bcd60e51b8152600401610b559061576d565b60008251116135e75760405162461bcd60e51b8152600401610b5590615a76565b82600003613614576135fd601680546001019055565b601654600081815260076020526040902081905592505b60008381526007602090815260409091208351613639926002909201918501906145ea565b50600083815260076020526040902060019081018054839260ff199091169083600481111561366a5761366a6148e9565b0217905550827f9c72f12d46e6b2fb09fe6cb0d2e26e022402c9e96cb5f88dea9307870110ab708383604051612ede929190615cdd565b60606000826001600160401b038111156136bd576136bd614aca565b6040519080825280602002602001820160405280156136f657816020015b6136e36147cb565b8152602001906001900390816136db5790505b50905060005b83811015611cd657600061372a86868481811061371b5761371b6157c0565b90506040020160000135612fb5565b90506137346147cb565b6000878785818110613748576137486157c0565b90506040020160200160208101906137609190615d34565b6001600160401b03169050808360c00151101561377e575060c08201515b6020808401516000908152600990915260408120600301546137a09083615d65565b8451845260a08501516001600160401b031660208086019190915260808601516001600160a01b03166000908152600e82526040808220548151808501919091528151808203850181529082018252818801528288015182526009909252908120600101805492935091613816576138166157c0565b600091825260208220015461ffff1660608501526080840152604084015163ffffffff90811660a0850152811660c084018190526001600160401b03831660e0850152610100808601519085015261386d90613db8565b6009600086602001518152602001908152602001600020600601604051602001613898929190615d79565b604051602081830303815290604052836101200181905250828686815181106138c3576138c36157c0565b60200260200101819052505050505080806138dd906157ec565b9150506136fc565b600860205260009081526040902080546001820154600283018054929360ff90921692610a9f90615733565b336000908152600c602052604090205460ff166139405760405162461bcd60e51b8152600401610b559061576d565b60009384526013602090815260408086209486529390529190922080546001600160401b0319166001600160401b0393909316929092178255600190910155565b336000908152600c602052604090205460ff166139b05760405162461bcd60e51b8152600401610b559061576d565b6000828152601060205260408082208383529120828403613a025760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610b55565b83151580613a0f57508215155b613a2b5760405162461bcd60e51b8152600401610b5590615cb2565b600280820154908301805490910190556003808201549083018054909101905560005b6001820154811015613af95782600101826001018281548110613a7357613a736157c0565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b0390921691909117905590830180548792600e92909185908110613acc57613acc6157c0565b60009182526020808320909101546001600160a01b03168352820192909252604001902055600101613a4e565b5060005b6004820154811015613bc0576000826004018281548110613b2057613b206157c0565b60009182526020808320909101548883526011808352604080852083865284528085208a86529184528085208386529093529183206001830154919450919203613b7f5760048601805460018101825560009182526020909120018390555b805482540182556001908101549181018054909201909155600086815260116020908152604080832094835293905291822082815581019190915501613afd565b5060006002820181905560038201819055613bdf90600183019061481e565b604051839085907f29b215afec5f4dc18ce16b02452f35cbba1f488896ef8874b9b7a54baa6d42b090600090a350505050565b613c1a61472a565b61088961074b83611888565b60608282604051602001613c3b929190615da3565b604051602081830303815290604052905092915050565b606060005b60208160ff16108015613c8b5750828160ff1660208110613c7a57613c7a6157c0565b1a60f81b6001600160f81b03191615155b15613ca25780613c9a81615e16565b915050613c57565b60008160ff166001600160401b03811115613cbf57613cbf614aca565b6040519080825280601f01601f191660200182016040528015613ce9576020820181803683370190505b509050600091505b60208260ff16108015613d255750838260ff1660208110613d1457613d146157c0565b1a60f81b6001600160f81b03191615155b1561257257838260ff1660208110613d3f57613d3f6157c0565b1a60f81b818360ff1681518110613d5857613d586157c0565b60200101906001600160f81b031916908160001a90535081613d7981615e16565b925050613cf1565b60608382613d8e85613db8565b604051602001613da093929190615e35565b60405160208183030381529060405290509392505050565b606081600003613ddf5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115613e095780613df3816157ec565b9150613e029050600a83615d65565b9150613de3565b6000816001600160401b03811115613e2357613e23614aca565b6040519080825280601f01601f191660200182016040528015613e4d576020820181803683370190505b5090505b8415613eb857613e626001836157a9565b9150613e6f600a86615eda565b613e7a906030615eee565b60f81b818381518110613e8f57613e8f6157c0565b60200101906001600160f81b031916908160001a905350613eb1600a86615d65565b9450613e51565b949350505050565b60608151600003613edf57505060408051602081019091526000815290565b6000604051806060016040528060408152602001615f556040913990506000600384516002613f0e9190615eee565b613f189190615d65565b613f23906004615b3e565b90506000613f32826020615eee565b6001600160401b03811115613f4957613f49614aca565b6040519080825280601f01601f191660200182016040528015613f73576020820181803683370190505b509050818152600183018586518101602084015b81831015613fdf576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101613f87565b600389510660018114613ff9576002811461400a57614016565b613d3d60f01b600119830152614016565b603d60f81b6000198301525b509398975050505050505050565b600080841561418f5760008581526010602052604090205461418a576001600160a01b0384161580159061406f57506001600160a01b0384166000908152600e602052604090205415155b15614094576001600160a01b0384166000908152600e602052604090205494506141d6565b82158015906140b057506000838152600f602052604090205415155b156140cb576000838152600f602052604090205494506141d6565b6001600160a01b0384166140f15760405162461bcd60e51b8152600401610b5590615f06565b600085815260106020818152604080842089815581518084019092526001600160a01b038916825293899052919052614130916001908101919061483c565b506001600160a01b0384166000818152600e602052604090819020879055518691907f101f74814a060c243b4178543008d04967d667e5b262d151af81b054a1c2bc58906141819087815260200190565b60405180910390a35b6141d6565b6001600160a01b038416156141be576001600160a01b0384166000908152600e602052604090205494506141d6565b82156141d6576000838152600f602052604090205494505b84158015906141f2575060008581526010602052604090205485145b61420e5760405162461bcd60e51b8152600401610b5590615cb2565b6001600160a01b038416614256576000858152601060205260408120600101805490919061423e5761423e6157c0565b6000918252602090912001546001600160a01b031693505b6001600160a01b03841661427c5760405162461bcd60e51b8152600401610b5590615f06565b6001600160a01b0384166000908152600e60205260409020546142a3576142a3848661175e565b82158015906142c057506000838152600f60205260409020548514155b1561432c576000838152600f60205260409020541561431a5760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610b55565b6000838152600f602052604090208590555b50929391925050565b60008481526010602052604081208190815b600582015481101561451157600082600501828154811061436a5761436a6157c0565b60009182526020808320909101548d83526013825260408084208e85529092529120549091506143a5906001600160401b03166103e8615b0f565b6000828152601260205260409020600401546001600160401b0391821691600160a01b9091048116908a161161440757600082815260126020526040902060040154614402908a90600160a01b90046001600160401b0316615f2c565b614433565b60008281526012602052604090206004015461443390600160a01b90046001600160401b03168a615f2c565b6001600160401b0316116144605760008181526012602052604090206005015461445d9085615eee565b93505b6000818152601260205260409020600401546001600160401b03898116600160a01b909204161415806144a457506000818152601260205260409020600101548b14155b806144c057506000818152601260205260409020600601548714155b6144fe5760405162461bcd60e51b815260206004820152600f60248201526e6475706c696361746520656e74727960881b6044820152606401610b55565b5080614509816157ec565b915050614347565b5060008981526013602090815260408083208b845290915290206001015415801590614561575060008981526013602090815260408083208b845290915290206001015461455f8386615eee565b115b156145a05760008981526013602090815260408083208b845290915290206001015461458d8386615eee565b61459791906157a9565b925050506145a6565b83925050505b9695505050505050565b5080546145bc90615733565b6000825580601f106145cc575050565b601f0160209004906000526020600020908101906126a79190614891565b8280546145f690615733565b90600052602060002090601f016020900481019282614618576000855561465e565b82601f1061463157805160ff191683800117855561465e565b8280016001018555821561465e579182015b8281111561465e578251825591602001919060010190614643565b5061466a929150614891565b5090565b82805482825590600052602060002090810192821561465e579160200282018281111561465e578251825591602001919060010190614643565b6040518060400160405280600081526020016146d7604051806040016040528060008152602001600081525090565b905290565b6040518060e001604052806000815260200160608152602001600081526020016000815260200160006004811115614716576147166148e9565b815260200160608152602001606081525090565b6040518060c001604052806000801916815260200160608152602001600081526020016000815260200160608152602001606081525090565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160401b03168152602001600081526020016000801916815260200160608152602001606081525090565b604080516101408101825260008082526020820181905260609282018390528282018190526080820181905260a0820181905260c0820181905260e0820152610100810182905261012081019190915290565b50805460008255906000526020600020908101906126a79190614891565b82805482825590600052602060002090810192821561465e579160200282015b8281111561465e57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061485c565b5b8082111561466a5760008155600101614892565b6000602082840312156148b857600080fd5b81356001600160e01b03198116811461257257600080fd5b6000602082840312156148e257600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6005811061491d57634e487b7160e01b600052602160045260246000fd5b9052565b60005b8381101561493c578181015183820152602001614924565b8381111561494b576000848401525b50505050565b60008151808452614969816020860160208601614921565b601f01601f19169290920160200192915050565b86815285602082015284604082015261499960608201856148ff565b60c0608082015260006149af60c0830185614951565b82810360a08401526149c18185614951565b9998505050505050505050565b6020815260006125726020830184614951565b80356001600160a01b0381168114612b7e57600080fd5b60008060408385031215614a0b57600080fd5b614a14836149e1565b946020939093013593505050565b838152614a3260208201846148ff565b606060408201526000614a486060830184614951565b95945050505050565b60008060408385031215614a6457600080fd5b50508035926020909101359150565b600080600060608486031215614a8857600080fd5b614a91846149e1565b9250614a9f602085016149e1565b9150604084013590509250925092565b600060208284031215614ac157600080fd5b612572826149e1565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715614b0257614b02614aca565b60405290565b60405161014081016001600160401b0381118282101715614b0257614b02614aca565b604051601f8201601f191681016001600160401b0381118282101715614b5357614b53614aca565b604052919050565b60006001600160401b03831115614b7457614b74614aca565b614b87601f8401601f1916602001614b2b565b9050828152838383011115614b9b57600080fd5b828260208301376000602084830101529392505050565b600082601f830112614bc357600080fd5b61257283833560208501614b5b565b600060208284031215614be457600080fd5b81356001600160401b03811115614bfa57600080fd5b613eb884828501614bb2565b600081518084526020808501945080840160005b83811015614c3657815187529582019590820190600101614c1a565b509495945050505050565b6020815260006125726020830184614c06565b8a8152602081018a905260408101899052606081018890526001600160a01b03871660808201526001600160401b03861660a082015260c0810185905260e081018490526101406101008201819052600090614cb283820186614951565b9050828103610120840152614cc78185614951565b9d9c50505050505050505050505050565b600082601f830112614ce957600080fd5b813560206001600160401b03821115614d0457614d04614aca565b8160051b614d13828201614b2b565b9283528481018201928281019087851115614d2d57600080fd5b83870192505b84831015614d4c57823582529183019190830190614d33565b979650505050505050565b803560058110612b7e57600080fd5b600060208284031215614d7857600080fd5b81356001600160401b0380821115614d8f57600080fd5b9083019060e08286031215614da357600080fd5b614dab614ae0565b82358152602083013582811115614dc157600080fd5b614dcd87828601614cd8565b6020830152506040830135604082015260608301356060820152614df360808401614d57565b608082015260a083013582811115614e0a57600080fd5b614e1687828601614bb2565b60a08301525060c083013582811115614e2e57600080fd5b614e3a87828601614bb2565b60c08301525095945050505050565b602081528151602082015260018060a01b03602083015116604082015260006040830151614e7a60608401826148ff565b5060ff6060840151166080830152608083015160e060a0840152614ea2610100840182614951565b905060a0840151601f19808584030160c0860152614ec08383614951565b925060c08601519150808584030160e086015250614a488282614c06565b602080825282518282018190526000919060409081850190868401855b82811015614f2b578151805185528601518051878601528601518585015260609093019290850190600101614efb565b5091979650505050505050565b80358015158114612b7e57600080fd5b600080600060608486031215614f5d57600080fd5b614f66846149e1565b925060208401359150614f7b60408501614f38565b90509250925092565b80356001600160401b0381168114612b7e57600080fd5b600060208284031215614fad57600080fd5b81356001600160401b0380821115614fc457600080fd5b908301906101408286031215614fd957600080fd5b614fe1614b08565b614fea836149e1565b81526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015261502a60c08401614f84565b60c082015260e083013560e0820152610100808401358381111561504d57600080fd5b61505988828701614bb2565b828401525050610120808401358381111561507357600080fd5b61507f88828701614bb2565b918301919091525095945050505050565b6000806000606084860312156150a557600080fd5b6150ae846149e1565b95602085013595506040909401359392505050565b60208152815160208201526000602083015160e060408401526150ea610100840182614c06565b90506040840151606084015260608401516080840152608084015161511260a08501826148ff565b5060a0840151601f19808584030160c086015261512f8383614951565b925060c08601519150808584030160e086015250614a488282614951565b803560ff81168114612b7e57600080fd5b60006020828403121561517057600080fd5b81356001600160401b038082111561518757600080fd5b9083019060e0828603121561519b57600080fd5b6151a3614ae0565b823581526151b3602084016149e1565b60208201526151c460408401614d57565b60408201526151d56060840161514d565b60608201526080830135828111156151ec57600080fd5b6151f887828601614bb2565b60808301525060a08301358281111561521057600080fd5b61521c87828601614bb2565b60a08301525060c08301358281111561523457600080fd5b614e3a87828601614cd8565b6000806040838503121561525357600080fd5b61525c836149e1565b915061526a60208401614f38565b90509250929050565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156152cb5783516001600160a01b031682529284019260019290920191908401906152a2565b50604087015160608701526060870151608087015260808701519350601f199250828682030160a08701526153008185614c06565b9350505060a0850151818584030160c08601526145a68382614c06565b60008060006060848603121561533257600080fd5b8335925060208401356001600160401b0381111561534f57600080fd5b61535b86828701614bb2565b925050614f7b60408501614d57565b6000806000806080858703121561538057600080fd5b615389856149e1565b9350615397602086016149e1565b92506040850135915060608501356001600160401b038111156153b957600080fd5b8501601f810187136153ca57600080fd5b6153d987823560208401614b5b565b91505092959194509250565b600061014082518452602083015160208501526040830151604085015260608301516060850152608083015161542660808601826001600160a01b03169052565b5060a083015161544160a08601826001600160401b03169052565b5060c083015160c085015260e083015160e085015261010080840151828287015261546e83870182614951565b9250505061012080840151858303828701526145a68382614951565b60208152600061257260208301846153e5565b8681526001600160a01b03861660208201526154bc60408201866148ff565b60ff8416606082015260c0608082015260006149af60c0830185614951565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561553057603f1988860301845261551e8583516153e5565b94509285019290850190600101615502565b5092979650505050505050565b6000806020838503121561555057600080fd5b82356001600160401b038082111561556757600080fd5b818501915085601f83011261557b57600080fd5b81358181111561558a57600080fd5b8660208260061b850101111561559f57600080fd5b60209290920196919550909350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156156be57603f19898403018552815180518452878101516001600160401b031688850152868101516101408886018190529061561a82870182614951565b9150506060808301516156328288018261ffff169052565b50506080828101519086015260a08083015163ffffffff9081169187019190915260c0808401519091169086015260e0808301516001600160401b031690860152610100808301518683038288015261568b8382614951565b9250505061012080830151925085820381870152506156aa8183614951565b9689019694505050908601906001016155d8565b509098975050505050505050565b600080600080608085870312156156e257600080fd5b84359350602085013592506156f960408601614f84565b9396929550929360600135925050565b6000806040838503121561571c57600080fd5b615725836149e1565b915061526a602084016149e1565b600181811c9082168061574757607f821691505b60208210810361576757634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b1b9bdd08185c1c1c9bdd995960a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156157bb576157bb615793565b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b6000600182016157fe576157fe615793565b5060010190565b60008151615817818560208601614921565b9290920192915050565b60008a51615833818460208f01614921565b8a516158458183860160208f01614921565b8a51918401019061585a818360208e01614921565b895161586c8183850160208e01614921565b8951929091010190615882818360208c01614921565b87516158948183850160208c01614921565b87519290910101906158aa818360208a01614921565b85516158bc8183850160208a01614921565b85519290910101906158d2818360208801614921565b019b9a5050505050505050505050565b683d913730b6b2911d1160b91b81528651600090615907816009850160208c01614921565b61202360f01b600991840191820152875161592981600b840160208c01614921565b6b1116101134b6b0b3b2911d1160a11b600b92909101918201528651615956816017840160208b01614921565b7211161130b734b6b0ba34b7b72fbab936111d1160691b60179290910191820152855161598a81602a840160208a01614921565b69111610113230ba32911d60b11b602a929091019182015284516159b5816034840160208901614921565b6159f56159e66159e06034848601016f2c202261747472696275746573223a5b60801b815260100190565b87615805565b625d207d60e81b815260030190565b9a9950505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251615a3b81601d850160208701614921565b91909101601d0192915050565b6020808252601490820152731b9bdd081858dd1a5d994bdb9bdd08199bdd5b9960621b604082015260600190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b60a081526000615ab060a0830188614c06565b8281036020840152615ac28188614951565b90508560408401528281036060840152615adc8186614951565b9150506145a660808301846148ff565b6020808252600990820152681b9bdd08199bdd5b9960ba1b604082015260600190565b60006001600160401b0382811684821681151582840482111615615b3557615b35615793565b02949350505050565b6000816000190483118215151615615b5857615b58615793565b500290565b87815286602082015260e060408201526000615b7c60e0830188614951565b60608301969096525060808101939093526001600160401b039190911660a083015260c0909101529392505050565b60008251615bbd818460208701614921565b9190910192915050565b8054600090600181811c9080831680615be157607f831692505b60208084108203615c0257634e487b7160e01b600052602260045260246000fd5b818015615c165760018114615c2757615c54565b60ff19861689528489019650615c54565b60008881526020902060005b86811015615c4c5781548b820152908501908301615c33565b505084890196505b50505050505092915050565b60006125728284615bc7565b608081526000615c7f6080830187614951565b8281036020840152615c918187614951565b9050615ca060408401866148ff565b8281036060840152614d4c8185614c06565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b604081526000615cf06040830185614951565b905061257260208301846148ff565b6000615d0b8285615bc7565b8351615d1b818360208801614921565b64173539b7b760d91b9101908152600501949350505050565b600060208284031215615d4657600080fd5b61257282614f84565b634e487b7160e01b600052601260045260246000fd5b600082615d7457615d74615d4f565b500490565b60008351615d8b818460208801614921565b600160fd1b908301908152614a486001820185615bc7565b6e3d913a3930b4ba2fba3cb832911d1160891b81528251600090615dce81600f850160208801614921565b6b111610113b30b63ab2911d1160a11b600f918401918201528351615dfa81601b840160208801614921565b62089f4b60ea1b601b9290910191820152601e01949350505050565b600060ff821660ff8103615e2c57615e2c615793565b60010192915050565b6e3d913a3930b4ba2fba3cb832911d1160891b81528351600090615e6081600f850160208901614921565b711116113234b9b83630bcafba3cb832911d1160711b600f918401918201528451615e92816021840160208901614921565b6a111610113b30b63ab2911d60a91b602192909101918201528351615ebe81602c840160208801614921565b611f4b60f21b602c9290910191820152602e0195945050505050565b600082615ee957615ee9615d4f565b500690565b60008219821115615f0157615f01615793565b500190565b6020808252600c908201526b6d697373696e67206461746160a01b604082015260600190565b60006001600160401b0383811690831681811015615f4c57615f4c615793565b03939250505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b0e1c614a2eea9333cbf1d327fd795099b48136fc1e0907f4bbe0808ec17089b64736f6c634300080d0033',
  linkReferences: {},
  deployedLinkReferences: {},
};
