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
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
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
          internalType: 'bytes32',
          name: '_emailHash',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: '_walletAddress',
          type: 'address',
        },
      ],
      name: 'associateEmailHashToWalletAddress',
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
    '0x608060405234801561001057600080fd5b50615f3f80620000216000396000f3fe608060405234801561001057600080fd5b50600436106102885760003560e01c806301ffc9a71461028d578063056a305c146102b557806306fdde03146102da578063081812fc146102ef578063095ea7b31461031a5780630c97174f1461032e57806316feb0d0146103465780631d3a5d2914610359578063220c7304146103635780632300b38f1461038557806323b872dd146103e25780632b325b3b146103f5578063392b7633146104185780633b093ddc1461044357806342842e0e146103e257806342966c681461048d578063429b62e5146104a0578063438b6300146104c357806347f6acf1146104e35780634bf25ae1146104ec5780634f64b2be1461050c57806355f804b3146105355780635ac1e3bb146105485780635fc5f9a81461055b5780636352211e1461056e5780636bfdca221461058157806370a08231146105a157806370dab1de146105b457806373bf6182146105d457806374bd35b1146105e75780637dba5f93146105fa5780638129fc1c1461060d578063838bf3e51461061557806391b5e5de1461063557806395d89b4114610648578063a22cb46514610650578063a4230bd51461065e578063aaa758b114610671578063b10be93114610691578063b30374cd146106a4578063b88d4fde146106b7578063c87b56dd146106c5578063cc33c875146106d8578063cf3b7d90146106f8578063d33e51501461071d578063d69167e51461073d578063d6918fdb14610750578063d94a28d11461075a578063dd86d01b1461076d578063dfb19bf81461078d578063e1f87749146107a0578063e204300a146107ce578063e272578e146107e1578063e44bd39b14610801578063e985e9c514610814578063efdcc47f1461082a575b600080fd5b6102a061029b366004614789565b61083d565b60405190151581526020015b60405180910390f35b6102c86102c33660046147b3565b61088f565b6040516102ac96959493929190614860565b6102e26109da565b6040516102ac91906148b1565b6103026102fd3660046147b3565b610a6c565b6040516001600160a01b0390911681526020016102ac565b61032c6103283660046148db565b5050565b005b6015546103389081565b6040519081526020016102ac565b61032c610354366004614905565b610a73565b6017546103389081565b6103766103713660046147b3565b610b12565b6040516102ac93929190614931565b6103c3610393366004614957565b6013602090815260009283526040808420909152908252902080546001909101546001600160401b039091169082565b604080516001600160401b0390931683526020830191909152016102ac565b61032c6103f0366004614979565b610bc1565b6102a06104033660046149b5565b60066020526000908152604090205460ff1681565b610338610426366004614ad8565b8051602081830181018051600b8252928201919093012091525481565b6104726104513660046147b3565b60106020526000908152604090208054600282015460039092015490919083565b604080519384526020840192909252908201526060016102ac565b61032c61049b3660046147b3565b610bf8565b6102a06104ae3660046149b5565b600c6020526000908152604090205460ff1681565b6104d66104d13660046149b5565b610f4b565b6040516102ac9190614b47565b61033860055481565b6103386104fa3660046147b3565b600f6020526000908152604090205481565b61051f61051a3660046147b3565b610f60565b6040516102ac9a99989796959493929190614b5a565b61032c610543366004614ad8565b6110d5565b6102e26105563660046147b3565b611117565b61032c610569366004614c6c565b6115a2565b61030261057c3660046147b3565b6117f8565b61059461058f3660046147b3565b611872565b6040516102ac9190614d4f565b6103386105af3660046149b5565b611ae7565b6105c76105c23660046149b5565b611afd565b6040516102ac9190614de4565b61032c6105e2366004614e4e565b611c4e565b61032c6105f5366004614ea1565b611cf2565b6102a0610608366004614f96565b6122ff565b61032c612486565b6106286106233660046147b3565b61256b565b6040516102ac9190614fc9565b610338610643366004615064565b61277e565b6102e2612a44565b61032c610328366004615146565b61032c61066c366004615146565b612a53565b61068461067f3660046147b3565b612ac0565b6040516102ac9190615170565b61032c61069f366004615146565b612c3b565b61032c6106b2366004615224565b612c95565b61032c6103f0366004615271565b6102e26106d33660046147b3565b612dac565b6106eb6106e63660046147b3565b612e76565b6040516102ac9190615391565b61070b6107063660046147b3565b6130c0565b6040516102ac969594939291906153a4565b61073061072b3660046147b3565b613195565b6040516102ac91906153e2565b61068461074b3660046149b5565b61342e565b6016546103389081565b61032c610768366004615224565b613458565b61078061077b366004615444565b613562565b6040516102ac91906154b8565b61037661079b3660046147b3565b6137a6565b6102a06107ae3660046148db565b600d60209081526000928352604080842090915290825290205460ff1681565b61032c6107dc3660046155d3565b6137d2565b6103386107ef3660046149b5565b600e6020526000908152604090205481565b61032c61080f366004614957565b613842565b6102a0610822366004615610565b600092915050565b6106846108383660046147b3565b613ad3565b60006001600160e01b031982166380ac58cd60e01b148061086e57506001600160e01b03198216635b5e139f60e01b145b8061088957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6009602052600090815260409020805460028201546003830154600484015460058501805494959394929360ff909216926108c99061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546108f59061563a565b80156109425780601f1061091757610100808354040283529160200191610942565b820191906000526020600020905b81548152906001019060200180831161092557829003601f168201915b5050505050908060060180546109579061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546109839061563a565b80156109d05780601f106109a5576101008083540402835291602001916109d0565b820191906000526020600020905b8154815290600101906020018083116109b357829003601f168201915b5050505050905086565b6060600180546109e99061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a159061563a565b8015610a625780601f10610a3757610100808354040283529160200191610a62565b820191906000526020600020905b815481529060010190602001808311610a4557829003601f168201915b5050505050905090565b6000806000fd5b336000908152600c602052604090205460ff16610aab5760405162461bcd60e51b8152600401610aa290615674565b60405180910390fd5b6001600160a01b0381166000908152600e60205260409020548015801590610ae0575060008181526010602052604090205481145b610afc5760405162461bcd60e51b8152600401610aa29061569a565b6000928352600f60205260409092209190915550565b600760205260009081526040902080546001820154600283018054929360ff90921692610b3e9061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6a9061563a565b8015610bb75780601f10610b8c57610100808354040283529160200191610bb7565b820191906000526020600020905b815481529060010190602001808311610b9a57829003601f168201915b5050505050905083565b60405162461bcd60e51b815260206004820152600c60248201526b6e6f207472616e736665727360a01b6044820152606401610aa2565b336000908152600c602052604090205460ff1680610c3857506000818152601260205260409020600401546001600160a01b0316336001600160a01b0316145b80610c6a5750336000908152600d602090815260408083208484526012835281842060020154845290915290205460ff165b610c865760405162461bcd60e51b8152600401610aa290615674565b6000600e6000610c95846117f8565b6001600160a01b0316815260208082019290925260409081016000908120548582526012845282822060018101548352600985528383206002908101546005909201548385526010909652938320909301805491955092939283929091610cfd9084906156db565b9091555050600083815260116020908152604080832085845290915281208054839290610d2b9084906156db565b90915550506000838152601060209081526040808320600301805485900390556011825280832085845282528083206001018054859003905560058054859003905586835260129091528082206004015490518692916001600160a01b031690600080516020615eea833981519152908390a4600084815260126020908152604091829020600281015460048201546001909201548451908152928301859052926001600160a01b039091169187917fefae2827954a7dcec4635167b069ceff340e9acc450f5533d25bc14f081a8743910160405180910390a460008481526012602052604081208181556001810182905560028101829055600381018290556004810180546001600160e01b0319169055600581018290556006810182905590610e596007830182614493565b610e67600883016000614493565b50506000838152601060205260408120905b6005820154811015610f435785826005018281548110610e9b57610e9b6156f2565b906000526020600020015403610f3157600582015460011015610f0757600582018054610eca906001906156db565b81548110610eda57610eda6156f2565b9060005260206000200154826005018281548110610efa57610efa6156f2565b6000918252602090912001555b81600501805480610f1a57610f1a615708565b600190038181906000526020600020016000905590555b80610f3b8161571e565b915050610e79565b505050505050565b6060610f568261342e565b60a0015192915050565b6012602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460078801805497989697959694956001600160a01b03851695600160a01b9095046001600160401b0316949190610fc49061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff09061563a565b801561103d5780601f106110125761010080835404028352916020019161103d565b820191906000526020600020905b81548152906001019060200180831161102057829003601f168201915b5050505050908060080180546110529061563a565b80601f016020809104026020016040519081016040528092919081815260200182805461107e9061563a565b80156110cb5780601f106110a0576101008083540402835291602001916110cb565b820191906000526020600020905b8154815290600101906020018083116110ae57829003601f168201915b505050505090508a565b336000908152600c602052604090205460ff166111045760405162461bcd60e51b8152600401610aa290615674565b80516103289060039060208401906144cd565b6060600061112483612e76565b602080820151600090815260098252604080822081518083018352600b81526a476f6f64204f7261636c6560a81b81860152828601518452600a909452908220600201805494955090939192611203929091906111809061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546111ac9061563a565b80156111f95780601f106111ce576101008083540402835291602001916111f9565b820191906000526020600020905b8154815290600101906020018083116111dc57829003601f168201915b5050505050613ae7565b61123b6040518060400160405280600d81526020016c476f6f6420416374697669747960981b8152508460050180546111809061563a565b6112a160405180604001604052806009815260200168476f6f64205479706560b81b815250600760008760010160008154811061127a5761127a6156f2565b9060005260206000200154815260200190815260200160002060020180546111809061563a565b6112ef6040518060400160405280600d81526020016c476f6f642043617465676f727960981b815250600860008860020154815260200190815260200160002060020180546111809061563a565b61131e60405180604001604052806004815260200163155b9a5d60e21b8152508760060180546111809061563a565b6113566040518060400160405280600a815260200169115e1d195c9b985b125160b21b8152506113518a60e00151613b13565b613ae7565b61140f8860060180546113689061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546113949061563a565b80156113e15780601f106113b6576101008083540402835291602001916113e1565b820191906000526020600020905b8154815290600101906020018083116113c457829003601f168201915b50505050508a6060015160405180604001604052806006815260200165373ab6b132b960d11b815250613c42565b61145f6040518060400160405280600b81526020016a476f6f6420506f696e747360a81b8152508b60c0015160405180604001604052806006815260200165373ab6b132b960d11b815250613c42565b6114af604051806040016040528060048152602001634461746560e01b8152508c60a001516001600160401b0316604051806040016040528060048152602001636461746560e01b815250613c42565b6040516020016114c799989796959493929190615753565b6040516020818303038152906040529050600160fd1b81600183516114ec91906156db565b815181106114fc576114fc6156f2565b60200101906001600160f81b031916908160001a905350600061151d6109da565b61152687613c79565b8561010001518661012001516115488860a001516001600160401b0316613c79565b8660405160200161155e96959493929190615814565b604051602081830303815290604052905061157881613d81565b6040516020016115889190615935565b604051602081830303815290604052945050505050919050565b336000908152600c602052604090205460ff166115d15760405162461bcd60e51b8152600401610aa290615674565b80516000036115ee576115e8601780546001019055565b60175481525b60005b81602001515181101561167b576001600760008460200151848151811061161a5761161a6156f2565b60209081029190910181015182528101919091526040016000206001015460ff16600481111561164c5761164c6147cc565b146116695760405162461bcd60e51b8152600401610aa29061597a565b806116738161571e565b9150506115f1565b50600160408083015160009081526008602052206001015460ff1660048111156116a7576116a76147cc565b146116c45760405162461bcd60e51b8152600401610aa29061597a565b60008160a0015151116116e95760405162461bcd60e51b8152600401610aa2906159a8565b80516000908152600960209081526040909120825181558183015180518493611719926001850192910190614551565b50604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690836004811115611758576117586147cc565b021790555060a082015180516117789160058401916020909101906144cd565b5060c082015180516117949160068401916020909101906144cd565b50905050806040015181600001517f29f55a4079432284bc9ab94f92115353211eb0ef8445340b16a7e1db3bd578a983602001518460a0015185606001518660c0015187608001516040516117ed9594939291906159cf565b60405180910390a350565b6000818152601260205260408120600401546001600160a01b0316806108895760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610aa2565b6118b56040805160e08101825260008082526020820181905290918201908152602001600060ff1681526020016060815260200160608152602001606081525090565b6000828152600a602052604090205482146118e25760405162461bcd60e51b8152600401610aa290615a1e565b6000828152600a6020908152604091829020825160e0810184528154815260018201546001600160a01b0381169382019390935292909190830190600160a01b900460ff166004811115611938576119386147cc565b6004811115611949576119496147cc565b81526001820154600160a81b900460ff1660208201526002820180546040909201916119749061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546119a09061563a565b80156119ed5780601f106119c2576101008083540402835291602001916119ed565b820191906000526020600020905b8154815290600101906020018083116119d057829003601f168201915b50505050508152602001600382018054611a069061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054611a329061563a565b8015611a7f5780601f10611a5457610100808354040283529160200191611a7f565b820191906000526020600020905b815481529060010190602001808311611a6257829003601f168201915b5050505050815260200160048201805480602002602001604051908101604052809291908181526020018280548015611ad757602002820191906000526020600020905b815481526020019060010190808311611ac3575b5050505050815250509050919050565b6000611af28261342e565b60a001515192915050565b60606000611b0a8361342e565b608001519050600081516001600160401b03811115611b2b57611b2b6149d0565b604051908082528060200260200182016040528015611b6457816020015b611b5161458b565b815260200190600190039081611b495790505b50905060005b8251811015611c4657828181518110611b8557611b856156f2565b6020026020010151828281518110611b9f57611b9f6156f2565b602090810291909101810151919091526001600160a01b0386166000908152600e8252604080822054825260119092529081208451909190859084908110611be957611be96156f2565b6020026020010151815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050828281518110611c3057611c306156f2565b6020908102919091018101510152600101611b6a565b509392505050565b336000908152600c602052604090205460ff16611c7d5760405162461bcd60e51b8152600401610aa290615674565b6001600160a01b038316611c9057600080fd5b6000828152600a60205260409020548214611cbd5760405162461bcd60e51b8152600401610aa290615a1e565b6001600160a01b03929092166000908152600d6020908152604080832093835292905220805460ff1916911515919091179055565b336000908152600c602052604090205460ff1680611d2e5750336000908152600d602090815260408083206080850151845290915290205460ff165b611d4a5760405162461bcd60e51b8152600401610aa290615674565b600080611d64836040015184600001518560200151613ee5565b915091508260c001516001600160401b0316600003611d9857611d89426103e8615a41565b6001600160401b031660c08401525b60016060840151600090815260096020526040902060049081015460ff1690811115611dc657611dc66147cc565b14611de35760405162461bcd60e51b8152600401610aa29061597a565b600160608401516000908152600960209081526040808320600201548352600890915290206001015460ff166004811115611e2057611e206147cc565b14611e3d5760405162461bcd60e51b8152600401610aa29061597a565b600160808401516000908152600a6020526040902060010154600160a01b900460ff166004811115611e7157611e716147cc565b14611e8e5760405162461bcd60e51b8152600401610aa29061597a565b6000805b60808501516000908152600a6020526040902060040154811015611f045760808501516000908152600a60205260409020600401805482908110611ed857611ed86156f2565b9060005260206000200154856060015103611ef257600191505b80611efc8161571e565b915050611e92565b5080611f665760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610aa2565b50611f75600480546001019055565b6000611f8060045490565b60008181526012602052604090205490915015611fde5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610aa2565b60405181906001600160a01b03841690600090600080516020615eea833981519152908290a4606084015160009081526009602052604081206003015460a086015161202a9190615a70565b905061204585606001518660800151868860c0015185614236565b905061205d60008660800151868860c0015185614236565b90508460800151836001600160a01b0316837fb944b3d86721505073906bf46a2fffc53e52b7741e8e4cd781a443c88f10c12b8789606001518a6101000151878c60a001518d60c001518e60e001516040516120bf9796959493929190615a8f565b60405180910390a4600060405180610140016040528084815260200187606001518152602001876080015181526020018760a001518152602001856001600160a01b031681526020018760c001516001600160401b031681526020018381526020018760e001518152602001876101000151815260200187610120015181525090506000600960008860600151815260200190815260200160002060020154905081601260008681526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a08201518160040160146101000a8154816001600160401b0302191690836001600160401b0316021790555060c0820151816005015560e082015181600601556101008201518160070190805190602001906122279291906144cd565b5061012082015180516122449160088401916020909101906144cd565b505050600086815260106020908152604080832060050180546001818101835591855283852001889055898452601183528184208585529092528220015490036122ad576000868152601060209081526040822060040180546001810182559083529120018190555b6000958652601060209081526040808820600281018054870190556003018054860190556011825280882092885291905290942080548201815560010180548201905560058054909101905550505050565b3360009081526006602052604081205460ff1661232e5760405162461bcd60e51b8152600401610aa290615674565b6001600160a01b0384166000908152600e6020908152604080832054808452601090925282206002810180549293919287929061236c9084906156db565b9091555050600281015460408051878152602081019290925285916001600160a01b038916917fa749946c37aa038ce4cb2da01f5c7ecd058016b72f1f52c85cbc68393d5f5a3a910160405180910390a3600082815260116020526040902084156123fa57600085815260208290526040812080548892906123ef9084906156db565b909155506124779050565b60005b600483015481101561246b576000836004018281548110612420576124206156f2565b600091825260208083209091015480835290859052604090912054909150888111156124495750875b60009182526020849052604090912080548290039055909603956001016123fd565b50851561247757600080fd5b600193505050505b9392505050565b6000612492600161440b565b905080156124aa576000805461ff0019166101001790555b60408051808201909152600b8082526a141c9bdbd993d991dbdbd960aa1b60209092019182526124dc916001916144cd565b5060408051808201909152600380825262504f4760e81b6020909201918252612507916002916144cd565b50336000908152600c60205260409020805460ff191660011790558015612568576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6125736145bf565b60008281526009602052604081205490036125a05760405162461bcd60e51b8152600401610aa290615a1e565b600082815260096020908152604091829020825160e081018452815481526001820180548551818602810186019096528086529194929385810193929083018282801561260c57602002820191906000526020600020905b8154815260200190600101908083116125f8575b5050509183525050600282015460208201526003820154604082015260048083015460609092019160ff1690811115612647576126476147cc565b6004811115612658576126586147cc565b815260200160058201805461266c9061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546126989061563a565b80156126e55780601f106126ba576101008083540402835291602001916126e5565b820191906000526020600020905b8154815290600101906020018083116126c857829003601f168201915b505050505081526020016006820180546126fe9061563a565b80601f016020809104026020016040519081016040528092919081815260200182805461272a9061563a565b8015611ad75780601f1061274c57610100808354040283529160200191611ad7565b820191906000526020600020905b81548152906001019060200180831161275a57505050919092525091949350505050565b336000908152600c602052604081205460ff166127ad5760405162461bcd60e51b8152600401610aa290615674565b6000826080015151116127d25760405162461bcd60e51b8152600401610aa2906159a8565b815160000361286257600b82608001516040516127ef9190615add565b90815260200160405180910390205460001461284a5760405162461bcd60e51b815260206004820152601a602482015279676f6f64206f7261636c6520616c72656164792065786973747360301b6044820152606401610aa2565b612858601480546001019055565b60145482526128d7565b81516000818152600a6020526040902054146128905760405162461bcd60e51b8152600401610aa290615a1e565b608082015151156128d757600b600a6000846000015181526020019081526020016000206002016040516128c49190615b92565b9081526020016040518091039020600090555b81516000908152600a602090815260409182902084518155908401516001820180546001600160a01b039092166001600160a01b031983168117825593860151869490926001600160a81b03191617600160a01b83600481111561293d5761293d6147cc565b0217905550606082015160018201805460ff909216600160a81b0260ff60a81b19909216919091179055608082015180516129829160028401916020909101906144cd565b5060a0820151805161299e9160038401916020909101906144cd565b5060c082015180516129ba916004840191602090910190614551565b509050508160000151600b83608001516040516129d79190615add565b90815260200160405180910390208190555081600001517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5683608001518460a0015185604001518660c00151604051612a339493929190615b9e565b60405180910390a25080515b919050565b6060600280546109e99061563a565b336000908152600c602052604090205460ff16612a825760405162461bcd60e51b8152600401610aa290615674565b6001600160a01b038216612a9557600080fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b612ac861460d565b600082815260106020526040902054612af35760405162461bcd60e51b8152600401610aa29061569a565b600082815260106020908152604091829020825160c0810184528154815260018201805485518186028101860190965280865291949293858101939290830182828015612b6957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612b4b575b50505050508152602001600282015481526020016003820154815260200160048201805480602002602001604051908101604052809291908181526020018280548015612bd557602002820191906000526020600020905b815481526020019060010190808311612bc1575b5050505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015611ad75760200282019190600052602060002090815481526020019060010190808311611ac3575050505050815250509050919050565b336000908152600c602052604090205460ff16612c6a5760405162461bcd60e51b8152600401610aa290615674565b6001600160a01b03919091166000908152600660205260409020805460ff1916911515919091179055565b336000908152600c602052604090205460ff16612cc45760405162461bcd60e51b8152600401610aa290615674565b6000825111612ce55760405162461bcd60e51b8152600401610aa2906159a8565b82600003612d1257612cfb601580546001019055565b601554600081815260086020526040902081905592505b60008381526008602090815260409091208351612d37926002909201918501906144cd565b50600083815260086020526040902060019081018054839260ff1990911690836004811115612d6857612d686147cc565b0217905550827f037073ee3282c3c1d6de9ffad824bebaa0375c1024dbead3a062c16e7e76d3988383604051612d9f929190615be4565b60405180910390a2505050565b6000818152601260205260409020546060908214612e245760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610aa2565b600060038054612e339061563a565b90501115612e6d576003612e4683613c79565b604051602001612e57929190615c06565b6040516020818303038152906040529050919050565b61088982611117565b612e7e614646565b6000612e8983613ad3565b905060005b8160a00151518110156130a757838260a001518281518110612eb257612eb26156f2565b60200260200101510361309557601260008360a001518381518110612ed957612ed96156f2565b6020908102919091018101518252818101929092526040908101600020815161014081018352815481526001820154938101939093526002810154918301919091526003810154606083015260048101546001600160a01b0381166080840152600160a01b90046001600160401b031660a0830152600581015460c0830152600681015460e083015260078101805461010084019190612f789061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054612fa49061563a565b8015612ff15780601f10612fc657610100808354040283529160200191612ff1565b820191906000526020600020905b815481529060010190602001808311612fd457829003601f168201915b5050505050815260200160088201805461300a9061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546130369061563a565b80156130835780601f1061305857610100808354040283529160200191613083565b820191906000526020600020905b81548152906001019060200180831161306657829003601f168201915b50505050508152505092505050919050565b8061309f8161571e565b915050612e8e565b5060405162461bcd60e51b8152600401610aa290615a1e565b600a6020526000908152604090208054600182015460028301805492936001600160a01b0383169360ff600160a01b8504811694600160a81b90041692906131079061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546131339061563a565b80156131805780601f1061315557610100808354040283529160200191613180565b820191906000526020600020905b81548152906001019060200180831161316357829003601f168201915b5050505050908060030180546109579061563a565b600081815260106020526040812060050154606091906001600160401b038111156131c2576131c26149d0565b6040519080825280602002602001820160405280156131fb57816020015b6131e8614646565b8152602001906001900390816131e05790505b50905060005b6000848152601060205260409020600501548110156134275760008481526010602052604081206005018054601292919084908110613242576132426156f2565b600091825260208083209091015483528281019390935260409182019020815161014081018352815481526001820154938101939093526002810154918301919091526003810154606083015260048101546001600160a01b03811660808401526001600160401b03600160a01b9091041660a0830152600581015460c0830152600681015460e0830152600781018054610100840191906132e39061563a565b80601f016020809104026020016040519081016040528092919081815260200182805461330f9061563a565b801561335c5780601f106133315761010080835404028352916020019161335c565b820191906000526020600020905b81548152906001019060200180831161333f57829003601f168201915b505050505081526020016008820180546133759061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546133a19061563a565b80156133ee5780601f106133c3576101008083540402835291602001916133ee565b820191906000526020600020905b8154815290600101906020018083116133d157829003601f168201915b505050505081525050828281518110613409576134096156f2565b6020026020010181905250808061341f9061571e565b915050613201565b5092915050565b61343661460d565b6001600160a01b0382166000908152600e602052604090205461088990612ac0565b336000908152600c602052604090205460ff166134875760405162461bcd60e51b8152600401610aa290615674565b60008251116134a85760405162461bcd60e51b8152600401610aa2906159a8565b826000036134d5576134be601680546001019055565b601654600081815260076020526040902081905592505b600083815260076020908152604090912083516134fa926002909201918501906144cd565b50600083815260076020526040902060019081018054839260ff199091169083600481111561352b5761352b6147cc565b0217905550827f9c72f12d46e6b2fb09fe6cb0d2e26e022402c9e96cb5f88dea9307870110ab708383604051612d9f929190615be4565b60606000826001600160401b0381111561357e5761357e6149d0565b6040519080825280602002602001820160405280156135b757816020015b6135a46146ae565b81526020019060019003908161359c5790505b50905060005b83811015611c465760006135eb8686848181106135dc576135dc6156f2565b90506040020160000135612e76565b90506135f56146ae565b6000878785818110613609576136096156f2565b90506040020160200160208101906136219190615c3b565b6001600160401b03169050808360c00151101561363f575060c08201515b6020808401516000908152600990915260408120600301546136619083615c6c565b8451845260a08501516001600160401b031660208086019190915260808601516001600160a01b03166000908152600e825260408082205481518085019190915281518082038501815290820182528188015282880151825260099092529081206001018054929350916136d7576136d76156f2565b600091825260208220015461ffff1660608501526080840152604084015163ffffffff90811660a0850152811660c084018190526001600160401b03831660e0850152610100808601519085015261372e90613c79565b6009600086602001518152602001908152602001600020600601604051602001613759929190615c80565b60405160208183030381529060405283610120018190525082868681518110613784576137846156f2565b602002602001018190525050505050808061379e9061571e565b9150506135bd565b600860205260009081526040902080546001820154600283018054929360ff90921692610b3e9061563a565b336000908152600c602052604090205460ff166138015760405162461bcd60e51b8152600401610aa290615674565b60009384526013602090815260408086209486529390529190922080546001600160401b0319166001600160401b0393909316929092178255600190910155565b336000908152600c602052604090205460ff166138715760405162461bcd60e51b8152600401610aa290615674565b60008281526010602052604080822083835291208284036138c35760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610aa2565b831515806138d057508215155b6138ec5760405162461bcd60e51b8152600401610aa29061569a565b600280820154908301805490910190556003808201549083018054909101905560005b60018201548110156139ba5782600101826001018281548110613934576139346156f2565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b0390921691909117905590830180548792600e9290918590811061398d5761398d6156f2565b60009182526020808320909101546001600160a01b0316835282019290925260400190205560010161390f565b5060005b6004820154811015613a815760008260040182815481106139e1576139e16156f2565b60009182526020808320909101548883526011808352604080852083865284528085208a86529184528085208386529093529183206001830154919450919203613a405760048601805460018101825560009182526020909120018390555b8054825401825560019081015491810180549092019091556000868152601160209081526040808320948352939052918220828155810191909155016139be565b5060006002820181905560038201819055613aa0906001830190614701565b604051839085907f29b215afec5f4dc18ce16b02452f35cbba1f488896ef8874b9b7a54baa6d42b090600090a350505050565b613adb61460d565b61088961074b836117f8565b60608282604051602001613afc929190615caa565b604051602081830303815290604052905092915050565b606060005b60208160ff16108015613b4c5750828160ff1660208110613b3b57613b3b6156f2565b1a60f81b6001600160f81b03191615155b15613b635780613b5b81615d1d565b915050613b18565b60008160ff166001600160401b03811115613b8057613b806149d0565b6040519080825280601f01601f191660200182016040528015613baa576020820181803683370190505b509050600091505b60208260ff16108015613be65750838260ff1660208110613bd557613bd56156f2565b1a60f81b6001600160f81b03191615155b1561247f57838260ff1660208110613c0057613c006156f2565b1a60f81b818360ff1681518110613c1957613c196156f2565b60200101906001600160f81b031916908160001a90535081613c3a81615d1d565b925050613bb2565b60608382613c4f85613c79565b604051602001613c6193929190615d3c565b60405160208183030381529060405290509392505050565b606081600003613ca05750506040805180820190915260018152600360fc1b602082015290565b8160005b8115613cca5780613cb48161571e565b9150613cc39050600a83615c6c565b9150613ca4565b6000816001600160401b03811115613ce457613ce46149d0565b6040519080825280601f01601f191660200182016040528015613d0e576020820181803683370190505b5090505b8415613d7957613d236001836156db565b9150613d30600a86615de1565b613d3b906030615df5565b60f81b818381518110613d5057613d506156f2565b60200101906001600160f81b031916908160001a905350613d72600a86615c6c565b9450613d12565b949350505050565b60608151600003613da057505060408051602081019091526000815290565b6000604051806060016040528060408152602001615eaa6040913990506000600384516002613dcf9190615df5565b613dd99190615c6c565b613de4906004615a70565b90506000613df3826020615df5565b6001600160401b03811115613e0a57613e0a6149d0565b6040519080825280601f01601f191660200182016040528015613e34576020820181803683370190505b509050818152600183018586518101602084015b81831015613ea0576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101613e48565b600389510660018114613eba5760028114613ecb57613ed7565b613d3d60f01b600119830152613ed7565b603d60f81b6000198301525b509398975050505050505050565b60008084156140505760008581526010602052604090205461404b576001600160a01b03841615801590613f3057506001600160a01b0384166000908152600e602052604090205415155b15613f55576001600160a01b0384166000908152600e60205260409020549450614097565b8215801590613f7157506000838152600f602052604090205415155b15613f8c576000838152600f60205260409020549450614097565b6001600160a01b038416613fb25760405162461bcd60e51b8152600401610aa290615e0d565b600085815260106020818152604080842089815581518084019092526001600160a01b038916825293899052919052613ff1916001908101919061471f565b506001600160a01b0384166000818152600e602052604090819020879055518691907f101f74814a060c243b4178543008d04967d667e5b262d151af81b054a1c2bc58906140429087815260200190565b60405180910390a35b614097565b6001600160a01b0384161561407f576001600160a01b0384166000908152600e60205260409020549450614097565b8215614097576000838152600f602052604090205494505b84158015906140b3575060008581526010602052604090205485145b6140cf5760405162461bcd60e51b8152600401610aa29061569a565b6001600160a01b03841661411757600085815260106020526040812060010180549091906140ff576140ff6156f2565b6000918252602090912001546001600160a01b031693505b6001600160a01b03841661413d5760405162461bcd60e51b8152600401610aa290615e0d565b6001600160a01b0384166000908152600e60205260409020546141a4576001600160a01b0384166000818152600e60209081526040808320899055888352601082528220600190810180549182018155835291200180546001600160a01b03191690911790555b82158015906141c157506000838152600f60205260409020548514155b1561422d576000838152600f60205260409020541561421b5760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610aa2565b6000838152600f602052604090208590555b50929391925050565b6000858152601360209081526040808320878452909152812060010154156143ff576000848152601060205260408120815b600582015481101561439457600082600501828154811061428b5761428b6156f2565b60009182526020808320909101548c83526013825260408084208d85529092529120549091506142c6906001600160401b03166103e8615a41565b6000828152601260205260409020600401546001600160401b0391821691600160a01b90910481169089161161432857600082815260126020526040902060040154614323908990600160a01b90046001600160401b0316615e33565b614354565b60008281526012602052604090206004015461435490600160a01b90046001600160401b031689615e33565b6001600160401b0316116143815760008181526012602052604090206005015461437e9085615df5565b93505b508061438c8161571e565b915050614268565b5060008881526013602090815260408083208a84529091529020600101546143bc8386615df5565b11156143fc5760008881526013602090815260408083208a84529091529020600101546143e98386615df5565b6143f391906156db565b92505050614402565b50505b50805b95945050505050565b60008054610100900460ff1615614452578160ff16600114801561442e5750303b155b61444a5760405162461bcd60e51b8152600401610aa290615e5b565b506000919050565b60005460ff8084169116106144795760405162461bcd60e51b8152600401610aa290615e5b565b506000805460ff191660ff92909216919091179055600190565b50805461449f9061563a565b6000825580601f106144af575050565b601f0160209004906000526020600020908101906125689190614774565b8280546144d99061563a565b90600052602060002090601f0160209004810192826144fb5760008555614541565b82601f1061451457805160ff1916838001178555614541565b82800160010185558215614541579182015b82811115614541578251825591602001919060010190614526565b5061454d929150614774565b5090565b8280548282559060005260206000209081019282156145415791602002820182811115614541578251825591602001919060010190614526565b6040518060400160405280600081526020016145ba604051806040016040528060008152602001600081525090565b905290565b6040518060e0016040528060008152602001606081526020016000815260200160008152602001600060048111156145f9576145f96147cc565b815260200160608152602001606081525090565b6040518060c001604052806000801916815260200160608152602001600081526020016000815260200160608152602001606081525090565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160401b03168152602001600081526020016000801916815260200160608152602001606081525090565b604080516101408101825260008082526020820181905260609282018390528282018190526080820181905260a0820181905260c0820181905260e0820152610100810182905261012081019190915290565b50805460008255906000526020600020908101906125689190614774565b828054828255906000526020600020908101928215614541579160200282015b8281111561454157825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061473f565b5b8082111561454d5760008155600101614775565b60006020828403121561479b57600080fd5b81356001600160e01b03198116811461247f57600080fd5b6000602082840312156147c557600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6005811061480057634e487b7160e01b600052602160045260246000fd5b9052565b60005b8381101561481f578181015183820152602001614807565b8381111561482e576000848401525b50505050565b6000815180845261484c816020860160208601614804565b601f01601f19169290920160200192915050565b86815285602082015284604082015261487c60608201856147e2565b60c06080820152600061489260c0830185614834565b82810360a08401526148a48185614834565b9998505050505050505050565b60208152600061247f6020830184614834565b80356001600160a01b0381168114612a3f57600080fd5b600080604083850312156148ee57600080fd5b6148f7836148c4565b946020939093013593505050565b6000806040838503121561491857600080fd5b82359150614928602084016148c4565b90509250929050565b83815261494160208201846147e2565b6060604082015260006144026060830184614834565b6000806040838503121561496a57600080fd5b50508035926020909101359150565b60008060006060848603121561498e57600080fd5b614997846148c4565b92506149a5602085016148c4565b9150604084013590509250925092565b6000602082840312156149c757600080fd5b61247f826148c4565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715614a0857614a086149d0565b60405290565b60405161014081016001600160401b0381118282101715614a0857614a086149d0565b604051601f8201601f191681016001600160401b0381118282101715614a5957614a596149d0565b604052919050565b60006001600160401b03831115614a7a57614a7a6149d0565b614a8d601f8401601f1916602001614a31565b9050828152838383011115614aa157600080fd5b828260208301376000602084830101529392505050565b600082601f830112614ac957600080fd5b61247f83833560208501614a61565b600060208284031215614aea57600080fd5b81356001600160401b03811115614b0057600080fd5b613d7984828501614ab8565b600081518084526020808501945080840160005b83811015614b3c57815187529582019590820190600101614b20565b509495945050505050565b60208152600061247f6020830184614b0c565b8a8152602081018a905260408101899052606081018890526001600160a01b03871660808201526001600160401b03861660a082015260c0810185905260e081018490526101406101008201819052600090614bb883820186614834565b9050828103610120840152614bcd8185614834565b9d9c50505050505050505050505050565b600082601f830112614bef57600080fd5b813560206001600160401b03821115614c0a57614c0a6149d0565b8160051b614c19828201614a31565b9283528481018201928281019087851115614c3357600080fd5b83870192505b84831015614c5257823582529183019190830190614c39565b979650505050505050565b803560058110612a3f57600080fd5b600060208284031215614c7e57600080fd5b81356001600160401b0380821115614c9557600080fd5b9083019060e08286031215614ca957600080fd5b614cb16149e6565b82358152602083013582811115614cc757600080fd5b614cd387828601614bde565b6020830152506040830135604082015260608301356060820152614cf960808401614c5d565b608082015260a083013582811115614d1057600080fd5b614d1c87828601614ab8565b60a08301525060c083013582811115614d3457600080fd5b614d4087828601614ab8565b60c08301525095945050505050565b602081528151602082015260018060a01b03602083015116604082015260006040830151614d8060608401826147e2565b5060ff6060840151166080830152608083015160e060a0840152614da8610100840182614834565b905060a0840151601f19808584030160c0860152614dc68383614834565b925060c08601519150808584030160e0860152506144028282614b0c565b602080825282518282018190526000919060409081850190868401855b82811015614e31578151805185528601518051878601528601518585015260609093019290850190600101614e01565b5091979650505050505050565b80358015158114612a3f57600080fd5b600080600060608486031215614e6357600080fd5b614e6c846148c4565b925060208401359150614e8160408501614e3e565b90509250925092565b80356001600160401b0381168114612a3f57600080fd5b600060208284031215614eb357600080fd5b81356001600160401b0380821115614eca57600080fd5b908301906101408286031215614edf57600080fd5b614ee7614a0e565b614ef0836148c4565b81526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a0820152614f3060c08401614e8a565b60c082015260e083013560e08201526101008084013583811115614f5357600080fd5b614f5f88828701614ab8565b8284015250506101208084013583811115614f7957600080fd5b614f8588828701614ab8565b918301919091525095945050505050565b600080600060608486031215614fab57600080fd5b614fb4846148c4565b95602085013595506040909401359392505050565b60208152815160208201526000602083015160e06040840152614ff0610100840182614b0c565b90506040840151606084015260608401516080840152608084015161501860a08501826147e2565b5060a0840151601f19808584030160c08601526150358383614834565b925060c08601519150808584030160e0860152506144028282614834565b803560ff81168114612a3f57600080fd5b60006020828403121561507657600080fd5b81356001600160401b038082111561508d57600080fd5b9083019060e082860312156150a157600080fd5b6150a96149e6565b823581526150b9602084016148c4565b60208201526150ca60408401614c5d565b60408201526150db60608401615053565b60608201526080830135828111156150f257600080fd5b6150fe87828601614ab8565b60808301525060a08301358281111561511657600080fd5b61512287828601614ab8565b60a08301525060c08301358281111561513a57600080fd5b614d4087828601614bde565b6000806040838503121561515957600080fd5b615162836148c4565b915061492860208401614e3e565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156151c85783516001600160a01b0316825292840192600192909201919084019061519f565b50604087015160608701526060870151608087015260808701519350601f199250828682030160a08701526151fd8185614b0c565b9350505060a0850151818584030160c086015261521a8382614b0c565b9695505050505050565b60008060006060848603121561523957600080fd5b8335925060208401356001600160401b0381111561525657600080fd5b61526286828701614ab8565b925050614e8160408501614c5d565b6000806000806080858703121561528757600080fd5b615290856148c4565b935061529e602086016148c4565b92506040850135915060608501356001600160401b038111156152c057600080fd5b8501601f810187136152d157600080fd5b6152e087823560208401614a61565b91505092959194509250565b600061014082518452602083015160208501526040830151604085015260608301516060850152608083015161532d60808601826001600160a01b03169052565b5060a083015161534860a08601826001600160401b03169052565b5060c083015160c085015260e083015160e085015261010080840151828287015261537583870182614834565b92505050610120808401518583038287015261521a8382614834565b60208152600061247f60208301846152ec565b8681526001600160a01b03861660208201526153c360408201866147e2565b60ff8416606082015260c06080820152600061489260c0830185614834565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561543757603f198886030184526154258583516152ec565b94509285019290850190600101615409565b5092979650505050505050565b6000806020838503121561545757600080fd5b82356001600160401b038082111561546e57600080fd5b818501915085601f83011261548257600080fd5b81358181111561549157600080fd5b8660208260061b85010111156154a657600080fd5b60209290920196919550909350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156155c557603f19898403018552815180518452878101516001600160401b031688850152868101516101408886018190529061552182870182614834565b9150506060808301516155398288018261ffff169052565b50506080828101519086015260a08083015163ffffffff9081169187019190915260c0808401519091169086015260e0808301516001600160401b03169086015261010080830151868303828801526155928382614834565b9250505061012080830151925085820381870152506155b18183614834565b9689019694505050908601906001016154df565b509098975050505050505050565b600080600080608085870312156155e957600080fd5b843593506020850135925061560060408601614e8a565b9396929550929360600135925050565b6000806040838503121561562357600080fd5b61562c836148c4565b9150614928602084016148c4565b600181811c9082168061564e57607f821691505b60208210810361566e57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b1b9bdd08185c1c1c9bdd995960a21b604082015260600190565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156156ed576156ed6156c5565b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b600060018201615730576157306156c5565b5060010190565b60008151615749818560208601614804565b9290920192915050565b60008a51615765818460208f01614804565b8a516157778183860160208f01614804565b8a51918401019061578c818360208e01614804565b895161579e8183850160208e01614804565b89519290910101906157b4818360208c01614804565b87516157c68183850160208c01614804565b87519290910101906157dc818360208a01614804565b85516157ee8183850160208a01614804565b8551929091010190615804818360208801614804565b019b9a5050505050505050505050565b683d913730b6b2911d1160b91b81528651600090615839816009850160208c01614804565b61202360f01b600991840191820152875161585b81600b840160208c01614804565b6b1116101134b6b0b3b2911d1160a11b600b92909101918201528651615888816017840160208b01614804565b7211161130b734b6b0ba34b7b72fbab936111d1160691b6017929091019182015285516158bc81602a840160208a01614804565b69111610113230ba32911d60b11b602a929091019182015284516158e7816034840160208901614804565b6159276159186159126034848601016f2c202261747472696275746573223a5b60801b815260100190565b87615737565b625d207d60e81b815260030190565b9a9950505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161596d81601d850160208701614804565b91909101601d0192915050565b6020808252601490820152731b9bdd081858dd1a5d994bdb9bdd08199bdd5b9960621b604082015260600190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b60a0815260006159e260a0830188614b0c565b82810360208401526159f48188614834565b90508560408401528281036060840152615a0e8186614834565b91505061521a60808301846147e2565b6020808252600990820152681b9bdd08199bdd5b9960ba1b604082015260600190565b60006001600160401b0382811684821681151582840482111615615a6757615a676156c5565b02949350505050565b6000816000190483118215151615615a8a57615a8a6156c5565b500290565b87815286602082015260e060408201526000615aae60e0830188614834565b60608301969096525060808101939093526001600160401b039190911660a083015260c0909101529392505050565b60008251615aef818460208701614804565b9190910192915050565b8054600090600181811c9080831680615b1357607f831692505b60208084108203615b3457634e487b7160e01b600052602260045260246000fd5b818015615b485760018114615b5957615b86565b60ff19861689528489019650615b86565b60008881526020902060005b86811015615b7e5781548b820152908501908301615b65565b505084890196505b50505050505092915050565b600061247f8284615af9565b608081526000615bb16080830187614834565b8281036020840152615bc38187614834565b9050615bd260408401866147e2565b8281036060840152614c528185614b0c565b604081526000615bf76040830185614834565b905061247f60208301846147e2565b6000615c128285615af9565b8351615c22818360208801614804565b64173539b7b760d91b9101908152600501949350505050565b600060208284031215615c4d57600080fd5b61247f82614e8a565b634e487b7160e01b600052601260045260246000fd5b600082615c7b57615c7b615c56565b500490565b60008351615c92818460208801614804565b600160fd1b9083019081526144026001820185615af9565b6e3d913a3930b4ba2fba3cb832911d1160891b81528251600090615cd581600f850160208801614804565b6b111610113b30b63ab2911d1160a11b600f918401918201528351615d0181601b840160208801614804565b62089f4b60ea1b601b9290910191820152601e01949350505050565b600060ff821660ff8103615d3357615d336156c5565b60010192915050565b6e3d913a3930b4ba2fba3cb832911d1160891b81528351600090615d6781600f850160208901614804565b711116113234b9b83630bcafba3cb832911d1160711b600f918401918201528451615d99816021840160208901614804565b6a111610113b30b63ab2911d60a91b602192909101918201528351615dc581602c840160208801614804565b611f4b60f21b602c9290910191820152602e0195945050505050565b600082615df057615df0615c56565b500690565b60008219821115615e0857615e086156c5565b500190565b6020808252600c908201526b6d697373696e67206461746160a01b604082015260600190565b60006001600160401b0383811690831681811015615e5357615e536156c5565b039392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d37e089c0bd4de2cafe676b664b2eabddeded70f78bc4fe0cf4c4b9458e6d50364736f6c634300080d0033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106102885760003560e01c806301ffc9a71461028d578063056a305c146102b557806306fdde03146102da578063081812fc146102ef578063095ea7b31461031a5780630c97174f1461032e57806316feb0d0146103465780631d3a5d2914610359578063220c7304146103635780632300b38f1461038557806323b872dd146103e25780632b325b3b146103f5578063392b7633146104185780633b093ddc1461044357806342842e0e146103e257806342966c681461048d578063429b62e5146104a0578063438b6300146104c357806347f6acf1146104e35780634bf25ae1146104ec5780634f64b2be1461050c57806355f804b3146105355780635ac1e3bb146105485780635fc5f9a81461055b5780636352211e1461056e5780636bfdca221461058157806370a08231146105a157806370dab1de146105b457806373bf6182146105d457806374bd35b1146105e75780637dba5f93146105fa5780638129fc1c1461060d578063838bf3e51461061557806391b5e5de1461063557806395d89b4114610648578063a22cb46514610650578063a4230bd51461065e578063aaa758b114610671578063b10be93114610691578063b30374cd146106a4578063b88d4fde146106b7578063c87b56dd146106c5578063cc33c875146106d8578063cf3b7d90146106f8578063d33e51501461071d578063d69167e51461073d578063d6918fdb14610750578063d94a28d11461075a578063dd86d01b1461076d578063dfb19bf81461078d578063e1f87749146107a0578063e204300a146107ce578063e272578e146107e1578063e44bd39b14610801578063e985e9c514610814578063efdcc47f1461082a575b600080fd5b6102a061029b366004614789565b61083d565b60405190151581526020015b60405180910390f35b6102c86102c33660046147b3565b61088f565b6040516102ac96959493929190614860565b6102e26109da565b6040516102ac91906148b1565b6103026102fd3660046147b3565b610a6c565b6040516001600160a01b0390911681526020016102ac565b61032c6103283660046148db565b5050565b005b6015546103389081565b6040519081526020016102ac565b61032c610354366004614905565b610a73565b6017546103389081565b6103766103713660046147b3565b610b12565b6040516102ac93929190614931565b6103c3610393366004614957565b6013602090815260009283526040808420909152908252902080546001909101546001600160401b039091169082565b604080516001600160401b0390931683526020830191909152016102ac565b61032c6103f0366004614979565b610bc1565b6102a06104033660046149b5565b60066020526000908152604090205460ff1681565b610338610426366004614ad8565b8051602081830181018051600b8252928201919093012091525481565b6104726104513660046147b3565b60106020526000908152604090208054600282015460039092015490919083565b604080519384526020840192909252908201526060016102ac565b61032c61049b3660046147b3565b610bf8565b6102a06104ae3660046149b5565b600c6020526000908152604090205460ff1681565b6104d66104d13660046149b5565b610f4b565b6040516102ac9190614b47565b61033860055481565b6103386104fa3660046147b3565b600f6020526000908152604090205481565b61051f61051a3660046147b3565b610f60565b6040516102ac9a99989796959493929190614b5a565b61032c610543366004614ad8565b6110d5565b6102e26105563660046147b3565b611117565b61032c610569366004614c6c565b6115a2565b61030261057c3660046147b3565b6117f8565b61059461058f3660046147b3565b611872565b6040516102ac9190614d4f565b6103386105af3660046149b5565b611ae7565b6105c76105c23660046149b5565b611afd565b6040516102ac9190614de4565b61032c6105e2366004614e4e565b611c4e565b61032c6105f5366004614ea1565b611cf2565b6102a0610608366004614f96565b6122ff565b61032c612486565b6106286106233660046147b3565b61256b565b6040516102ac9190614fc9565b610338610643366004615064565b61277e565b6102e2612a44565b61032c610328366004615146565b61032c61066c366004615146565b612a53565b61068461067f3660046147b3565b612ac0565b6040516102ac9190615170565b61032c61069f366004615146565b612c3b565b61032c6106b2366004615224565b612c95565b61032c6103f0366004615271565b6102e26106d33660046147b3565b612dac565b6106eb6106e63660046147b3565b612e76565b6040516102ac9190615391565b61070b6107063660046147b3565b6130c0565b6040516102ac969594939291906153a4565b61073061072b3660046147b3565b613195565b6040516102ac91906153e2565b61068461074b3660046149b5565b61342e565b6016546103389081565b61032c610768366004615224565b613458565b61078061077b366004615444565b613562565b6040516102ac91906154b8565b61037661079b3660046147b3565b6137a6565b6102a06107ae3660046148db565b600d60209081526000928352604080842090915290825290205460ff1681565b61032c6107dc3660046155d3565b6137d2565b6103386107ef3660046149b5565b600e6020526000908152604090205481565b61032c61080f366004614957565b613842565b6102a0610822366004615610565b600092915050565b6106846108383660046147b3565b613ad3565b60006001600160e01b031982166380ac58cd60e01b148061086e57506001600160e01b03198216635b5e139f60e01b145b8061088957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6009602052600090815260409020805460028201546003830154600484015460058501805494959394929360ff909216926108c99061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546108f59061563a565b80156109425780601f1061091757610100808354040283529160200191610942565b820191906000526020600020905b81548152906001019060200180831161092557829003601f168201915b5050505050908060060180546109579061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546109839061563a565b80156109d05780601f106109a5576101008083540402835291602001916109d0565b820191906000526020600020905b8154815290600101906020018083116109b357829003601f168201915b5050505050905086565b6060600180546109e99061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a159061563a565b8015610a625780601f10610a3757610100808354040283529160200191610a62565b820191906000526020600020905b815481529060010190602001808311610a4557829003601f168201915b5050505050905090565b6000806000fd5b336000908152600c602052604090205460ff16610aab5760405162461bcd60e51b8152600401610aa290615674565b60405180910390fd5b6001600160a01b0381166000908152600e60205260409020548015801590610ae0575060008181526010602052604090205481145b610afc5760405162461bcd60e51b8152600401610aa29061569a565b6000928352600f60205260409092209190915550565b600760205260009081526040902080546001820154600283018054929360ff90921692610b3e9061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6a9061563a565b8015610bb75780601f10610b8c57610100808354040283529160200191610bb7565b820191906000526020600020905b815481529060010190602001808311610b9a57829003601f168201915b5050505050905083565b60405162461bcd60e51b815260206004820152600c60248201526b6e6f207472616e736665727360a01b6044820152606401610aa2565b336000908152600c602052604090205460ff1680610c3857506000818152601260205260409020600401546001600160a01b0316336001600160a01b0316145b80610c6a5750336000908152600d602090815260408083208484526012835281842060020154845290915290205460ff165b610c865760405162461bcd60e51b8152600401610aa290615674565b6000600e6000610c95846117f8565b6001600160a01b0316815260208082019290925260409081016000908120548582526012845282822060018101548352600985528383206002908101546005909201548385526010909652938320909301805491955092939283929091610cfd9084906156db565b9091555050600083815260116020908152604080832085845290915281208054839290610d2b9084906156db565b90915550506000838152601060209081526040808320600301805485900390556011825280832085845282528083206001018054859003905560058054859003905586835260129091528082206004015490518692916001600160a01b031690600080516020615eea833981519152908390a4600084815260126020908152604091829020600281015460048201546001909201548451908152928301859052926001600160a01b039091169187917fefae2827954a7dcec4635167b069ceff340e9acc450f5533d25bc14f081a8743910160405180910390a460008481526012602052604081208181556001810182905560028101829055600381018290556004810180546001600160e01b0319169055600581018290556006810182905590610e596007830182614493565b610e67600883016000614493565b50506000838152601060205260408120905b6005820154811015610f435785826005018281548110610e9b57610e9b6156f2565b906000526020600020015403610f3157600582015460011015610f0757600582018054610eca906001906156db565b81548110610eda57610eda6156f2565b9060005260206000200154826005018281548110610efa57610efa6156f2565b6000918252602090912001555b81600501805480610f1a57610f1a615708565b600190038181906000526020600020016000905590555b80610f3b8161571e565b915050610e79565b505050505050565b6060610f568261342e565b60a0015192915050565b6012602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460078801805497989697959694956001600160a01b03851695600160a01b9095046001600160401b0316949190610fc49061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff09061563a565b801561103d5780601f106110125761010080835404028352916020019161103d565b820191906000526020600020905b81548152906001019060200180831161102057829003601f168201915b5050505050908060080180546110529061563a565b80601f016020809104026020016040519081016040528092919081815260200182805461107e9061563a565b80156110cb5780601f106110a0576101008083540402835291602001916110cb565b820191906000526020600020905b8154815290600101906020018083116110ae57829003601f168201915b505050505090508a565b336000908152600c602052604090205460ff166111045760405162461bcd60e51b8152600401610aa290615674565b80516103289060039060208401906144cd565b6060600061112483612e76565b602080820151600090815260098252604080822081518083018352600b81526a476f6f64204f7261636c6560a81b81860152828601518452600a909452908220600201805494955090939192611203929091906111809061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546111ac9061563a565b80156111f95780601f106111ce576101008083540402835291602001916111f9565b820191906000526020600020905b8154815290600101906020018083116111dc57829003601f168201915b5050505050613ae7565b61123b6040518060400160405280600d81526020016c476f6f6420416374697669747960981b8152508460050180546111809061563a565b6112a160405180604001604052806009815260200168476f6f64205479706560b81b815250600760008760010160008154811061127a5761127a6156f2565b9060005260206000200154815260200190815260200160002060020180546111809061563a565b6112ef6040518060400160405280600d81526020016c476f6f642043617465676f727960981b815250600860008860020154815260200190815260200160002060020180546111809061563a565b61131e60405180604001604052806004815260200163155b9a5d60e21b8152508760060180546111809061563a565b6113566040518060400160405280600a815260200169115e1d195c9b985b125160b21b8152506113518a60e00151613b13565b613ae7565b61140f8860060180546113689061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546113949061563a565b80156113e15780601f106113b6576101008083540402835291602001916113e1565b820191906000526020600020905b8154815290600101906020018083116113c457829003601f168201915b50505050508a6060015160405180604001604052806006815260200165373ab6b132b960d11b815250613c42565b61145f6040518060400160405280600b81526020016a476f6f6420506f696e747360a81b8152508b60c0015160405180604001604052806006815260200165373ab6b132b960d11b815250613c42565b6114af604051806040016040528060048152602001634461746560e01b8152508c60a001516001600160401b0316604051806040016040528060048152602001636461746560e01b815250613c42565b6040516020016114c799989796959493929190615753565b6040516020818303038152906040529050600160fd1b81600183516114ec91906156db565b815181106114fc576114fc6156f2565b60200101906001600160f81b031916908160001a905350600061151d6109da565b61152687613c79565b8561010001518661012001516115488860a001516001600160401b0316613c79565b8660405160200161155e96959493929190615814565b604051602081830303815290604052905061157881613d81565b6040516020016115889190615935565b604051602081830303815290604052945050505050919050565b336000908152600c602052604090205460ff166115d15760405162461bcd60e51b8152600401610aa290615674565b80516000036115ee576115e8601780546001019055565b60175481525b60005b81602001515181101561167b576001600760008460200151848151811061161a5761161a6156f2565b60209081029190910181015182528101919091526040016000206001015460ff16600481111561164c5761164c6147cc565b146116695760405162461bcd60e51b8152600401610aa29061597a565b806116738161571e565b9150506115f1565b50600160408083015160009081526008602052206001015460ff1660048111156116a7576116a76147cc565b146116c45760405162461bcd60e51b8152600401610aa29061597a565b60008160a0015151116116e95760405162461bcd60e51b8152600401610aa2906159a8565b80516000908152600960209081526040909120825181558183015180518493611719926001850192910190614551565b50604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690836004811115611758576117586147cc565b021790555060a082015180516117789160058401916020909101906144cd565b5060c082015180516117949160068401916020909101906144cd565b50905050806040015181600001517f29f55a4079432284bc9ab94f92115353211eb0ef8445340b16a7e1db3bd578a983602001518460a0015185606001518660c0015187608001516040516117ed9594939291906159cf565b60405180910390a350565b6000818152601260205260408120600401546001600160a01b0316806108895760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610aa2565b6118b56040805160e08101825260008082526020820181905290918201908152602001600060ff1681526020016060815260200160608152602001606081525090565b6000828152600a602052604090205482146118e25760405162461bcd60e51b8152600401610aa290615a1e565b6000828152600a6020908152604091829020825160e0810184528154815260018201546001600160a01b0381169382019390935292909190830190600160a01b900460ff166004811115611938576119386147cc565b6004811115611949576119496147cc565b81526001820154600160a81b900460ff1660208201526002820180546040909201916119749061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546119a09061563a565b80156119ed5780601f106119c2576101008083540402835291602001916119ed565b820191906000526020600020905b8154815290600101906020018083116119d057829003601f168201915b50505050508152602001600382018054611a069061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054611a329061563a565b8015611a7f5780601f10611a5457610100808354040283529160200191611a7f565b820191906000526020600020905b815481529060010190602001808311611a6257829003601f168201915b5050505050815260200160048201805480602002602001604051908101604052809291908181526020018280548015611ad757602002820191906000526020600020905b815481526020019060010190808311611ac3575b5050505050815250509050919050565b6000611af28261342e565b60a001515192915050565b60606000611b0a8361342e565b608001519050600081516001600160401b03811115611b2b57611b2b6149d0565b604051908082528060200260200182016040528015611b6457816020015b611b5161458b565b815260200190600190039081611b495790505b50905060005b8251811015611c4657828181518110611b8557611b856156f2565b6020026020010151828281518110611b9f57611b9f6156f2565b602090810291909101810151919091526001600160a01b0386166000908152600e8252604080822054825260119092529081208451909190859084908110611be957611be96156f2565b6020026020010151815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050828281518110611c3057611c306156f2565b6020908102919091018101510152600101611b6a565b509392505050565b336000908152600c602052604090205460ff16611c7d5760405162461bcd60e51b8152600401610aa290615674565b6001600160a01b038316611c9057600080fd5b6000828152600a60205260409020548214611cbd5760405162461bcd60e51b8152600401610aa290615a1e565b6001600160a01b03929092166000908152600d6020908152604080832093835292905220805460ff1916911515919091179055565b336000908152600c602052604090205460ff1680611d2e5750336000908152600d602090815260408083206080850151845290915290205460ff165b611d4a5760405162461bcd60e51b8152600401610aa290615674565b600080611d64836040015184600001518560200151613ee5565b915091508260c001516001600160401b0316600003611d9857611d89426103e8615a41565b6001600160401b031660c08401525b60016060840151600090815260096020526040902060049081015460ff1690811115611dc657611dc66147cc565b14611de35760405162461bcd60e51b8152600401610aa29061597a565b600160608401516000908152600960209081526040808320600201548352600890915290206001015460ff166004811115611e2057611e206147cc565b14611e3d5760405162461bcd60e51b8152600401610aa29061597a565b600160808401516000908152600a6020526040902060010154600160a01b900460ff166004811115611e7157611e716147cc565b14611e8e5760405162461bcd60e51b8152600401610aa29061597a565b6000805b60808501516000908152600a6020526040902060040154811015611f045760808501516000908152600a60205260409020600401805482908110611ed857611ed86156f2565b9060005260206000200154856060015103611ef257600191505b80611efc8161571e565b915050611e92565b5080611f665760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610aa2565b50611f75600480546001019055565b6000611f8060045490565b60008181526012602052604090205490915015611fde5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610aa2565b60405181906001600160a01b03841690600090600080516020615eea833981519152908290a4606084015160009081526009602052604081206003015460a086015161202a9190615a70565b905061204585606001518660800151868860c0015185614236565b905061205d60008660800151868860c0015185614236565b90508460800151836001600160a01b0316837fb944b3d86721505073906bf46a2fffc53e52b7741e8e4cd781a443c88f10c12b8789606001518a6101000151878c60a001518d60c001518e60e001516040516120bf9796959493929190615a8f565b60405180910390a4600060405180610140016040528084815260200187606001518152602001876080015181526020018760a001518152602001856001600160a01b031681526020018760c001516001600160401b031681526020018381526020018760e001518152602001876101000151815260200187610120015181525090506000600960008860600151815260200190815260200160002060020154905081601260008681526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a08201518160040160146101000a8154816001600160401b0302191690836001600160401b0316021790555060c0820151816005015560e082015181600601556101008201518160070190805190602001906122279291906144cd565b5061012082015180516122449160088401916020909101906144cd565b505050600086815260106020908152604080832060050180546001818101835591855283852001889055898452601183528184208585529092528220015490036122ad576000868152601060209081526040822060040180546001810182559083529120018190555b6000958652601060209081526040808820600281018054870190556003018054860190556011825280882092885291905290942080548201815560010180548201905560058054909101905550505050565b3360009081526006602052604081205460ff1661232e5760405162461bcd60e51b8152600401610aa290615674565b6001600160a01b0384166000908152600e6020908152604080832054808452601090925282206002810180549293919287929061236c9084906156db565b9091555050600281015460408051878152602081019290925285916001600160a01b038916917fa749946c37aa038ce4cb2da01f5c7ecd058016b72f1f52c85cbc68393d5f5a3a910160405180910390a3600082815260116020526040902084156123fa57600085815260208290526040812080548892906123ef9084906156db565b909155506124779050565b60005b600483015481101561246b576000836004018281548110612420576124206156f2565b600091825260208083209091015480835290859052604090912054909150888111156124495750875b60009182526020849052604090912080548290039055909603956001016123fd565b50851561247757600080fd5b600193505050505b9392505050565b6000612492600161440b565b905080156124aa576000805461ff0019166101001790555b60408051808201909152600b8082526a141c9bdbd993d991dbdbd960aa1b60209092019182526124dc916001916144cd565b5060408051808201909152600380825262504f4760e81b6020909201918252612507916002916144cd565b50336000908152600c60205260409020805460ff191660011790558015612568576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6125736145bf565b60008281526009602052604081205490036125a05760405162461bcd60e51b8152600401610aa290615a1e565b600082815260096020908152604091829020825160e081018452815481526001820180548551818602810186019096528086529194929385810193929083018282801561260c57602002820191906000526020600020905b8154815260200190600101908083116125f8575b5050509183525050600282015460208201526003820154604082015260048083015460609092019160ff1690811115612647576126476147cc565b6004811115612658576126586147cc565b815260200160058201805461266c9061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546126989061563a565b80156126e55780601f106126ba576101008083540402835291602001916126e5565b820191906000526020600020905b8154815290600101906020018083116126c857829003601f168201915b505050505081526020016006820180546126fe9061563a565b80601f016020809104026020016040519081016040528092919081815260200182805461272a9061563a565b8015611ad75780601f1061274c57610100808354040283529160200191611ad7565b820191906000526020600020905b81548152906001019060200180831161275a57505050919092525091949350505050565b336000908152600c602052604081205460ff166127ad5760405162461bcd60e51b8152600401610aa290615674565b6000826080015151116127d25760405162461bcd60e51b8152600401610aa2906159a8565b815160000361286257600b82608001516040516127ef9190615add565b90815260200160405180910390205460001461284a5760405162461bcd60e51b815260206004820152601a602482015279676f6f64206f7261636c6520616c72656164792065786973747360301b6044820152606401610aa2565b612858601480546001019055565b60145482526128d7565b81516000818152600a6020526040902054146128905760405162461bcd60e51b8152600401610aa290615a1e565b608082015151156128d757600b600a6000846000015181526020019081526020016000206002016040516128c49190615b92565b9081526020016040518091039020600090555b81516000908152600a602090815260409182902084518155908401516001820180546001600160a01b039092166001600160a01b031983168117825593860151869490926001600160a81b03191617600160a01b83600481111561293d5761293d6147cc565b0217905550606082015160018201805460ff909216600160a81b0260ff60a81b19909216919091179055608082015180516129829160028401916020909101906144cd565b5060a0820151805161299e9160038401916020909101906144cd565b5060c082015180516129ba916004840191602090910190614551565b509050508160000151600b83608001516040516129d79190615add565b90815260200160405180910390208190555081600001517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5683608001518460a0015185604001518660c00151604051612a339493929190615b9e565b60405180910390a25080515b919050565b6060600280546109e99061563a565b336000908152600c602052604090205460ff16612a825760405162461bcd60e51b8152600401610aa290615674565b6001600160a01b038216612a9557600080fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b612ac861460d565b600082815260106020526040902054612af35760405162461bcd60e51b8152600401610aa29061569a565b600082815260106020908152604091829020825160c0810184528154815260018201805485518186028101860190965280865291949293858101939290830182828015612b6957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612b4b575b50505050508152602001600282015481526020016003820154815260200160048201805480602002602001604051908101604052809291908181526020018280548015612bd557602002820191906000526020600020905b815481526020019060010190808311612bc1575b5050505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015611ad75760200282019190600052602060002090815481526020019060010190808311611ac3575050505050815250509050919050565b336000908152600c602052604090205460ff16612c6a5760405162461bcd60e51b8152600401610aa290615674565b6001600160a01b03919091166000908152600660205260409020805460ff1916911515919091179055565b336000908152600c602052604090205460ff16612cc45760405162461bcd60e51b8152600401610aa290615674565b6000825111612ce55760405162461bcd60e51b8152600401610aa2906159a8565b82600003612d1257612cfb601580546001019055565b601554600081815260086020526040902081905592505b60008381526008602090815260409091208351612d37926002909201918501906144cd565b50600083815260086020526040902060019081018054839260ff1990911690836004811115612d6857612d686147cc565b0217905550827f037073ee3282c3c1d6de9ffad824bebaa0375c1024dbead3a062c16e7e76d3988383604051612d9f929190615be4565b60405180910390a2505050565b6000818152601260205260409020546060908214612e245760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610aa2565b600060038054612e339061563a565b90501115612e6d576003612e4683613c79565b604051602001612e57929190615c06565b6040516020818303038152906040529050919050565b61088982611117565b612e7e614646565b6000612e8983613ad3565b905060005b8160a00151518110156130a757838260a001518281518110612eb257612eb26156f2565b60200260200101510361309557601260008360a001518381518110612ed957612ed96156f2565b6020908102919091018101518252818101929092526040908101600020815161014081018352815481526001820154938101939093526002810154918301919091526003810154606083015260048101546001600160a01b0381166080840152600160a01b90046001600160401b031660a0830152600581015460c0830152600681015460e083015260078101805461010084019190612f789061563a565b80601f0160208091040260200160405190810160405280929190818152602001828054612fa49061563a565b8015612ff15780601f10612fc657610100808354040283529160200191612ff1565b820191906000526020600020905b815481529060010190602001808311612fd457829003601f168201915b5050505050815260200160088201805461300a9061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546130369061563a565b80156130835780601f1061305857610100808354040283529160200191613083565b820191906000526020600020905b81548152906001019060200180831161306657829003601f168201915b50505050508152505092505050919050565b8061309f8161571e565b915050612e8e565b5060405162461bcd60e51b8152600401610aa290615a1e565b600a6020526000908152604090208054600182015460028301805492936001600160a01b0383169360ff600160a01b8504811694600160a81b90041692906131079061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546131339061563a565b80156131805780601f1061315557610100808354040283529160200191613180565b820191906000526020600020905b81548152906001019060200180831161316357829003601f168201915b5050505050908060030180546109579061563a565b600081815260106020526040812060050154606091906001600160401b038111156131c2576131c26149d0565b6040519080825280602002602001820160405280156131fb57816020015b6131e8614646565b8152602001906001900390816131e05790505b50905060005b6000848152601060205260409020600501548110156134275760008481526010602052604081206005018054601292919084908110613242576132426156f2565b600091825260208083209091015483528281019390935260409182019020815161014081018352815481526001820154938101939093526002810154918301919091526003810154606083015260048101546001600160a01b03811660808401526001600160401b03600160a01b9091041660a0830152600581015460c0830152600681015460e0830152600781018054610100840191906132e39061563a565b80601f016020809104026020016040519081016040528092919081815260200182805461330f9061563a565b801561335c5780601f106133315761010080835404028352916020019161335c565b820191906000526020600020905b81548152906001019060200180831161333f57829003601f168201915b505050505081526020016008820180546133759061563a565b80601f01602080910402602001604051908101604052809291908181526020018280546133a19061563a565b80156133ee5780601f106133c3576101008083540402835291602001916133ee565b820191906000526020600020905b8154815290600101906020018083116133d157829003601f168201915b505050505081525050828281518110613409576134096156f2565b6020026020010181905250808061341f9061571e565b915050613201565b5092915050565b61343661460d565b6001600160a01b0382166000908152600e602052604090205461088990612ac0565b336000908152600c602052604090205460ff166134875760405162461bcd60e51b8152600401610aa290615674565b60008251116134a85760405162461bcd60e51b8152600401610aa2906159a8565b826000036134d5576134be601680546001019055565b601654600081815260076020526040902081905592505b600083815260076020908152604090912083516134fa926002909201918501906144cd565b50600083815260076020526040902060019081018054839260ff199091169083600481111561352b5761352b6147cc565b0217905550827f9c72f12d46e6b2fb09fe6cb0d2e26e022402c9e96cb5f88dea9307870110ab708383604051612d9f929190615be4565b60606000826001600160401b0381111561357e5761357e6149d0565b6040519080825280602002602001820160405280156135b757816020015b6135a46146ae565b81526020019060019003908161359c5790505b50905060005b83811015611c465760006135eb8686848181106135dc576135dc6156f2565b90506040020160000135612e76565b90506135f56146ae565b6000878785818110613609576136096156f2565b90506040020160200160208101906136219190615c3b565b6001600160401b03169050808360c00151101561363f575060c08201515b6020808401516000908152600990915260408120600301546136619083615c6c565b8451845260a08501516001600160401b031660208086019190915260808601516001600160a01b03166000908152600e825260408082205481518085019190915281518082038501815290820182528188015282880151825260099092529081206001018054929350916136d7576136d76156f2565b600091825260208220015461ffff1660608501526080840152604084015163ffffffff90811660a0850152811660c084018190526001600160401b03831660e0850152610100808601519085015261372e90613c79565b6009600086602001518152602001908152602001600020600601604051602001613759929190615c80565b60405160208183030381529060405283610120018190525082868681518110613784576137846156f2565b602002602001018190525050505050808061379e9061571e565b9150506135bd565b600860205260009081526040902080546001820154600283018054929360ff90921692610b3e9061563a565b336000908152600c602052604090205460ff166138015760405162461bcd60e51b8152600401610aa290615674565b60009384526013602090815260408086209486529390529190922080546001600160401b0319166001600160401b0393909316929092178255600190910155565b336000908152600c602052604090205460ff166138715760405162461bcd60e51b8152600401610aa290615674565b60008281526010602052604080822083835291208284036138c35760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610aa2565b831515806138d057508215155b6138ec5760405162461bcd60e51b8152600401610aa29061569a565b600280820154908301805490910190556003808201549083018054909101905560005b60018201548110156139ba5782600101826001018281548110613934576139346156f2565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b0390921691909117905590830180548792600e9290918590811061398d5761398d6156f2565b60009182526020808320909101546001600160a01b0316835282019290925260400190205560010161390f565b5060005b6004820154811015613a815760008260040182815481106139e1576139e16156f2565b60009182526020808320909101548883526011808352604080852083865284528085208a86529184528085208386529093529183206001830154919450919203613a405760048601805460018101825560009182526020909120018390555b8054825401825560019081015491810180549092019091556000868152601160209081526040808320948352939052918220828155810191909155016139be565b5060006002820181905560038201819055613aa0906001830190614701565b604051839085907f29b215afec5f4dc18ce16b02452f35cbba1f488896ef8874b9b7a54baa6d42b090600090a350505050565b613adb61460d565b61088961074b836117f8565b60608282604051602001613afc929190615caa565b604051602081830303815290604052905092915050565b606060005b60208160ff16108015613b4c5750828160ff1660208110613b3b57613b3b6156f2565b1a60f81b6001600160f81b03191615155b15613b635780613b5b81615d1d565b915050613b18565b60008160ff166001600160401b03811115613b8057613b806149d0565b6040519080825280601f01601f191660200182016040528015613baa576020820181803683370190505b509050600091505b60208260ff16108015613be65750838260ff1660208110613bd557613bd56156f2565b1a60f81b6001600160f81b03191615155b1561247f57838260ff1660208110613c0057613c006156f2565b1a60f81b818360ff1681518110613c1957613c196156f2565b60200101906001600160f81b031916908160001a90535081613c3a81615d1d565b925050613bb2565b60608382613c4f85613c79565b604051602001613c6193929190615d3c565b60405160208183030381529060405290509392505050565b606081600003613ca05750506040805180820190915260018152600360fc1b602082015290565b8160005b8115613cca5780613cb48161571e565b9150613cc39050600a83615c6c565b9150613ca4565b6000816001600160401b03811115613ce457613ce46149d0565b6040519080825280601f01601f191660200182016040528015613d0e576020820181803683370190505b5090505b8415613d7957613d236001836156db565b9150613d30600a86615de1565b613d3b906030615df5565b60f81b818381518110613d5057613d506156f2565b60200101906001600160f81b031916908160001a905350613d72600a86615c6c565b9450613d12565b949350505050565b60608151600003613da057505060408051602081019091526000815290565b6000604051806060016040528060408152602001615eaa6040913990506000600384516002613dcf9190615df5565b613dd99190615c6c565b613de4906004615a70565b90506000613df3826020615df5565b6001600160401b03811115613e0a57613e0a6149d0565b6040519080825280601f01601f191660200182016040528015613e34576020820181803683370190505b509050818152600183018586518101602084015b81831015613ea0576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101613e48565b600389510660018114613eba5760028114613ecb57613ed7565b613d3d60f01b600119830152613ed7565b603d60f81b6000198301525b509398975050505050505050565b60008084156140505760008581526010602052604090205461404b576001600160a01b03841615801590613f3057506001600160a01b0384166000908152600e602052604090205415155b15613f55576001600160a01b0384166000908152600e60205260409020549450614097565b8215801590613f7157506000838152600f602052604090205415155b15613f8c576000838152600f60205260409020549450614097565b6001600160a01b038416613fb25760405162461bcd60e51b8152600401610aa290615e0d565b600085815260106020818152604080842089815581518084019092526001600160a01b038916825293899052919052613ff1916001908101919061471f565b506001600160a01b0384166000818152600e602052604090819020879055518691907f101f74814a060c243b4178543008d04967d667e5b262d151af81b054a1c2bc58906140429087815260200190565b60405180910390a35b614097565b6001600160a01b0384161561407f576001600160a01b0384166000908152600e60205260409020549450614097565b8215614097576000838152600f602052604090205494505b84158015906140b3575060008581526010602052604090205485145b6140cf5760405162461bcd60e51b8152600401610aa29061569a565b6001600160a01b03841661411757600085815260106020526040812060010180549091906140ff576140ff6156f2565b6000918252602090912001546001600160a01b031693505b6001600160a01b03841661413d5760405162461bcd60e51b8152600401610aa290615e0d565b6001600160a01b0384166000908152600e60205260409020546141a4576001600160a01b0384166000818152600e60209081526040808320899055888352601082528220600190810180549182018155835291200180546001600160a01b03191690911790555b82158015906141c157506000838152600f60205260409020548514155b1561422d576000838152600f60205260409020541561421b5760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610aa2565b6000838152600f602052604090208590555b50929391925050565b6000858152601360209081526040808320878452909152812060010154156143ff576000848152601060205260408120815b600582015481101561439457600082600501828154811061428b5761428b6156f2565b60009182526020808320909101548c83526013825260408084208d85529092529120549091506142c6906001600160401b03166103e8615a41565b6000828152601260205260409020600401546001600160401b0391821691600160a01b90910481169089161161432857600082815260126020526040902060040154614323908990600160a01b90046001600160401b0316615e33565b614354565b60008281526012602052604090206004015461435490600160a01b90046001600160401b031689615e33565b6001600160401b0316116143815760008181526012602052604090206005015461437e9085615df5565b93505b508061438c8161571e565b915050614268565b5060008881526013602090815260408083208a84529091529020600101546143bc8386615df5565b11156143fc5760008881526013602090815260408083208a84529091529020600101546143e98386615df5565b6143f391906156db565b92505050614402565b50505b50805b95945050505050565b60008054610100900460ff1615614452578160ff16600114801561442e5750303b155b61444a5760405162461bcd60e51b8152600401610aa290615e5b565b506000919050565b60005460ff8084169116106144795760405162461bcd60e51b8152600401610aa290615e5b565b506000805460ff191660ff92909216919091179055600190565b50805461449f9061563a565b6000825580601f106144af575050565b601f0160209004906000526020600020908101906125689190614774565b8280546144d99061563a565b90600052602060002090601f0160209004810192826144fb5760008555614541565b82601f1061451457805160ff1916838001178555614541565b82800160010185558215614541579182015b82811115614541578251825591602001919060010190614526565b5061454d929150614774565b5090565b8280548282559060005260206000209081019282156145415791602002820182811115614541578251825591602001919060010190614526565b6040518060400160405280600081526020016145ba604051806040016040528060008152602001600081525090565b905290565b6040518060e0016040528060008152602001606081526020016000815260200160008152602001600060048111156145f9576145f96147cc565b815260200160608152602001606081525090565b6040518060c001604052806000801916815260200160608152602001600081526020016000815260200160608152602001606081525090565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160401b03168152602001600081526020016000801916815260200160608152602001606081525090565b604080516101408101825260008082526020820181905260609282018390528282018190526080820181905260a0820181905260c0820181905260e0820152610100810182905261012081019190915290565b50805460008255906000526020600020908101906125689190614774565b828054828255906000526020600020908101928215614541579160200282015b8281111561454157825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061473f565b5b8082111561454d5760008155600101614775565b60006020828403121561479b57600080fd5b81356001600160e01b03198116811461247f57600080fd5b6000602082840312156147c557600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6005811061480057634e487b7160e01b600052602160045260246000fd5b9052565b60005b8381101561481f578181015183820152602001614807565b8381111561482e576000848401525b50505050565b6000815180845261484c816020860160208601614804565b601f01601f19169290920160200192915050565b86815285602082015284604082015261487c60608201856147e2565b60c06080820152600061489260c0830185614834565b82810360a08401526148a48185614834565b9998505050505050505050565b60208152600061247f6020830184614834565b80356001600160a01b0381168114612a3f57600080fd5b600080604083850312156148ee57600080fd5b6148f7836148c4565b946020939093013593505050565b6000806040838503121561491857600080fd5b82359150614928602084016148c4565b90509250929050565b83815261494160208201846147e2565b6060604082015260006144026060830184614834565b6000806040838503121561496a57600080fd5b50508035926020909101359150565b60008060006060848603121561498e57600080fd5b614997846148c4565b92506149a5602085016148c4565b9150604084013590509250925092565b6000602082840312156149c757600080fd5b61247f826148c4565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715614a0857614a086149d0565b60405290565b60405161014081016001600160401b0381118282101715614a0857614a086149d0565b604051601f8201601f191681016001600160401b0381118282101715614a5957614a596149d0565b604052919050565b60006001600160401b03831115614a7a57614a7a6149d0565b614a8d601f8401601f1916602001614a31565b9050828152838383011115614aa157600080fd5b828260208301376000602084830101529392505050565b600082601f830112614ac957600080fd5b61247f83833560208501614a61565b600060208284031215614aea57600080fd5b81356001600160401b03811115614b0057600080fd5b613d7984828501614ab8565b600081518084526020808501945080840160005b83811015614b3c57815187529582019590820190600101614b20565b509495945050505050565b60208152600061247f6020830184614b0c565b8a8152602081018a905260408101899052606081018890526001600160a01b03871660808201526001600160401b03861660a082015260c0810185905260e081018490526101406101008201819052600090614bb883820186614834565b9050828103610120840152614bcd8185614834565b9d9c50505050505050505050505050565b600082601f830112614bef57600080fd5b813560206001600160401b03821115614c0a57614c0a6149d0565b8160051b614c19828201614a31565b9283528481018201928281019087851115614c3357600080fd5b83870192505b84831015614c5257823582529183019190830190614c39565b979650505050505050565b803560058110612a3f57600080fd5b600060208284031215614c7e57600080fd5b81356001600160401b0380821115614c9557600080fd5b9083019060e08286031215614ca957600080fd5b614cb16149e6565b82358152602083013582811115614cc757600080fd5b614cd387828601614bde565b6020830152506040830135604082015260608301356060820152614cf960808401614c5d565b608082015260a083013582811115614d1057600080fd5b614d1c87828601614ab8565b60a08301525060c083013582811115614d3457600080fd5b614d4087828601614ab8565b60c08301525095945050505050565b602081528151602082015260018060a01b03602083015116604082015260006040830151614d8060608401826147e2565b5060ff6060840151166080830152608083015160e060a0840152614da8610100840182614834565b905060a0840151601f19808584030160c0860152614dc68383614834565b925060c08601519150808584030160e0860152506144028282614b0c565b602080825282518282018190526000919060409081850190868401855b82811015614e31578151805185528601518051878601528601518585015260609093019290850190600101614e01565b5091979650505050505050565b80358015158114612a3f57600080fd5b600080600060608486031215614e6357600080fd5b614e6c846148c4565b925060208401359150614e8160408501614e3e565b90509250925092565b80356001600160401b0381168114612a3f57600080fd5b600060208284031215614eb357600080fd5b81356001600160401b0380821115614eca57600080fd5b908301906101408286031215614edf57600080fd5b614ee7614a0e565b614ef0836148c4565b81526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a0820152614f3060c08401614e8a565b60c082015260e083013560e08201526101008084013583811115614f5357600080fd5b614f5f88828701614ab8565b8284015250506101208084013583811115614f7957600080fd5b614f8588828701614ab8565b918301919091525095945050505050565b600080600060608486031215614fab57600080fd5b614fb4846148c4565b95602085013595506040909401359392505050565b60208152815160208201526000602083015160e06040840152614ff0610100840182614b0c565b90506040840151606084015260608401516080840152608084015161501860a08501826147e2565b5060a0840151601f19808584030160c08601526150358383614834565b925060c08601519150808584030160e0860152506144028282614834565b803560ff81168114612a3f57600080fd5b60006020828403121561507657600080fd5b81356001600160401b038082111561508d57600080fd5b9083019060e082860312156150a157600080fd5b6150a96149e6565b823581526150b9602084016148c4565b60208201526150ca60408401614c5d565b60408201526150db60608401615053565b60608201526080830135828111156150f257600080fd5b6150fe87828601614ab8565b60808301525060a08301358281111561511657600080fd5b61512287828601614ab8565b60a08301525060c08301358281111561513a57600080fd5b614d4087828601614bde565b6000806040838503121561515957600080fd5b615162836148c4565b915061492860208401614e3e565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156151c85783516001600160a01b0316825292840192600192909201919084019061519f565b50604087015160608701526060870151608087015260808701519350601f199250828682030160a08701526151fd8185614b0c565b9350505060a0850151818584030160c086015261521a8382614b0c565b9695505050505050565b60008060006060848603121561523957600080fd5b8335925060208401356001600160401b0381111561525657600080fd5b61526286828701614ab8565b925050614e8160408501614c5d565b6000806000806080858703121561528757600080fd5b615290856148c4565b935061529e602086016148c4565b92506040850135915060608501356001600160401b038111156152c057600080fd5b8501601f810187136152d157600080fd5b6152e087823560208401614a61565b91505092959194509250565b600061014082518452602083015160208501526040830151604085015260608301516060850152608083015161532d60808601826001600160a01b03169052565b5060a083015161534860a08601826001600160401b03169052565b5060c083015160c085015260e083015160e085015261010080840151828287015261537583870182614834565b92505050610120808401518583038287015261521a8382614834565b60208152600061247f60208301846152ec565b8681526001600160a01b03861660208201526153c360408201866147e2565b60ff8416606082015260c06080820152600061489260c0830185614834565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561543757603f198886030184526154258583516152ec565b94509285019290850190600101615409565b5092979650505050505050565b6000806020838503121561545757600080fd5b82356001600160401b038082111561546e57600080fd5b818501915085601f83011261548257600080fd5b81358181111561549157600080fd5b8660208260061b85010111156154a657600080fd5b60209290920196919550909350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156155c557603f19898403018552815180518452878101516001600160401b031688850152868101516101408886018190529061552182870182614834565b9150506060808301516155398288018261ffff169052565b50506080828101519086015260a08083015163ffffffff9081169187019190915260c0808401519091169086015260e0808301516001600160401b03169086015261010080830151868303828801526155928382614834565b9250505061012080830151925085820381870152506155b18183614834565b9689019694505050908601906001016154df565b509098975050505050505050565b600080600080608085870312156155e957600080fd5b843593506020850135925061560060408601614e8a565b9396929550929360600135925050565b6000806040838503121561562357600080fd5b61562c836148c4565b9150614928602084016148c4565b600181811c9082168061564e57607f821691505b60208210810361566e57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b1b9bdd08185c1c1c9bdd995960a21b604082015260600190565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156156ed576156ed6156c5565b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b600060018201615730576157306156c5565b5060010190565b60008151615749818560208601614804565b9290920192915050565b60008a51615765818460208f01614804565b8a516157778183860160208f01614804565b8a51918401019061578c818360208e01614804565b895161579e8183850160208e01614804565b89519290910101906157b4818360208c01614804565b87516157c68183850160208c01614804565b87519290910101906157dc818360208a01614804565b85516157ee8183850160208a01614804565b8551929091010190615804818360208801614804565b019b9a5050505050505050505050565b683d913730b6b2911d1160b91b81528651600090615839816009850160208c01614804565b61202360f01b600991840191820152875161585b81600b840160208c01614804565b6b1116101134b6b0b3b2911d1160a11b600b92909101918201528651615888816017840160208b01614804565b7211161130b734b6b0ba34b7b72fbab936111d1160691b6017929091019182015285516158bc81602a840160208a01614804565b69111610113230ba32911d60b11b602a929091019182015284516158e7816034840160208901614804565b6159276159186159126034848601016f2c202261747472696275746573223a5b60801b815260100190565b87615737565b625d207d60e81b815260030190565b9a9950505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161596d81601d850160208701614804565b91909101601d0192915050565b6020808252601490820152731b9bdd081858dd1a5d994bdb9bdd08199bdd5b9960621b604082015260600190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b60a0815260006159e260a0830188614b0c565b82810360208401526159f48188614834565b90508560408401528281036060840152615a0e8186614834565b91505061521a60808301846147e2565b6020808252600990820152681b9bdd08199bdd5b9960ba1b604082015260600190565b60006001600160401b0382811684821681151582840482111615615a6757615a676156c5565b02949350505050565b6000816000190483118215151615615a8a57615a8a6156c5565b500290565b87815286602082015260e060408201526000615aae60e0830188614834565b60608301969096525060808101939093526001600160401b039190911660a083015260c0909101529392505050565b60008251615aef818460208701614804565b9190910192915050565b8054600090600181811c9080831680615b1357607f831692505b60208084108203615b3457634e487b7160e01b600052602260045260246000fd5b818015615b485760018114615b5957615b86565b60ff19861689528489019650615b86565b60008881526020902060005b86811015615b7e5781548b820152908501908301615b65565b505084890196505b50505050505092915050565b600061247f8284615af9565b608081526000615bb16080830187614834565b8281036020840152615bc38187614834565b9050615bd260408401866147e2565b8281036060840152614c528185614b0c565b604081526000615bf76040830185614834565b905061247f60208301846147e2565b6000615c128285615af9565b8351615c22818360208801614804565b64173539b7b760d91b9101908152600501949350505050565b600060208284031215615c4d57600080fd5b61247f82614e8a565b634e487b7160e01b600052601260045260246000fd5b600082615c7b57615c7b615c56565b500490565b60008351615c92818460208801614804565b600160fd1b9083019081526144026001820185615af9565b6e3d913a3930b4ba2fba3cb832911d1160891b81528251600090615cd581600f850160208801614804565b6b111610113b30b63ab2911d1160a11b600f918401918201528351615d0181601b840160208801614804565b62089f4b60ea1b601b9290910191820152601e01949350505050565b600060ff821660ff8103615d3357615d336156c5565b60010192915050565b6e3d913a3930b4ba2fba3cb832911d1160891b81528351600090615d6781600f850160208901614804565b711116113234b9b83630bcafba3cb832911d1160711b600f918401918201528451615d99816021840160208901614804565b6a111610113b30b63ab2911d60a91b602192909101918201528351615dc581602c840160208801614804565b611f4b60f21b602c9290910191820152602e0195945050505050565b600082615df057615df0615c56565b500690565b60008219821115615e0857615e086156c5565b500190565b6020808252600c908201526b6d697373696e67206461746160a01b604082015260600190565b60006001600160401b0383811690831681811015615e5357615e536156c5565b039392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d37e089c0bd4de2cafe676b664b2eabddeded70f78bc4fe0cf4c4b9458e6d50364736f6c634300080d0033',
  linkReferences: {},
  deployedLinkReferences: {},
};
