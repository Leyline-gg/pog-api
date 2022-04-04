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
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'AdminAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'AdminRemoved',
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
          indexed: false,
          internalType: 'bytes32',
          name: 'emailHash',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'walletAddress',
          type: 'address',
        },
      ],
      name: 'EmailHashToWalletAddress',
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
          indexed: false,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint32',
          name: 'goodOracleId',
          type: 'uint32',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'goodOracleName',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'active',
          type: 'bool',
        },
      ],
      name: 'GoodOracleUserUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'goodPointsBridgeAddress',
          type: 'address',
        },
      ],
      name: 'GoodPointsBridgeAddressUpdated',
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
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
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
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'userId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'walletAddress',
          type: 'address',
        },
      ],
      name: 'UserIdToWalletAddress',
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
              internalType: 'uint32',
              name: 'id',
              type: 'uint32',
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
              internalType: 'enum ProofOfGoodLedger.Status',
              name: 'status',
              type: 'uint8',
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
      name: 'addGoodOracle',
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
            {
              internalType: 'enum ProofOfGoodLedger.Status',
              name: 'status',
              type: 'uint8',
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
          components: [
            {
              internalType: 'uint16',
              name: 'id',
              type: 'uint16',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'enum ProofOfGoodLedger.Status',
              name: 'status',
              type: 'uint8',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.GoodCategory',
          name: 'goodCategory',
          type: 'tuple',
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
              internalType: 'uint16',
              name: 'id',
              type: 'uint16',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'enum ProofOfGoodLedger.Status',
              name: 'status',
              type: 'uint8',
            },
          ],
          internalType: 'struct ProofOfGoodLedger.GoodType',
          name: 'goodType',
          type: 'tuple',
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
      ],
      name: 'getAddressProofOfGoodEntries',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'doGooder',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'goodActivityId',
              type: 'uint256',
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
      name: 'getAddressTotalGoodPointsByCategory',
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
          internalType: 'uint16',
          name: '_goodOracleId',
          type: 'uint16',
        },
      ],
      name: 'getApprovedActivitesForGoodOracleId',
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
          internalType: 'uint16',
          name: '_goodActivityId',
          type: 'uint16',
        },
      ],
      name: 'getGoodTypesForGoodActivityId',
      outputs: [
        {
          internalType: 'uint16[]',
          name: '',
          type: 'uint16[]',
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
              internalType: 'address',
              name: 'doGooder',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'goodActivityId',
              type: 'uint256',
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
          internalType: 'bytes32',
          name: '_userId',
          type: 'bytes32',
        },
        {
          internalType: 'uint16',
          name: '_goodCategoryId',
          type: 'uint16',
        },
      ],
      name: 'getUserTotalGoodPointsByCategory',
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
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
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
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
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
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'goodPointsBridgeAddress',
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
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: 'status',
          type: 'uint8',
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
      inputs: [],
      name: 'owner',
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
          internalType: 'uint64',
          name: 'balance',
          type: 'uint64',
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
          internalType: 'bytes32',
          name: 'emailHash',
          type: 'bytes32',
        },
      ],
      name: 'profileByEmailHash',
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
              internalType: 'uint64',
              name: 'balance',
              type: 'uint64',
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
                  internalType: 'address',
                  name: 'doGooder',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'goodActivityId',
                  type: 'uint256',
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
              internalType: 'uint64',
              name: 'balance',
              type: 'uint64',
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
                  internalType: 'address',
                  name: 'doGooder',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'goodActivityId',
                  type: 'uint256',
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
              internalType: 'uint64',
              name: 'balance',
              type: 'uint64',
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
                  internalType: 'address',
                  name: 'doGooder',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'goodActivityId',
                  type: 'uint256',
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
      inputs: [],
      name: 'renounceOwnership',
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
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: '_goodOracleId',
          type: 'uint32',
        },
        {
          internalType: 'string',
          name: '_uri',
          type: 'string',
        },
        {
          internalType: 'enum ProofOfGoodLedger.Status',
          name: '_status',
          type: 'uint8',
        },
        {
          internalType: 'uint256[]',
          name: '_approvedActivityIdArray',
          type: 'uint256[]',
        },
      ],
      name: 'updateGoodOracle',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: '_goodOracleId',
          type: 'uint32',
        },
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
      ],
      name: 'updateGoodOracleName',
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
    '0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020016a141c9bdbd993d991dbdbd960aa1b81525060405180604001604052806003815260200162504f4760e81b8152506200006c62000066620000c760201b60201c565b620000cb565b8151620000819060019060208501906200011b565b508051620000979060029060208401906200011b565b50506017805463ffffffff1916905550336000908152601160205260409020805460ff19166001179055620001fe565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200012990620001c1565b90600052602060002090601f0160209004810192826200014d576000855562000198565b82601f106200016857805160ff191683800117855562000198565b8280016001018555821562000198579182015b82811115620001985782518255916020019190600101906200017b565b50620001a6929150620001aa565b5090565b5b80821115620001a65760008155600101620001ab565b600181811c90821680620001d657607f821691505b60208210811415620001f857634e487b7160e01b600052602260045260246000fd5b50919050565b615fbe806200020e6000396000f3fe608060405234801561001057600080fd5b50600436106103425760003560e01c8063715018a6116101b8578063bc2dfced11610104578063e95d158b116100a2578063f2fde38b1161007c578063f2fde38b146108ca578063f7a8d7a2146108dd578063fe0f2f96146108fd578063fedbd4531461091057600080fd5b8063e95d158b14610835578063e985e9c514610848578063f145c3fa1461088457600080fd5b8063cf3b7d90116100de578063cf3b7d90146107cc578063d33e5150146107ef578063d69167e514610802578063e272578e1461081557600080fd5b8063bc2dfced1461079d578063c87b56dd146107a6578063cbccf20a146107b957600080fd5b806395d89b4111610171578063aaa758b11161014b578063aaa758b114610751578063b0351dc414610764578063b88d4fde14610777578063ba96d3e61461078a57600080fd5b806395d89b4114610723578063a22cb4651461072b578063aa792cb31461073e57600080fd5b8063715018a61461069957806372f0d7ac146106a1578063812190fc146106b15780638c3080fa146106d15780638da5cb5b146106ff578063949d0cae1461071057600080fd5b80632b6cef2e116102925780634bf25ae1116102305780636352211e1161020a5780636352211e1461064d578063696a16cb14610660578063704802751461067357806370a082311461068657600080fd5b80634bf25ae1146105dc5780635dbdf4d8146105fc5780635e59a3df1461061c57600080fd5b80633b093ddc1161026c5780633b093ddc1461051a57806342842e0e1461058f578063429b62e5146105a257806347f6acf1146105c557600080fd5b80632b6cef2e146104a157806331f1f933146104c1578063392b7633146104d457600080fd5b80630fe31648116102ff5780631fab60bb116102d95780631fab60bb146104485780631fb4f1a01461046857806323b872dd1461047b57806328d4b63f1461048e57600080fd5b80630fe316481461040f57806316feb0d0146104225780631785f53c1461043557600080fd5b806301b844481461034757806301ffc9a714610372578063056a305c1461039557806306fdde03146103ba578063081812fc146103cf578063095ea7b3146103fa575b600080fd5b61035a610355366004614b49565b610923565b60405161036993929190614bf4565b60405180910390f35b610385610380366004614c36565b6109d6565b6040519015158152602001610369565b6103a86103a3366004614c53565b610a28565b60405161036996959493929190614c6c565b6103c2610b81565b6040516103699190614cc8565b6103e26103dd366004614c53565b610c13565b6040516001600160a01b039091168152602001610369565b61040d610408366004614cf2565b610cad565b005b61040d61041d366004614e71565b610dc3565b61040d610430366004614f4e565b611781565b61040d610443366004614f7a565b611887565b61045b610456366004614c53565b611921565b6040516103699190615082565b61040d61047636600461514a565b611b9b565b61040d61048936600461518d565b611d08565b61040d61049c36600461525e565b611d39565b6104b46104af366004614f7a565b611e6c565b6040516103699190615292565b61040d6104cf36600461525e565b611ffc565b6105056104e23660046152a5565b805160208183018101805160108252928201919093012091525463ffffffff1681565b60405163ffffffff9091168152602001610369565b610560610528366004614c53565b601560205260009081526040902080546002909101546001600160401b0380821691600160401b8104821691600160801b9091041684565b604080519485526001600160401b03938416602086015291831691840191909152166060820152608001610369565b61040d61059d36600461518d565b612124565b6103856105b0366004614f7a565b60116020526000908152604090205460ff1681565b6105ce60085481565b604051908152602001610369565b6105ce6105ea366004614c53565b60146020526000908152604090205481565b6105ce61060a366004614b49565b600b6020526000908152604090205481565b6105ce61062a3660046152d9565b600091825260166020908152604080842061ffff93909316845291905290205490565b6103e261065b366004614c53565b61213f565b600a546103e2906001600160a01b031681565b61040d610681366004614f7a565b6121b6565b6105ce610694366004614f7a565b61224c565b61040d6122d3565b6017546105059063ffffffff1681565b6106c46106bf366004614b49565b612309565b6040516103699190615337565b6103856106df36600461534a565b601260209081526000928352604080842090915290825290205460ff1681565b6000546001600160a01b03166103e2565b61038561071e366004614cf2565b612373565b6103c26124c1565b61040d610739366004615374565b6124d0565b61035a61074c366004614b49565b6124df565b61045b61075f366004614c53565b612506565b61040d610772366004614f7a565b61272a565b61040d61078536600461539e565b6127a2565b61040d610798366004615419565b6127da565b6105ce60095481565b6103c26107b4366004614c53565b6129b3565b6105ce6107c73660046154f4565b612a9b565b6107df6107da366004614c53565b612ce3565b60405161036994939291906155ca565b6104b46107fd366004614c53565b612e26565b61045b610810366004614f7a565b612f9e565b6105ce610823366004614f7a565b60136020526000908152604090205481565b61040d610843366004615614565b6131d6565b610385610856366004615614565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6105ce61089236600461563e565b6001600160a01b03821660009081526013602090815260408083205483526016825280832061ffff8516845290915290205492915050565b61040d6108d8366004614f7a565b6134ae565b6108f06108eb366004614b49565b613549565b604051610369919061569c565b61040d61090b366004615711565b6135d9565b61040d61091e366004615802565b613960565b600d602052600090815260409020805460018201805461ffff909216929161094a9061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546109769061587a565b80156109c35780601f10610998576101008083540402835291602001916109c3565b820191906000526020600020905b8154815290600101906020018083116109a657829003601f168201915b5050506002909301549192505060ff1683565b60006001600160e01b031982166380ac58cd60e01b1480610a0757506001600160e01b03198216635b5e139f60e01b145b80610a2257506301ffc9a760e01b6001600160e01b03198316145b92915050565b600e60205260009081526040902080546002820154600383018054929361ffff90921692610a559061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a819061587a565b8015610ace5780601f10610aa357610100808354040283529160200191610ace565b820191906000526020600020905b815481529060010190602001808311610ab157829003601f168201915b5050506004840154600585018054949563ffffffff909216949193509150610af59061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b219061587a565b8015610b6e5780601f10610b4357610100808354040283529160200191610b6e565b820191906000526020600020905b815481529060010190602001808311610b5157829003601f168201915b5050506006909301549192505060ff1686565b606060018054610b909061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbc9061587a565b8015610c095780601f10610bde57610100808354040283529160200191610c09565b820191906000526020600020905b815481529060010190602001808311610bec57829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b0316610c915760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b6000610cb88261213f565b9050806001600160a01b0316836001600160a01b03161415610d265760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610c88565b336001600160a01b0382161480610d425750610d428133610856565b610db45760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610c88565b610dbe8383613b55565b505050565b604081015160009015610eae5750604080820151600081815260156020529190912054610ea95781516001600160a01b0316610e4b5760405162461bcd60e51b815260206004820152602160248201527f6e65772075736572496420627574206e6f20646f476f6f6465722070617373656044820152601960fa1b6064820152608401610c88565b6000818152601560208181526040808420858155815180840190925286516001600160a01b0316825293859052919052610e8b916001908101919061491d565b5081516001600160a01b031660009081526013602052604090208190555b610fc9565b81516001600160a01b031615610f41575080516001600160a01b03166000908152601360205260409020548015801590610ef5575060008181526015602052604090205481145b610ea95760405162461bcd60e51b815260206004820152601e60248201527f70726f66696c6520666f7220646f476f6f646572206e6f7420666f756e6400006044820152606401610c88565b602082015115610fc957506020808201516000908152601490915260409020548015801590610f7d575060008181526015602052604090205481145b610fc95760405162461bcd60e51b815260206004820152601f60248201527f70726f66696c6520666f7220656d61696c48617368206e6f7420666f756e64006044820152606401610c88565b81516001600160a01b0381166110135760008281526015602052604081206001018054909190610ffb57610ffb6158b5565b6000918252602090912001546001600160a01b031690505b6001600160a01b0381166110575760405162461bcd60e51b815260206004820152600b60248201526a3737903237a3b7b7b232b960a91b6044820152606401610c88565b6001600160a01b0381166000908152601360205260409020546110be576001600160a01b0381166000818152601360209081526040808320869055858352601582528220600190810180549182018155835291200180546001600160a01b03191690911790555b6020830151158015906110e557506020808401516000908152601490915260409020548214155b1561115d57602080840151600090815260149091526040902054156111455760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610c88565b60208084015160009081526014909152604090208290555b61116683613bc3565b6111a35760405162461bcd60e51b815260206004820152600e60248201526d4661696c6564206120636865636b60901b6044820152606401610c88565b6111b1600780546001019055565b60006111bc60075490565b90506111c88282614264565b60608401516000908152600e602052604081206004015460a08601516111f49163ffffffff16906158e1565b63ffffffff169050826001600160a01b03167fe3f157739acb4b4fca01bf36ba7ed4b2805f0a03b74d7e3a8726e11dbbe682da8387602001518789606001518a608001518b6101000151888d60a001518e60c001518f60e001516040516112649a9998979695949392919061590d565b60405180910390a26000604051806101200160405280848152602001856001600160a01b0316815260200187606001518152602001836001600160401b031681526020018760a0015163ffffffff1681526020018760c001516001600160401b03168152602001876080015163ffffffff1681526020018760e00151815260200187610100015181525090506000600e6000886060015181526020019081526020016000206040518060e0016040529081600082015481526020016001820180548060200260200160405190810160405280929190818152602001828054801561139557602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff168152602001906002019060208260010104928301926001038202915080841161135c5790505b5050509183525050600282015461ffff1660208201526003820180546040909201916113c09061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546113ec9061587a565b80156114395780601f1061140e57610100808354040283529160200191611439565b820191906000526020600020905b81548152906001019060200180831161141c57829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916114669061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546114929061587a565b80156114df5780601f106114b4576101008083540402835291602001916114df565b820191906000526020600020905b8154815290600101906020018083116114c257829003601f168201915b5050509183525050600682015460209091019060ff16600381111561150657611506614bbc565b600381111561151757611517614bbc565b905250600087815260156020908152604080832060039081018054600181810183559186529484902088516006909602019485558784015190850180546001600160a01b039092166001600160a01b031990921691909117905590860151600284015560608601519083018054608088015160a089015160c08a015163ffffffff908116600160a01b0263ffffffff60a01b196001600160401b03938416600160601b02166bffffffffffffffffffffffff60601b1992909416600160401b026bffffffffffffffffffffffff19909516929096169190911792909217919091161791909117905560e08501516004830155610100850151805193945085936116269260058501920190614982565b505050600086815260156020526040812060020180548592906116539084906001600160401b031661597b565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826015600088815260200190815260200160002060020160088282829054906101000a90046001600160401b03166116af919061597b565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826001600160401b0316601660008881526020019081526020016000206000836040015161ffff1661ffff168152602001908152602001600020600082825461171c91906159a6565b92505081905550826001600160401b03166008600082825461173e91906159a6565b909155505060408082015161ffff166000908152600b60205290812080546001600160401b03861692906117739084906159a6565b909155505050505050505050565b3360009081526011602052604090205460ff166117b05760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b03811660009081526013602052604090205480158015906117e5575060008181526015602052604090205481145b6118255760405162461bcd60e51b81526020600482015260116024820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b6044820152606401610c88565b60008381526014602052604090819020829055517f5b39a4331b9eca15106663a0231cbade6977e29a1dc6981fb3b0b085822925289061187a90859085909182526001600160a01b0316602082015260400190565b60405180910390a1505050565b3360009081526011602052604090205460ff166118b65760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b0381166118c957600080fd5b6001600160a01b038116600081815260116020908152604091829020805460ff1916905590519182527fa3b62bc36326052d97ea62d63c3d60308ed4c3ea8ac079dd8499f1e9c4f80c0f91015b60405180910390a150565b6119296149f6565b600082815260146020908152604080832054835260158252808320815160c0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156119a957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161198b575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611b4f5760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190611abe9061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054611aea9061587a565b8015611b375780601f10611b0c57610100808354040283529160200191611b37565b820191906000526020600020905b815481529060010190602001808311611b1a57829003601f168201915b50505050508152505081526020019060010190611a0f565b505050915250508051909150610a225760405162461bcd60e51b81526020600482015260116024820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b6044820152606401610c88565b3360009081526011602052604090205460ff16611bca5760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b038316611bdd57600080fd5b63ffffffff8216611c295760405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a590819dbdbd9081bdc9858db19481a5960521b6044820152606401610c88565b63ffffffff8083166000818152600f602052604090205490911614611c905760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520646f6573206e6f742065786973740000000000006044820152606401610c88565b6001600160a01b038316600090815260126020908152604080832063ffffffff861684528252808320805460ff1916851515179055600f9091529081902090517fcc83b74ea9bfc3ed64e496495c217e1d4070b1cd65673f8fc8b2c085a1d231219161187a9186918691600191909101908690615a62565b611d1233826143a6565b611d2e5760405162461bcd60e51b8152600401610c8890615aa5565b610dbe838383614428565b3360009081526011602052604090205460ff16611d685760405162461bcd60e51b8152600401610c88906159be565b805161ffff16611d8a5760405162461bcd60e51b8152600401610c8890615af6565b600081602001515111611daf5760405162461bcd60e51b8152600401610c8890615b39565b805161ffff9081166000908152600c602090815260409091208351815461ffff19169316929092178255808301518051849392611df3926001850192910190614982565b50604082015160028201805460ff19166001836003811115611e1757611e17614bbc565b0217905550905050806000015161ffff167f4fcd383604332b394161a254d359c73296253b0e25354b61f8a192f2ca90f1c082602001518360400151604051611e61929190615b60565b60405180910390a250565b6001600160a01b038116600090815260136020908152604080832054835260158252808320600301805482518185028101850190935280835260609492939192909184015b82821015611ff15760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190611f609061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054611f8c9061587a565b8015611fd95780601f10611fae57610100808354040283529160200191611fd9565b820191906000526020600020905b815481529060010190602001808311611fbc57829003601f168201915b50505050508152505081526020019060010190611eb1565b505050509050919050565b3360009081526011602052604090205460ff1661202b5760405162461bcd60e51b8152600401610c88906159be565b805161ffff1661204d5760405162461bcd60e51b8152600401610c8890615b82565b6000816020015151116120725760405162461bcd60e51b8152600401610c8890615b39565b805161ffff9081166000908152600d602090815260409091208351815461ffff191693169290921782558083015180518493926120b6926001850192910190614982565b50604082015160028201805460ff191660018360038111156120da576120da614bbc565b0217905550905050806000015161ffff167fa64371df3e4e587f97e094b4e6cb2dd8780392180388ec6f7c2ac098a8452feb82602001518360400151604051611e61929190615b60565b610dbe838383604051806020016040528060008152506127a2565b6000818152600360205260408120546001600160a01b031680610a225760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610c88565b3360009081526011602052604090205460ff166121e55760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b0381166121f857600080fd5b6001600160a01b038116600081815260116020908152604091829020805460ff1916600117905590519182527f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e3399101611916565b60006001600160a01b0382166122b75760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610c88565b506001600160a01b031660009081526004602052604090205490565b6000546001600160a01b031633146122fd5760405162461bcd60e51b8152600401610c8890615bc9565b61230760006145c8565b565b61ffff81166000908152600f602090815260409182902060040180548351818402810184019094528084526060939283018282801561236757602002820191906000526020600020905b815481526020019060010190808311612353575b50505050509050919050565b600a546000906001600160a01b031633146123d05760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206973206e6f7420676f6f64506f696e747342726964676500006044820152606401610c88565b6001600160a01b03831660009081526013602090815260408083205483526015909152812060020180548492906124119084906001600160401b0316615bfe565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550816009600082825461244791906159a6565b90915550506001600160a01b038316600081815260136020908152604080832054835260158252918290206002015482518681526001600160401b03909116918101919091527f9ce3299c5bcff8db5ce8560d5c76cf01d7bc08936eca4f80b2506502560a8944910160405180910390a250600192915050565b606060028054610b909061587a565b6124db338383614618565b5050565b600c602052600090815260409020805460018201805461ffff909216929161094a9061587a565b61250e6149f6565b6000828152601560209081526040808320815160c08101835281548152600182018054845181870281018701909552808552919492938584019390929083018282801561258457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612566575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611b4f5760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e0820152600582018054919291610100840191906126999061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546126c59061587a565b80156127125780601f106126e757610100808354040283529160200191612712565b820191906000526020600020905b8154815290600101906020018083116126f557829003601f168201915b505050505081525050815260200190600101906125ea565b6000546001600160a01b031633146127545760405162461bcd60e51b8152600401610c8890615bc9565b600a80546001600160a01b0319166001600160a01b0383169081179091556040519081527f02281d9b30520c4846a2d45ccccf51fb691926264690903b8a697706dd5f988b90602001611916565b6127ac33836143a6565b6127c85760405162461bcd60e51b8152600401610c8890615aa5565b6127d4848484846146e7565b50505050565b3360009081526011602052604090205460ff166128095760405162461bcd60e51b8152600401610c88906159be565b60008263ffffffff161161282f5760405162461bcd60e51b8152600401610c8890615c26565b60008151116128505760405162461bcd60e51b8152600401610c8890615b39565b63ffffffff8083166000818152600f6020526040902054909116146128af5760405162461bcd60e51b815260206004820152601560248201527419dbdbd9081bdc9858db19481b9bdd08199bdd5b99605a1b6044820152606401610c88565b6010600f60008463ffffffff1681526020019081526020016000206001016040516128da9190615c6b565b908152604051908190036020018120805463ffffffff191690558290601090612904908490615cdd565b9081526040805160209281900383019020805463ffffffff191663ffffffff9485161790559184166000908152600f825291909120825161294e9260019290920191840190614982565b5063ffffffff82166000818152600f602052604090819020600381015491517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e56926129a7928692600282019260ff169160040190615d2e565b60405180910390a25050565b6000818152600360205260409020546060906001600160a01b0316612a325760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610c88565b6000612a4960408051602081019091526000815290565b90506000815111612a695760405180602001604052806000815250612a94565b80612a738461471a565b604051602001612a84929190615d74565b6040516020818303038152906040525b9392505050565b3360009081526011602052604081205460ff16612aca5760405162461bcd60e51b8152600401610c88906159be565b600082602001515111612aef5760405162461bcd60e51b8152600401610c8890615b39565b60108260200151604051612b039190615cdd565b9081526040519081900360200190205463ffffffff1615612b665760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520616c7265616479206578697374730000000000006044820152606401610c88565b60178054600090612b7c9063ffffffff16615d9a565b825463ffffffff9182166101009390930a83810290830219909116179092558084526000908152600f6020908152604090912084518154931663ffffffff19909316929092178255808401518051859392612bde926001850192910190614982565b5060408201518051612bfa916002840191602090910190614982565b5060608201518160030160006101000a81548160ff02191690836003811115612c2557612c25614bbc565b021790555060808201518051612c45916004840191602090910190614a2a565b50905050816000015160108360200151604051612c629190615cdd565b9081526040805160209281900383018120805463ffffffff191663ffffffff958616179055855192860151918601516060870151608088015194909516947fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5694612ccc9493615dbe565b60405180910390a250805163ffffffff165b919050565b600f602052600090815260409020805460018201805463ffffffff9092169291612d0c9061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054612d389061587a565b8015612d855780601f10612d5a57610100808354040283529160200191612d85565b820191906000526020600020905b815481529060010190602001808311612d6857829003601f168201915b505050505090806002018054612d9a9061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054612dc69061587a565b8015612e135780601f10612de857610100808354040283529160200191612e13565b820191906000526020600020905b815481529060010190602001808311612df657829003601f168201915b5050506003909301549192505060ff1684565b606060156000838152602001908152602001600020600301805480602002602001604051908101604052809291908181526020016000905b82821015611ff15760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190612f0d9061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054612f399061587a565b8015612f865780601f10612f5b57610100808354040283529160200191612f86565b820191906000526020600020905b815481529060010190602001808311612f6957829003601f168201915b50505050508152505081526020019060010190612e5e565b612fa66149f6565b6001600160a01b038216600090815260136020908152604080832054835260158252808320815160c08101835281548152600182018054845181870281018701909552808552919492938584019390929083018282801561303057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311613012575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611b4f5760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e0820152600582018054919291610100840191906131459061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546131719061587a565b80156131be5780601f10613193576101008083540402835291602001916131be565b820191906000526020600020905b8154815290600101906020018083116131a157829003601f168201915b50505050508152505081526020019060010190613096565b3360009081526011602052604090205460ff166132055760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b0380831660009081526013602081815260408084205484526015808352818520958716855292825280842054845291905290208054825414156132805760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610c88565b60028082015490830180546001600160401b03928316926000916132a69185911661597b565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160089054906101000a90046001600160401b03168260020160088282829054906101000a90046001600160401b0316613307919061597b565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160109054906101000a90046001600160401b03168260020160108282829054906101000a90046001600160401b0316613368919061597b565b92506101000a8154816001600160401b0302191690836001600160401b0316021790555060005b600182015481101561344457826001018260010182815481106133b4576133b46158b5565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b039092169190911790558454918401805460139291908590811061340d5761340d6158b5565b60009182526020808320909101546001600160a01b031683528201929092526040019020558061343c81615e04565b91505061338f565b506002810180546001600160c01b0319169055613465600182016000614a64565b604080516001600160a01b038087168252851660208201527f239567be74fe3e80a3e23e994c3234310617523efa3bdb81b591bda34e070368910160405180910390a150505050565b6000546001600160a01b031633146134d85760405162461bcd60e51b8152600401610c8890615bc9565b6001600160a01b03811661353d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610c88565b613546816145c8565b50565b61ffff81166000908152600e602090815260409182902060010180548351818402810184019094528084526060939283018282801561236757602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411613596575094979650505050505050565b3360009081526011602052604090205460ff166136085760405162461bcd60e51b8152600401610c88906159be565b80516136665760405162461bcd60e51b815260206004820152602760248201527f676f6f64206163746976697479206964206d75737420626520677265617465726044820152660207468616e20360cc1b6064820152608401610c88565b60005b8160200151518110156137625760008260200151828151811061368e5761368e6158b5565b602002602001015161ffff16116136b75760405162461bcd60e51b8152600401610c8890615af6565b6000600c6000846020015184815181106136d3576136d36158b5565b60209081029190910181015161ffff1682528101919091526040016000206002015460ff16600381111561370957613709614bbc565b146137505760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610c88565b8061375a81615e04565b915050613669565b506000816040015161ffff161161378b5760405162461bcd60e51b8152600401610c8890615b82565b600060408083015161ffff166000908152600d602052206002015460ff1660038111156137ba576137ba614bbc565b146138075760405162461bcd60e51b815260206004820152601b60248201527f676f6f642063617465676f7279206973206e6f742061637469766500000000006044820152606401610c88565b60008160600151511161382c5760405162461bcd60e51b8152600401610c8890615b39565b80516000908152600e6020908152604090912082518155818301518051849361385c926001850192910190614a82565b50604082015160028201805461ffff191661ffff90921691909117905560608201518051613894916003840191602090910190614982565b50608082015160048201805463ffffffff191663ffffffff90921691909117905560a082015180516138d0916005840191602090910190614982565b5060c082015160068201805460ff191660018360038111156138f4576138f4614bbc565b0217905550905050806040015161ffff1681600001517f27b90160eaa4ab2aa06fabc8c7f0a5acd0041ec04a3851eb1b5881c94ee37d128360200151846060015185608001518660a001518760c00151604051613955959493929190615e1f565b60405180910390a350565b3360009081526011602052604090205460ff1661398f5760405162461bcd60e51b8152600401610c88906159be565b60008463ffffffff16116139b55760405162461bcd60e51b8152600401610c8890615c26565b60008351116139f55760405162461bcd60e51b815260206004820152600c60248201526b75726920697320656d70747960a01b6044820152606401610c88565b63ffffffff8085166000818152600f602052604090205490911614613a545760405162461bcd60e51b815260206004820152601560248201527419dbdbd9081bdc9858db19481b9bdd08199bdd5b99605a1b6044820152606401610c88565b63ffffffff84166000908152600f602090815260409091208451613a8092600290920191860190614982565b5063ffffffff84166000908152600f6020526040902060039081018054849260ff19909116906001908490811115613aba57613aba614bbc565b021790555063ffffffff84166000908152600f602090815260409091208251613aeb92600490920191840190614a2a565b5063ffffffff84166000818152600f602052604090819020600381015491517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5692613b47926001810192600282019260ff169160040190615e7e565b60405180910390a250505050565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613b8a8261213f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60608101516000908152600e602052604081208054613c245760405162461bcd60e51b815260206004820152601c60248201527f676f6f6420616374697669747920646f6573206e6f74206578697374000000006044820152606401610c88565b6000600682015460ff166003811115613c3f57613c3f614bbc565b14613c8c5760405162461bcd60e51b815260206004820152601b60248201527f676f6f64206163746976697479206973206e6f742061637469766500000000006044820152606401610c88565b60005b6001820154811015613ddb576000600c6000846001018481548110613cb657613cb66158b5565b6000918252602080832060108304015461ffff6002600f90941684026101000a90910416845283019390935260409091019020015460ff166003811115613cff57613cff614bbc565b14613d465760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610c88565b816001018181548110613d5b57613d5b6158b5565b60009182526020909120601082040154600f9091166002026101000a900461ffff16613dc95760405162461bcd60e51b815260206004820152601860248201527f676f6f64207479706520646f6573206e6f7420657869737400000000000000006044820152606401610c88565b80613dd381615e04565b915050613c8f565b50600060028083015461ffff166000908152600d60205260409020015460ff166003811115613e0c57613e0c614bbc565b14613e595760405162461bcd60e51b815260206004820152601b60248201527f676f6f642063617465676f7279206973206e6f742061637469766500000000006044820152606401610c88565b608083015163ffffffff9081166000908152600f602052604090205416613ec25760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520646f6573206e6f742065786973740000000000006044820152606401610c88565b608083015163ffffffff166000908152600f6020526040812060039081015460ff1690811115613ef457613ef4614bbc565b14613f415760405162461bcd60e51b815260206004820152601960248201527f676f6f64206f7261636c65206973206e6f7420616374697665000000000000006044820152606401610c88565b3360009081526011602052604090205460ff1680613f835750336000908152601260209081526040808320608087015163ffffffff16845290915290205460ff165b613fc85760405162461bcd60e51b81526020600482015260166024820152751cd95b99195c881a5cc81b9bdd08185c1c1c9bdd995960521b6044820152606401610c88565b6000805b608085015163ffffffff166000908152600f602052604090206004015481101561404b57608085015163ffffffff166000908152600f6020526040902060040180548290811061401e5761401e6158b5565b90600052602060002001548560600151141561403957600191505b8061404381615e04565b915050613fcc565b50806140ad5760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610c88565b620f42408460a0015163ffffffff1611156140fb5760405162461bcd60e51b815260206004820152600e60248201526d756e697473206f766572666c6f7760901b6044820152606401610c88565b60008460a0015163ffffffff16116141555760405162461bcd60e51b815260206004820152601c60248201527f756e697473206d7573742062652067726561746572207468616e2030000000006044820152606401610c88565b6000846101000151511161419f5760405162461bcd60e51b815260206004820152601160248201527070726f6f6655524c20697320656d70747960781b6044820152606401610c88565b60008460c001516001600160401b0316116141fc5760405162461bcd60e51b815260206004820181905260248201527f74696d657374616d70206d7573742062652067726561746572207468616e20306044820152606401610c88565b60008460e001511161425a5760405162461bcd60e51b815260206004820152602160248201527f65787465726e616c4964206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608401610c88565b5060019392505050565b6001600160a01b0382166142ba5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610c88565b6000818152600360205260409020546001600160a01b03161561431f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610c88565b6001600160a01b03821660009081526004602052604081208054600192906143489084906159a6565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600360205260408120546001600160a01b031661441f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610c88565b50600092915050565b826001600160a01b031661443b8261213f565b6001600160a01b0316146144a35760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610c88565b6001600160a01b0382166145055760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610c88565b614510600082613b55565b6001600160a01b0383166000908152600460205260408120805460019290614539908490615e91565b90915550506001600160a01b03821660009081526004602052604081208054600192906145679084906159a6565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316141561467a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610c88565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6146f2848484614428565b6146fe8484848461481f565b6127d45760405162461bcd60e51b8152600401610c8890615ea8565b60608161473e5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115614768578061475281615e04565b91506147619050600a83615f10565b9150614742565b6000816001600160401b0381111561478257614782614d1c565b6040519080825280601f01601f1916602001820160405280156147ac576020820181803683370190505b5090505b8415614817576147c1600183615e91565b91506147ce600a86615f24565b6147d99060306159a6565b60f81b8183815181106147ee576147ee6158b5565b60200101906001600160f81b031916908160001a905350614810600a86615f10565b94506147b0565b949350505050565b60006001600160a01b0384163b1561491257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290614863903390899088908890600401615f38565b6020604051808303816000875af192505050801561489e575060408051601f3d908101601f1916820190925261489b91810190615f6b565b60015b6148f8573d8080156148cc576040519150601f19603f3d011682016040523d82523d6000602084013e6148d1565b606091505b5080516148f05760405162461bcd60e51b8152600401610c8890615ea8565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050614817565b506001949350505050565b828054828255906000526020600020908101928215614972579160200282015b8281111561497257825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061493d565b5061497e929150614b22565b5090565b82805461498e9061587a565b90600052602060002090601f0160209004810192826149b05760008555614972565b82601f106149c957805160ff1916838001178555614972565b82800160010185558215614972579182015b828111156149725782518255916020019190600101906149db565b6040805160c0810182526000808252606060208301819052928201819052828201819052608082015260a081019190915290565b82805482825590600052602060002090810192821561497257916020028201828111156149725782518255916020019190600101906149db565b50805460008255906000526020600020908101906135469190614b22565b82805482825590600052602060002090600f016010900481019282156149725791602002820160005b83821115614aeb57835183826101000a81548161ffff021916908361ffff1602179055509260200192600201602081600101049283019260010302614aab565b8015614b195782816101000a81549061ffff0219169055600201602081600101049283019260010302614aeb565b505061497e9291505b5b8082111561497e5760008155600101614b23565b803561ffff81168114612cde57600080fd5b600060208284031215614b5b57600080fd5b612a9482614b37565b60005b83811015614b7f578181015183820152602001614b67565b838111156127d45750506000910152565b60008151808452614ba8816020860160208601614b64565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b60048110614bf057634e487b7160e01b600052602160045260246000fd5b9052565b61ffff84168152606060208201526000614c116060830185614b90565b90506148176040830184614bd2565b6001600160e01b03198116811461354657600080fd5b600060208284031215614c4857600080fd5b8135612a9481614c20565b600060208284031215614c6557600080fd5b5035919050565b86815261ffff8616602082015260c060408201526000614c8f60c0830187614b90565b63ffffffff861660608401528281036080840152614cad8186614b90565b915050614cbd60a0830184614bd2565b979650505050505050565b602081526000612a946020830184614b90565b80356001600160a01b0381168114612cde57600080fd5b60008060408385031215614d0557600080fd5b614d0e83614cdb565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715614d5557614d55614d1c565b60405290565b60405160a081016001600160401b0381118282101715614d5557614d55614d1c565b60405160e081016001600160401b0381118282101715614d5557614d55614d1c565b604051601f8201601f191681016001600160401b0381118282101715614dc757614dc7614d1c565b604052919050565b803563ffffffff81168114612cde57600080fd5b80356001600160401b0381168114612cde57600080fd5b60006001600160401b03831115614e1357614e13614d1c565b614e26601f8401601f1916602001614d9f565b9050828152838383011115614e3a57600080fd5b828260208301376000602084830101529392505050565b600082601f830112614e6257600080fd5b612a9483833560208501614dfa565b600060208284031215614e8357600080fd5b81356001600160401b0380821115614e9a57600080fd5b908301906101208286031215614eaf57600080fd5b614eb7614d32565b614ec083614cdb565b8152602083013560208201526040830135604082015260608301356060820152614eec60808401614dcf565b6080820152614efd60a08401614dcf565b60a0820152614f0e60c08401614de3565b60c082015260e083013560e08201526101008084013583811115614f3157600080fd5b614f3d88828701614e51565b918301919091525095945050505050565b60008060408385031215614f6157600080fd5b82359150614f7160208401614cdb565b90509250929050565b600060208284031215614f8c57600080fd5b612a9482614cdb565b600081518084526020808501808196508360051b8101915082860160005b8581101561507557828403895281516101208151865286820151614fe1888801826001600160a01b03169052565b50604082810151908701526060808301516001600160401b03811682890152505060808281015163ffffffff811688830152505060a0828101516001600160401b03811688830152505060c08281015163ffffffff811688830152505060e082810151908701526101009182015191860181905261506181870183614b90565b9a87019a9550505090840190600101614fb3565b5091979650505050505050565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156150da5783516001600160a01b031682529284019260019290920191908401906150b1565b5060408701516001600160401b0381166060880152935060608701516001600160401b0381166080880152935060808701516001600160401b03811660a0880152935060a0870151868203601f190160c08801529350614cbd8185614f95565b80358015158114612cde57600080fd5b60008060006060848603121561515f57600080fd5b61516884614cdb565b925061517660208501614dcf565b91506151846040850161513a565b90509250925092565b6000806000606084860312156151a257600080fd5b6151ab84614cdb565b92506151b960208501614cdb565b9150604084013590509250925092565b803560048110612cde57600080fd5b6000606082840312156151ea57600080fd5b604051606081016001600160401b03828210818311171561520d5761520d614d1c565b8160405282935061521d85614b37565b8352602085013591508082111561523357600080fd5b5061524085828601614e51565b602083015250615252604084016151c9565b60408201525092915050565b60006020828403121561527057600080fd5b81356001600160401b0381111561528657600080fd5b614817848285016151d8565b602081526000612a946020830184614f95565b6000602082840312156152b757600080fd5b81356001600160401b038111156152cd57600080fd5b61481784828501614e51565b600080604083850312156152ec57600080fd5b82359150614f7160208401614b37565b600081518084526020808501945080840160005b8381101561532c57815187529582019590820190600101615310565b509495945050505050565b602081526000612a9460208301846152fc565b6000806040838503121561535d57600080fd5b61536683614cdb565b9150614f7160208401614dcf565b6000806040838503121561538757600080fd5b61539083614cdb565b9150614f716020840161513a565b600080600080608085870312156153b457600080fd5b6153bd85614cdb565b93506153cb60208601614cdb565b92506040850135915060608501356001600160401b038111156153ed57600080fd5b8501601f810187136153fe57600080fd5b61540d87823560208401614dfa565b91505092959194509250565b6000806040838503121561542c57600080fd5b61543583614dcf565b915060208301356001600160401b0381111561545057600080fd5b61545c85828601614e51565b9150509250929050565b60006001600160401b0382111561547f5761547f614d1c565b5060051b60200190565b600082601f83011261549a57600080fd5b813560206154af6154aa83615466565b614d9f565b82815260059290921b840181019181810190868411156154ce57600080fd5b8286015b848110156154e957803583529183019183016154d2565b509695505050505050565b60006020828403121561550657600080fd5b81356001600160401b038082111561551d57600080fd5b9083019060a0828603121561553157600080fd5b615539614d5b565b61554283614dcf565b815260208301358281111561555657600080fd5b61556287828601614e51565b60208301525060408301358281111561557a57600080fd5b61558687828601614e51565b604083015250615598606084016151c9565b60608201526080830135828111156155af57600080fd5b6155bb87828601615489565b60808301525095945050505050565b63ffffffff851681526080602082015260006155e96080830186614b90565b82810360408401526155fb8186614b90565b91505061560b6060830184614bd2565b95945050505050565b6000806040838503121561562757600080fd5b61563083614cdb565b9150614f7160208401614cdb565b6000806040838503121561565157600080fd5b61565a83614cdb565b9150614f7160208401614b37565b600081518084526020808501945080840160005b8381101561532c57815161ffff168752958201959082019060010161567c565b602081526000612a946020830184615668565b600082601f8301126156c057600080fd5b813560206156d06154aa83615466565b82815260059290921b840181019181810190868411156156ef57600080fd5b8286015b848110156154e95761570481614b37565b83529183019183016156f3565b60006020828403121561572357600080fd5b81356001600160401b038082111561573a57600080fd5b9083019060e0828603121561574e57600080fd5b615756614d7d565b8235815260208301358281111561576c57600080fd5b615778878286016156af565b60208301525061578a60408401614b37565b60408201526060830135828111156157a157600080fd5b6157ad87828601614e51565b6060830152506157bf60808401614dcf565b608082015260a0830135828111156157d657600080fd5b6157e287828601614e51565b60a0830152506157f460c084016151c9565b60c082015295945050505050565b6000806000806080858703121561581857600080fd5b61582185614dcf565b935060208501356001600160401b038082111561583d57600080fd5b61584988838901614e51565b9450615857604088016151c9565b9350606087013591508082111561586d57600080fd5b5061540d87828801615489565b600181811c9082168061588e57607f821691505b602082108114156158af57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600063ffffffff80831681851681830481118215151615615904576159046158cb565b02949350505050565b60006101408c83528b60208401528a604084015289606084015263ffffffff808a1660808501528160a08501526159468285018a614b90565b6001600160401b0398891660c0860152961660e084015250509190931661010082015261012001919091529695505050505050565b60006001600160401b0380831681851680830382111561599d5761599d6158cb565b01949350505050565b600082198211156159b9576159b96158cb565b500190565b60208082526013908201527229b2b73232b91034b9903737ba1030b236b4b760691b604082015260600190565b600081546159f88161587a565b808552602060018381168015615a155760018114615a2957615a57565b60ff19851688840152604088019550615a57565b866000528260002060005b85811015615a4f5781548a8201860152908301908401615a34565b890184019650505b505050505092915050565b6001600160a01b038516815263ffffffff84166020820152608060408201819052600090615a92908301856159eb565b9050821515606083015295945050505050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60208082526023908201527f676f6f642074797065206964206d75737420626520677265617465722074686160408201526206e20360ec1b606082015260800190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b604081526000615b736040830185614b90565b9050612a946020830184614bd2565b60208082526027908201527f676f6f642063617465676f7279206964206d75737420626520677265617465726040820152660207468616e20360cc1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006001600160401b0383811690831681811015615c1e57615c1e6158cb565b039392505050565b60208082526025908201527f676f6f64206f7261636c65206964206d75737420626520677265617465722074604082015264068616e20360dc1b606082015260800190565b6000808354615c798161587a565b60018281168015615c915760018114615ca257615cd1565b60ff19841687528287019450615cd1565b8760005260208060002060005b85811015615cc85781548a820152908401908201615caf565b50505082870194505b50929695505050505050565b60008251615cef818460208701614b64565b9190910192915050565b6000815480845260208085019450836000528060002060005b8381101561532c57815487529582019560019182019101615d12565b608081526000615d416080830187614b90565b8281036020840152615d5381876159eb565b9050615d626040840186614bd2565b8281036060840152614cbd8185615cf9565b60008351615d86818460208801614b64565b83519083019061599d818360208801614b64565b600063ffffffff80831681811415615db457615db46158cb565b6001019392505050565b608081526000615dd16080830187614b90565b8281036020840152615de38187614b90565b9050615df26040840186614bd2565b8281036060840152614cbd81856152fc565b6000600019821415615e1857615e186158cb565b5060010190565b60a081526000615e3260a0830188615668565b8281036020840152615e448188614b90565b905063ffffffff861660408401528281036060840152615e648186614b90565b915050615e746080830184614bd2565b9695505050505050565b608081526000615d4160808301876159eb565b600082821015615ea357615ea36158cb565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b600082615f1f57615f1f615efa565b500490565b600082615f3357615f33615efa565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090615e7490830184614b90565b600060208284031215615f7d57600080fd5b8151612a9481614c2056fea2646970667358221220c62fa53ddcf8acccaba9f362bc6a950faf69beb502e327d1e8146d429b9e466264736f6c634300080b0033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106103425760003560e01c8063715018a6116101b8578063bc2dfced11610104578063e95d158b116100a2578063f2fde38b1161007c578063f2fde38b146108ca578063f7a8d7a2146108dd578063fe0f2f96146108fd578063fedbd4531461091057600080fd5b8063e95d158b14610835578063e985e9c514610848578063f145c3fa1461088457600080fd5b8063cf3b7d90116100de578063cf3b7d90146107cc578063d33e5150146107ef578063d69167e514610802578063e272578e1461081557600080fd5b8063bc2dfced1461079d578063c87b56dd146107a6578063cbccf20a146107b957600080fd5b806395d89b4111610171578063aaa758b11161014b578063aaa758b114610751578063b0351dc414610764578063b88d4fde14610777578063ba96d3e61461078a57600080fd5b806395d89b4114610723578063a22cb4651461072b578063aa792cb31461073e57600080fd5b8063715018a61461069957806372f0d7ac146106a1578063812190fc146106b15780638c3080fa146106d15780638da5cb5b146106ff578063949d0cae1461071057600080fd5b80632b6cef2e116102925780634bf25ae1116102305780636352211e1161020a5780636352211e1461064d578063696a16cb14610660578063704802751461067357806370a082311461068657600080fd5b80634bf25ae1146105dc5780635dbdf4d8146105fc5780635e59a3df1461061c57600080fd5b80633b093ddc1161026c5780633b093ddc1461051a57806342842e0e1461058f578063429b62e5146105a257806347f6acf1146105c557600080fd5b80632b6cef2e146104a157806331f1f933146104c1578063392b7633146104d457600080fd5b80630fe31648116102ff5780631fab60bb116102d95780631fab60bb146104485780631fb4f1a01461046857806323b872dd1461047b57806328d4b63f1461048e57600080fd5b80630fe316481461040f57806316feb0d0146104225780631785f53c1461043557600080fd5b806301b844481461034757806301ffc9a714610372578063056a305c1461039557806306fdde03146103ba578063081812fc146103cf578063095ea7b3146103fa575b600080fd5b61035a610355366004614b49565b610923565b60405161036993929190614bf4565b60405180910390f35b610385610380366004614c36565b6109d6565b6040519015158152602001610369565b6103a86103a3366004614c53565b610a28565b60405161036996959493929190614c6c565b6103c2610b81565b6040516103699190614cc8565b6103e26103dd366004614c53565b610c13565b6040516001600160a01b039091168152602001610369565b61040d610408366004614cf2565b610cad565b005b61040d61041d366004614e71565b610dc3565b61040d610430366004614f4e565b611781565b61040d610443366004614f7a565b611887565b61045b610456366004614c53565b611921565b6040516103699190615082565b61040d61047636600461514a565b611b9b565b61040d61048936600461518d565b611d08565b61040d61049c36600461525e565b611d39565b6104b46104af366004614f7a565b611e6c565b6040516103699190615292565b61040d6104cf36600461525e565b611ffc565b6105056104e23660046152a5565b805160208183018101805160108252928201919093012091525463ffffffff1681565b60405163ffffffff9091168152602001610369565b610560610528366004614c53565b601560205260009081526040902080546002909101546001600160401b0380821691600160401b8104821691600160801b9091041684565b604080519485526001600160401b03938416602086015291831691840191909152166060820152608001610369565b61040d61059d36600461518d565b612124565b6103856105b0366004614f7a565b60116020526000908152604090205460ff1681565b6105ce60085481565b604051908152602001610369565b6105ce6105ea366004614c53565b60146020526000908152604090205481565b6105ce61060a366004614b49565b600b6020526000908152604090205481565b6105ce61062a3660046152d9565b600091825260166020908152604080842061ffff93909316845291905290205490565b6103e261065b366004614c53565b61213f565b600a546103e2906001600160a01b031681565b61040d610681366004614f7a565b6121b6565b6105ce610694366004614f7a565b61224c565b61040d6122d3565b6017546105059063ffffffff1681565b6106c46106bf366004614b49565b612309565b6040516103699190615337565b6103856106df36600461534a565b601260209081526000928352604080842090915290825290205460ff1681565b6000546001600160a01b03166103e2565b61038561071e366004614cf2565b612373565b6103c26124c1565b61040d610739366004615374565b6124d0565b61035a61074c366004614b49565b6124df565b61045b61075f366004614c53565b612506565b61040d610772366004614f7a565b61272a565b61040d61078536600461539e565b6127a2565b61040d610798366004615419565b6127da565b6105ce60095481565b6103c26107b4366004614c53565b6129b3565b6105ce6107c73660046154f4565b612a9b565b6107df6107da366004614c53565b612ce3565b60405161036994939291906155ca565b6104b46107fd366004614c53565b612e26565b61045b610810366004614f7a565b612f9e565b6105ce610823366004614f7a565b60136020526000908152604090205481565b61040d610843366004615614565b6131d6565b610385610856366004615614565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6105ce61089236600461563e565b6001600160a01b03821660009081526013602090815260408083205483526016825280832061ffff8516845290915290205492915050565b61040d6108d8366004614f7a565b6134ae565b6108f06108eb366004614b49565b613549565b604051610369919061569c565b61040d61090b366004615711565b6135d9565b61040d61091e366004615802565b613960565b600d602052600090815260409020805460018201805461ffff909216929161094a9061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546109769061587a565b80156109c35780601f10610998576101008083540402835291602001916109c3565b820191906000526020600020905b8154815290600101906020018083116109a657829003601f168201915b5050506002909301549192505060ff1683565b60006001600160e01b031982166380ac58cd60e01b1480610a0757506001600160e01b03198216635b5e139f60e01b145b80610a2257506301ffc9a760e01b6001600160e01b03198316145b92915050565b600e60205260009081526040902080546002820154600383018054929361ffff90921692610a559061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a819061587a565b8015610ace5780601f10610aa357610100808354040283529160200191610ace565b820191906000526020600020905b815481529060010190602001808311610ab157829003601f168201915b5050506004840154600585018054949563ffffffff909216949193509150610af59061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b219061587a565b8015610b6e5780601f10610b4357610100808354040283529160200191610b6e565b820191906000526020600020905b815481529060010190602001808311610b5157829003601f168201915b5050506006909301549192505060ff1686565b606060018054610b909061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbc9061587a565b8015610c095780601f10610bde57610100808354040283529160200191610c09565b820191906000526020600020905b815481529060010190602001808311610bec57829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b0316610c915760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b6000610cb88261213f565b9050806001600160a01b0316836001600160a01b03161415610d265760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610c88565b336001600160a01b0382161480610d425750610d428133610856565b610db45760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610c88565b610dbe8383613b55565b505050565b604081015160009015610eae5750604080820151600081815260156020529190912054610ea95781516001600160a01b0316610e4b5760405162461bcd60e51b815260206004820152602160248201527f6e65772075736572496420627574206e6f20646f476f6f6465722070617373656044820152601960fa1b6064820152608401610c88565b6000818152601560208181526040808420858155815180840190925286516001600160a01b0316825293859052919052610e8b916001908101919061491d565b5081516001600160a01b031660009081526013602052604090208190555b610fc9565b81516001600160a01b031615610f41575080516001600160a01b03166000908152601360205260409020548015801590610ef5575060008181526015602052604090205481145b610ea95760405162461bcd60e51b815260206004820152601e60248201527f70726f66696c6520666f7220646f476f6f646572206e6f7420666f756e6400006044820152606401610c88565b602082015115610fc957506020808201516000908152601490915260409020548015801590610f7d575060008181526015602052604090205481145b610fc95760405162461bcd60e51b815260206004820152601f60248201527f70726f66696c6520666f7220656d61696c48617368206e6f7420666f756e64006044820152606401610c88565b81516001600160a01b0381166110135760008281526015602052604081206001018054909190610ffb57610ffb6158b5565b6000918252602090912001546001600160a01b031690505b6001600160a01b0381166110575760405162461bcd60e51b815260206004820152600b60248201526a3737903237a3b7b7b232b960a91b6044820152606401610c88565b6001600160a01b0381166000908152601360205260409020546110be576001600160a01b0381166000818152601360209081526040808320869055858352601582528220600190810180549182018155835291200180546001600160a01b03191690911790555b6020830151158015906110e557506020808401516000908152601490915260409020548214155b1561115d57602080840151600090815260149091526040902054156111455760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610c88565b60208084015160009081526014909152604090208290555b61116683613bc3565b6111a35760405162461bcd60e51b815260206004820152600e60248201526d4661696c6564206120636865636b60901b6044820152606401610c88565b6111b1600780546001019055565b60006111bc60075490565b90506111c88282614264565b60608401516000908152600e602052604081206004015460a08601516111f49163ffffffff16906158e1565b63ffffffff169050826001600160a01b03167fe3f157739acb4b4fca01bf36ba7ed4b2805f0a03b74d7e3a8726e11dbbe682da8387602001518789606001518a608001518b6101000151888d60a001518e60c001518f60e001516040516112649a9998979695949392919061590d565b60405180910390a26000604051806101200160405280848152602001856001600160a01b0316815260200187606001518152602001836001600160401b031681526020018760a0015163ffffffff1681526020018760c001516001600160401b03168152602001876080015163ffffffff1681526020018760e00151815260200187610100015181525090506000600e6000886060015181526020019081526020016000206040518060e0016040529081600082015481526020016001820180548060200260200160405190810160405280929190818152602001828054801561139557602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff168152602001906002019060208260010104928301926001038202915080841161135c5790505b5050509183525050600282015461ffff1660208201526003820180546040909201916113c09061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546113ec9061587a565b80156114395780601f1061140e57610100808354040283529160200191611439565b820191906000526020600020905b81548152906001019060200180831161141c57829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916114669061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546114929061587a565b80156114df5780601f106114b4576101008083540402835291602001916114df565b820191906000526020600020905b8154815290600101906020018083116114c257829003601f168201915b5050509183525050600682015460209091019060ff16600381111561150657611506614bbc565b600381111561151757611517614bbc565b905250600087815260156020908152604080832060039081018054600181810183559186529484902088516006909602019485558784015190850180546001600160a01b039092166001600160a01b031990921691909117905590860151600284015560608601519083018054608088015160a089015160c08a015163ffffffff908116600160a01b0263ffffffff60a01b196001600160401b03938416600160601b02166bffffffffffffffffffffffff60601b1992909416600160401b026bffffffffffffffffffffffff19909516929096169190911792909217919091161791909117905560e08501516004830155610100850151805193945085936116269260058501920190614982565b505050600086815260156020526040812060020180548592906116539084906001600160401b031661597b565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826015600088815260200190815260200160002060020160088282829054906101000a90046001600160401b03166116af919061597b565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826001600160401b0316601660008881526020019081526020016000206000836040015161ffff1661ffff168152602001908152602001600020600082825461171c91906159a6565b92505081905550826001600160401b03166008600082825461173e91906159a6565b909155505060408082015161ffff166000908152600b60205290812080546001600160401b03861692906117739084906159a6565b909155505050505050505050565b3360009081526011602052604090205460ff166117b05760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b03811660009081526013602052604090205480158015906117e5575060008181526015602052604090205481145b6118255760405162461bcd60e51b81526020600482015260116024820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b6044820152606401610c88565b60008381526014602052604090819020829055517f5b39a4331b9eca15106663a0231cbade6977e29a1dc6981fb3b0b085822925289061187a90859085909182526001600160a01b0316602082015260400190565b60405180910390a1505050565b3360009081526011602052604090205460ff166118b65760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b0381166118c957600080fd5b6001600160a01b038116600081815260116020908152604091829020805460ff1916905590519182527fa3b62bc36326052d97ea62d63c3d60308ed4c3ea8ac079dd8499f1e9c4f80c0f91015b60405180910390a150565b6119296149f6565b600082815260146020908152604080832054835260158252808320815160c0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156119a957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161198b575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611b4f5760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190611abe9061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054611aea9061587a565b8015611b375780601f10611b0c57610100808354040283529160200191611b37565b820191906000526020600020905b815481529060010190602001808311611b1a57829003601f168201915b50505050508152505081526020019060010190611a0f565b505050915250508051909150610a225760405162461bcd60e51b81526020600482015260116024820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b6044820152606401610c88565b3360009081526011602052604090205460ff16611bca5760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b038316611bdd57600080fd5b63ffffffff8216611c295760405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a590819dbdbd9081bdc9858db19481a5960521b6044820152606401610c88565b63ffffffff8083166000818152600f602052604090205490911614611c905760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520646f6573206e6f742065786973740000000000006044820152606401610c88565b6001600160a01b038316600090815260126020908152604080832063ffffffff861684528252808320805460ff1916851515179055600f9091529081902090517fcc83b74ea9bfc3ed64e496495c217e1d4070b1cd65673f8fc8b2c085a1d231219161187a9186918691600191909101908690615a62565b611d1233826143a6565b611d2e5760405162461bcd60e51b8152600401610c8890615aa5565b610dbe838383614428565b3360009081526011602052604090205460ff16611d685760405162461bcd60e51b8152600401610c88906159be565b805161ffff16611d8a5760405162461bcd60e51b8152600401610c8890615af6565b600081602001515111611daf5760405162461bcd60e51b8152600401610c8890615b39565b805161ffff9081166000908152600c602090815260409091208351815461ffff19169316929092178255808301518051849392611df3926001850192910190614982565b50604082015160028201805460ff19166001836003811115611e1757611e17614bbc565b0217905550905050806000015161ffff167f4fcd383604332b394161a254d359c73296253b0e25354b61f8a192f2ca90f1c082602001518360400151604051611e61929190615b60565b60405180910390a250565b6001600160a01b038116600090815260136020908152604080832054835260158252808320600301805482518185028101850190935280835260609492939192909184015b82821015611ff15760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190611f609061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054611f8c9061587a565b8015611fd95780601f10611fae57610100808354040283529160200191611fd9565b820191906000526020600020905b815481529060010190602001808311611fbc57829003601f168201915b50505050508152505081526020019060010190611eb1565b505050509050919050565b3360009081526011602052604090205460ff1661202b5760405162461bcd60e51b8152600401610c88906159be565b805161ffff1661204d5760405162461bcd60e51b8152600401610c8890615b82565b6000816020015151116120725760405162461bcd60e51b8152600401610c8890615b39565b805161ffff9081166000908152600d602090815260409091208351815461ffff191693169290921782558083015180518493926120b6926001850192910190614982565b50604082015160028201805460ff191660018360038111156120da576120da614bbc565b0217905550905050806000015161ffff167fa64371df3e4e587f97e094b4e6cb2dd8780392180388ec6f7c2ac098a8452feb82602001518360400151604051611e61929190615b60565b610dbe838383604051806020016040528060008152506127a2565b6000818152600360205260408120546001600160a01b031680610a225760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610c88565b3360009081526011602052604090205460ff166121e55760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b0381166121f857600080fd5b6001600160a01b038116600081815260116020908152604091829020805460ff1916600117905590519182527f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e3399101611916565b60006001600160a01b0382166122b75760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610c88565b506001600160a01b031660009081526004602052604090205490565b6000546001600160a01b031633146122fd5760405162461bcd60e51b8152600401610c8890615bc9565b61230760006145c8565b565b61ffff81166000908152600f602090815260409182902060040180548351818402810184019094528084526060939283018282801561236757602002820191906000526020600020905b815481526020019060010190808311612353575b50505050509050919050565b600a546000906001600160a01b031633146123d05760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206973206e6f7420676f6f64506f696e747342726964676500006044820152606401610c88565b6001600160a01b03831660009081526013602090815260408083205483526015909152812060020180548492906124119084906001600160401b0316615bfe565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550816009600082825461244791906159a6565b90915550506001600160a01b038316600081815260136020908152604080832054835260158252918290206002015482518681526001600160401b03909116918101919091527f9ce3299c5bcff8db5ce8560d5c76cf01d7bc08936eca4f80b2506502560a8944910160405180910390a250600192915050565b606060028054610b909061587a565b6124db338383614618565b5050565b600c602052600090815260409020805460018201805461ffff909216929161094a9061587a565b61250e6149f6565b6000828152601560209081526040808320815160c08101835281548152600182018054845181870281018701909552808552919492938584019390929083018282801561258457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612566575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611b4f5760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e0820152600582018054919291610100840191906126999061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546126c59061587a565b80156127125780601f106126e757610100808354040283529160200191612712565b820191906000526020600020905b8154815290600101906020018083116126f557829003601f168201915b505050505081525050815260200190600101906125ea565b6000546001600160a01b031633146127545760405162461bcd60e51b8152600401610c8890615bc9565b600a80546001600160a01b0319166001600160a01b0383169081179091556040519081527f02281d9b30520c4846a2d45ccccf51fb691926264690903b8a697706dd5f988b90602001611916565b6127ac33836143a6565b6127c85760405162461bcd60e51b8152600401610c8890615aa5565b6127d4848484846146e7565b50505050565b3360009081526011602052604090205460ff166128095760405162461bcd60e51b8152600401610c88906159be565b60008263ffffffff161161282f5760405162461bcd60e51b8152600401610c8890615c26565b60008151116128505760405162461bcd60e51b8152600401610c8890615b39565b63ffffffff8083166000818152600f6020526040902054909116146128af5760405162461bcd60e51b815260206004820152601560248201527419dbdbd9081bdc9858db19481b9bdd08199bdd5b99605a1b6044820152606401610c88565b6010600f60008463ffffffff1681526020019081526020016000206001016040516128da9190615c6b565b908152604051908190036020018120805463ffffffff191690558290601090612904908490615cdd565b9081526040805160209281900383019020805463ffffffff191663ffffffff9485161790559184166000908152600f825291909120825161294e9260019290920191840190614982565b5063ffffffff82166000818152600f602052604090819020600381015491517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e56926129a7928692600282019260ff169160040190615d2e565b60405180910390a25050565b6000818152600360205260409020546060906001600160a01b0316612a325760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610c88565b6000612a4960408051602081019091526000815290565b90506000815111612a695760405180602001604052806000815250612a94565b80612a738461471a565b604051602001612a84929190615d74565b6040516020818303038152906040525b9392505050565b3360009081526011602052604081205460ff16612aca5760405162461bcd60e51b8152600401610c88906159be565b600082602001515111612aef5760405162461bcd60e51b8152600401610c8890615b39565b60108260200151604051612b039190615cdd565b9081526040519081900360200190205463ffffffff1615612b665760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520616c7265616479206578697374730000000000006044820152606401610c88565b60178054600090612b7c9063ffffffff16615d9a565b825463ffffffff9182166101009390930a83810290830219909116179092558084526000908152600f6020908152604090912084518154931663ffffffff19909316929092178255808401518051859392612bde926001850192910190614982565b5060408201518051612bfa916002840191602090910190614982565b5060608201518160030160006101000a81548160ff02191690836003811115612c2557612c25614bbc565b021790555060808201518051612c45916004840191602090910190614a2a565b50905050816000015160108360200151604051612c629190615cdd565b9081526040805160209281900383018120805463ffffffff191663ffffffff958616179055855192860151918601516060870151608088015194909516947fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5694612ccc9493615dbe565b60405180910390a250805163ffffffff165b919050565b600f602052600090815260409020805460018201805463ffffffff9092169291612d0c9061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054612d389061587a565b8015612d855780601f10612d5a57610100808354040283529160200191612d85565b820191906000526020600020905b815481529060010190602001808311612d6857829003601f168201915b505050505090806002018054612d9a9061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054612dc69061587a565b8015612e135780601f10612de857610100808354040283529160200191612e13565b820191906000526020600020905b815481529060010190602001808311612df657829003601f168201915b5050506003909301549192505060ff1684565b606060156000838152602001908152602001600020600301805480602002602001604051908101604052809291908181526020016000905b82821015611ff15760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190612f0d9061587a565b80601f0160208091040260200160405190810160405280929190818152602001828054612f399061587a565b8015612f865780601f10612f5b57610100808354040283529160200191612f86565b820191906000526020600020905b815481529060010190602001808311612f6957829003601f168201915b50505050508152505081526020019060010190612e5e565b612fa66149f6565b6001600160a01b038216600090815260136020908152604080832054835260158252808320815160c08101835281548152600182018054845181870281018701909552808552919492938584019390929083018282801561303057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311613012575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611b4f5760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e0820152600582018054919291610100840191906131459061587a565b80601f01602080910402602001604051908101604052809291908181526020018280546131719061587a565b80156131be5780601f10613193576101008083540402835291602001916131be565b820191906000526020600020905b8154815290600101906020018083116131a157829003601f168201915b50505050508152505081526020019060010190613096565b3360009081526011602052604090205460ff166132055760405162461bcd60e51b8152600401610c88906159be565b6001600160a01b0380831660009081526013602081815260408084205484526015808352818520958716855292825280842054845291905290208054825414156132805760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610c88565b60028082015490830180546001600160401b03928316926000916132a69185911661597b565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160089054906101000a90046001600160401b03168260020160088282829054906101000a90046001600160401b0316613307919061597b565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160109054906101000a90046001600160401b03168260020160108282829054906101000a90046001600160401b0316613368919061597b565b92506101000a8154816001600160401b0302191690836001600160401b0316021790555060005b600182015481101561344457826001018260010182815481106133b4576133b46158b5565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b039092169190911790558454918401805460139291908590811061340d5761340d6158b5565b60009182526020808320909101546001600160a01b031683528201929092526040019020558061343c81615e04565b91505061338f565b506002810180546001600160c01b0319169055613465600182016000614a64565b604080516001600160a01b038087168252851660208201527f239567be74fe3e80a3e23e994c3234310617523efa3bdb81b591bda34e070368910160405180910390a150505050565b6000546001600160a01b031633146134d85760405162461bcd60e51b8152600401610c8890615bc9565b6001600160a01b03811661353d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610c88565b613546816145c8565b50565b61ffff81166000908152600e602090815260409182902060010180548351818402810184019094528084526060939283018282801561236757602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411613596575094979650505050505050565b3360009081526011602052604090205460ff166136085760405162461bcd60e51b8152600401610c88906159be565b80516136665760405162461bcd60e51b815260206004820152602760248201527f676f6f64206163746976697479206964206d75737420626520677265617465726044820152660207468616e20360cc1b6064820152608401610c88565b60005b8160200151518110156137625760008260200151828151811061368e5761368e6158b5565b602002602001015161ffff16116136b75760405162461bcd60e51b8152600401610c8890615af6565b6000600c6000846020015184815181106136d3576136d36158b5565b60209081029190910181015161ffff1682528101919091526040016000206002015460ff16600381111561370957613709614bbc565b146137505760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610c88565b8061375a81615e04565b915050613669565b506000816040015161ffff161161378b5760405162461bcd60e51b8152600401610c8890615b82565b600060408083015161ffff166000908152600d602052206002015460ff1660038111156137ba576137ba614bbc565b146138075760405162461bcd60e51b815260206004820152601b60248201527f676f6f642063617465676f7279206973206e6f742061637469766500000000006044820152606401610c88565b60008160600151511161382c5760405162461bcd60e51b8152600401610c8890615b39565b80516000908152600e6020908152604090912082518155818301518051849361385c926001850192910190614a82565b50604082015160028201805461ffff191661ffff90921691909117905560608201518051613894916003840191602090910190614982565b50608082015160048201805463ffffffff191663ffffffff90921691909117905560a082015180516138d0916005840191602090910190614982565b5060c082015160068201805460ff191660018360038111156138f4576138f4614bbc565b0217905550905050806040015161ffff1681600001517f27b90160eaa4ab2aa06fabc8c7f0a5acd0041ec04a3851eb1b5881c94ee37d128360200151846060015185608001518660a001518760c00151604051613955959493929190615e1f565b60405180910390a350565b3360009081526011602052604090205460ff1661398f5760405162461bcd60e51b8152600401610c88906159be565b60008463ffffffff16116139b55760405162461bcd60e51b8152600401610c8890615c26565b60008351116139f55760405162461bcd60e51b815260206004820152600c60248201526b75726920697320656d70747960a01b6044820152606401610c88565b63ffffffff8085166000818152600f602052604090205490911614613a545760405162461bcd60e51b815260206004820152601560248201527419dbdbd9081bdc9858db19481b9bdd08199bdd5b99605a1b6044820152606401610c88565b63ffffffff84166000908152600f602090815260409091208451613a8092600290920191860190614982565b5063ffffffff84166000908152600f6020526040902060039081018054849260ff19909116906001908490811115613aba57613aba614bbc565b021790555063ffffffff84166000908152600f602090815260409091208251613aeb92600490920191840190614a2a565b5063ffffffff84166000818152600f602052604090819020600381015491517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5692613b47926001810192600282019260ff169160040190615e7e565b60405180910390a250505050565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613b8a8261213f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60608101516000908152600e602052604081208054613c245760405162461bcd60e51b815260206004820152601c60248201527f676f6f6420616374697669747920646f6573206e6f74206578697374000000006044820152606401610c88565b6000600682015460ff166003811115613c3f57613c3f614bbc565b14613c8c5760405162461bcd60e51b815260206004820152601b60248201527f676f6f64206163746976697479206973206e6f742061637469766500000000006044820152606401610c88565b60005b6001820154811015613ddb576000600c6000846001018481548110613cb657613cb66158b5565b6000918252602080832060108304015461ffff6002600f90941684026101000a90910416845283019390935260409091019020015460ff166003811115613cff57613cff614bbc565b14613d465760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610c88565b816001018181548110613d5b57613d5b6158b5565b60009182526020909120601082040154600f9091166002026101000a900461ffff16613dc95760405162461bcd60e51b815260206004820152601860248201527f676f6f64207479706520646f6573206e6f7420657869737400000000000000006044820152606401610c88565b80613dd381615e04565b915050613c8f565b50600060028083015461ffff166000908152600d60205260409020015460ff166003811115613e0c57613e0c614bbc565b14613e595760405162461bcd60e51b815260206004820152601b60248201527f676f6f642063617465676f7279206973206e6f742061637469766500000000006044820152606401610c88565b608083015163ffffffff9081166000908152600f602052604090205416613ec25760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520646f6573206e6f742065786973740000000000006044820152606401610c88565b608083015163ffffffff166000908152600f6020526040812060039081015460ff1690811115613ef457613ef4614bbc565b14613f415760405162461bcd60e51b815260206004820152601960248201527f676f6f64206f7261636c65206973206e6f7420616374697665000000000000006044820152606401610c88565b3360009081526011602052604090205460ff1680613f835750336000908152601260209081526040808320608087015163ffffffff16845290915290205460ff165b613fc85760405162461bcd60e51b81526020600482015260166024820152751cd95b99195c881a5cc81b9bdd08185c1c1c9bdd995960521b6044820152606401610c88565b6000805b608085015163ffffffff166000908152600f602052604090206004015481101561404b57608085015163ffffffff166000908152600f6020526040902060040180548290811061401e5761401e6158b5565b90600052602060002001548560600151141561403957600191505b8061404381615e04565b915050613fcc565b50806140ad5760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610c88565b620f42408460a0015163ffffffff1611156140fb5760405162461bcd60e51b815260206004820152600e60248201526d756e697473206f766572666c6f7760901b6044820152606401610c88565b60008460a0015163ffffffff16116141555760405162461bcd60e51b815260206004820152601c60248201527f756e697473206d7573742062652067726561746572207468616e2030000000006044820152606401610c88565b6000846101000151511161419f5760405162461bcd60e51b815260206004820152601160248201527070726f6f6655524c20697320656d70747960781b6044820152606401610c88565b60008460c001516001600160401b0316116141fc5760405162461bcd60e51b815260206004820181905260248201527f74696d657374616d70206d7573742062652067726561746572207468616e20306044820152606401610c88565b60008460e001511161425a5760405162461bcd60e51b815260206004820152602160248201527f65787465726e616c4964206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608401610c88565b5060019392505050565b6001600160a01b0382166142ba5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610c88565b6000818152600360205260409020546001600160a01b03161561431f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610c88565b6001600160a01b03821660009081526004602052604081208054600192906143489084906159a6565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600360205260408120546001600160a01b031661441f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610c88565b50600092915050565b826001600160a01b031661443b8261213f565b6001600160a01b0316146144a35760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610c88565b6001600160a01b0382166145055760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610c88565b614510600082613b55565b6001600160a01b0383166000908152600460205260408120805460019290614539908490615e91565b90915550506001600160a01b03821660009081526004602052604081208054600192906145679084906159a6565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316141561467a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610c88565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6146f2848484614428565b6146fe8484848461481f565b6127d45760405162461bcd60e51b8152600401610c8890615ea8565b60608161473e5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115614768578061475281615e04565b91506147619050600a83615f10565b9150614742565b6000816001600160401b0381111561478257614782614d1c565b6040519080825280601f01601f1916602001820160405280156147ac576020820181803683370190505b5090505b8415614817576147c1600183615e91565b91506147ce600a86615f24565b6147d99060306159a6565b60f81b8183815181106147ee576147ee6158b5565b60200101906001600160f81b031916908160001a905350614810600a86615f10565b94506147b0565b949350505050565b60006001600160a01b0384163b1561491257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290614863903390899088908890600401615f38565b6020604051808303816000875af192505050801561489e575060408051601f3d908101601f1916820190925261489b91810190615f6b565b60015b6148f8573d8080156148cc576040519150601f19603f3d011682016040523d82523d6000602084013e6148d1565b606091505b5080516148f05760405162461bcd60e51b8152600401610c8890615ea8565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050614817565b506001949350505050565b828054828255906000526020600020908101928215614972579160200282015b8281111561497257825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061493d565b5061497e929150614b22565b5090565b82805461498e9061587a565b90600052602060002090601f0160209004810192826149b05760008555614972565b82601f106149c957805160ff1916838001178555614972565b82800160010185558215614972579182015b828111156149725782518255916020019190600101906149db565b6040805160c0810182526000808252606060208301819052928201819052828201819052608082015260a081019190915290565b82805482825590600052602060002090810192821561497257916020028201828111156149725782518255916020019190600101906149db565b50805460008255906000526020600020908101906135469190614b22565b82805482825590600052602060002090600f016010900481019282156149725791602002820160005b83821115614aeb57835183826101000a81548161ffff021916908361ffff1602179055509260200192600201602081600101049283019260010302614aab565b8015614b195782816101000a81549061ffff0219169055600201602081600101049283019260010302614aeb565b505061497e9291505b5b8082111561497e5760008155600101614b23565b803561ffff81168114612cde57600080fd5b600060208284031215614b5b57600080fd5b612a9482614b37565b60005b83811015614b7f578181015183820152602001614b67565b838111156127d45750506000910152565b60008151808452614ba8816020860160208601614b64565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b60048110614bf057634e487b7160e01b600052602160045260246000fd5b9052565b61ffff84168152606060208201526000614c116060830185614b90565b90506148176040830184614bd2565b6001600160e01b03198116811461354657600080fd5b600060208284031215614c4857600080fd5b8135612a9481614c20565b600060208284031215614c6557600080fd5b5035919050565b86815261ffff8616602082015260c060408201526000614c8f60c0830187614b90565b63ffffffff861660608401528281036080840152614cad8186614b90565b915050614cbd60a0830184614bd2565b979650505050505050565b602081526000612a946020830184614b90565b80356001600160a01b0381168114612cde57600080fd5b60008060408385031215614d0557600080fd5b614d0e83614cdb565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715614d5557614d55614d1c565b60405290565b60405160a081016001600160401b0381118282101715614d5557614d55614d1c565b60405160e081016001600160401b0381118282101715614d5557614d55614d1c565b604051601f8201601f191681016001600160401b0381118282101715614dc757614dc7614d1c565b604052919050565b803563ffffffff81168114612cde57600080fd5b80356001600160401b0381168114612cde57600080fd5b60006001600160401b03831115614e1357614e13614d1c565b614e26601f8401601f1916602001614d9f565b9050828152838383011115614e3a57600080fd5b828260208301376000602084830101529392505050565b600082601f830112614e6257600080fd5b612a9483833560208501614dfa565b600060208284031215614e8357600080fd5b81356001600160401b0380821115614e9a57600080fd5b908301906101208286031215614eaf57600080fd5b614eb7614d32565b614ec083614cdb565b8152602083013560208201526040830135604082015260608301356060820152614eec60808401614dcf565b6080820152614efd60a08401614dcf565b60a0820152614f0e60c08401614de3565b60c082015260e083013560e08201526101008084013583811115614f3157600080fd5b614f3d88828701614e51565b918301919091525095945050505050565b60008060408385031215614f6157600080fd5b82359150614f7160208401614cdb565b90509250929050565b600060208284031215614f8c57600080fd5b612a9482614cdb565b600081518084526020808501808196508360051b8101915082860160005b8581101561507557828403895281516101208151865286820151614fe1888801826001600160a01b03169052565b50604082810151908701526060808301516001600160401b03811682890152505060808281015163ffffffff811688830152505060a0828101516001600160401b03811688830152505060c08281015163ffffffff811688830152505060e082810151908701526101009182015191860181905261506181870183614b90565b9a87019a9550505090840190600101614fb3565b5091979650505050505050565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156150da5783516001600160a01b031682529284019260019290920191908401906150b1565b5060408701516001600160401b0381166060880152935060608701516001600160401b0381166080880152935060808701516001600160401b03811660a0880152935060a0870151868203601f190160c08801529350614cbd8185614f95565b80358015158114612cde57600080fd5b60008060006060848603121561515f57600080fd5b61516884614cdb565b925061517660208501614dcf565b91506151846040850161513a565b90509250925092565b6000806000606084860312156151a257600080fd5b6151ab84614cdb565b92506151b960208501614cdb565b9150604084013590509250925092565b803560048110612cde57600080fd5b6000606082840312156151ea57600080fd5b604051606081016001600160401b03828210818311171561520d5761520d614d1c565b8160405282935061521d85614b37565b8352602085013591508082111561523357600080fd5b5061524085828601614e51565b602083015250615252604084016151c9565b60408201525092915050565b60006020828403121561527057600080fd5b81356001600160401b0381111561528657600080fd5b614817848285016151d8565b602081526000612a946020830184614f95565b6000602082840312156152b757600080fd5b81356001600160401b038111156152cd57600080fd5b61481784828501614e51565b600080604083850312156152ec57600080fd5b82359150614f7160208401614b37565b600081518084526020808501945080840160005b8381101561532c57815187529582019590820190600101615310565b509495945050505050565b602081526000612a9460208301846152fc565b6000806040838503121561535d57600080fd5b61536683614cdb565b9150614f7160208401614dcf565b6000806040838503121561538757600080fd5b61539083614cdb565b9150614f716020840161513a565b600080600080608085870312156153b457600080fd5b6153bd85614cdb565b93506153cb60208601614cdb565b92506040850135915060608501356001600160401b038111156153ed57600080fd5b8501601f810187136153fe57600080fd5b61540d87823560208401614dfa565b91505092959194509250565b6000806040838503121561542c57600080fd5b61543583614dcf565b915060208301356001600160401b0381111561545057600080fd5b61545c85828601614e51565b9150509250929050565b60006001600160401b0382111561547f5761547f614d1c565b5060051b60200190565b600082601f83011261549a57600080fd5b813560206154af6154aa83615466565b614d9f565b82815260059290921b840181019181810190868411156154ce57600080fd5b8286015b848110156154e957803583529183019183016154d2565b509695505050505050565b60006020828403121561550657600080fd5b81356001600160401b038082111561551d57600080fd5b9083019060a0828603121561553157600080fd5b615539614d5b565b61554283614dcf565b815260208301358281111561555657600080fd5b61556287828601614e51565b60208301525060408301358281111561557a57600080fd5b61558687828601614e51565b604083015250615598606084016151c9565b60608201526080830135828111156155af57600080fd5b6155bb87828601615489565b60808301525095945050505050565b63ffffffff851681526080602082015260006155e96080830186614b90565b82810360408401526155fb8186614b90565b91505061560b6060830184614bd2565b95945050505050565b6000806040838503121561562757600080fd5b61563083614cdb565b9150614f7160208401614cdb565b6000806040838503121561565157600080fd5b61565a83614cdb565b9150614f7160208401614b37565b600081518084526020808501945080840160005b8381101561532c57815161ffff168752958201959082019060010161567c565b602081526000612a946020830184615668565b600082601f8301126156c057600080fd5b813560206156d06154aa83615466565b82815260059290921b840181019181810190868411156156ef57600080fd5b8286015b848110156154e95761570481614b37565b83529183019183016156f3565b60006020828403121561572357600080fd5b81356001600160401b038082111561573a57600080fd5b9083019060e0828603121561574e57600080fd5b615756614d7d565b8235815260208301358281111561576c57600080fd5b615778878286016156af565b60208301525061578a60408401614b37565b60408201526060830135828111156157a157600080fd5b6157ad87828601614e51565b6060830152506157bf60808401614dcf565b608082015260a0830135828111156157d657600080fd5b6157e287828601614e51565b60a0830152506157f460c084016151c9565b60c082015295945050505050565b6000806000806080858703121561581857600080fd5b61582185614dcf565b935060208501356001600160401b038082111561583d57600080fd5b61584988838901614e51565b9450615857604088016151c9565b9350606087013591508082111561586d57600080fd5b5061540d87828801615489565b600181811c9082168061588e57607f821691505b602082108114156158af57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600063ffffffff80831681851681830481118215151615615904576159046158cb565b02949350505050565b60006101408c83528b60208401528a604084015289606084015263ffffffff808a1660808501528160a08501526159468285018a614b90565b6001600160401b0398891660c0860152961660e084015250509190931661010082015261012001919091529695505050505050565b60006001600160401b0380831681851680830382111561599d5761599d6158cb565b01949350505050565b600082198211156159b9576159b96158cb565b500190565b60208082526013908201527229b2b73232b91034b9903737ba1030b236b4b760691b604082015260600190565b600081546159f88161587a565b808552602060018381168015615a155760018114615a2957615a57565b60ff19851688840152604088019550615a57565b866000528260002060005b85811015615a4f5781548a8201860152908301908401615a34565b890184019650505b505050505092915050565b6001600160a01b038516815263ffffffff84166020820152608060408201819052600090615a92908301856159eb565b9050821515606083015295945050505050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60208082526023908201527f676f6f642074797065206964206d75737420626520677265617465722074686160408201526206e20360ec1b606082015260800190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b604081526000615b736040830185614b90565b9050612a946020830184614bd2565b60208082526027908201527f676f6f642063617465676f7279206964206d75737420626520677265617465726040820152660207468616e20360cc1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006001600160401b0383811690831681811015615c1e57615c1e6158cb565b039392505050565b60208082526025908201527f676f6f64206f7261636c65206964206d75737420626520677265617465722074604082015264068616e20360dc1b606082015260800190565b6000808354615c798161587a565b60018281168015615c915760018114615ca257615cd1565b60ff19841687528287019450615cd1565b8760005260208060002060005b85811015615cc85781548a820152908401908201615caf565b50505082870194505b50929695505050505050565b60008251615cef818460208701614b64565b9190910192915050565b6000815480845260208085019450836000528060002060005b8381101561532c57815487529582019560019182019101615d12565b608081526000615d416080830187614b90565b8281036020840152615d5381876159eb565b9050615d626040840186614bd2565b8281036060840152614cbd8185615cf9565b60008351615d86818460208801614b64565b83519083019061599d818360208801614b64565b600063ffffffff80831681811415615db457615db46158cb565b6001019392505050565b608081526000615dd16080830187614b90565b8281036020840152615de38187614b90565b9050615df26040840186614bd2565b8281036060840152614cbd81856152fc565b6000600019821415615e1857615e186158cb565b5060010190565b60a081526000615e3260a0830188615668565b8281036020840152615e448188614b90565b905063ffffffff861660408401528281036060840152615e648186614b90565b915050615e746080830184614bd2565b9695505050505050565b608081526000615d4160808301876159eb565b600082821015615ea357615ea36158cb565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b600082615f1f57615f1f615efa565b500490565b600082615f3357615f33615efa565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090615e7490830184614b90565b600060208284031215615f7d57600080fd5b8151612a9481614c2056fea2646970667358221220c62fa53ddcf8acccaba9f362bc6a950faf69beb502e327d1e8146d429b9e466264736f6c634300080b0033',
  linkReferences: {},
  deployedLinkReferences: {},
};
