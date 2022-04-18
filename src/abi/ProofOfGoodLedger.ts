export default {
  _format: 'hh-sol-artifact-1',
  contractName: 'ProofOfGoodLedger',
  sourceName: 'contracts/ProofOfGoodLedger.sol',
  abi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
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
          internalType: 'uint16[]',
          name: 'goodTypeIdArray',
          type: 'uint16[]',
        },
        {
          indexed: true,
          internalType: 'uint16',
          name: 'goodCategoryId',
          type: 'uint16',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint32',
          name: 'valuePerUnit',
          type: 'uint32',
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
          internalType: 'uint16',
          name: 'id',
          type: 'uint16',
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
          indexed: false,
          internalType: 'uint16',
          name: 'goodCategoryId',
          type: 'uint16',
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
          internalType: 'uint16',
          name: 'id',
          type: 'uint16',
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
          internalType: 'address',
          name: 'mainAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'otherAddress',
          type: 'address',
        },
      ],
      name: 'ProfilesMerged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
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
          name: 'emailHash',
          type: 'bytes32',
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
          indexed: false,
          internalType: 'uint256',
          name: 'goodOracleId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'proofURL',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'value',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'uint32',
          name: 'units',
          type: 'uint32',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'timestamp',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'externalId',
          type: 'uint256',
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
              internalType: 'uint16[]',
              name: 'goodTypeIdArray',
              type: 'uint16[]',
            },
            {
              internalType: 'uint16',
              name: 'goodCategoryId',
              type: 'uint16',
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
              internalType: 'uint32',
              name: 'valuePerUnit',
              type: 'uint32',
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
          internalType: 'uint16',
          name: '_goodCategoryId',
          type: 'uint16',
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
              internalType: 'uint32',
              name: 'id',
              type: 'uint32',
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
          internalType: 'uint16',
          name: '_goodTypeId',
          type: 'uint16',
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
              internalType: 'uint32',
              name: 'goodOracleId',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'units',
              type: 'uint32',
            },
            {
              internalType: 'uint64',
              name: 'timestamp',
              type: 'uint64',
            },
            {
              internalType: 'uint256',
              name: 'externalId',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'proofURL',
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
          internalType: 'address',
          name: '_account',
          type: 'address',
        },
        {
          internalType: 'uint16',
          name: '_goodCategoryId',
          type: 'uint16',
        },
      ],
      name: 'getAddressBalancesByCategory',
      outputs: [
        {
          components: [
            {
              internalType: 'uint128',
              name: 'balance',
              type: 'uint128',
            },
            {
              internalType: 'uint64',
              name: 'totalGood',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'totalGoodRedeemed',
              type: 'uint64',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.Balances',
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
              internalType: 'uint16[]',
              name: 'goodTypeIdArray',
              type: 'uint16[]',
            },
            {
              internalType: 'uint16',
              name: 'goodCategoryId',
              type: 'uint16',
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
              internalType: 'uint32',
              name: 'valuePerUnit',
              type: 'uint32',
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
          internalType: 'uint32',
          name: 'id',
          type: 'uint32',
        },
      ],
      name: 'getGoodOracle',
      outputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'id',
              type: 'uint32',
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
              internalType: 'address',
              name: 'doGooder',
              type: 'address',
            },
            {
              internalType: 'uint64',
              name: 'value',
              type: 'uint64',
            },
            {
              internalType: 'uint32',
              name: 'units',
              type: 'uint32',
            },
            {
              internalType: 'uint64',
              name: 'timestamp',
              type: 'uint64',
            },
            {
              internalType: 'uint32',
              name: 'goodOracleId',
              type: 'uint32',
            },
            {
              internalType: 'uint256',
              name: 'externalId',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'proofURL',
              type: 'string',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.ProofOfGoodEntry[]',
          name: 'entries',
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
          internalType: 'uint16',
          name: 'goodCategoryId',
          type: 'uint16',
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
          internalType: 'uint32',
          name: 'valuePerUnit',
          type: 'uint32',
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
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      name: 'goodCategories',
      outputs: [
        {
          internalType: 'uint16',
          name: 'id',
          type: 'uint16',
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
          internalType: 'uint32',
          name: '',
          type: 'uint32',
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
          internalType: 'uint32',
          name: '',
          type: 'uint32',
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
          internalType: 'uint32',
          name: 'id',
          type: 'uint32',
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
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      name: 'goodTypes',
      outputs: [
        {
          internalType: 'uint16',
          name: 'id',
          type: 'uint16',
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
          internalType: 'uint32',
          name: '',
          type: 'uint32',
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
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxGoodOracleId',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
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
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_mainAddress',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_otherAddress',
          type: 'address',
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
          internalType: 'uint128',
          name: 'balance',
          type: 'uint128',
        },
        {
          internalType: 'uint64',
          name: 'totalGood',
          type: 'uint64',
        },
        {
          internalType: 'uint64',
          name: 'totalGoodRedeemed',
          type: 'uint64',
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
              internalType: 'uint128',
              name: 'balance',
              type: 'uint128',
            },
            {
              internalType: 'uint64',
              name: 'totalGood',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'totalGoodRedeemed',
              type: 'uint64',
            },
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
                  internalType: 'address',
                  name: 'doGooder',
                  type: 'address',
                },
                {
                  internalType: 'uint64',
                  name: 'value',
                  type: 'uint64',
                },
                {
                  internalType: 'uint32',
                  name: 'units',
                  type: 'uint32',
                },
                {
                  internalType: 'uint64',
                  name: 'timestamp',
                  type: 'uint64',
                },
                {
                  internalType: 'uint32',
                  name: 'goodOracleId',
                  type: 'uint32',
                },
                {
                  internalType: 'uint256',
                  name: 'externalId',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'proofURL',
                  type: 'string',
                },
              ],
              internalType: 'struct ProofOfGoodLedger.ProofOfGoodEntry[]',
              name: 'entries',
              type: 'tuple[]',
            },
            {
              internalType: 'uint16[]',
              name: 'categories',
              type: 'uint16[]',
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
              internalType: 'uint128',
              name: 'balance',
              type: 'uint128',
            },
            {
              internalType: 'uint64',
              name: 'totalGood',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'totalGoodRedeemed',
              type: 'uint64',
            },
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
                  internalType: 'address',
                  name: 'doGooder',
                  type: 'address',
                },
                {
                  internalType: 'uint64',
                  name: 'value',
                  type: 'uint64',
                },
                {
                  internalType: 'uint32',
                  name: 'units',
                  type: 'uint32',
                },
                {
                  internalType: 'uint64',
                  name: 'timestamp',
                  type: 'uint64',
                },
                {
                  internalType: 'uint32',
                  name: 'goodOracleId',
                  type: 'uint32',
                },
                {
                  internalType: 'uint256',
                  name: 'externalId',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'proofURL',
                  type: 'string',
                },
              ],
              internalType: 'struct ProofOfGoodLedger.ProofOfGoodEntry[]',
              name: 'entries',
              type: 'tuple[]',
            },
            {
              internalType: 'uint16[]',
              name: 'categories',
              type: 'uint16[]',
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
              internalType: 'uint128',
              name: 'balance',
              type: 'uint128',
            },
            {
              internalType: 'uint64',
              name: 'totalGood',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'totalGoodRedeemed',
              type: 'uint64',
            },
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
                  internalType: 'address',
                  name: 'doGooder',
                  type: 'address',
                },
                {
                  internalType: 'uint64',
                  name: 'value',
                  type: 'uint64',
                },
                {
                  internalType: 'uint32',
                  name: 'units',
                  type: 'uint32',
                },
                {
                  internalType: 'uint64',
                  name: 'timestamp',
                  type: 'uint64',
                },
                {
                  internalType: 'uint32',
                  name: 'goodOracleId',
                  type: 'uint32',
                },
                {
                  internalType: 'uint256',
                  name: 'externalId',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'proofURL',
                  type: 'string',
                },
              ],
              internalType: 'struct ProofOfGoodLedger.ProofOfGoodEntry[]',
              name: 'entries',
              type: 'tuple[]',
            },
            {
              internalType: 'uint16[]',
              name: 'categories',
              type: 'uint16[]',
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
          internalType: 'uint16',
          name: '_goodCategoryId',
          type: 'uint16',
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
          name: '_admin',
          type: 'address',
        },
      ],
      name: 'removeAdmin',
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
              internalType: 'address',
              name: 'doGooder',
              type: 'address',
            },
            {
              internalType: 'uint64',
              name: 'value',
              type: 'uint64',
            },
            {
              internalType: 'uint32',
              name: 'units',
              type: 'uint32',
            },
            {
              internalType: 'uint64',
              name: 'timestamp',
              type: 'uint64',
            },
            {
              internalType: 'uint32',
              name: 'goodOracleId',
              type: 'uint32',
            },
            {
              internalType: 'uint256',
              name: 'externalId',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'proofURL',
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
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      name: 'totalGoodByCategory',
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
      inputs: [],
      name: 'totalGoodRedeemed',
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
          internalType: 'uint32',
          name: '_goodOracleId',
          type: 'uint32',
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
    '0x60806040523480156200001157600080fd5b50604080518082018252600b81526a141c9bdbd993d991dbdbd960aa1b602080830191825283518085019094526003845262504f4760e81b9084015281519192916200006091600091620000c1565b50805162000076906001906020840190620000c1565b5050506001601060006200008f620000bd60201b60201c565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055620001a3565b3390565b828054620000cf9062000167565b90600052602060002090601f016020900481019282620000f357600085556200013e565b82601f106200010e57805160ff19168380011785556200013e565b828001600101855582156200013e579182015b828111156200013e57825182559160200191906001019062000121565b506200014c92915062000150565b5090565b5b808211156200014c576000815560010162000151565b600181811c908216806200017c57607f821691505b6020821081036200019d57634e487b7160e01b600052602260045260246000fd5b50919050565b615ec780620001b36000396000f3fe608060405234801561001057600080fd5b506004361061025c5760003560e01c806301b844481461026157806301ffc9a71461028c578063056a305c146102af57806306fdde03146102d4578063081812fc146102e9578063095ea7b3146103145780630c97174f146103295780630fe316481461035157806316feb0d0146103645780631785f53c146103775780631ad03d011461038a5780631d3a5d291461039d5780631fb4f1a0146103c957806323b872dd146103dc5780632b325b3b146103ef578063365276e714610412578063392b7633146104e95780633b093ddc1461051a57806342842e0e1461059d578063429b62e5146105b057806347f6acf1146105d357806348925864146105ea5780634bf25ae1146105fd5780635dbdf4d81461061d5780636352211e1461063d578063704802751461065057806370a082311461066357806372f0d7ac1461067657806377fde7f8146106865780637a04a41914610699578063838bf3e5146106b95780638c3080fa146106d957806395d89b4114610707578063a22cb4651461070f578063aa792cb314610722578063aaa758b114610735578063b10be93114610755578063b88d4fde14610768578063bc2dfced1461077b578063c87b56dd14610784578063cc33c87514610797578063cf3b7d90146107b7578063d040acb2146107da578063d33e5150146107ed578063d69167e51461080d578063d6918fdb14610820578063db16711e14610835578063dd86d01b14610848578063e272578e14610868578063e95d158b14610888578063e985e9c51461089b578063efdcc47f146108d7575b600080fd5b61027461026f3660046149ba565b6108ea565b60405161028393929190614a65565b60405180910390f35b61029f61029a366004614aae565b61099f565b6040519015158152602001610283565b6102c26102bd366004614acb565b6109f1565b60405161028396959493929190614ae4565b6102dc610b4e565b6040516102839190614b3f565b6102fc6102f7366004614acb565b610be0565b6040516001600160a01b039091168152602001610283565b610327610322366004614b69565b610c6d565b005b60165461033e90600160201b900461ffff1681565b60405161ffff9091168152602001610283565b61032761035f366004614ce8565b610d7d565b610327610372366004614dc5565b6113e0565b610327610385366004614df1565b611476565b61029f610398366004614e0c565b6114c6565b6016546103b490600160401b900463ffffffff1681565b60405163ffffffff9091168152602001610283565b6103276103d7366004614e58565b611757565b6103276103ea366004614e92565b611833565b61029f6103fd366004614df1565b60096020526000908152604090205460ff1681565b6104ad610420366004614ece565b6040805160608082018352600080835260208084018290529284018190526001600160a01b03959095168552601282528285205485526015825282852061ffff9490941685529281529281902081519283018252546001600160801b03811683526001600160401b03600160801b8204811694840194909452600160c01b90049092169181019190915290565b6040805182516001600160801b031681526020808401516001600160401b03908116918301919091529282015190921690820152606001610283565b6103b46104f7366004614f05565b8051602081830181018051600f8252928201919093012091525463ffffffff1681565b610566610528366004614acb565b601460205260009081526040902080546002909101546001600160801b038116906001600160401b03600160801b8204811691600160c01b90041684565b604080519485526001600160801b0390931660208501526001600160401b0391821692840192909252166060820152608001610283565b6103276105ab366004614e92565b611864565b61029f6105be366004614df1565b60106020526000908152604090205460ff1681565b6105dc60075481565b604051908152602001610283565b6103276105f8366004614f48565b61187f565b6105dc61060b366004614acb565b60136020526000908152604090205481565b6105dc61062b3660046149ba565b600a6020526000908152604090205481565b6102fc61064b366004614acb565b6119cb565b61032761065e366004614df1565b611a42565b6105dc610671366004614df1565b611aa8565b6016546103b49063ffffffff1681565b610327610694366004615031565b611b2f565b6106ac6106a7366004615122565b611e3a565b6040516102839190615178565b6106cc6106c7366004614acb565b612087565b6040516102839190615227565b61029f6106e73660046152bb565b601160209081526000928352604080842090915290825290205460ff1681565b6102dc6122d2565b61032761071d3660046152e5565b6122e1565b6102746107303660046149ba565b6122f0565b610748610743366004614acb565b612322565b6040516102839190615408565b6103276107633660046152e5565b6125f9565b6103276107763660046154dd565b612653565b6105dc60085481565b6102dc610792366004614acb565b61268b565b6107aa6107a5366004614acb565b612762565b6040516102839190615558565b6107ca6107c5366004614acb565b61288a565b604051610283949392919061556b565b6105dc6107e836600461560f565b6129d0565b6108006107fb366004614acb565b612caf565b60405161028391906156e5565b61074861081b366004614df1565b612e35565b60165461033e90600160301b900461ffff1681565b610327610843366004614f48565b612e5f565b61085b6108563660046156f8565b612f9e565b604051610283919061576c565b6105dc610876366004614df1565b60126020526000908152604090205481565b61032761089636600461588a565b6133ef565b61029f6108a936600461588a565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6107486108e5366004614acb565b613852565b600c602052600090815260409020805460018201805461ffff8316936201000090930460ff1692919061091c906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610948906158b4565b80156109955780601f1061096a57610100808354040283529160200191610995565b820191906000526020600020905b81548152906001019060200180831161097857829003601f168201915b5050505050905083565b60006001600160e01b031982166380ac58cd60e01b14806109d057506001600160e01b03198216635b5e139f60e01b145b806109eb57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600d60205260009081526040902080546002820154600383018054929361ffff8316936201000090930460ff1692909190610a2b906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610a57906158b4565b8015610aa45780601f10610a7957610100808354040283529160200191610aa4565b820191906000526020600020905b815481529060010190602001808311610a8757829003601f168201915b5050506004840154600585018054949563ffffffff909216949193509150610acb906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610af7906158b4565b8015610b445780601f10610b1957610100808354040283529160200191610b44565b820191906000526020600020905b815481529060010190602001808311610b2757829003601f168201915b5050505050905086565b606060008054610b5d906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610b89906158b4565b8015610bd65780601f10610bab57610100808354040283529160200191610bd6565b820191906000526020600020905b815481529060010190602001808311610bb957829003601f168201915b5050505050905090565b6000610beb82613866565b610c515760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610c78826119cb565b9050806001600160a01b0316836001600160a01b031603610ce55760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610c48565b336001600160a01b0382161480610d015750610d0181336108a9565b610d6e5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b6064820152608401610c48565b610d788383613883565b505050565b3360009081526010602052604090205460ff1680610dbf5750336000908152601160209081526040808320608085015163ffffffff16845290915290205460ff165b610ddb5760405162461bcd60e51b8152600401610c48906158ee565b600080610df58360400151846000015185602001516138f1565b91509150610e0283613c30565b50610e11600680546001019055565b6000610e1c60065490565b9050610e2882826140b8565b60608401516000908152600d602052604081206004015460a0860151610e549163ffffffff1690615934565b63ffffffff169050826001600160a01b03167fe3f157739acb4b4fca01bf36ba7ed4b2805f0a03b74d7e3a8726e11dbbe682da8387602001518789606001518a608001518b6101000151888d60a001518e60c001518f60e00151604051610ec49a99989796959493929190615960565b60405180910390a2600060405180610120016040528084815260200187606001518152602001856001600160a01b03168152602001836001600160401b031681526020018760a0015163ffffffff1681526020018760c001516001600160401b03168152602001876080015163ffffffff1681526020018760e00151815260200187610100015181525090506000600d6000886060015181526020019081526020016000206040518060e00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020018280548015610ff557602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411610fbc5790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff16600481111561102c5761102c6149d5565b600481111561103d5761103d6149d5565b8152602001600382018054611051906158b4565b80601f016020809104026020016040519081016040528092919081815260200182805461107d906158b4565b80156110ca5780601f1061109f576101008083540402835291602001916110ca565b820191906000526020600020905b8154815290600101906020018083116110ad57829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916110f7906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611123906158b4565b80156111705780601f1061114557610100808354040283529160200191611170565b820191906000526020600020905b81548152906001019060200180831161115357829003601f168201915b5050509190925250505060008781526014602090815260408083206003908101805460018082018355918652948490208851600690960201948555878401519085015590860151600284018054606089015160808a01516001600160a01b039094166001600160e01b031990921691909117600160a01b6001600160401b0392831602176001600160e01b0316600160e01b63ffffffff948516021790915560a0880151928501805460c08a0151949092166001600160601b031990921691909117600160401b939092169290920217905560e085015160048301556101008501518051939450859361126992600585019201906146dd565b50505060008681526015602090815260408083208482015161ffff168452909152812054600160801b90046001600160401b031690036112f557600086815260146020908152604080832090840151600490910180546001810182559084529190922060108204018054600f9092166002026101000a61ffff8181021990931692909316929092021790555b600086815260146020908152604080832060020180546001600160c01b031981166001600160401b038981166001600160801b0380851682018116938417600160801b6001600160801b031996871690951785900484168d0184168502179095556015808852868920998701805161ffff9081168b528b8a52888b2080549788169789168501909816969096179096559d88529c86528351831687529685528386208054600160801b600160c01b03198116908390048916909a019097160297909717909455600780548a01905592519094168152600a909352909120805490940190935550505050565b3360009081526010602052604090205460ff1661140f5760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b0381166000908152601260205260409020548015801590611444575060008181526014602052604090205481145b6114605760405162461bcd60e51b8152600401610c48906159ce565b6000928352601360205260409092209190915550565b3360009081526010602052604090205460ff166114a55760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b03166000908152601060205260409020805460ff19169055565b3360009081526009602052604081205460ff166114f55760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b038416600090815260126020908152604080832054808452601490925282206002018054919286926115389084906001600160801b03166159f9565b82546101009290920a6001600160801b03818102199093169183160217909155600880548701905560008381526014602090815260409182902060020154825189815293169083015261ffff8616908201526001600160a01b03871691507f25cc4c2f654aef5252732ea2f356ba9cd571c013f83bf7020ce61e2f160f6ee89060600160405180910390a261ffff83161561162c57600081815260156020908152604080832061ffff87168452909152812080548692906116039084906001600160801b03166159f9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061174a565b60005b60008281526014602052604090206004015481101561170f57600082815260146020526040812060040180548390811061166b5761166b615a21565b60009182526020808320601083040154868452601582526040808520600f9094166002026101000a90910461ffff1680855292909152909120549091506001600160801b039081169087168111156116c05750855b600084815260156020908152604080832061ffff9590951683529390529190912080546001600160801b031981166001600160801b03918216849003821617909155169094039360010161162f565b50831561174a5760405162461bcd60e51b8152602060048201526009602482015268756e646572666c6f7760b81b6044820152606401610c48565b60019150505b9392505050565b3360009081526010602052604090205460ff166117865760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b03831661179957600080fd5b8163ffffffff166000036117bf5760405162461bcd60e51b8152600401610c4890615a37565b63ffffffff8083166000818152600e6020526040902054909116146117f65760405162461bcd60e51b8152600401610c4890615a6a565b6001600160a01b03909216600090815260116020908152604080832063ffffffff909416835292905220805491151560ff19909216919091179055565b61183d33826141d8565b6118595760405162461bcd60e51b8152600401610c4890615a8d565b610d7883838361424d565b610d7883838360405180602001604052806000815250612653565b3360009081526010602052604090205460ff166118ae5760405162461bcd60e51b8152600401610c48906158ee565b60008251116118cf5760405162461bcd60e51b8152600401610c4890615ade565b8261ffff16600003611924576016805461ffff60301b198116600160301b9182900461ffff908116600101908116928302919091179092556000818152600b60205260409020805461ffff1916909117905592505b61ffff83166000908152600b60209081526040909120835161194e926001909201918501906146dd565b5061ffff83166000908152600b60205260409020805482919062ff0000191662010000836004811115611983576119836149d5565b02179055508261ffff167f4fcd383604332b394161a254d359c73296253b0e25354b61f8a192f2ca90f1c083836040516119be929190615b05565b60405180910390a2505050565b6000818152600260205260408120546001600160a01b0316806109eb5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610c48565b3360009081526010602052604090205460ff16611a715760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b038116611a8457600080fd5b6001600160a01b03166000908152601060205260409020805460ff19166001179055565b60006001600160a01b038216611b135760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610c48565b506001600160a01b031660009081526003602052604090205490565b3360009081526010602052604090205460ff16611b5e5760405162461bcd60e51b8152600401610c48906158ee565b8051600003611b95576016805463ffffffff60401b198116600160401b9182900463ffffffff908116600101169182021790915581525b60005b816020015151811015611c6a57600082602001518281518110611bbd57611bbd615a21565b602002602001015161ffff1611611be65760405162461bcd60e51b8152600401610c4890615a37565b6001600b600084602001518481518110611c0257611c02615a21565b60209081029190910181015161ffff1682528101919091526040016000205462010000900460ff166004811115611c3b57611c3b6149d5565b14611c585760405162461bcd60e51b8152600401610c4890615b27565b80611c6281615b4b565b915050611b98565b506000816040015161ffff1611611c935760405162461bcd60e51b8152600401610c4890615a37565b600160408281015161ffff166000908152600c602052205462010000900460ff166004811115611cc557611cc56149d5565b14611ce25760405162461bcd60e51b8152600401610c4890615b27565b600081608001515111611d075760405162461bcd60e51b8152600401610c4890615ade565b80516000908152600d60209081526040909120825181558183015180518493611d37926001850192910190614761565b50604082015160028201805461ffff90921661ffff1983168117825560608501519262ffffff19161762010000836004811115611d7657611d766149d5565b021790555060808201518051611d969160038401916020909101906146dd565b5060a082015160048201805463ffffffff191663ffffffff90921691909117905560c08201518051611dd29160058401916020909101906146dd565b50905050806040015161ffff1681600001517f27b90160eaa4ab2aa06fabc8c7f0a5acd0041ec04a3851eb1b5881c94ee37d12836020015184608001518560a001518660c001518760600151604051611e2f959493929190615b64565b60405180910390a350565b611e6d6040805160a081019091526000808252602082019081526020016060815260200160608152602001606081525090565b63ffffffff8083166000818152600e602052604090205490911614611ea45760405162461bcd60e51b8152600401610c4890615a6a565b63ffffffff8281166000908152600e6020908152604091829020825160a0810190935280549384168352919290830190600160201b900460ff166004811115611eef57611eef6149d5565b6004811115611f0057611f006149d5565b8152602001600182018054611f14906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611f40906158b4565b8015611f8d5780601f10611f6257610100808354040283529160200191611f8d565b820191906000526020600020905b815481529060010190602001808311611f7057829003601f168201915b50505050508152602001600282018054611fa6906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611fd2906158b4565b801561201f5780601f10611ff45761010080835404028352916020019161201f565b820191906000526020600020905b81548152906001019060200180831161200257829003601f168201915b505050505081526020016003820180548060200260200160405190810160405280929190818152602001828054801561207757602002820191906000526020600020905b815481526020019060010190808311612063575b5050505050815250509050919050565b61208f614805565b6000828152600d602052604081205490036120bc5760405162461bcd60e51b8152600401610c4890615a6a565b6000828152600d6020908152604091829020825160e081018452815481526001820180548551818602810186019096528086529194929385810193929083018282801561215057602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116121175790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff166004811115612187576121876149d5565b6004811115612198576121986149d5565b81526020016003820180546121ac906158b4565b80601f01602080910402602001604051908101604052809291908181526020018280546121d8906158b4565b80156122255780601f106121fa57610100808354040283529160200191612225565b820191906000526020600020905b81548152906001019060200180831161220857829003601f168201915b5050509183525050600482015463ffffffff166020820152600582018054604090920191612252906158b4565b80601f016020809104026020016040519081016040528092919081815260200182805461227e906158b4565b80156120775780601f106122a057610100808354040283529160200191612077565b820191906000526020600020905b8154815290600101906020018083116122ae57505050919092525091949350505050565b606060018054610b5d906158b4565b6122ec3383836143d7565b5050565b600b602052600090815260409020805460018201805461ffff8316936201000090930460ff1692919061091c906158b4565b61232a614855565b6000828152601460209081526040808320815160e0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156123a057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612382575b505050918352505060028201546001600160801b0381166020808401919091526001600160401b03600160801b83048116604080860191909152600160c01b909304166060840152600384018054835181840281018401909452808452608090940193909160009084015b8282101561254e5760008481526020908190206040805161012081018252600686029092018054835260018101549383019390935260028301546001600160a01b038116918301919091526001600160401b03600160a01b82048116606084015263ffffffff600160e01b90920482166080840152600384015490811660a0840152600160401b90041660c0820152600482015460e0820152600582018054919291610100840191906124bd906158b4565b80601f01602080910402602001604051908101604052809291908181526020018280546124e9906158b4565b80156125365780601f1061250b57610100808354040283529160200191612536565b820191906000526020600020905b81548152906001019060200180831161251957829003601f168201915b5050505050815250508152602001906001019061240b565b505050508152602001600482018054806020026020016040519081016040528092919081815260200182805480156125cd57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116125945790505b50505091909252505081519192506109eb90505760405162461bcd60e51b8152600401610c48906159ce565b3360009081526010602052604090205460ff166126285760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b03919091166000908152600960205260409020805460ff1916911515919091179055565b61265d33836141d8565b6126795760405162461bcd60e51b8152600401610c4890615a8d565b612685848484846144a1565b50505050565b606061269682613866565b6126fa5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610c48565b600061271160408051602081019091526000815290565b905060008151116127315760405180602001604052806000815250611750565b8061273b846144d4565b60405160200161274c929190615bb9565b6040516020818303038152906040529392505050565b6127d8604051806101200160405280600081526020016000815260200160006001600160a01b0316815260200160006001600160401b03168152602001600063ffffffff16815260200160006001600160401b03168152602001600063ffffffff16815260200160008152602001606081525090565b6000612810601260006127ea866119cb565b6001600160a01b03166001600160a01b0316815260200190815260200160002054612322565b905060005b8160a001515181101561288357838260a00151828151811061283957612839615a21565b60200260200101516000015103612871578160a00151818151811061286057612860615a21565b602002602001015192505050919050565b8061287b81615b4b565b915050612815565b5050919050565b600e602052600090815260409020805460018201805463ffffffff831693600160201b90930460ff169291906128bf906158b4565b80601f01602080910402602001604051908101604052809291908181526020018280546128eb906158b4565b80156129385780601f1061290d57610100808354040283529160200191612938565b820191906000526020600020905b81548152906001019060200180831161291b57829003601f168201915b50505050509080600201805461294d906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054612979906158b4565b80156129c65780601f1061299b576101008083540402835291602001916129c6565b820191906000526020600020905b8154815290600101906020018083116129a957829003601f168201915b5050505050905084565b3360009081526010602052604081205460ff166129ff5760405162461bcd60e51b8152600401610c48906158ee565b600082604001515111612a245760405162461bcd60e51b8152600401610c4890615ade565b600f8260400151604051612a389190615be8565b9081526040519081900360200190205463ffffffff1615612a985760405162461bcd60e51b815260206004820152601a602482015279676f6f64206f7261636c6520616c72656164792065786973747360301b6044820152606401610c48565b815163ffffffff16600003612acc576016805463ffffffff8082166001011663ffffffff1990911681179091558252612b5a565b815163ffffffff9081166000818152600e602052604090205490911614612b055760405162461bcd60e51b8152600401610c4890615a6a565b60408201515115612b5a57600f600e6000846000015163ffffffff168152602001908152602001600020600101604051612b3f9190615c04565b908152604051908190036020019020805463ffffffff191690555b815163ffffffff9081166000908152600e6020908152604090912084518154931663ffffffff1984168117825591850151859391929091839164ffffffffff1990911617600160201b836004811115612bb557612bb56149d5565b021790555060408201518051612bd59160018401916020909101906146dd565b5060608201518051612bf19160028401916020909101906146dd565b5060808201518051612c0d916003840191602090910190614890565b509050508160000151600f8360400151604051612c2a9190615be8565b9081526040805160209281900383018120805463ffffffff191663ffffffff958616179055855191860151606087015193870151608088015193909516947fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5694612c98949293909290615c9f565b60405180910390a250805163ffffffff165b919050565b606060146000838152602001908152602001600020600301805480602002602001604051908101604052809291908181526020016000905b82821015612e2a5760008481526020908190206040805161012081018252600686029092018054835260018101549383019390935260028301546001600160a01b038116918301919091526001600160401b03600160a01b82048116606084015263ffffffff600160e01b90920482166080840152600384015490811660a0840152600160401b90041660c0820152600482015460e082015260058201805491929161010084019190612d99906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054612dc5906158b4565b8015612e125780601f10612de757610100808354040283529160200191612e12565b820191906000526020600020905b815481529060010190602001808311612df557829003601f168201915b50505050508152505081526020019060010190612ce7565b505050509050919050565b612e3d614855565b6001600160a01b0382166000908152601260205260409020546109eb90612322565b3360009081526010602052604090205460ff16612e8e5760405162461bcd60e51b8152600401610c48906158ee565b6000825111612eaf5760405162461bcd60e51b8152600401610c4890615ade565b8261ffff16600003612f04576016805461ffff60201b198116600160201b9182900461ffff908116600101908116928302919091179092556000818152600c60205260409020805461ffff1916909117905592505b61ffff83166000908152600c602090815260409091208351612f2e926001909201918501906146dd565b5061ffff83166000908152600c60205260409020805482919062ff0000191662010000836004811115612f6357612f636149d5565b02179055508261ffff167fa64371df3e4e587f97e094b4e6cb2dd8780392180388ec6f7c2ac098a8452feb83836040516119be929190615b05565b60606000826001600160401b03811115612fba57612fba614b93565b604051908082528060200260200182016040528015612ff357816020015b612fe06148ca565b815260200190600190039081612fd85790505b50905060005b838110156133e757600061302786868481811061301857613018615a21565b90506040020160000135612762565b90506130316148ca565b6020808301516000908152600d82526040808220815160e081018352815481526001820180548451818802810188019095528085529495919492938583019390928301828280156130c957602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116130905790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff166004811115613100576131006149d5565b6004811115613111576131116149d5565b8152602001600382018054613125906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054613151906158b4565b801561319e5780601f106131735761010080835404028352916020019161319e565b820191906000526020600020905b81548152906001019060200180831161318157829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916131cb906158b4565b80601f01602080910402602001604051908101604052809291908181526020018280546131f7906158b4565b80156132445780601f1061321957610100808354040283529160200191613244565b820191906000526020600020905b81548152906001019060200180831161322757829003601f168201915b5050505050815250509050600088888681811061326357613263615a21565b905060400201602001602081019061327b9190615ce5565b9050806001600160401b031684606001516001600160401b031610156132a2575060608301515b60008260a0015163ffffffff16826132ba9190615d16565b8551855260a08601516001600160401b03166020808701919091526040808801516001600160a01b0316600090815260128352819020548151928301529192500160408051601f198184030181529181528501526020830151805160009061332457613324615a21565b602090810291909101015161ffff16606085015260e080860151608086015260c08087015163ffffffff90811660a088015283169086018190526001600160401b038416918601919091526101008087015190860152613383906144d4565b8360c00151604051602001613399929190615d3c565b604051602081830303815290604052846101200181905250838787815181106133c4576133c4615a21565b6020026020010181905250505050505080806133df90615b4b565b915050612ff9565b509392505050565b3360009081526010602052604090205460ff1661341e5760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b03808316600090815260126020818152604080842054845260148083528185209587168552928252808420548452919052902080548254036134985760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610c48565b81546134b65760405162461bcd60e51b8152600401610c48906159ce565b80546134d45760405162461bcd60e51b8152600401610c48906159ce565b6002818101805491840180546001600160801b031981166001600160801b039485168583160190941693841780835583546001600160c01b0319909216909417600160801b918290046001600160401b039081169583900481169590950185169091021780825591546001600160c01b038316600160c01b9182900485169382900485169390930190931690920217905560005b6001820154811015613613578260010182600101828154811061358d5761358d615a21565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b03909216919091179055845491840180546012929190859081106135e6576135e6615a21565b60009182526020808320909101546001600160a01b03168352820192909252604001902055600101613568565b5060005b60048201548110156137f157600082600401828154811061363a5761363a615a21565b6000918252602080832060108304015487548452601582526040808520600f9094166002026101000a90910461ffff1680855292909152822054909250600160801b90046001600160401b031690036136cb576004840180546001810182556000918252602090912060108204018054600f9092166002026101000a61ffff81810219909316928416029190911790555b8254600090815260156020818152604080842061ffff9095168085529482528084205488548552838352818520868652835281852080546001600160801b03818116938116939093019092166001600160801b0319909216919091179055865484528282528084208585528252808420548854855283835281852086865283528185208054600160801b8082046001600160401b0390811694829004811694909401841602600160801b600160c01b0319909116179055875485528383528185208686528352818520548954865284845282862087875284528286208054600160c01b8082048516938190048516939093019093169091026001600160c01b03909216919091179055865484529181528183209383529290925290812055600101613617565b5060006002820181905561380990600183019061491d565b604080516001600160a01b038087168252851660208201527f239567be74fe3e80a3e23e994c3234310617523efa3bdb81b591bda34e070368910160405180910390a150505050565b61385a614855565b6109eb61081b836119cb565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906138b8826119cb565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000808415613a3e57600085815260146020526040902054613a39576001600160a01b0384161580159061393c57506001600160a01b03841660009081526012602052604090205415155b15613961576001600160a01b0384166000908152601260205260409020549450613aef565b821580159061397d575060008381526013602052604090205415155b15613998576000838152601360205260409020549450613aef565b6001600160a01b0384166139dd5760405162461bcd60e51b815260206004820152600c60248201526b6d697373696e67206461746160a01b6044820152606401610c48565b600085815260146020818152604080842089815581518084019092526001600160a01b038916825293899052919052613a1c916001908101919061493e565b506001600160a01b03841660009081526012602052604090208590555b613aef565b6001600160a01b03841615613aa0576001600160a01b03841660009081526012602052604090205494508415801590613a84575060008581526014602052604090205485145b613a395760405162461bcd60e51b8152600401610c48906159ce565b8215613aef5760008381526013602052604090205494508415801590613ad3575060008581526014602052604090205485145b613aef5760405162461bcd60e51b8152600401610c48906159ce565b6001600160a01b038416613b375760008581526014602052604081206001018054909190613b1f57613b1f615a21565b6000918252602090912001546001600160a01b031693505b6001600160a01b038416600090815260126020526040902054613b9e576001600160a01b0384166000818152601260209081526040808320899055888352601482528220600190810180549182018155835291200180546001600160a01b03191690911790555b8215801590613bbb57506000838152601360205260409020548514155b15613c275760008381526013602052604090205415613c155760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610c48565b60008381526013602052604090208590555b50929391925050565b60608101516000908152600d6020526040812080548203613c635760405162461bcd60e51b8152600401610c4890615a6a565b6001600282015462010000900460ff166004811115613c8457613c846149d5565b14613ca15760405162461bcd60e51b8152600401610c4890615b27565b60005b6001820154811015613d99576001600b6000846001018481548110613ccb57613ccb615a21565b60009182526020808320601083040154600f9092166002026101000a90910461ffff16835282019290925260400190205462010000900460ff166004811115613d1657613d166149d5565b14613d335760405162461bcd60e51b8152600401610c4890615b27565b816001018181548110613d4857613d48615a21565b600091825260208220601082040154600f9091166002026101000a900461ffff169003613d875760405162461bcd60e51b8152600401610c4890615a6a565b80613d9181615b4b565b915050613ca4565b506001600282015461ffff166000908152600c602052604090205462010000900460ff166004811115613dce57613dce6149d5565b14613deb5760405162461bcd60e51b8152600401610c4890615b27565b608083015163ffffffff9081166000908152600e60205260408120549091169003613e285760405162461bcd60e51b8152600401610c4890615a6a565b6001608084015163ffffffff166000908152600e6020526040902054600160201b900460ff166004811115613e5f57613e5f6149d5565b14613e7c5760405162461bcd60e51b8152600401610c4890615b27565b6000805b608085015163ffffffff166000908152600e6020526040902060030154811015613efe57608085015163ffffffff166000908152600e60205260409020600301805482908110613ed257613ed2615a21565b9060005260206000200154856060015103613eec57600191505b80613ef681615b4b565b915050613e80565b5080613f605760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610c48565b620f42408460a0015163ffffffff161115613fae5760405162461bcd60e51b815260206004820152600e60248201526d756e697473206f766572666c6f7760901b6044820152606401610c48565b60008460a0015163ffffffff16116140075760405162461bcd60e51b815260206004820152601c60248201527b0756e697473206d7573742062652067726561746572207468616e20360241b6044820152606401610c48565b600084610100015151116140515760405162461bcd60e51b815260206004820152601160248201527070726f6f6655524c20697320656d70747960781b6044820152606401610c48565b60008460c001516001600160401b0316116140ae5760405162461bcd60e51b815260206004820181905260248201527f74696d657374616d70206d7573742062652067726561746572207468616e20306044820152606401610c48565b5060019392505050565b6001600160a01b03821661410e5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610c48565b61411781613866565b156141635760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610c48565b6001600160a01b038216600090815260036020526040812080546001929061418c908490615d78565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020615e72833981519152908290a45050565b60006141e382613866565b6142445760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610c48565b50600092915050565b826001600160a01b0316614260826119cb565b6001600160a01b0316146142c45760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610c48565b6001600160a01b0382166143265760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610c48565b614331600082613883565b6001600160a01b038316600090815260036020526040812080546001929061435a908490615d90565b90915550506001600160a01b0382166000908152600360205260408120805460019290614388908490615d78565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151849391871691600080516020615e7283398151915291a4505050565b816001600160a01b0316836001600160a01b0316036144345760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610c48565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6144ac84848461424d565b6144b8848484846145dc565b6126855760405162461bcd60e51b8152600401610c4890615da7565b6060816000036144fb5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115614525578061450f81615b4b565b915061451e9050600a83615df9565b91506144ff565b6000816001600160401b0381111561453f5761453f614b93565b6040519080825280601f01601f191660200182016040528015614569576020820181803683370190505b5090505b84156145d45761457e600183615d90565b915061458b600a86615e0d565b614596906030615d78565b60f81b8183815181106145ab576145ab615a21565b60200101906001600160f81b031916908160001a9053506145cd600a86615df9565b945061456d565b949350505050565b60006001600160a01b0384163b156146d257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290614620903390899088908890600401615e21565b6020604051808303816000875af192505050801561465b575060408051601f3d908101601f1916820190925261465891810190615e54565b60015b6146b8573d808015614689576040519150601f19603f3d011682016040523d82523d6000602084013e61468e565b606091505b5080516000036146b05760405162461bcd60e51b8152600401610c4890615da7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506145d4565b506001949350505050565b8280546146e9906158b4565b90600052602060002090601f01602090048101928261470b5760008555614751565b82601f1061472457805160ff1916838001178555614751565b82800160010185558215614751579182015b82811115614751578251825591602001919060010190614736565b5061475d929150614993565b5090565b82805482825590600052602060002090600f016010900481019282156147515791602002820160005b838211156147ca57835183826101000a81548161ffff021916908361ffff160217905550926020019260020160208160010104928301926001030261478a565b80156147f85782816101000a81549061ffff02191690556002016020816001010492830192600103026147ca565b505061475d929150614993565b6040518060e001604052806000815260200160608152602001600061ffff1681526020016000600481111561483c5761483c6149d5565b8152606060208201819052600060408301529081015290565b6040805160e0810182526000808252606060208301819052928201819052828201819052608082015260a0810182905260c081019190915290565b8280548282559060005260206000209081019282156147515791602002820182811115614751578251825591602001919060010190614736565b604080516101408101825260008082526020820181905260609282018390528282018190526080820181905260a0820181905260c0820181905260e0820152610100810182905261012081019190915290565b508054600082559060005260206000209081019061493b9190614993565b50565b828054828255906000526020600020908101928215614751579160200282015b8281111561475157825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061495e565b5b8082111561475d5760008155600101614994565b803561ffff81168114612caa57600080fd5b6000602082840312156149cc57600080fd5b611750826149a8565b634e487b7160e01b600052602160045260246000fd5b60058110614a0957634e487b7160e01b600052602160045260246000fd5b9052565b60005b83811015614a28578181015183820152602001614a10565b838111156126855750506000910152565b60008151808452614a51816020860160208601614a0d565b601f01601f19169290920160200192915050565b61ffff84168152614a7960208201846149eb565b606060408201526000614a8f6060830184614a39565b95945050505050565b6001600160e01b03198116811461493b57600080fd5b600060208284031215614ac057600080fd5b813561175081614a98565b600060208284031215614add57600080fd5b5035919050565b86815261ffff86166020820152614afe60408201866149eb565b60c060608201526000614b1460c0830186614a39565b63ffffffff8516608084015282810360a0840152614b328185614a39565b9998505050505050505050565b6020815260006117506020830184614a39565b80356001600160a01b0381168114612caa57600080fd5b60008060408385031215614b7c57600080fd5b614b8583614b52565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715614bcc57614bcc614b93565b60405290565b60405160e081016001600160401b0381118282101715614bcc57614bcc614b93565b60405160a081016001600160401b0381118282101715614bcc57614bcc614b93565b604051601f8201601f191681016001600160401b0381118282101715614c3e57614c3e614b93565b604052919050565b803563ffffffff81168114612caa57600080fd5b80356001600160401b0381168114612caa57600080fd5b60006001600160401b03831115614c8a57614c8a614b93565b614c9d601f8401601f1916602001614c16565b9050828152838383011115614cb157600080fd5b828260208301376000602084830101529392505050565b600082601f830112614cd957600080fd5b61175083833560208501614c71565b600060208284031215614cfa57600080fd5b81356001600160401b0380821115614d1157600080fd5b908301906101208286031215614d2657600080fd5b614d2e614ba9565b614d3783614b52565b8152602083013560208201526040830135604082015260608301356060820152614d6360808401614c46565b6080820152614d7460a08401614c46565b60a0820152614d8560c08401614c5a565b60c082015260e083013560e08201526101008084013583811115614da857600080fd5b614db488828701614cc8565b918301919091525095945050505050565b60008060408385031215614dd857600080fd5b82359150614de860208401614b52565b90509250929050565b600060208284031215614e0357600080fd5b61175082614b52565b600080600060608486031215614e2157600080fd5b614e2a84614b52565b925060208401359150614e3f604085016149a8565b90509250925092565b80358015158114612caa57600080fd5b600080600060608486031215614e6d57600080fd5b614e7684614b52565b9250614e8460208501614c46565b9150614e3f60408501614e48565b600080600060608486031215614ea757600080fd5b614eb084614b52565b9250614ebe60208501614b52565b9150604084013590509250925092565b60008060408385031215614ee157600080fd5b614eea83614b52565b9150614de8602084016149a8565b6001600160401b03169052565b600060208284031215614f1757600080fd5b81356001600160401b03811115614f2d57600080fd5b6145d484828501614cc8565b803560058110612caa57600080fd5b600080600060608486031215614f5d57600080fd5b614f66846149a8565b925060208401356001600160401b03811115614f8157600080fd5b614f8d86828701614cc8565b925050614e3f60408501614f39565b60006001600160401b03821115614fb557614fb5614b93565b5060051b60200190565b600082601f830112614fd057600080fd5b81356020614fe5614fe083614f9c565b614c16565b82815260059290921b8401810191818101908684111561500457600080fd5b8286015b8481101561502657615019816149a8565b8352918301918301615008565b509695505050505050565b60006020828403121561504357600080fd5b81356001600160401b038082111561505a57600080fd5b9083019060e0828603121561506e57600080fd5b615076614bd2565b8235815260208301358281111561508c57600080fd5b61509887828601614fbf565b6020830152506150aa604084016149a8565b60408201526150bb60608401614f39565b60608201526080830135828111156150d257600080fd5b6150de87828601614cc8565b6080830152506150f060a08401614c46565b60a082015260c08301358281111561510757600080fd5b61511387828601614cc8565b60c08301525095945050505050565b60006020828403121561513457600080fd5b61175082614c46565b600081518084526020808501945080840160005b8381101561516d57815187529582019590820190600101615151565b509495945050505050565b6020815263ffffffff82511660208201526000602083015161519d60408401826149eb565b50604083015160a060608401526151b760c0840182614a39565b90506060840151601f19808584030160808601526151d58383614a39565b925060808601519150808584030160a086015250614a8f828261513d565b600081518084526020808501945080840160005b8381101561516d57815161ffff1687529582019590820190600101615207565b60208152815160208201526000602083015160e0604084015261524e6101008401826151f3565b905061ffff6040850151166060840152606084015161527060808501826149eb565b506080840151601f19808584030160a086015261528d8383614a39565b925063ffffffff60a08701511660c086015260c08601519150808584030160e086015250614a8f8282614a39565b600080604083850312156152ce57600080fd5b6152d783614b52565b9150614de860208401614c46565b600080604083850312156152f857600080fd5b61530183614b52565b9150614de860208401614e48565b6000610120825184526020830151602085015260018060a01b03604084015116604085015260608301516153466060860182614ef8565b50608083015161535e608086018263ffffffff169052565b5060a083015161537160a0860182614ef8565b5060c083015161538960c086018263ffffffff169052565b5060e083015160e08501526101008084015182828701526153ac83870182614a39565b9695505050505050565b6000815180845260208085019450848260051b860182860160005b858110156153fb5783830389526153e983835161530f565b988501989250908401906001016153d1565b5090979650505050505050565b60208082528251828201528281015160e06040840152805161010084018190526000929182019083906101208601905b808310156154615783516001600160a01b03168252928401926001929092019190840190615438565b5060408701516001600160801b038116606088015293506060870151935061548c6080870185614ef8565b608087015193506154a060a0870185614ef8565b60a08701519350601f199250828682030160c08701526154c081856153b6565b9350505060c0850151818584030160e08601526153ac83826151f3565b600080600080608085870312156154f357600080fd5b6154fc85614b52565b935061550a60208601614b52565b92506040850135915060608501356001600160401b0381111561552c57600080fd5b8501601f8101871361553d57600080fd5b61554c87823560208401614c71565b91505092959194509250565b602081526000611750602083018461530f565b63ffffffff8516815261558160208201856149eb565b6080604082015260006155976080830185614a39565b82810360608401526155a98185614a39565b979650505050505050565b600082601f8301126155c557600080fd5b813560206155d5614fe083614f9c565b82815260059290921b840181019181810190868411156155f457600080fd5b8286015b8481101561502657803583529183019183016155f8565b60006020828403121561562157600080fd5b81356001600160401b038082111561563857600080fd5b9083019060a0828603121561564c57600080fd5b615654614bf4565b61565d83614c46565b815261566b60208401614f39565b602082015260408301358281111561568257600080fd5b61568e87828601614cc8565b6040830152506060830135828111156156a657600080fd5b6156b287828601614cc8565b6060830152506080830135828111156156ca57600080fd5b6156d6878286016155b4565b60808301525095945050505050565b60208152600061175060208301846153b6565b6000806020838503121561570b57600080fd5b82356001600160401b038082111561572257600080fd5b818501915085601f83011261573657600080fd5b81358181111561574557600080fd5b8660208260061b850101111561575a57600080fd5b60209290920196919550909350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561587c57603f19898403018552815161014081518552888201516157bd8a870182614ef8565b508782015181898701526157d382870182614a39565b9150506060808301516157eb8288018261ffff169052565b50506080828101519086015260a08083015163ffffffff811682880152505060c08281015163ffffffff811687830152505060e08083015161582f82880182614ef8565b505061010080830151868303828801526158498382614a39565b9250505061012080830151925085820381870152506158688183614a39565b968901969450505090860190600101615793565b509098975050505050505050565b6000806040838503121561589d57600080fd5b6158a683614b52565b9150614de860208401614b52565b600181811c908216806158c857607f821691505b6020821081036158e857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252601690820152751cd95b99195c881a5cc81b9bdd08185c1c1c9bdd995960521b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff808316818516818304811182151516156159575761595761591e565b02949350505050565b60006101408c83528b60208401528a604084015289606084015263ffffffff808a1660808501528160a08501526159998285018a614a39565b6001600160401b0398891660c0860152961660e084015250509190931661010082015261012001919091529695505050505050565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b60006001600160801b0383811690831681811015615a1957615a1961591e565b039392505050565b634e487b7160e01b600052603260045260246000fd5b60208082526019908201527806964206d7573742062652067726561746572207468616e203603c1b604082015260600190565b6020808252600990820152681b9bdd08199bdd5b9960ba1b604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b604081526000615b186040830185614a39565b905061175060208301846149eb565b6020808252600a90820152696e6f742061637469766560b01b604082015260600190565b600060018201615b5d57615b5d61591e565b5060010190565b60a081526000615b7760a08301886151f3565b8281036020840152615b898188614a39565b905063ffffffff861660408401528281036060840152615ba98186614a39565b9150506153ac60808301846149eb565b60008351615bcb818460208801614a0d565b835190830190615bdf818360208801614a0d565b01949350505050565b60008251615bfa818460208701614a0d565b9190910192915050565b600080835481600182811c915080831680615c2057607f831692505b60208084108203615c3f57634e487b7160e01b86526022600452602486fd5b818015615c535760018114615c6457615c91565b60ff19861689528489019650615c91565b60008a81526020902060005b86811015615c895781548b820152908501908301615c70565b505084890196505b509498975050505050505050565b608081526000615cb26080830187614a39565b8281036020840152615cc48187614a39565b9050615cd360408401866149eb565b82810360608401526155a9818561513d565b600060208284031215615cf757600080fd5b61175082614c5a565b634e487b7160e01b600052601260045260246000fd5b60006001600160401b0383811680615d3057615d30615d00565b92169190910492915050565b60008351615d4e818460208801614a0d565b600160fd1b9083019081528351615d6c816001840160208801614a0d565b01600101949350505050565b60008219821115615d8b57615d8b61591e565b500190565b600082821015615da257615da261591e565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600082615e0857615e08615d00565b500490565b600082615e1c57615e1c615d00565b500690565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906153ac90830184614a39565b600060208284031215615e6657600080fd5b815161175081614a9856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212201c523d006b2a77ccb7cd7992803d7b4047dff089ca1c1d3caa4505b1a94ab6ea64736f6c634300080d0033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b506004361061025c5760003560e01c806301b844481461026157806301ffc9a71461028c578063056a305c146102af57806306fdde03146102d4578063081812fc146102e9578063095ea7b3146103145780630c97174f146103295780630fe316481461035157806316feb0d0146103645780631785f53c146103775780631ad03d011461038a5780631d3a5d291461039d5780631fb4f1a0146103c957806323b872dd146103dc5780632b325b3b146103ef578063365276e714610412578063392b7633146104e95780633b093ddc1461051a57806342842e0e1461059d578063429b62e5146105b057806347f6acf1146105d357806348925864146105ea5780634bf25ae1146105fd5780635dbdf4d81461061d5780636352211e1461063d578063704802751461065057806370a082311461066357806372f0d7ac1461067657806377fde7f8146106865780637a04a41914610699578063838bf3e5146106b95780638c3080fa146106d957806395d89b4114610707578063a22cb4651461070f578063aa792cb314610722578063aaa758b114610735578063b10be93114610755578063b88d4fde14610768578063bc2dfced1461077b578063c87b56dd14610784578063cc33c87514610797578063cf3b7d90146107b7578063d040acb2146107da578063d33e5150146107ed578063d69167e51461080d578063d6918fdb14610820578063db16711e14610835578063dd86d01b14610848578063e272578e14610868578063e95d158b14610888578063e985e9c51461089b578063efdcc47f146108d7575b600080fd5b61027461026f3660046149ba565b6108ea565b60405161028393929190614a65565b60405180910390f35b61029f61029a366004614aae565b61099f565b6040519015158152602001610283565b6102c26102bd366004614acb565b6109f1565b60405161028396959493929190614ae4565b6102dc610b4e565b6040516102839190614b3f565b6102fc6102f7366004614acb565b610be0565b6040516001600160a01b039091168152602001610283565b610327610322366004614b69565b610c6d565b005b60165461033e90600160201b900461ffff1681565b60405161ffff9091168152602001610283565b61032761035f366004614ce8565b610d7d565b610327610372366004614dc5565b6113e0565b610327610385366004614df1565b611476565b61029f610398366004614e0c565b6114c6565b6016546103b490600160401b900463ffffffff1681565b60405163ffffffff9091168152602001610283565b6103276103d7366004614e58565b611757565b6103276103ea366004614e92565b611833565b61029f6103fd366004614df1565b60096020526000908152604090205460ff1681565b6104ad610420366004614ece565b6040805160608082018352600080835260208084018290529284018190526001600160a01b03959095168552601282528285205485526015825282852061ffff9490941685529281529281902081519283018252546001600160801b03811683526001600160401b03600160801b8204811694840194909452600160c01b90049092169181019190915290565b6040805182516001600160801b031681526020808401516001600160401b03908116918301919091529282015190921690820152606001610283565b6103b46104f7366004614f05565b8051602081830181018051600f8252928201919093012091525463ffffffff1681565b610566610528366004614acb565b601460205260009081526040902080546002909101546001600160801b038116906001600160401b03600160801b8204811691600160c01b90041684565b604080519485526001600160801b0390931660208501526001600160401b0391821692840192909252166060820152608001610283565b6103276105ab366004614e92565b611864565b61029f6105be366004614df1565b60106020526000908152604090205460ff1681565b6105dc60075481565b604051908152602001610283565b6103276105f8366004614f48565b61187f565b6105dc61060b366004614acb565b60136020526000908152604090205481565b6105dc61062b3660046149ba565b600a6020526000908152604090205481565b6102fc61064b366004614acb565b6119cb565b61032761065e366004614df1565b611a42565b6105dc610671366004614df1565b611aa8565b6016546103b49063ffffffff1681565b610327610694366004615031565b611b2f565b6106ac6106a7366004615122565b611e3a565b6040516102839190615178565b6106cc6106c7366004614acb565b612087565b6040516102839190615227565b61029f6106e73660046152bb565b601160209081526000928352604080842090915290825290205460ff1681565b6102dc6122d2565b61032761071d3660046152e5565b6122e1565b6102746107303660046149ba565b6122f0565b610748610743366004614acb565b612322565b6040516102839190615408565b6103276107633660046152e5565b6125f9565b6103276107763660046154dd565b612653565b6105dc60085481565b6102dc610792366004614acb565b61268b565b6107aa6107a5366004614acb565b612762565b6040516102839190615558565b6107ca6107c5366004614acb565b61288a565b604051610283949392919061556b565b6105dc6107e836600461560f565b6129d0565b6108006107fb366004614acb565b612caf565b60405161028391906156e5565b61074861081b366004614df1565b612e35565b60165461033e90600160301b900461ffff1681565b610327610843366004614f48565b612e5f565b61085b6108563660046156f8565b612f9e565b604051610283919061576c565b6105dc610876366004614df1565b60126020526000908152604090205481565b61032761089636600461588a565b6133ef565b61029f6108a936600461588a565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6107486108e5366004614acb565b613852565b600c602052600090815260409020805460018201805461ffff8316936201000090930460ff1692919061091c906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610948906158b4565b80156109955780601f1061096a57610100808354040283529160200191610995565b820191906000526020600020905b81548152906001019060200180831161097857829003601f168201915b5050505050905083565b60006001600160e01b031982166380ac58cd60e01b14806109d057506001600160e01b03198216635b5e139f60e01b145b806109eb57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600d60205260009081526040902080546002820154600383018054929361ffff8316936201000090930460ff1692909190610a2b906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610a57906158b4565b8015610aa45780601f10610a7957610100808354040283529160200191610aa4565b820191906000526020600020905b815481529060010190602001808311610a8757829003601f168201915b5050506004840154600585018054949563ffffffff909216949193509150610acb906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610af7906158b4565b8015610b445780601f10610b1957610100808354040283529160200191610b44565b820191906000526020600020905b815481529060010190602001808311610b2757829003601f168201915b5050505050905086565b606060008054610b5d906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610b89906158b4565b8015610bd65780601f10610bab57610100808354040283529160200191610bd6565b820191906000526020600020905b815481529060010190602001808311610bb957829003601f168201915b5050505050905090565b6000610beb82613866565b610c515760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610c78826119cb565b9050806001600160a01b0316836001600160a01b031603610ce55760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610c48565b336001600160a01b0382161480610d015750610d0181336108a9565b610d6e5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b6064820152608401610c48565b610d788383613883565b505050565b3360009081526010602052604090205460ff1680610dbf5750336000908152601160209081526040808320608085015163ffffffff16845290915290205460ff165b610ddb5760405162461bcd60e51b8152600401610c48906158ee565b600080610df58360400151846000015185602001516138f1565b91509150610e0283613c30565b50610e11600680546001019055565b6000610e1c60065490565b9050610e2882826140b8565b60608401516000908152600d602052604081206004015460a0860151610e549163ffffffff1690615934565b63ffffffff169050826001600160a01b03167fe3f157739acb4b4fca01bf36ba7ed4b2805f0a03b74d7e3a8726e11dbbe682da8387602001518789606001518a608001518b6101000151888d60a001518e60c001518f60e00151604051610ec49a99989796959493929190615960565b60405180910390a2600060405180610120016040528084815260200187606001518152602001856001600160a01b03168152602001836001600160401b031681526020018760a0015163ffffffff1681526020018760c001516001600160401b03168152602001876080015163ffffffff1681526020018760e00151815260200187610100015181525090506000600d6000886060015181526020019081526020016000206040518060e00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020018280548015610ff557602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411610fbc5790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff16600481111561102c5761102c6149d5565b600481111561103d5761103d6149d5565b8152602001600382018054611051906158b4565b80601f016020809104026020016040519081016040528092919081815260200182805461107d906158b4565b80156110ca5780601f1061109f576101008083540402835291602001916110ca565b820191906000526020600020905b8154815290600101906020018083116110ad57829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916110f7906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611123906158b4565b80156111705780601f1061114557610100808354040283529160200191611170565b820191906000526020600020905b81548152906001019060200180831161115357829003601f168201915b5050509190925250505060008781526014602090815260408083206003908101805460018082018355918652948490208851600690960201948555878401519085015590860151600284018054606089015160808a01516001600160a01b039094166001600160e01b031990921691909117600160a01b6001600160401b0392831602176001600160e01b0316600160e01b63ffffffff948516021790915560a0880151928501805460c08a0151949092166001600160601b031990921691909117600160401b939092169290920217905560e085015160048301556101008501518051939450859361126992600585019201906146dd565b50505060008681526015602090815260408083208482015161ffff168452909152812054600160801b90046001600160401b031690036112f557600086815260146020908152604080832090840151600490910180546001810182559084529190922060108204018054600f9092166002026101000a61ffff8181021990931692909316929092021790555b600086815260146020908152604080832060020180546001600160c01b031981166001600160401b038981166001600160801b0380851682018116938417600160801b6001600160801b031996871690951785900484168d0184168502179095556015808852868920998701805161ffff9081168b528b8a52888b2080549788169789168501909816969096179096559d88529c86528351831687529685528386208054600160801b600160c01b03198116908390048916909a019097160297909717909455600780548a01905592519094168152600a909352909120805490940190935550505050565b3360009081526010602052604090205460ff1661140f5760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b0381166000908152601260205260409020548015801590611444575060008181526014602052604090205481145b6114605760405162461bcd60e51b8152600401610c48906159ce565b6000928352601360205260409092209190915550565b3360009081526010602052604090205460ff166114a55760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b03166000908152601060205260409020805460ff19169055565b3360009081526009602052604081205460ff166114f55760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b038416600090815260126020908152604080832054808452601490925282206002018054919286926115389084906001600160801b03166159f9565b82546101009290920a6001600160801b03818102199093169183160217909155600880548701905560008381526014602090815260409182902060020154825189815293169083015261ffff8616908201526001600160a01b03871691507f25cc4c2f654aef5252732ea2f356ba9cd571c013f83bf7020ce61e2f160f6ee89060600160405180910390a261ffff83161561162c57600081815260156020908152604080832061ffff87168452909152812080548692906116039084906001600160801b03166159f9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061174a565b60005b60008281526014602052604090206004015481101561170f57600082815260146020526040812060040180548390811061166b5761166b615a21565b60009182526020808320601083040154868452601582526040808520600f9094166002026101000a90910461ffff1680855292909152909120549091506001600160801b039081169087168111156116c05750855b600084815260156020908152604080832061ffff9590951683529390529190912080546001600160801b031981166001600160801b03918216849003821617909155169094039360010161162f565b50831561174a5760405162461bcd60e51b8152602060048201526009602482015268756e646572666c6f7760b81b6044820152606401610c48565b60019150505b9392505050565b3360009081526010602052604090205460ff166117865760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b03831661179957600080fd5b8163ffffffff166000036117bf5760405162461bcd60e51b8152600401610c4890615a37565b63ffffffff8083166000818152600e6020526040902054909116146117f65760405162461bcd60e51b8152600401610c4890615a6a565b6001600160a01b03909216600090815260116020908152604080832063ffffffff909416835292905220805491151560ff19909216919091179055565b61183d33826141d8565b6118595760405162461bcd60e51b8152600401610c4890615a8d565b610d7883838361424d565b610d7883838360405180602001604052806000815250612653565b3360009081526010602052604090205460ff166118ae5760405162461bcd60e51b8152600401610c48906158ee565b60008251116118cf5760405162461bcd60e51b8152600401610c4890615ade565b8261ffff16600003611924576016805461ffff60301b198116600160301b9182900461ffff908116600101908116928302919091179092556000818152600b60205260409020805461ffff1916909117905592505b61ffff83166000908152600b60209081526040909120835161194e926001909201918501906146dd565b5061ffff83166000908152600b60205260409020805482919062ff0000191662010000836004811115611983576119836149d5565b02179055508261ffff167f4fcd383604332b394161a254d359c73296253b0e25354b61f8a192f2ca90f1c083836040516119be929190615b05565b60405180910390a2505050565b6000818152600260205260408120546001600160a01b0316806109eb5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610c48565b3360009081526010602052604090205460ff16611a715760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b038116611a8457600080fd5b6001600160a01b03166000908152601060205260409020805460ff19166001179055565b60006001600160a01b038216611b135760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610c48565b506001600160a01b031660009081526003602052604090205490565b3360009081526010602052604090205460ff16611b5e5760405162461bcd60e51b8152600401610c48906158ee565b8051600003611b95576016805463ffffffff60401b198116600160401b9182900463ffffffff908116600101169182021790915581525b60005b816020015151811015611c6a57600082602001518281518110611bbd57611bbd615a21565b602002602001015161ffff1611611be65760405162461bcd60e51b8152600401610c4890615a37565b6001600b600084602001518481518110611c0257611c02615a21565b60209081029190910181015161ffff1682528101919091526040016000205462010000900460ff166004811115611c3b57611c3b6149d5565b14611c585760405162461bcd60e51b8152600401610c4890615b27565b80611c6281615b4b565b915050611b98565b506000816040015161ffff1611611c935760405162461bcd60e51b8152600401610c4890615a37565b600160408281015161ffff166000908152600c602052205462010000900460ff166004811115611cc557611cc56149d5565b14611ce25760405162461bcd60e51b8152600401610c4890615b27565b600081608001515111611d075760405162461bcd60e51b8152600401610c4890615ade565b80516000908152600d60209081526040909120825181558183015180518493611d37926001850192910190614761565b50604082015160028201805461ffff90921661ffff1983168117825560608501519262ffffff19161762010000836004811115611d7657611d766149d5565b021790555060808201518051611d969160038401916020909101906146dd565b5060a082015160048201805463ffffffff191663ffffffff90921691909117905560c08201518051611dd29160058401916020909101906146dd565b50905050806040015161ffff1681600001517f27b90160eaa4ab2aa06fabc8c7f0a5acd0041ec04a3851eb1b5881c94ee37d12836020015184608001518560a001518660c001518760600151604051611e2f959493929190615b64565b60405180910390a350565b611e6d6040805160a081019091526000808252602082019081526020016060815260200160608152602001606081525090565b63ffffffff8083166000818152600e602052604090205490911614611ea45760405162461bcd60e51b8152600401610c4890615a6a565b63ffffffff8281166000908152600e6020908152604091829020825160a0810190935280549384168352919290830190600160201b900460ff166004811115611eef57611eef6149d5565b6004811115611f0057611f006149d5565b8152602001600182018054611f14906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611f40906158b4565b8015611f8d5780601f10611f6257610100808354040283529160200191611f8d565b820191906000526020600020905b815481529060010190602001808311611f7057829003601f168201915b50505050508152602001600282018054611fa6906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611fd2906158b4565b801561201f5780601f10611ff45761010080835404028352916020019161201f565b820191906000526020600020905b81548152906001019060200180831161200257829003601f168201915b505050505081526020016003820180548060200260200160405190810160405280929190818152602001828054801561207757602002820191906000526020600020905b815481526020019060010190808311612063575b5050505050815250509050919050565b61208f614805565b6000828152600d602052604081205490036120bc5760405162461bcd60e51b8152600401610c4890615a6a565b6000828152600d6020908152604091829020825160e081018452815481526001820180548551818602810186019096528086529194929385810193929083018282801561215057602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116121175790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff166004811115612187576121876149d5565b6004811115612198576121986149d5565b81526020016003820180546121ac906158b4565b80601f01602080910402602001604051908101604052809291908181526020018280546121d8906158b4565b80156122255780601f106121fa57610100808354040283529160200191612225565b820191906000526020600020905b81548152906001019060200180831161220857829003601f168201915b5050509183525050600482015463ffffffff166020820152600582018054604090920191612252906158b4565b80601f016020809104026020016040519081016040528092919081815260200182805461227e906158b4565b80156120775780601f106122a057610100808354040283529160200191612077565b820191906000526020600020905b8154815290600101906020018083116122ae57505050919092525091949350505050565b606060018054610b5d906158b4565b6122ec3383836143d7565b5050565b600b602052600090815260409020805460018201805461ffff8316936201000090930460ff1692919061091c906158b4565b61232a614855565b6000828152601460209081526040808320815160e0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156123a057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612382575b505050918352505060028201546001600160801b0381166020808401919091526001600160401b03600160801b83048116604080860191909152600160c01b909304166060840152600384018054835181840281018401909452808452608090940193909160009084015b8282101561254e5760008481526020908190206040805161012081018252600686029092018054835260018101549383019390935260028301546001600160a01b038116918301919091526001600160401b03600160a01b82048116606084015263ffffffff600160e01b90920482166080840152600384015490811660a0840152600160401b90041660c0820152600482015460e0820152600582018054919291610100840191906124bd906158b4565b80601f01602080910402602001604051908101604052809291908181526020018280546124e9906158b4565b80156125365780601f1061250b57610100808354040283529160200191612536565b820191906000526020600020905b81548152906001019060200180831161251957829003601f168201915b5050505050815250508152602001906001019061240b565b505050508152602001600482018054806020026020016040519081016040528092919081815260200182805480156125cd57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116125945790505b50505091909252505081519192506109eb90505760405162461bcd60e51b8152600401610c48906159ce565b3360009081526010602052604090205460ff166126285760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b03919091166000908152600960205260409020805460ff1916911515919091179055565b61265d33836141d8565b6126795760405162461bcd60e51b8152600401610c4890615a8d565b612685848484846144a1565b50505050565b606061269682613866565b6126fa5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610c48565b600061271160408051602081019091526000815290565b905060008151116127315760405180602001604052806000815250611750565b8061273b846144d4565b60405160200161274c929190615bb9565b6040516020818303038152906040529392505050565b6127d8604051806101200160405280600081526020016000815260200160006001600160a01b0316815260200160006001600160401b03168152602001600063ffffffff16815260200160006001600160401b03168152602001600063ffffffff16815260200160008152602001606081525090565b6000612810601260006127ea866119cb565b6001600160a01b03166001600160a01b0316815260200190815260200160002054612322565b905060005b8160a001515181101561288357838260a00151828151811061283957612839615a21565b60200260200101516000015103612871578160a00151818151811061286057612860615a21565b602002602001015192505050919050565b8061287b81615b4b565b915050612815565b5050919050565b600e602052600090815260409020805460018201805463ffffffff831693600160201b90930460ff169291906128bf906158b4565b80601f01602080910402602001604051908101604052809291908181526020018280546128eb906158b4565b80156129385780601f1061290d57610100808354040283529160200191612938565b820191906000526020600020905b81548152906001019060200180831161291b57829003601f168201915b50505050509080600201805461294d906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054612979906158b4565b80156129c65780601f1061299b576101008083540402835291602001916129c6565b820191906000526020600020905b8154815290600101906020018083116129a957829003601f168201915b5050505050905084565b3360009081526010602052604081205460ff166129ff5760405162461bcd60e51b8152600401610c48906158ee565b600082604001515111612a245760405162461bcd60e51b8152600401610c4890615ade565b600f8260400151604051612a389190615be8565b9081526040519081900360200190205463ffffffff1615612a985760405162461bcd60e51b815260206004820152601a602482015279676f6f64206f7261636c6520616c72656164792065786973747360301b6044820152606401610c48565b815163ffffffff16600003612acc576016805463ffffffff8082166001011663ffffffff1990911681179091558252612b5a565b815163ffffffff9081166000818152600e602052604090205490911614612b055760405162461bcd60e51b8152600401610c4890615a6a565b60408201515115612b5a57600f600e6000846000015163ffffffff168152602001908152602001600020600101604051612b3f9190615c04565b908152604051908190036020019020805463ffffffff191690555b815163ffffffff9081166000908152600e6020908152604090912084518154931663ffffffff1984168117825591850151859391929091839164ffffffffff1990911617600160201b836004811115612bb557612bb56149d5565b021790555060408201518051612bd59160018401916020909101906146dd565b5060608201518051612bf19160028401916020909101906146dd565b5060808201518051612c0d916003840191602090910190614890565b509050508160000151600f8360400151604051612c2a9190615be8565b9081526040805160209281900383018120805463ffffffff191663ffffffff958616179055855191860151606087015193870151608088015193909516947fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5694612c98949293909290615c9f565b60405180910390a250805163ffffffff165b919050565b606060146000838152602001908152602001600020600301805480602002602001604051908101604052809291908181526020016000905b82821015612e2a5760008481526020908190206040805161012081018252600686029092018054835260018101549383019390935260028301546001600160a01b038116918301919091526001600160401b03600160a01b82048116606084015263ffffffff600160e01b90920482166080840152600384015490811660a0840152600160401b90041660c0820152600482015460e082015260058201805491929161010084019190612d99906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054612dc5906158b4565b8015612e125780601f10612de757610100808354040283529160200191612e12565b820191906000526020600020905b815481529060010190602001808311612df557829003601f168201915b50505050508152505081526020019060010190612ce7565b505050509050919050565b612e3d614855565b6001600160a01b0382166000908152601260205260409020546109eb90612322565b3360009081526010602052604090205460ff16612e8e5760405162461bcd60e51b8152600401610c48906158ee565b6000825111612eaf5760405162461bcd60e51b8152600401610c4890615ade565b8261ffff16600003612f04576016805461ffff60201b198116600160201b9182900461ffff908116600101908116928302919091179092556000818152600c60205260409020805461ffff1916909117905592505b61ffff83166000908152600c602090815260409091208351612f2e926001909201918501906146dd565b5061ffff83166000908152600c60205260409020805482919062ff0000191662010000836004811115612f6357612f636149d5565b02179055508261ffff167fa64371df3e4e587f97e094b4e6cb2dd8780392180388ec6f7c2ac098a8452feb83836040516119be929190615b05565b60606000826001600160401b03811115612fba57612fba614b93565b604051908082528060200260200182016040528015612ff357816020015b612fe06148ca565b815260200190600190039081612fd85790505b50905060005b838110156133e757600061302786868481811061301857613018615a21565b90506040020160000135612762565b90506130316148ca565b6020808301516000908152600d82526040808220815160e081018352815481526001820180548451818802810188019095528085529495919492938583019390928301828280156130c957602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116130905790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff166004811115613100576131006149d5565b6004811115613111576131116149d5565b8152602001600382018054613125906158b4565b80601f0160208091040260200160405190810160405280929190818152602001828054613151906158b4565b801561319e5780601f106131735761010080835404028352916020019161319e565b820191906000526020600020905b81548152906001019060200180831161318157829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916131cb906158b4565b80601f01602080910402602001604051908101604052809291908181526020018280546131f7906158b4565b80156132445780601f1061321957610100808354040283529160200191613244565b820191906000526020600020905b81548152906001019060200180831161322757829003601f168201915b5050505050815250509050600088888681811061326357613263615a21565b905060400201602001602081019061327b9190615ce5565b9050806001600160401b031684606001516001600160401b031610156132a2575060608301515b60008260a0015163ffffffff16826132ba9190615d16565b8551855260a08601516001600160401b03166020808701919091526040808801516001600160a01b0316600090815260128352819020548151928301529192500160408051601f198184030181529181528501526020830151805160009061332457613324615a21565b602090810291909101015161ffff16606085015260e080860151608086015260c08087015163ffffffff90811660a088015283169086018190526001600160401b038416918601919091526101008087015190860152613383906144d4565b8360c00151604051602001613399929190615d3c565b604051602081830303815290604052846101200181905250838787815181106133c4576133c4615a21565b6020026020010181905250505050505080806133df90615b4b565b915050612ff9565b509392505050565b3360009081526010602052604090205460ff1661341e5760405162461bcd60e51b8152600401610c48906158ee565b6001600160a01b03808316600090815260126020818152604080842054845260148083528185209587168552928252808420548452919052902080548254036134985760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610c48565b81546134b65760405162461bcd60e51b8152600401610c48906159ce565b80546134d45760405162461bcd60e51b8152600401610c48906159ce565b6002818101805491840180546001600160801b031981166001600160801b039485168583160190941693841780835583546001600160c01b0319909216909417600160801b918290046001600160401b039081169583900481169590950185169091021780825591546001600160c01b038316600160c01b9182900485169382900485169390930190931690920217905560005b6001820154811015613613578260010182600101828154811061358d5761358d615a21565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b03909216919091179055845491840180546012929190859081106135e6576135e6615a21565b60009182526020808320909101546001600160a01b03168352820192909252604001902055600101613568565b5060005b60048201548110156137f157600082600401828154811061363a5761363a615a21565b6000918252602080832060108304015487548452601582526040808520600f9094166002026101000a90910461ffff1680855292909152822054909250600160801b90046001600160401b031690036136cb576004840180546001810182556000918252602090912060108204018054600f9092166002026101000a61ffff81810219909316928416029190911790555b8254600090815260156020818152604080842061ffff9095168085529482528084205488548552838352818520868652835281852080546001600160801b03818116938116939093019092166001600160801b0319909216919091179055865484528282528084208585528252808420548854855283835281852086865283528185208054600160801b8082046001600160401b0390811694829004811694909401841602600160801b600160c01b0319909116179055875485528383528185208686528352818520548954865284845282862087875284528286208054600160c01b8082048516938190048516939093019093169091026001600160c01b03909216919091179055865484529181528183209383529290925290812055600101613617565b5060006002820181905561380990600183019061491d565b604080516001600160a01b038087168252851660208201527f239567be74fe3e80a3e23e994c3234310617523efa3bdb81b591bda34e070368910160405180910390a150505050565b61385a614855565b6109eb61081b836119cb565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906138b8826119cb565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000808415613a3e57600085815260146020526040902054613a39576001600160a01b0384161580159061393c57506001600160a01b03841660009081526012602052604090205415155b15613961576001600160a01b0384166000908152601260205260409020549450613aef565b821580159061397d575060008381526013602052604090205415155b15613998576000838152601360205260409020549450613aef565b6001600160a01b0384166139dd5760405162461bcd60e51b815260206004820152600c60248201526b6d697373696e67206461746160a01b6044820152606401610c48565b600085815260146020818152604080842089815581518084019092526001600160a01b038916825293899052919052613a1c916001908101919061493e565b506001600160a01b03841660009081526012602052604090208590555b613aef565b6001600160a01b03841615613aa0576001600160a01b03841660009081526012602052604090205494508415801590613a84575060008581526014602052604090205485145b613a395760405162461bcd60e51b8152600401610c48906159ce565b8215613aef5760008381526013602052604090205494508415801590613ad3575060008581526014602052604090205485145b613aef5760405162461bcd60e51b8152600401610c48906159ce565b6001600160a01b038416613b375760008581526014602052604081206001018054909190613b1f57613b1f615a21565b6000918252602090912001546001600160a01b031693505b6001600160a01b038416600090815260126020526040902054613b9e576001600160a01b0384166000818152601260209081526040808320899055888352601482528220600190810180549182018155835291200180546001600160a01b03191690911790555b8215801590613bbb57506000838152601360205260409020548514155b15613c275760008381526013602052604090205415613c155760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610c48565b60008381526013602052604090208590555b50929391925050565b60608101516000908152600d6020526040812080548203613c635760405162461bcd60e51b8152600401610c4890615a6a565b6001600282015462010000900460ff166004811115613c8457613c846149d5565b14613ca15760405162461bcd60e51b8152600401610c4890615b27565b60005b6001820154811015613d99576001600b6000846001018481548110613ccb57613ccb615a21565b60009182526020808320601083040154600f9092166002026101000a90910461ffff16835282019290925260400190205462010000900460ff166004811115613d1657613d166149d5565b14613d335760405162461bcd60e51b8152600401610c4890615b27565b816001018181548110613d4857613d48615a21565b600091825260208220601082040154600f9091166002026101000a900461ffff169003613d875760405162461bcd60e51b8152600401610c4890615a6a565b80613d9181615b4b565b915050613ca4565b506001600282015461ffff166000908152600c602052604090205462010000900460ff166004811115613dce57613dce6149d5565b14613deb5760405162461bcd60e51b8152600401610c4890615b27565b608083015163ffffffff9081166000908152600e60205260408120549091169003613e285760405162461bcd60e51b8152600401610c4890615a6a565b6001608084015163ffffffff166000908152600e6020526040902054600160201b900460ff166004811115613e5f57613e5f6149d5565b14613e7c5760405162461bcd60e51b8152600401610c4890615b27565b6000805b608085015163ffffffff166000908152600e6020526040902060030154811015613efe57608085015163ffffffff166000908152600e60205260409020600301805482908110613ed257613ed2615a21565b9060005260206000200154856060015103613eec57600191505b80613ef681615b4b565b915050613e80565b5080613f605760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610c48565b620f42408460a0015163ffffffff161115613fae5760405162461bcd60e51b815260206004820152600e60248201526d756e697473206f766572666c6f7760901b6044820152606401610c48565b60008460a0015163ffffffff16116140075760405162461bcd60e51b815260206004820152601c60248201527b0756e697473206d7573742062652067726561746572207468616e20360241b6044820152606401610c48565b600084610100015151116140515760405162461bcd60e51b815260206004820152601160248201527070726f6f6655524c20697320656d70747960781b6044820152606401610c48565b60008460c001516001600160401b0316116140ae5760405162461bcd60e51b815260206004820181905260248201527f74696d657374616d70206d7573742062652067726561746572207468616e20306044820152606401610c48565b5060019392505050565b6001600160a01b03821661410e5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610c48565b61411781613866565b156141635760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610c48565b6001600160a01b038216600090815260036020526040812080546001929061418c908490615d78565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020615e72833981519152908290a45050565b60006141e382613866565b6142445760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610c48565b50600092915050565b826001600160a01b0316614260826119cb565b6001600160a01b0316146142c45760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610c48565b6001600160a01b0382166143265760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610c48565b614331600082613883565b6001600160a01b038316600090815260036020526040812080546001929061435a908490615d90565b90915550506001600160a01b0382166000908152600360205260408120805460019290614388908490615d78565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151849391871691600080516020615e7283398151915291a4505050565b816001600160a01b0316836001600160a01b0316036144345760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610c48565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6144ac84848461424d565b6144b8848484846145dc565b6126855760405162461bcd60e51b8152600401610c4890615da7565b6060816000036144fb5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115614525578061450f81615b4b565b915061451e9050600a83615df9565b91506144ff565b6000816001600160401b0381111561453f5761453f614b93565b6040519080825280601f01601f191660200182016040528015614569576020820181803683370190505b5090505b84156145d45761457e600183615d90565b915061458b600a86615e0d565b614596906030615d78565b60f81b8183815181106145ab576145ab615a21565b60200101906001600160f81b031916908160001a9053506145cd600a86615df9565b945061456d565b949350505050565b60006001600160a01b0384163b156146d257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290614620903390899088908890600401615e21565b6020604051808303816000875af192505050801561465b575060408051601f3d908101601f1916820190925261465891810190615e54565b60015b6146b8573d808015614689576040519150601f19603f3d011682016040523d82523d6000602084013e61468e565b606091505b5080516000036146b05760405162461bcd60e51b8152600401610c4890615da7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506145d4565b506001949350505050565b8280546146e9906158b4565b90600052602060002090601f01602090048101928261470b5760008555614751565b82601f1061472457805160ff1916838001178555614751565b82800160010185558215614751579182015b82811115614751578251825591602001919060010190614736565b5061475d929150614993565b5090565b82805482825590600052602060002090600f016010900481019282156147515791602002820160005b838211156147ca57835183826101000a81548161ffff021916908361ffff160217905550926020019260020160208160010104928301926001030261478a565b80156147f85782816101000a81549061ffff02191690556002016020816001010492830192600103026147ca565b505061475d929150614993565b6040518060e001604052806000815260200160608152602001600061ffff1681526020016000600481111561483c5761483c6149d5565b8152606060208201819052600060408301529081015290565b6040805160e0810182526000808252606060208301819052928201819052828201819052608082015260a0810182905260c081019190915290565b8280548282559060005260206000209081019282156147515791602002820182811115614751578251825591602001919060010190614736565b604080516101408101825260008082526020820181905260609282018390528282018190526080820181905260a0820181905260c0820181905260e0820152610100810182905261012081019190915290565b508054600082559060005260206000209081019061493b9190614993565b50565b828054828255906000526020600020908101928215614751579160200282015b8281111561475157825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061495e565b5b8082111561475d5760008155600101614994565b803561ffff81168114612caa57600080fd5b6000602082840312156149cc57600080fd5b611750826149a8565b634e487b7160e01b600052602160045260246000fd5b60058110614a0957634e487b7160e01b600052602160045260246000fd5b9052565b60005b83811015614a28578181015183820152602001614a10565b838111156126855750506000910152565b60008151808452614a51816020860160208601614a0d565b601f01601f19169290920160200192915050565b61ffff84168152614a7960208201846149eb565b606060408201526000614a8f6060830184614a39565b95945050505050565b6001600160e01b03198116811461493b57600080fd5b600060208284031215614ac057600080fd5b813561175081614a98565b600060208284031215614add57600080fd5b5035919050565b86815261ffff86166020820152614afe60408201866149eb565b60c060608201526000614b1460c0830186614a39565b63ffffffff8516608084015282810360a0840152614b328185614a39565b9998505050505050505050565b6020815260006117506020830184614a39565b80356001600160a01b0381168114612caa57600080fd5b60008060408385031215614b7c57600080fd5b614b8583614b52565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715614bcc57614bcc614b93565b60405290565b60405160e081016001600160401b0381118282101715614bcc57614bcc614b93565b60405160a081016001600160401b0381118282101715614bcc57614bcc614b93565b604051601f8201601f191681016001600160401b0381118282101715614c3e57614c3e614b93565b604052919050565b803563ffffffff81168114612caa57600080fd5b80356001600160401b0381168114612caa57600080fd5b60006001600160401b03831115614c8a57614c8a614b93565b614c9d601f8401601f1916602001614c16565b9050828152838383011115614cb157600080fd5b828260208301376000602084830101529392505050565b600082601f830112614cd957600080fd5b61175083833560208501614c71565b600060208284031215614cfa57600080fd5b81356001600160401b0380821115614d1157600080fd5b908301906101208286031215614d2657600080fd5b614d2e614ba9565b614d3783614b52565b8152602083013560208201526040830135604082015260608301356060820152614d6360808401614c46565b6080820152614d7460a08401614c46565b60a0820152614d8560c08401614c5a565b60c082015260e083013560e08201526101008084013583811115614da857600080fd5b614db488828701614cc8565b918301919091525095945050505050565b60008060408385031215614dd857600080fd5b82359150614de860208401614b52565b90509250929050565b600060208284031215614e0357600080fd5b61175082614b52565b600080600060608486031215614e2157600080fd5b614e2a84614b52565b925060208401359150614e3f604085016149a8565b90509250925092565b80358015158114612caa57600080fd5b600080600060608486031215614e6d57600080fd5b614e7684614b52565b9250614e8460208501614c46565b9150614e3f60408501614e48565b600080600060608486031215614ea757600080fd5b614eb084614b52565b9250614ebe60208501614b52565b9150604084013590509250925092565b60008060408385031215614ee157600080fd5b614eea83614b52565b9150614de8602084016149a8565b6001600160401b03169052565b600060208284031215614f1757600080fd5b81356001600160401b03811115614f2d57600080fd5b6145d484828501614cc8565b803560058110612caa57600080fd5b600080600060608486031215614f5d57600080fd5b614f66846149a8565b925060208401356001600160401b03811115614f8157600080fd5b614f8d86828701614cc8565b925050614e3f60408501614f39565b60006001600160401b03821115614fb557614fb5614b93565b5060051b60200190565b600082601f830112614fd057600080fd5b81356020614fe5614fe083614f9c565b614c16565b82815260059290921b8401810191818101908684111561500457600080fd5b8286015b8481101561502657615019816149a8565b8352918301918301615008565b509695505050505050565b60006020828403121561504357600080fd5b81356001600160401b038082111561505a57600080fd5b9083019060e0828603121561506e57600080fd5b615076614bd2565b8235815260208301358281111561508c57600080fd5b61509887828601614fbf565b6020830152506150aa604084016149a8565b60408201526150bb60608401614f39565b60608201526080830135828111156150d257600080fd5b6150de87828601614cc8565b6080830152506150f060a08401614c46565b60a082015260c08301358281111561510757600080fd5b61511387828601614cc8565b60c08301525095945050505050565b60006020828403121561513457600080fd5b61175082614c46565b600081518084526020808501945080840160005b8381101561516d57815187529582019590820190600101615151565b509495945050505050565b6020815263ffffffff82511660208201526000602083015161519d60408401826149eb565b50604083015160a060608401526151b760c0840182614a39565b90506060840151601f19808584030160808601526151d58383614a39565b925060808601519150808584030160a086015250614a8f828261513d565b600081518084526020808501945080840160005b8381101561516d57815161ffff1687529582019590820190600101615207565b60208152815160208201526000602083015160e0604084015261524e6101008401826151f3565b905061ffff6040850151166060840152606084015161527060808501826149eb565b506080840151601f19808584030160a086015261528d8383614a39565b925063ffffffff60a08701511660c086015260c08601519150808584030160e086015250614a8f8282614a39565b600080604083850312156152ce57600080fd5b6152d783614b52565b9150614de860208401614c46565b600080604083850312156152f857600080fd5b61530183614b52565b9150614de860208401614e48565b6000610120825184526020830151602085015260018060a01b03604084015116604085015260608301516153466060860182614ef8565b50608083015161535e608086018263ffffffff169052565b5060a083015161537160a0860182614ef8565b5060c083015161538960c086018263ffffffff169052565b5060e083015160e08501526101008084015182828701526153ac83870182614a39565b9695505050505050565b6000815180845260208085019450848260051b860182860160005b858110156153fb5783830389526153e983835161530f565b988501989250908401906001016153d1565b5090979650505050505050565b60208082528251828201528281015160e06040840152805161010084018190526000929182019083906101208601905b808310156154615783516001600160a01b03168252928401926001929092019190840190615438565b5060408701516001600160801b038116606088015293506060870151935061548c6080870185614ef8565b608087015193506154a060a0870185614ef8565b60a08701519350601f199250828682030160c08701526154c081856153b6565b9350505060c0850151818584030160e08601526153ac83826151f3565b600080600080608085870312156154f357600080fd5b6154fc85614b52565b935061550a60208601614b52565b92506040850135915060608501356001600160401b0381111561552c57600080fd5b8501601f8101871361553d57600080fd5b61554c87823560208401614c71565b91505092959194509250565b602081526000611750602083018461530f565b63ffffffff8516815261558160208201856149eb565b6080604082015260006155976080830185614a39565b82810360608401526155a98185614a39565b979650505050505050565b600082601f8301126155c557600080fd5b813560206155d5614fe083614f9c565b82815260059290921b840181019181810190868411156155f457600080fd5b8286015b8481101561502657803583529183019183016155f8565b60006020828403121561562157600080fd5b81356001600160401b038082111561563857600080fd5b9083019060a0828603121561564c57600080fd5b615654614bf4565b61565d83614c46565b815261566b60208401614f39565b602082015260408301358281111561568257600080fd5b61568e87828601614cc8565b6040830152506060830135828111156156a657600080fd5b6156b287828601614cc8565b6060830152506080830135828111156156ca57600080fd5b6156d6878286016155b4565b60808301525095945050505050565b60208152600061175060208301846153b6565b6000806020838503121561570b57600080fd5b82356001600160401b038082111561572257600080fd5b818501915085601f83011261573657600080fd5b81358181111561574557600080fd5b8660208260061b850101111561575a57600080fd5b60209290920196919550909350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561587c57603f19898403018552815161014081518552888201516157bd8a870182614ef8565b508782015181898701526157d382870182614a39565b9150506060808301516157eb8288018261ffff169052565b50506080828101519086015260a08083015163ffffffff811682880152505060c08281015163ffffffff811687830152505060e08083015161582f82880182614ef8565b505061010080830151868303828801526158498382614a39565b9250505061012080830151925085820381870152506158688183614a39565b968901969450505090860190600101615793565b509098975050505050505050565b6000806040838503121561589d57600080fd5b6158a683614b52565b9150614de860208401614b52565b600181811c908216806158c857607f821691505b6020821081036158e857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252601690820152751cd95b99195c881a5cc81b9bdd08185c1c1c9bdd995960521b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff808316818516818304811182151516156159575761595761591e565b02949350505050565b60006101408c83528b60208401528a604084015289606084015263ffffffff808a1660808501528160a08501526159998285018a614a39565b6001600160401b0398891660c0860152961660e084015250509190931661010082015261012001919091529695505050505050565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b60006001600160801b0383811690831681811015615a1957615a1961591e565b039392505050565b634e487b7160e01b600052603260045260246000fd5b60208082526019908201527806964206d7573742062652067726561746572207468616e203603c1b604082015260600190565b6020808252600990820152681b9bdd08199bdd5b9960ba1b604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b604081526000615b186040830185614a39565b905061175060208301846149eb565b6020808252600a90820152696e6f742061637469766560b01b604082015260600190565b600060018201615b5d57615b5d61591e565b5060010190565b60a081526000615b7760a08301886151f3565b8281036020840152615b898188614a39565b905063ffffffff861660408401528281036060840152615ba98186614a39565b9150506153ac60808301846149eb565b60008351615bcb818460208801614a0d565b835190830190615bdf818360208801614a0d565b01949350505050565b60008251615bfa818460208701614a0d565b9190910192915050565b600080835481600182811c915080831680615c2057607f831692505b60208084108203615c3f57634e487b7160e01b86526022600452602486fd5b818015615c535760018114615c6457615c91565b60ff19861689528489019650615c91565b60008a81526020902060005b86811015615c895781548b820152908501908301615c70565b505084890196505b509498975050505050505050565b608081526000615cb26080830187614a39565b8281036020840152615cc48187614a39565b9050615cd360408401866149eb565b82810360608401526155a9818561513d565b600060208284031215615cf757600080fd5b61175082614c5a565b634e487b7160e01b600052601260045260246000fd5b60006001600160401b0383811680615d3057615d30615d00565b92169190910492915050565b60008351615d4e818460208801614a0d565b600160fd1b9083019081528351615d6c816001840160208801614a0d565b01600101949350505050565b60008219821115615d8b57615d8b61591e565b500190565b600082821015615da257615da261591e565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600082615e0857615e08615d00565b500490565b600082615e1c57615e1c615d00565b500690565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906153ac90830184614a39565b600060208284031215615e6657600080fd5b815161175081614a9856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212201c523d006b2a77ccb7cd7992803d7b4047dff089ca1c1d3caa4505b1a94ab6ea64736f6c634300080d0033',
  linkReferences: {},
  deployedLinkReferences: {},
};
