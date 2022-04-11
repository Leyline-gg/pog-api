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
          name: '_name',
          type: 'string',
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
    '0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020016a141c9bdbd993d991dbdbd960aa1b81525060405180604001604052806003815260200162504f4760e81b8152506200006c62000066620000c760201b60201c565b620000cb565b8151620000819060019060208501906200011b565b508051620000979060029060208401906200011b565b50506017805463ffffffff1916905550336000908152601160205260409020805460ff19166001179055620001fe565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200012990620001c1565b90600052602060002090601f0160209004810192826200014d576000855562000198565b82601f106200016857805160ff191683800117855562000198565b8280016001018555821562000198579182015b82811115620001985782518255916020019190600101906200017b565b50620001a6929150620001aa565b5090565b5b80821115620001a65760008155600101620001ab565b600181811c90821680620001d657607f821691505b60208210811415620001f857634e487b7160e01b600052602260045260246000fd5b50919050565b615ef1806200020e6000396000f3fe608060405234801561001057600080fd5b506004361061030c5760003560e01c8063715018a61161019d578063bc2dfced116100e9578063e272578e116100a2578063f145c3fa1161007c578063f145c3fa1461081d578063f2fde38b14610863578063f7a8d7a214610876578063fe0f2f961461089657600080fd5b8063e272578e146107ae578063e95d158b146107ce578063e985e9c5146107e157600080fd5b8063bc2dfced14610736578063c87b56dd1461073f578063cbccf20a14610752578063cf3b7d9014610765578063d33e515014610788578063d69167e51461079b57600080fd5b806395d89b4111610156578063aaa758b111610130578063aaa758b1146106ea578063aced36ce146106fd578063b0351dc414610710578063b88d4fde1461072357600080fd5b806395d89b41146106bc578063a22cb465146106c4578063aa792cb3146106d757600080fd5b8063715018a61461063257806372f0d7ac1461063a5780637a04a4191461064a5780638c3080fa1461066a5780638da5cb5b14610698578063949d0cae146106a957600080fd5b80632b6cef2e1161025c57806347f6acf1116102155780636352211e116101ef5780636352211e146105e6578063696a16cb146105f9578063704802751461060c57806370a082311461061f57600080fd5b806347f6acf11461058f5780634bf25ae1146105a65780635dbdf4d8146105c657600080fd5b80632b6cef2e1461046b57806331f1f9331461048b578063392b76331461049e5780633b093ddc146104e457806342842e0e14610559578063429b62e51461056c57600080fd5b80630fe31648116102c95780631fab60bb116102a35780631fab60bb146104125780631fb4f1a01461043257806323b872dd1461044557806328d4b63f1461045857600080fd5b80630fe31648146103d957806316feb0d0146103ec5780631785f53c146103ff57600080fd5b806301b844481461031157806301ffc9a71461033c578063056a305c1461035f57806306fdde0314610384578063081812fc14610399578063095ea7b3146103c4575b600080fd5b61032461031f366004614aa7565b6108a9565b60405161033393929190614b52565b60405180910390f35b61034f61034a366004614b94565b61095c565b6040519015158152602001610333565b61037261036d366004614bb1565b6109ae565b60405161033396959493929190614bca565b61038c610b07565b6040516103339190614c26565b6103ac6103a7366004614bb1565b610b99565b6040516001600160a01b039091168152602001610333565b6103d76103d2366004614c50565b610c33565b005b6103d76103e7366004614dcf565b610d49565b6103d76103fa366004614eac565b61177b565b6103d761040d366004614ed8565b611811565b610425610420366004614bb1565b611874565b6040516103339190614fe0565b6103d76104403660046150a8565b611aca565b6103d76104533660046150eb565b611bfc565b6103d76104663660046151bc565b611c2d565b61047e610479366004614ed8565b611d60565b60405161033391906151f0565b6103d76104993660046151bc565b611ef0565b6104cf6104ac366004615203565b805160208183018101805160108252928201919093012091525463ffffffff1681565b60405163ffffffff9091168152602001610333565b61052a6104f2366004614bb1565b601560205260009081526040902080546002909101546001600160401b0380821691600160401b8104821691600160801b9091041684565b604080519485526001600160401b03938416602086015291831691840191909152166060820152608001610333565b6103d76105673660046150eb565b612018565b61034f61057a366004614ed8565b60116020526000908152604090205460ff1681565b61059860085481565b604051908152602001610333565b6105986105b4366004614bb1565b60146020526000908152604090205481565b6105986105d4366004614aa7565b600b6020526000908152604090205481565b6103ac6105f4366004614bb1565b612033565b600a546103ac906001600160a01b031681565b6103d761061a366004614ed8565b6120aa565b61059861062d366004614ed8565b612110565b6103d7612197565b6017546104cf9063ffffffff1681565b61065d610658366004615237565b6121cd565b604051610333919061528d565b61034f610678366004615312565b601260209081526000928352604080842090915290825290205460ff1681565b6000546001600160a01b03166103ac565b61034f6106b7366004614c50565b6123bb565b61038c612509565b6103d76106d236600461533c565b612518565b6103246106e5366004614aa7565b612527565b6104256106f8366004614bb1565b61254e565b6103d761070b3660046153f4565b612772565b6103d761071e366004614ed8565b612a34565b6103d761073136600461549d565b612ab2565b61059860095481565b61038c61074d366004614bb1565b612aea565b610598610760366004615518565b612bd2565b610778610773366004614bb1565b612e13565b60405161033394939291906155ee565b61047e610796366004614bb1565b612f56565b6104256107a9366004614ed8565b6130ce565b6105986107bc366004614ed8565b60136020526000908152604090205481565b6103d76107dc36600461562f565b613306565b61034f6107ef36600461562f565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b61059861082b366004615659565b6001600160a01b03821660009081526013602090815260408083205483526016825280832061ffff8516845290915290205492915050565b6103d7610871366004614ed8565b61361a565b610889610884366004614aa7565b6136b5565b60405161033391906156b7565b6103d76108a436600461572c565b613747565b600d602052600090815260409020805460018201805461ffff90921692916108d09061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546108fc9061581d565b80156109495780601f1061091e57610100808354040283529160200191610949565b820191906000526020600020905b81548152906001019060200180831161092c57829003601f168201915b5050506002909301549192505060ff1683565b60006001600160e01b031982166380ac58cd60e01b148061098d57506001600160e01b03198216635b5e139f60e01b145b806109a857506301ffc9a760e01b6001600160e01b03198316145b92915050565b600e60205260009081526040902080546002820154600383018054929361ffff909216926109db9061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a079061581d565b8015610a545780601f10610a2957610100808354040283529160200191610a54565b820191906000526020600020905b815481529060010190602001808311610a3757829003601f168201915b5050506004840154600585018054949563ffffffff909216949193509150610a7b9061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa79061581d565b8015610af45780601f10610ac957610100808354040283529160200191610af4565b820191906000526020600020905b815481529060010190602001808311610ad757829003601f168201915b5050506006909301549192505060ff1686565b606060018054610b169061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b429061581d565b8015610b8f5780601f10610b6457610100808354040283529160200191610b8f565b820191906000526020600020905b815481529060010190602001808311610b7257829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b0316610c175760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b6000610c3e82612033565b9050806001600160a01b0316836001600160a01b03161415610cac5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610c0e565b336001600160a01b0382161480610cc85750610cc881336107ef565b610d3a5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610c0e565b610d448383613ace565b505050565b604081015160009015610ea85750604080820151600081815260156020529190912054610ea35781516001600160a01b031660009081526013602052604090205415610daf575080516001600160a01b0316600090815260136020526040902054610fc3565b60208083015160009081526014909152604090205415610de45750602080820151600090815260149091526040902054610fc3565b81516001600160a01b0316610e455760405162461bcd60e51b815260206004820152602160248201527f6e65772075736572496420627574206e6f20646f476f6f6465722070617373656044820152601960fa1b6064820152608401610c0e565b6000818152601560208181526040808420858155815180840190925286516001600160a01b0316825293859052919052610e859160019081019190614835565b5081516001600160a01b031660009081526013602052604090208190555b610fc3565b81516001600160a01b031615610f3b575080516001600160a01b03166000908152601360205260409020548015801590610eef575060008181526015602052604090205481145b610ea35760405162461bcd60e51b815260206004820152601e60248201527f70726f66696c6520666f7220646f476f6f646572206e6f7420666f756e6400006044820152606401610c0e565b602082015115610fc357506020808201516000908152601490915260409020548015801590610f77575060008181526015602052604090205481145b610fc35760405162461bcd60e51b815260206004820152601f60248201527f70726f66696c6520666f7220656d61696c48617368206e6f7420666f756e64006044820152606401610c0e565b81516001600160a01b03811661100d5760008281526015602052604081206001018054909190610ff557610ff5615858565b6000918252602090912001546001600160a01b031690505b6001600160a01b0381166110515760405162461bcd60e51b815260206004820152600b60248201526a3737903237a3b7b7b232b960a91b6044820152606401610c0e565b6001600160a01b0381166000908152601360205260409020546110b8576001600160a01b0381166000818152601360209081526040808320869055858352601582528220600190810180549182018155835291200180546001600160a01b03191690911790555b6020830151158015906110df57506020808401516000908152601490915260409020548214155b15611157576020808401516000908152601490915260409020541561113f5760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610c0e565b60208084015160009081526014909152604090208290555b61116083613b3c565b61119d5760405162461bcd60e51b815260206004820152600e60248201526d4661696c6564206120636865636b60901b6044820152606401610c0e565b6111ab600780546001019055565b60006111b660075490565b90506111c28282614180565b60608401516000908152600e602052604081206004015460a08601516111ee9163ffffffff1690615884565b63ffffffff169050826001600160a01b03167fe3f157739acb4b4fca01bf36ba7ed4b2805f0a03b74d7e3a8726e11dbbe682da8387602001518789606001518a608001518b6101000151888d60a001518e60c001518f60e0015160405161125e9a999897969594939291906158b0565b60405180910390a26000604051806101200160405280848152602001856001600160a01b0316815260200187606001518152602001836001600160401b031681526020018760a0015163ffffffff1681526020018760c001516001600160401b03168152602001876080015163ffffffff1681526020018760e00151815260200187610100015181525090506000600e6000886060015181526020019081526020016000206040518060e0016040529081600082015481526020016001820180548060200260200160405190810160405280929190818152602001828054801561138f57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116113565790505b5050509183525050600282015461ffff1660208201526003820180546040909201916113ba9061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546113e69061581d565b80156114335780601f1061140857610100808354040283529160200191611433565b820191906000526020600020905b81548152906001019060200180831161141657829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916114609061581d565b80601f016020809104026020016040519081016040528092919081815260200182805461148c9061581d565b80156114d95780601f106114ae576101008083540402835291602001916114d9565b820191906000526020600020905b8154815290600101906020018083116114bc57829003601f168201915b5050509183525050600682015460209091019060ff16600481111561150057611500614b1a565b600481111561151157611511614b1a565b905250600087815260156020908152604080832060039081018054600181810183559186529484902088516006909602019485558784015190850180546001600160a01b039092166001600160a01b031990921691909117905590860151600284015560608601519083018054608088015160a089015160c08a015163ffffffff908116600160a01b0263ffffffff60a01b196001600160401b03938416600160601b02166bffffffffffffffffffffffff60601b1992909416600160401b026bffffffffffffffffffffffff19909516929096169190911792909217919091161791909117905560e0850151600483015561010085015180519394508593611620926005850192019061489a565b5050506000868152601560205260408120600201805485929061164d9084906001600160401b031661591e565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826015600088815260200190815260200160002060020160088282829054906101000a90046001600160401b03166116a9919061591e565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826001600160401b0316601660008881526020019081526020016000206000836040015161ffff1661ffff16815260200190815260200160002060008282546117169190615949565b92505081905550826001600160401b0316600860008282546117389190615949565b909155505060408082015161ffff166000908152600b60205290812080546001600160401b038616929061176d908490615949565b909155505050505050505050565b3360009081526011602052604090205460ff166117aa5760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b03811660009081526013602052604090205480158015906117df575060008181526015602052604090205481145b6117fb5760405162461bcd60e51b8152600401610c0e9061598e565b6000928352601460205260409092209190915550565b3360009081526011602052604090205460ff166118405760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b03811661185357600080fd5b6001600160a01b03166000908152601160205260409020805460ff19169055565b61187c61490e565b600082815260146020908152604080832054835260158252808320815160c0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156118fc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116118de575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611aa25760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190611a119061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3d9061581d565b8015611a8a5780601f10611a5f57610100808354040283529160200191611a8a565b820191906000526020600020905b815481529060010190602001808311611a6d57829003601f168201915b50505050508152505081526020019060010190611962565b5050509152505080519091506109a85760405162461bcd60e51b8152600401610c0e9061598e565b3360009081526011602052604090205460ff16611af95760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b038316611b0c57600080fd5b63ffffffff8216611b585760405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a590819dbdbd9081bdc9858db19481a5960521b6044820152606401610c0e565b63ffffffff8083166000818152600f602052604090205490911614611bbf5760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520646f6573206e6f742065786973740000000000006044820152606401610c0e565b6001600160a01b03909216600090815260126020908152604080832063ffffffff909416835292905220805491151560ff19909216919091179055565b611c0633826142c2565b611c225760405162461bcd60e51b8152600401610c0e906159b9565b610d44838383614344565b3360009081526011602052604090205460ff16611c5c5760405162461bcd60e51b8152600401610c0e90615961565b805161ffff16611c7e5760405162461bcd60e51b8152600401610c0e90615a0a565b600081602001515111611ca35760405162461bcd60e51b8152600401610c0e90615a4d565b805161ffff9081166000908152600c602090815260409091208351815461ffff19169316929092178255808301518051849392611ce792600185019291019061489a565b50604082015160028201805460ff19166001836004811115611d0b57611d0b614b1a565b0217905550905050806000015161ffff167f4fcd383604332b394161a254d359c73296253b0e25354b61f8a192f2ca90f1c082602001518360400151604051611d55929190615a74565b60405180910390a250565b6001600160a01b038116600090815260136020908152604080832054835260158252808320600301805482518185028101850190935280835260609492939192909184015b82821015611ee55760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190611e549061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054611e809061581d565b8015611ecd5780601f10611ea257610100808354040283529160200191611ecd565b820191906000526020600020905b815481529060010190602001808311611eb057829003601f168201915b50505050508152505081526020019060010190611da5565b505050509050919050565b3360009081526011602052604090205460ff16611f1f5760405162461bcd60e51b8152600401610c0e90615961565b805161ffff16611f415760405162461bcd60e51b8152600401610c0e90615a96565b600081602001515111611f665760405162461bcd60e51b8152600401610c0e90615a4d565b805161ffff9081166000908152600d602090815260409091208351815461ffff19169316929092178255808301518051849392611faa92600185019291019061489a565b50604082015160028201805460ff19166001836004811115611fce57611fce614b1a565b0217905550905050806000015161ffff167fa64371df3e4e587f97e094b4e6cb2dd8780392180388ec6f7c2ac098a8452feb82602001518360400151604051611d55929190615a74565b610d4483838360405180602001604052806000815250612ab2565b6000818152600360205260408120546001600160a01b0316806109a85760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610c0e565b3360009081526011602052604090205460ff166120d95760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b0381166120ec57600080fd5b6001600160a01b03166000908152601160205260409020805460ff19166001179055565b60006001600160a01b03821661217b5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610c0e565b506001600160a01b031660009081526004602052604090205490565b6000546001600160a01b031633146121c15760405162461bcd60e51b8152600401610c0e90615add565b6121cb60006144e0565b565b6121d5614942565b63ffffffff8083166000908152600f6020908152604091829020825160a0810190935280549093168252600183018054929392918401916122159061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546122419061581d565b801561228e5780601f106122635761010080835404028352916020019161228e565b820191906000526020600020905b81548152906001019060200180831161227157829003601f168201915b505050505081526020016002820180546122a79061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546122d39061581d565b80156123205780601f106122f557610100808354040283529160200191612320565b820191906000526020600020905b81548152906001019060200180831161230357829003601f168201915b5050509183525050600382015460209091019060ff16600481111561234757612347614b1a565b600481111561235857612358614b1a565b8152602001600482018054806020026020016040519081016040528092919081815260200182805480156123ab57602002820191906000526020600020905b815481526020019060010190808311612397575b5050505050815250509050919050565b600a546000906001600160a01b031633146124185760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206973206e6f7420676f6f64506f696e747342726964676500006044820152606401610c0e565b6001600160a01b03831660009081526013602090815260408083205483526015909152812060020180548492906124599084906001600160401b0316615b12565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550816009600082825461248f9190615949565b90915550506001600160a01b038316600081815260136020908152604080832054835260158252918290206002015482518681526001600160401b03909116918101919091527f9ce3299c5bcff8db5ce8560d5c76cf01d7bc08936eca4f80b2506502560a8944910160405180910390a250600192915050565b606060028054610b169061581d565b612523338383614530565b5050565b600c602052600090815260409020805460018201805461ffff90921692916108d09061581d565b61255661490e565b6000828152601560209081526040808320815160c0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156125cc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116125ae575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611aa25760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e0820152600582018054919291610100840191906126e19061581d565b80601f016020809104026020016040519081016040528092919081815260200182805461270d9061581d565b801561275a5780601f1061272f5761010080835404028352916020019161275a565b820191906000526020600020905b81548152906001019060200180831161273d57829003601f168201915b50505050508152505081526020019060010190612632565b3360009081526011602052604090205460ff166127a15760405162461bcd60e51b8152600401610c0e90615961565b60008563ffffffff16116128055760405162461bcd60e51b815260206004820152602560248201527f676f6f64206f7261636c65206964206d75737420626520677265617465722074604482015264068616e20360dc1b6064820152608401610c0e565b63ffffffff8086166000818152600f6020526040902054909116146128645760405162461bcd60e51b815260206004820152601560248201527419dbdbd9081bdc9858db19481b9bdd08199bdd5b99605a1b6044820152606401610c0e565b83511561290c576010600f60008763ffffffff1681526020019081526020016000206001016040516128969190615b3a565b908152604051908190036020018120805463ffffffff1916905585906010906128c0908790615bac565b9081526040805160209281900383019020805463ffffffff191663ffffffff9485161790559187166000908152600f825291909120855161290a926001929092019187019061489a565b505b8251156129415763ffffffff85166000908152600f60209081526040909120845161293f9260029092019186019061489a565b505b600082600481111561295557612955614b1a565b146129955763ffffffff85166000908152600f60205260409020600301805483919060ff1916600183600481111561298f5761298f614b1a565b02179055505b8051156129ca5763ffffffff85166000908152600f6020908152604090912082516129c892600490920191840190614988565b505b63ffffffff85166000818152600f602052604090819020600381015491517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5692612a25926001810192600282019260ff169160040190615c3f565b60405180910390a25050505050565b6000546001600160a01b03163314612a5e5760405162461bcd60e51b8152600401610c0e90615add565b600a80546001600160a01b0319166001600160a01b0383169081179091556040519081527f02281d9b30520c4846a2d45ccccf51fb691926264690903b8a697706dd5f988b9060200160405180910390a150565b612abc33836142c2565b612ad85760405162461bcd60e51b8152600401610c0e906159b9565b612ae4848484846145ff565b50505050565b6000818152600360205260409020546060906001600160a01b0316612b695760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610c0e565b6000612b8060408051602081019091526000815290565b90506000815111612ba05760405180602001604052806000815250612bcb565b80612baa84614632565b604051602001612bbb929190615cba565b6040516020818303038152906040525b9392505050565b3360009081526011602052604081205460ff16612c015760405162461bcd60e51b8152600401610c0e90615961565b600082602001515111612c265760405162461bcd60e51b8152600401610c0e90615a4d565b60108260200151604051612c3a9190615bac565b9081526040519081900360200190205463ffffffff1615612c9d5760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520616c7265616479206578697374730000000000006044820152606401610c0e565b60178054600090612cb39063ffffffff16615ce0565b825463ffffffff9182166101009390930a83810290830219909116179092558084526000908152600f6020908152604090912084518154931663ffffffff19909316929092178255808401518051859392612d1592600185019291019061489a565b5060408201518051612d3191600284019160209091019061489a565b50606082015160038201805460ff19166001836004811115612d5557612d55614b1a565b021790555060808201518051612d75916004840191602090910190614988565b50905050816000015160108360200151604051612d929190615bac565b9081526040805160209281900383018120805463ffffffff191663ffffffff958616179055855192860151918601516060870151608088015194909516947fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5694612dfc9493615d04565b60405180910390a250805163ffffffff165b919050565b600f602052600090815260409020805460018201805463ffffffff9092169291612e3c9061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054612e689061581d565b8015612eb55780601f10612e8a57610100808354040283529160200191612eb5565b820191906000526020600020905b815481529060010190602001808311612e9857829003601f168201915b505050505090806002018054612eca9061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054612ef69061581d565b8015612f435780601f10612f1857610100808354040283529160200191612f43565b820191906000526020600020905b815481529060010190602001808311612f2657829003601f168201915b5050506003909301549192505060ff1684565b606060156000838152602001908152602001600020600301805480602002602001604051908101604052809291908181526020016000905b82821015611ee55760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e08201526005820180549192916101008401919061303d9061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546130699061581d565b80156130b65780601f1061308b576101008083540402835291602001916130b6565b820191906000526020600020905b81548152906001019060200180831161309957829003601f168201915b50505050508152505081526020019060010190612f8e565b6130d661490e565b6001600160a01b038216600090815260136020908152604080832054835260158252808320815160c08101835281548152600182018054845181870281018701909552808552919492938584019390929083018282801561316057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311613142575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611aa25760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e0820152600582018054919291610100840191906132759061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546132a19061581d565b80156132ee5780601f106132c3576101008083540402835291602001916132ee565b820191906000526020600020905b8154815290600101906020018083116132d157829003601f168201915b505050505081525050815260200190600101906131c6565b3360009081526011602052604090205460ff166133355760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b0380831660009081526013602081815260408084205484526015808352818520958716855292825280842054845291905290208054825414156133b05760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610c0e565b81546133ce5760405162461bcd60e51b8152600401610c0e9061598e565b80546133ec5760405162461bcd60e51b8152600401610c0e9061598e565b60028082015490830180546001600160401b03928316926000916134129185911661591e565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160089054906101000a90046001600160401b03168260020160088282829054906101000a90046001600160401b0316613473919061591e565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160109054906101000a90046001600160401b03168260020160108282829054906101000a90046001600160401b03166134d4919061591e565b92506101000a8154816001600160401b0302191690836001600160401b0316021790555060005b60018201548110156135b0578260010182600101828154811061352057613520615858565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b039092169190911790558454918401805460139291908590811061357957613579615858565b60009182526020808320909101546001600160a01b03168352820192909252604001902055806135a881615d4a565b9150506134fb565b506002810180546001600160c01b03191690556135d16001820160006149c2565b604080516001600160a01b038087168252851660208201527f239567be74fe3e80a3e23e994c3234310617523efa3bdb81b591bda34e070368910160405180910390a150505050565b6000546001600160a01b031633146136445760405162461bcd60e51b8152600401610c0e90615add565b6001600160a01b0381166136a95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610c0e565b6136b2816144e0565b50565b61ffff81166000908152600e602090815260409182902060010180548351818402810184019094528084526060939283018282801561373b57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116137025790505b50505050509050919050565b3360009081526011602052604090205460ff166137765760405162461bcd60e51b8152600401610c0e90615961565b80516137d45760405162461bcd60e51b815260206004820152602760248201527f676f6f64206163746976697479206964206d75737420626520677265617465726044820152660207468616e20360cc1b6064820152608401610c0e565b60005b8160200151518110156138d0576000826020015182815181106137fc576137fc615858565b602002602001015161ffff16116138255760405162461bcd60e51b8152600401610c0e90615a0a565b6001600c60008460200151848151811061384157613841615858565b60209081029190910181015161ffff1682528101919091526040016000206002015460ff16600481111561387757613877614b1a565b146138be5760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610c0e565b806138c881615d4a565b9150506137d7565b506000816040015161ffff16116138f95760405162461bcd60e51b8152600401610c0e90615a96565b600160408083015161ffff166000908152600d602052206002015460ff16600481111561392857613928614b1a565b146139755760405162461bcd60e51b815260206004820152601b60248201527f676f6f642063617465676f7279206973206e6f742061637469766500000000006044820152606401610c0e565b60008160600151511161399a5760405162461bcd60e51b8152600401610c0e90615a4d565b80516000908152600e602090815260409091208251815581830151805184936139ca9260018501929101906149e0565b50604082015160028201805461ffff191661ffff90921691909117905560608201518051613a0291600384019160209091019061489a565b50608082015160048201805463ffffffff191663ffffffff90921691909117905560a08201518051613a3e91600584019160209091019061489a565b5060c082015160068201805460ff19166001836004811115613a6257613a62614b1a565b0217905550905050806040015161ffff1681600001517f27b90160eaa4ab2aa06fabc8c7f0a5acd0041ec04a3851eb1b5881c94ee37d128360200151846060015185608001518660a001518760c00151604051613ac3959493929190615d65565b60405180910390a350565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613b0382612033565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60608101516000908152600e602052604081208054613b9d5760405162461bcd60e51b815260206004820152601c60248201527f676f6f6420616374697669747920646f6573206e6f74206578697374000000006044820152606401610c0e565b6001600682015460ff166004811115613bb857613bb8614b1a565b14613c055760405162461bcd60e51b815260206004820152601b60248201527f676f6f64206163746976697479206973206e6f742061637469766500000000006044820152606401610c0e565b60005b6001820154811015613d54576001600c6000846001018481548110613c2f57613c2f615858565b6000918252602080832060108304015461ffff6002600f90941684026101000a90910416845283019390935260409091019020015460ff166004811115613c7857613c78614b1a565b14613cbf5760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610c0e565b816001018181548110613cd457613cd4615858565b60009182526020909120601082040154600f9091166002026101000a900461ffff16613d425760405162461bcd60e51b815260206004820152601860248201527f676f6f64207479706520646f6573206e6f7420657869737400000000000000006044820152606401610c0e565b80613d4c81615d4a565b915050613c08565b50600160028083015461ffff166000908152600d60205260409020015460ff166004811115613d8557613d85614b1a565b14613dd25760405162461bcd60e51b815260206004820152601b60248201527f676f6f642063617465676f7279206973206e6f742061637469766500000000006044820152606401610c0e565b608083015163ffffffff9081166000908152600f602052604090205416613e3b5760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520646f6573206e6f742065786973740000000000006044820152606401610c0e565b6001608084015163ffffffff166000908152600f602052604090206003015460ff166004811115613e6e57613e6e614b1a565b14613ebb5760405162461bcd60e51b815260206004820152601960248201527f676f6f64206f7261636c65206973206e6f7420616374697665000000000000006044820152606401610c0e565b3360009081526011602052604090205460ff1680613efd5750336000908152601260209081526040808320608087015163ffffffff16845290915290205460ff165b613f425760405162461bcd60e51b81526020600482015260166024820152751cd95b99195c881a5cc81b9bdd08185c1c1c9bdd995960521b6044820152606401610c0e565b6000805b608085015163ffffffff166000908152600f6020526040902060040154811015613fc557608085015163ffffffff166000908152600f60205260409020600401805482908110613f9857613f98615858565b906000526020600020015485606001511415613fb357600191505b80613fbd81615d4a565b915050613f46565b50806140275760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610c0e565b620f42408460a0015163ffffffff1611156140755760405162461bcd60e51b815260206004820152600e60248201526d756e697473206f766572666c6f7760901b6044820152606401610c0e565b60008460a0015163ffffffff16116140cf5760405162461bcd60e51b815260206004820152601c60248201527f756e697473206d7573742062652067726561746572207468616e2030000000006044820152606401610c0e565b600084610100015151116141195760405162461bcd60e51b815260206004820152601160248201527070726f6f6655524c20697320656d70747960781b6044820152606401610c0e565b60008460c001516001600160401b0316116141765760405162461bcd60e51b815260206004820181905260248201527f74696d657374616d70206d7573742062652067726561746572207468616e20306044820152606401610c0e565b5060019392505050565b6001600160a01b0382166141d65760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610c0e565b6000818152600360205260409020546001600160a01b03161561423b5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610c0e565b6001600160a01b0382166000908152600460205260408120805460019290614264908490615949565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600360205260408120546001600160a01b031661433b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610c0e565b50600092915050565b826001600160a01b031661435782612033565b6001600160a01b0316146143bb5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610c0e565b6001600160a01b03821661441d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610c0e565b614428600082613ace565b6001600160a01b0383166000908152600460205260408120805460019290614451908490615dc4565b90915550506001600160a01b038216600090815260046020526040812080546001929061447f908490615949565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b031614156145925760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610c0e565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61460a848484614344565b61461684848484614737565b612ae45760405162461bcd60e51b8152600401610c0e90615ddb565b6060816146565750506040805180820190915260018152600360fc1b602082015290565b8160005b8115614680578061466a81615d4a565b91506146799050600a83615e43565b915061465a565b6000816001600160401b0381111561469a5761469a614c7a565b6040519080825280601f01601f1916602001820160405280156146c4576020820181803683370190505b5090505b841561472f576146d9600183615dc4565b91506146e6600a86615e57565b6146f1906030615949565b60f81b81838151811061470657614706615858565b60200101906001600160f81b031916908160001a905350614728600a86615e43565b94506146c8565b949350505050565b60006001600160a01b0384163b1561482a57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061477b903390899088908890600401615e6b565b6020604051808303816000875af19250505080156147b6575060408051601f3d908101601f191682019092526147b391810190615e9e565b60015b614810573d8080156147e4576040519150601f19603f3d011682016040523d82523d6000602084013e6147e9565b606091505b5080516148085760405162461bcd60e51b8152600401610c0e90615ddb565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061472f565b506001949350505050565b82805482825590600052602060002090810192821561488a579160200282015b8281111561488a57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190614855565b50614896929150614a80565b5090565b8280546148a69061581d565b90600052602060002090601f0160209004810192826148c8576000855561488a565b82601f106148e157805160ff191683800117855561488a565b8280016001018555821561488a579182015b8281111561488a5782518255916020019190600101906148f3565b6040805160c0810182526000808252606060208301819052928201819052828201819052608082015260a081019190915290565b6040518060a00160405280600063ffffffff16815260200160608152602001606081526020016000600481111561497b5761497b614b1a565b8152602001606081525090565b82805482825590600052602060002090810192821561488a579160200282018281111561488a5782518255916020019190600101906148f3565b50805460008255906000526020600020908101906136b29190614a80565b82805482825590600052602060002090600f0160109004810192821561488a5791602002820160005b83821115614a4957835183826101000a81548161ffff021916908361ffff1602179055509260200192600201602081600101049283019260010302614a09565b8015614a775782816101000a81549061ffff0219169055600201602081600101049283019260010302614a49565b50506148969291505b5b808211156148965760008155600101614a81565b803561ffff81168114612e0e57600080fd5b600060208284031215614ab957600080fd5b612bcb82614a95565b60005b83811015614add578181015183820152602001614ac5565b83811115612ae45750506000910152565b60008151808452614b06816020860160208601614ac2565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b60058110614b4e57634e487b7160e01b600052602160045260246000fd5b9052565b61ffff84168152606060208201526000614b6f6060830185614aee565b905061472f6040830184614b30565b6001600160e01b0319811681146136b257600080fd5b600060208284031215614ba657600080fd5b8135612bcb81614b7e565b600060208284031215614bc357600080fd5b5035919050565b86815261ffff8616602082015260c060408201526000614bed60c0830187614aee565b63ffffffff861660608401528281036080840152614c0b8186614aee565b915050614c1b60a0830184614b30565b979650505050505050565b602081526000612bcb6020830184614aee565b80356001600160a01b0381168114612e0e57600080fd5b60008060408385031215614c6357600080fd5b614c6c83614c39565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715614cb357614cb3614c7a565b60405290565b60405160a081016001600160401b0381118282101715614cb357614cb3614c7a565b60405160e081016001600160401b0381118282101715614cb357614cb3614c7a565b604051601f8201601f191681016001600160401b0381118282101715614d2557614d25614c7a565b604052919050565b803563ffffffff81168114612e0e57600080fd5b80356001600160401b0381168114612e0e57600080fd5b60006001600160401b03831115614d7157614d71614c7a565b614d84601f8401601f1916602001614cfd565b9050828152838383011115614d9857600080fd5b828260208301376000602084830101529392505050565b600082601f830112614dc057600080fd5b612bcb83833560208501614d58565b600060208284031215614de157600080fd5b81356001600160401b0380821115614df857600080fd5b908301906101208286031215614e0d57600080fd5b614e15614c90565b614e1e83614c39565b8152602083013560208201526040830135604082015260608301356060820152614e4a60808401614d2d565b6080820152614e5b60a08401614d2d565b60a0820152614e6c60c08401614d41565b60c082015260e083013560e08201526101008084013583811115614e8f57600080fd5b614e9b88828701614daf565b918301919091525095945050505050565b60008060408385031215614ebf57600080fd5b82359150614ecf60208401614c39565b90509250929050565b600060208284031215614eea57600080fd5b612bcb82614c39565b600081518084526020808501808196508360051b8101915082860160005b85811015614fd357828403895281516101208151865286820151614f3f888801826001600160a01b03169052565b50604082810151908701526060808301516001600160401b03811682890152505060808281015163ffffffff811688830152505060a0828101516001600160401b03811688830152505060c08281015163ffffffff811688830152505060e0828101519087015261010091820151918601819052614fbf81870183614aee565b9a87019a9550505090840190600101614f11565b5091979650505050505050565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156150385783516001600160a01b0316825292840192600192909201919084019061500f565b5060408701516001600160401b0381166060880152935060608701516001600160401b0381166080880152935060808701516001600160401b03811660a0880152935060a0870151868203601f190160c08801529350614c1b8185614ef3565b80358015158114612e0e57600080fd5b6000806000606084860312156150bd57600080fd5b6150c684614c39565b92506150d460208501614d2d565b91506150e260408501615098565b90509250925092565b60008060006060848603121561510057600080fd5b61510984614c39565b925061511760208501614c39565b9150604084013590509250925092565b803560058110612e0e57600080fd5b60006060828403121561514857600080fd5b604051606081016001600160401b03828210818311171561516b5761516b614c7a565b8160405282935061517b85614a95565b8352602085013591508082111561519157600080fd5b5061519e85828601614daf565b6020830152506151b060408401615127565b60408201525092915050565b6000602082840312156151ce57600080fd5b81356001600160401b038111156151e457600080fd5b61472f84828501615136565b602081526000612bcb6020830184614ef3565b60006020828403121561521557600080fd5b81356001600160401b0381111561522b57600080fd5b61472f84828501614daf565b60006020828403121561524957600080fd5b612bcb82614d2d565b600081518084526020808501945080840160005b8381101561528257815187529582019590820190600101615266565b509495945050505050565b6020815263ffffffff82511660208201526000602083015160a060408401526152b960c0840182614aee565b90506040840151601f19808584030160608601526152d78383614aee565b9250606086015191506152ed6080860183614b30565b60808601519150808584030160a0860152506153098282615252565b95945050505050565b6000806040838503121561532557600080fd5b61532e83614c39565b9150614ecf60208401614d2d565b6000806040838503121561534f57600080fd5b61535883614c39565b9150614ecf60208401615098565b60006001600160401b0382111561537f5761537f614c7a565b5060051b60200190565b600082601f83011261539a57600080fd5b813560206153af6153aa83615366565b614cfd565b82815260059290921b840181019181810190868411156153ce57600080fd5b8286015b848110156153e957803583529183019183016153d2565b509695505050505050565b600080600080600060a0868803121561540c57600080fd5b61541586614d2d565b945060208601356001600160401b038082111561543157600080fd5b61543d89838a01614daf565b9550604088013591508082111561545357600080fd5b61545f89838a01614daf565b945061546d60608901615127565b9350608088013591508082111561548357600080fd5b5061549088828901615389565b9150509295509295909350565b600080600080608085870312156154b357600080fd5b6154bc85614c39565b93506154ca60208601614c39565b92506040850135915060608501356001600160401b038111156154ec57600080fd5b8501601f810187136154fd57600080fd5b61550c87823560208401614d58565b91505092959194509250565b60006020828403121561552a57600080fd5b81356001600160401b038082111561554157600080fd5b9083019060a0828603121561555557600080fd5b61555d614cb9565b61556683614d2d565b815260208301358281111561557a57600080fd5b61558687828601614daf565b60208301525060408301358281111561559e57600080fd5b6155aa87828601614daf565b6040830152506155bc60608401615127565b60608201526080830135828111156155d357600080fd5b6155df87828601615389565b60808301525095945050505050565b63ffffffff8516815260806020820152600061560d6080830186614aee565b828103604084015261561f8186614aee565b9150506153096060830184614b30565b6000806040838503121561564257600080fd5b61564b83614c39565b9150614ecf60208401614c39565b6000806040838503121561566c57600080fd5b61567583614c39565b9150614ecf60208401614a95565b600081518084526020808501945080840160005b8381101561528257815161ffff1687529582019590820190600101615697565b602081526000612bcb6020830184615683565b600082601f8301126156db57600080fd5b813560206156eb6153aa83615366565b82815260059290921b8401810191818101908684111561570a57600080fd5b8286015b848110156153e95761571f81614a95565b835291830191830161570e565b60006020828403121561573e57600080fd5b81356001600160401b038082111561575557600080fd5b9083019060e0828603121561576957600080fd5b615771614cdb565b8235815260208301358281111561578757600080fd5b615793878286016156ca565b6020830152506157a560408401614a95565b60408201526060830135828111156157bc57600080fd5b6157c887828601614daf565b6060830152506157da60808401614d2d565b608082015260a0830135828111156157f157600080fd5b6157fd87828601614daf565b60a08301525061580f60c08401615127565b60c082015295945050505050565b600181811c9082168061583157607f821691505b6020821081141561585257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600063ffffffff808316818516818304811182151516156158a7576158a761586e565b02949350505050565b60006101408c83528b60208401528a604084015289606084015263ffffffff808a1660808501528160a08501526158e98285018a614aee565b6001600160401b0398891660c0860152961660e084015250509190931661010082015261012001919091529695505050505050565b60006001600160401b038083168185168083038211156159405761594061586e565b01949350505050565b6000821982111561595c5761595c61586e565b500190565b60208082526013908201527229b2b73232b91034b9903737ba1030b236b4b760691b604082015260600190565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60208082526023908201527f676f6f642074797065206964206d75737420626520677265617465722074686160408201526206e20360ec1b606082015260800190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b604081526000615a876040830185614aee565b9050612bcb6020830184614b30565b60208082526027908201527f676f6f642063617465676f7279206964206d75737420626520677265617465726040820152660207468616e20360cc1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006001600160401b0383811690831681811015615b3257615b3261586e565b039392505050565b6000808354615b488161581d565b60018281168015615b605760018114615b7157615ba0565b60ff19841687528287019450615ba0565b8760005260208060002060005b85811015615b975781548a820152908401908201615b7e565b50505082870194505b50929695505050505050565b60008251615bbe818460208701614ac2565b9190910192915050565b60008154615bd58161581d565b808552602060018381168015615bf25760018114615c0657615c34565b60ff19851688840152604088019550615c34565b866000528260002060005b85811015615c2c5781548a8201860152908301908401615c11565b890184019650505b505050505092915050565b608081526000615c526080830187615bc8565b602083820381850152615c658288615bc8565b9150615c746040850187614b30565b83820360608501528454808352600086815282812093830191905b81811015615cab57845483526001948501949284019201615c8f565b50909998505050505050505050565b60008351615ccc818460208801614ac2565b835190830190615940818360208801614ac2565b600063ffffffff80831681811415615cfa57615cfa61586e565b6001019392505050565b608081526000615d176080830187614aee565b8281036020840152615d298187614aee565b9050615d386040840186614b30565b8281036060840152614c1b8185615252565b6000600019821415615d5e57615d5e61586e565b5060010190565b60a081526000615d7860a0830188615683565b8281036020840152615d8a8188614aee565b905063ffffffff861660408401528281036060840152615daa8186614aee565b915050615dba6080830184614b30565b9695505050505050565b600082821015615dd657615dd661586e565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b600082615e5257615e52615e2d565b500490565b600082615e6657615e66615e2d565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090615dba90830184614aee565b600060208284031215615eb057600080fd5b8151612bcb81614b7e56fea26469706673582212202782d971a327c203a2280fcc67a0a0d247d4c9c582d1eb969e1711acf99b3fdf64736f6c634300080b0033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b506004361061030c5760003560e01c8063715018a61161019d578063bc2dfced116100e9578063e272578e116100a2578063f145c3fa1161007c578063f145c3fa1461081d578063f2fde38b14610863578063f7a8d7a214610876578063fe0f2f961461089657600080fd5b8063e272578e146107ae578063e95d158b146107ce578063e985e9c5146107e157600080fd5b8063bc2dfced14610736578063c87b56dd1461073f578063cbccf20a14610752578063cf3b7d9014610765578063d33e515014610788578063d69167e51461079b57600080fd5b806395d89b4111610156578063aaa758b111610130578063aaa758b1146106ea578063aced36ce146106fd578063b0351dc414610710578063b88d4fde1461072357600080fd5b806395d89b41146106bc578063a22cb465146106c4578063aa792cb3146106d757600080fd5b8063715018a61461063257806372f0d7ac1461063a5780637a04a4191461064a5780638c3080fa1461066a5780638da5cb5b14610698578063949d0cae146106a957600080fd5b80632b6cef2e1161025c57806347f6acf1116102155780636352211e116101ef5780636352211e146105e6578063696a16cb146105f9578063704802751461060c57806370a082311461061f57600080fd5b806347f6acf11461058f5780634bf25ae1146105a65780635dbdf4d8146105c657600080fd5b80632b6cef2e1461046b57806331f1f9331461048b578063392b76331461049e5780633b093ddc146104e457806342842e0e14610559578063429b62e51461056c57600080fd5b80630fe31648116102c95780631fab60bb116102a35780631fab60bb146104125780631fb4f1a01461043257806323b872dd1461044557806328d4b63f1461045857600080fd5b80630fe31648146103d957806316feb0d0146103ec5780631785f53c146103ff57600080fd5b806301b844481461031157806301ffc9a71461033c578063056a305c1461035f57806306fdde0314610384578063081812fc14610399578063095ea7b3146103c4575b600080fd5b61032461031f366004614aa7565b6108a9565b60405161033393929190614b52565b60405180910390f35b61034f61034a366004614b94565b61095c565b6040519015158152602001610333565b61037261036d366004614bb1565b6109ae565b60405161033396959493929190614bca565b61038c610b07565b6040516103339190614c26565b6103ac6103a7366004614bb1565b610b99565b6040516001600160a01b039091168152602001610333565b6103d76103d2366004614c50565b610c33565b005b6103d76103e7366004614dcf565b610d49565b6103d76103fa366004614eac565b61177b565b6103d761040d366004614ed8565b611811565b610425610420366004614bb1565b611874565b6040516103339190614fe0565b6103d76104403660046150a8565b611aca565b6103d76104533660046150eb565b611bfc565b6103d76104663660046151bc565b611c2d565b61047e610479366004614ed8565b611d60565b60405161033391906151f0565b6103d76104993660046151bc565b611ef0565b6104cf6104ac366004615203565b805160208183018101805160108252928201919093012091525463ffffffff1681565b60405163ffffffff9091168152602001610333565b61052a6104f2366004614bb1565b601560205260009081526040902080546002909101546001600160401b0380821691600160401b8104821691600160801b9091041684565b604080519485526001600160401b03938416602086015291831691840191909152166060820152608001610333565b6103d76105673660046150eb565b612018565b61034f61057a366004614ed8565b60116020526000908152604090205460ff1681565b61059860085481565b604051908152602001610333565b6105986105b4366004614bb1565b60146020526000908152604090205481565b6105986105d4366004614aa7565b600b6020526000908152604090205481565b6103ac6105f4366004614bb1565b612033565b600a546103ac906001600160a01b031681565b6103d761061a366004614ed8565b6120aa565b61059861062d366004614ed8565b612110565b6103d7612197565b6017546104cf9063ffffffff1681565b61065d610658366004615237565b6121cd565b604051610333919061528d565b61034f610678366004615312565b601260209081526000928352604080842090915290825290205460ff1681565b6000546001600160a01b03166103ac565b61034f6106b7366004614c50565b6123bb565b61038c612509565b6103d76106d236600461533c565b612518565b6103246106e5366004614aa7565b612527565b6104256106f8366004614bb1565b61254e565b6103d761070b3660046153f4565b612772565b6103d761071e366004614ed8565b612a34565b6103d761073136600461549d565b612ab2565b61059860095481565b61038c61074d366004614bb1565b612aea565b610598610760366004615518565b612bd2565b610778610773366004614bb1565b612e13565b60405161033394939291906155ee565b61047e610796366004614bb1565b612f56565b6104256107a9366004614ed8565b6130ce565b6105986107bc366004614ed8565b60136020526000908152604090205481565b6103d76107dc36600461562f565b613306565b61034f6107ef36600461562f565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b61059861082b366004615659565b6001600160a01b03821660009081526013602090815260408083205483526016825280832061ffff8516845290915290205492915050565b6103d7610871366004614ed8565b61361a565b610889610884366004614aa7565b6136b5565b60405161033391906156b7565b6103d76108a436600461572c565b613747565b600d602052600090815260409020805460018201805461ffff90921692916108d09061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546108fc9061581d565b80156109495780601f1061091e57610100808354040283529160200191610949565b820191906000526020600020905b81548152906001019060200180831161092c57829003601f168201915b5050506002909301549192505060ff1683565b60006001600160e01b031982166380ac58cd60e01b148061098d57506001600160e01b03198216635b5e139f60e01b145b806109a857506301ffc9a760e01b6001600160e01b03198316145b92915050565b600e60205260009081526040902080546002820154600383018054929361ffff909216926109db9061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a079061581d565b8015610a545780601f10610a2957610100808354040283529160200191610a54565b820191906000526020600020905b815481529060010190602001808311610a3757829003601f168201915b5050506004840154600585018054949563ffffffff909216949193509150610a7b9061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa79061581d565b8015610af45780601f10610ac957610100808354040283529160200191610af4565b820191906000526020600020905b815481529060010190602001808311610ad757829003601f168201915b5050506006909301549192505060ff1686565b606060018054610b169061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b429061581d565b8015610b8f5780601f10610b6457610100808354040283529160200191610b8f565b820191906000526020600020905b815481529060010190602001808311610b7257829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b0316610c175760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b6000610c3e82612033565b9050806001600160a01b0316836001600160a01b03161415610cac5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610c0e565b336001600160a01b0382161480610cc85750610cc881336107ef565b610d3a5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610c0e565b610d448383613ace565b505050565b604081015160009015610ea85750604080820151600081815260156020529190912054610ea35781516001600160a01b031660009081526013602052604090205415610daf575080516001600160a01b0316600090815260136020526040902054610fc3565b60208083015160009081526014909152604090205415610de45750602080820151600090815260149091526040902054610fc3565b81516001600160a01b0316610e455760405162461bcd60e51b815260206004820152602160248201527f6e65772075736572496420627574206e6f20646f476f6f6465722070617373656044820152601960fa1b6064820152608401610c0e565b6000818152601560208181526040808420858155815180840190925286516001600160a01b0316825293859052919052610e859160019081019190614835565b5081516001600160a01b031660009081526013602052604090208190555b610fc3565b81516001600160a01b031615610f3b575080516001600160a01b03166000908152601360205260409020548015801590610eef575060008181526015602052604090205481145b610ea35760405162461bcd60e51b815260206004820152601e60248201527f70726f66696c6520666f7220646f476f6f646572206e6f7420666f756e6400006044820152606401610c0e565b602082015115610fc357506020808201516000908152601490915260409020548015801590610f77575060008181526015602052604090205481145b610fc35760405162461bcd60e51b815260206004820152601f60248201527f70726f66696c6520666f7220656d61696c48617368206e6f7420666f756e64006044820152606401610c0e565b81516001600160a01b03811661100d5760008281526015602052604081206001018054909190610ff557610ff5615858565b6000918252602090912001546001600160a01b031690505b6001600160a01b0381166110515760405162461bcd60e51b815260206004820152600b60248201526a3737903237a3b7b7b232b960a91b6044820152606401610c0e565b6001600160a01b0381166000908152601360205260409020546110b8576001600160a01b0381166000818152601360209081526040808320869055858352601582528220600190810180549182018155835291200180546001600160a01b03191690911790555b6020830151158015906110df57506020808401516000908152601490915260409020548214155b15611157576020808401516000908152601490915260409020541561113f5760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610c0e565b60208084015160009081526014909152604090208290555b61116083613b3c565b61119d5760405162461bcd60e51b815260206004820152600e60248201526d4661696c6564206120636865636b60901b6044820152606401610c0e565b6111ab600780546001019055565b60006111b660075490565b90506111c28282614180565b60608401516000908152600e602052604081206004015460a08601516111ee9163ffffffff1690615884565b63ffffffff169050826001600160a01b03167fe3f157739acb4b4fca01bf36ba7ed4b2805f0a03b74d7e3a8726e11dbbe682da8387602001518789606001518a608001518b6101000151888d60a001518e60c001518f60e0015160405161125e9a999897969594939291906158b0565b60405180910390a26000604051806101200160405280848152602001856001600160a01b0316815260200187606001518152602001836001600160401b031681526020018760a0015163ffffffff1681526020018760c001516001600160401b03168152602001876080015163ffffffff1681526020018760e00151815260200187610100015181525090506000600e6000886060015181526020019081526020016000206040518060e0016040529081600082015481526020016001820180548060200260200160405190810160405280929190818152602001828054801561138f57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116113565790505b5050509183525050600282015461ffff1660208201526003820180546040909201916113ba9061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546113e69061581d565b80156114335780601f1061140857610100808354040283529160200191611433565b820191906000526020600020905b81548152906001019060200180831161141657829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916114609061581d565b80601f016020809104026020016040519081016040528092919081815260200182805461148c9061581d565b80156114d95780601f106114ae576101008083540402835291602001916114d9565b820191906000526020600020905b8154815290600101906020018083116114bc57829003601f168201915b5050509183525050600682015460209091019060ff16600481111561150057611500614b1a565b600481111561151157611511614b1a565b905250600087815260156020908152604080832060039081018054600181810183559186529484902088516006909602019485558784015190850180546001600160a01b039092166001600160a01b031990921691909117905590860151600284015560608601519083018054608088015160a089015160c08a015163ffffffff908116600160a01b0263ffffffff60a01b196001600160401b03938416600160601b02166bffffffffffffffffffffffff60601b1992909416600160401b026bffffffffffffffffffffffff19909516929096169190911792909217919091161791909117905560e0850151600483015561010085015180519394508593611620926005850192019061489a565b5050506000868152601560205260408120600201805485929061164d9084906001600160401b031661591e565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826015600088815260200190815260200160002060020160088282829054906101000a90046001600160401b03166116a9919061591e565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826001600160401b0316601660008881526020019081526020016000206000836040015161ffff1661ffff16815260200190815260200160002060008282546117169190615949565b92505081905550826001600160401b0316600860008282546117389190615949565b909155505060408082015161ffff166000908152600b60205290812080546001600160401b038616929061176d908490615949565b909155505050505050505050565b3360009081526011602052604090205460ff166117aa5760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b03811660009081526013602052604090205480158015906117df575060008181526015602052604090205481145b6117fb5760405162461bcd60e51b8152600401610c0e9061598e565b6000928352601460205260409092209190915550565b3360009081526011602052604090205460ff166118405760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b03811661185357600080fd5b6001600160a01b03166000908152601160205260409020805460ff19169055565b61187c61490e565b600082815260146020908152604080832054835260158252808320815160c0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156118fc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116118de575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611aa25760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190611a119061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3d9061581d565b8015611a8a5780601f10611a5f57610100808354040283529160200191611a8a565b820191906000526020600020905b815481529060010190602001808311611a6d57829003601f168201915b50505050508152505081526020019060010190611962565b5050509152505080519091506109a85760405162461bcd60e51b8152600401610c0e9061598e565b3360009081526011602052604090205460ff16611af95760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b038316611b0c57600080fd5b63ffffffff8216611b585760405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a590819dbdbd9081bdc9858db19481a5960521b6044820152606401610c0e565b63ffffffff8083166000818152600f602052604090205490911614611bbf5760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520646f6573206e6f742065786973740000000000006044820152606401610c0e565b6001600160a01b03909216600090815260126020908152604080832063ffffffff909416835292905220805491151560ff19909216919091179055565b611c0633826142c2565b611c225760405162461bcd60e51b8152600401610c0e906159b9565b610d44838383614344565b3360009081526011602052604090205460ff16611c5c5760405162461bcd60e51b8152600401610c0e90615961565b805161ffff16611c7e5760405162461bcd60e51b8152600401610c0e90615a0a565b600081602001515111611ca35760405162461bcd60e51b8152600401610c0e90615a4d565b805161ffff9081166000908152600c602090815260409091208351815461ffff19169316929092178255808301518051849392611ce792600185019291019061489a565b50604082015160028201805460ff19166001836004811115611d0b57611d0b614b1a565b0217905550905050806000015161ffff167f4fcd383604332b394161a254d359c73296253b0e25354b61f8a192f2ca90f1c082602001518360400151604051611d55929190615a74565b60405180910390a250565b6001600160a01b038116600090815260136020908152604080832054835260158252808320600301805482518185028101850190935280835260609492939192909184015b82821015611ee55760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e082015260058201805491929161010084019190611e549061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054611e809061581d565b8015611ecd5780601f10611ea257610100808354040283529160200191611ecd565b820191906000526020600020905b815481529060010190602001808311611eb057829003601f168201915b50505050508152505081526020019060010190611da5565b505050509050919050565b3360009081526011602052604090205460ff16611f1f5760405162461bcd60e51b8152600401610c0e90615961565b805161ffff16611f415760405162461bcd60e51b8152600401610c0e90615a96565b600081602001515111611f665760405162461bcd60e51b8152600401610c0e90615a4d565b805161ffff9081166000908152600d602090815260409091208351815461ffff19169316929092178255808301518051849392611faa92600185019291019061489a565b50604082015160028201805460ff19166001836004811115611fce57611fce614b1a565b0217905550905050806000015161ffff167fa64371df3e4e587f97e094b4e6cb2dd8780392180388ec6f7c2ac098a8452feb82602001518360400151604051611d55929190615a74565b610d4483838360405180602001604052806000815250612ab2565b6000818152600360205260408120546001600160a01b0316806109a85760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610c0e565b3360009081526011602052604090205460ff166120d95760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b0381166120ec57600080fd5b6001600160a01b03166000908152601160205260409020805460ff19166001179055565b60006001600160a01b03821661217b5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610c0e565b506001600160a01b031660009081526004602052604090205490565b6000546001600160a01b031633146121c15760405162461bcd60e51b8152600401610c0e90615add565b6121cb60006144e0565b565b6121d5614942565b63ffffffff8083166000908152600f6020908152604091829020825160a0810190935280549093168252600183018054929392918401916122159061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546122419061581d565b801561228e5780601f106122635761010080835404028352916020019161228e565b820191906000526020600020905b81548152906001019060200180831161227157829003601f168201915b505050505081526020016002820180546122a79061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546122d39061581d565b80156123205780601f106122f557610100808354040283529160200191612320565b820191906000526020600020905b81548152906001019060200180831161230357829003601f168201915b5050509183525050600382015460209091019060ff16600481111561234757612347614b1a565b600481111561235857612358614b1a565b8152602001600482018054806020026020016040519081016040528092919081815260200182805480156123ab57602002820191906000526020600020905b815481526020019060010190808311612397575b5050505050815250509050919050565b600a546000906001600160a01b031633146124185760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206973206e6f7420676f6f64506f696e747342726964676500006044820152606401610c0e565b6001600160a01b03831660009081526013602090815260408083205483526015909152812060020180548492906124599084906001600160401b0316615b12565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550816009600082825461248f9190615949565b90915550506001600160a01b038316600081815260136020908152604080832054835260158252918290206002015482518681526001600160401b03909116918101919091527f9ce3299c5bcff8db5ce8560d5c76cf01d7bc08936eca4f80b2506502560a8944910160405180910390a250600192915050565b606060028054610b169061581d565b612523338383614530565b5050565b600c602052600090815260409020805460018201805461ffff90921692916108d09061581d565b61255661490e565b6000828152601560209081526040808320815160c0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156125cc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116125ae575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611aa25760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e0820152600582018054919291610100840191906126e19061581d565b80601f016020809104026020016040519081016040528092919081815260200182805461270d9061581d565b801561275a5780601f1061272f5761010080835404028352916020019161275a565b820191906000526020600020905b81548152906001019060200180831161273d57829003601f168201915b50505050508152505081526020019060010190612632565b3360009081526011602052604090205460ff166127a15760405162461bcd60e51b8152600401610c0e90615961565b60008563ffffffff16116128055760405162461bcd60e51b815260206004820152602560248201527f676f6f64206f7261636c65206964206d75737420626520677265617465722074604482015264068616e20360dc1b6064820152608401610c0e565b63ffffffff8086166000818152600f6020526040902054909116146128645760405162461bcd60e51b815260206004820152601560248201527419dbdbd9081bdc9858db19481b9bdd08199bdd5b99605a1b6044820152606401610c0e565b83511561290c576010600f60008763ffffffff1681526020019081526020016000206001016040516128969190615b3a565b908152604051908190036020018120805463ffffffff1916905585906010906128c0908790615bac565b9081526040805160209281900383019020805463ffffffff191663ffffffff9485161790559187166000908152600f825291909120855161290a926001929092019187019061489a565b505b8251156129415763ffffffff85166000908152600f60209081526040909120845161293f9260029092019186019061489a565b505b600082600481111561295557612955614b1a565b146129955763ffffffff85166000908152600f60205260409020600301805483919060ff1916600183600481111561298f5761298f614b1a565b02179055505b8051156129ca5763ffffffff85166000908152600f6020908152604090912082516129c892600490920191840190614988565b505b63ffffffff85166000818152600f602052604090819020600381015491517fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5692612a25926001810192600282019260ff169160040190615c3f565b60405180910390a25050505050565b6000546001600160a01b03163314612a5e5760405162461bcd60e51b8152600401610c0e90615add565b600a80546001600160a01b0319166001600160a01b0383169081179091556040519081527f02281d9b30520c4846a2d45ccccf51fb691926264690903b8a697706dd5f988b9060200160405180910390a150565b612abc33836142c2565b612ad85760405162461bcd60e51b8152600401610c0e906159b9565b612ae4848484846145ff565b50505050565b6000818152600360205260409020546060906001600160a01b0316612b695760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610c0e565b6000612b8060408051602081019091526000815290565b90506000815111612ba05760405180602001604052806000815250612bcb565b80612baa84614632565b604051602001612bbb929190615cba565b6040516020818303038152906040525b9392505050565b3360009081526011602052604081205460ff16612c015760405162461bcd60e51b8152600401610c0e90615961565b600082602001515111612c265760405162461bcd60e51b8152600401610c0e90615a4d565b60108260200151604051612c3a9190615bac565b9081526040519081900360200190205463ffffffff1615612c9d5760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520616c7265616479206578697374730000000000006044820152606401610c0e565b60178054600090612cb39063ffffffff16615ce0565b825463ffffffff9182166101009390930a83810290830219909116179092558084526000908152600f6020908152604090912084518154931663ffffffff19909316929092178255808401518051859392612d1592600185019291019061489a565b5060408201518051612d3191600284019160209091019061489a565b50606082015160038201805460ff19166001836004811115612d5557612d55614b1a565b021790555060808201518051612d75916004840191602090910190614988565b50905050816000015160108360200151604051612d929190615bac565b9081526040805160209281900383018120805463ffffffff191663ffffffff958616179055855192860151918601516060870151608088015194909516947fb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e5694612dfc9493615d04565b60405180910390a250805163ffffffff165b919050565b600f602052600090815260409020805460018201805463ffffffff9092169291612e3c9061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054612e689061581d565b8015612eb55780601f10612e8a57610100808354040283529160200191612eb5565b820191906000526020600020905b815481529060010190602001808311612e9857829003601f168201915b505050505090806002018054612eca9061581d565b80601f0160208091040260200160405190810160405280929190818152602001828054612ef69061581d565b8015612f435780601f10612f1857610100808354040283529160200191612f43565b820191906000526020600020905b815481529060010190602001808311612f2657829003601f168201915b5050506003909301549192505060ff1684565b606060156000838152602001908152602001600020600301805480602002602001604051908101604052809291908181526020016000905b82821015611ee55760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e08201526005820180549192916101008401919061303d9061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546130699061581d565b80156130b65780601f1061308b576101008083540402835291602001916130b6565b820191906000526020600020905b81548152906001019060200180831161309957829003601f168201915b50505050508152505081526020019060010190612f8e565b6130d661490e565b6001600160a01b038216600090815260136020908152604080832054835260158252808320815160c08101835281548152600182018054845181870281018701909552808552919492938584019390929083018282801561316057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311613142575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b82821015611aa25760008481526020908190206040805161012081018252600686029092018054835260018101546001600160a01b03169383019390935260028301549082015260038201546001600160401b03808216606084015263ffffffff600160401b830481166080850152600160601b830490911660a0840152600160a01b9091041660c0820152600482015460e0820152600582018054919291610100840191906132759061581d565b80601f01602080910402602001604051908101604052809291908181526020018280546132a19061581d565b80156132ee5780601f106132c3576101008083540402835291602001916132ee565b820191906000526020600020905b8154815290600101906020018083116132d157829003601f168201915b505050505081525050815260200190600101906131c6565b3360009081526011602052604090205460ff166133355760405162461bcd60e51b8152600401610c0e90615961565b6001600160a01b0380831660009081526013602081815260408084205484526015808352818520958716855292825280842054845291905290208054825414156133b05760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610c0e565b81546133ce5760405162461bcd60e51b8152600401610c0e9061598e565b80546133ec5760405162461bcd60e51b8152600401610c0e9061598e565b60028082015490830180546001600160401b03928316926000916134129185911661591e565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160089054906101000a90046001600160401b03168260020160088282829054906101000a90046001600160401b0316613473919061591e565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160109054906101000a90046001600160401b03168260020160108282829054906101000a90046001600160401b03166134d4919061591e565b92506101000a8154816001600160401b0302191690836001600160401b0316021790555060005b60018201548110156135b0578260010182600101828154811061352057613520615858565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b039092169190911790558454918401805460139291908590811061357957613579615858565b60009182526020808320909101546001600160a01b03168352820192909252604001902055806135a881615d4a565b9150506134fb565b506002810180546001600160c01b03191690556135d16001820160006149c2565b604080516001600160a01b038087168252851660208201527f239567be74fe3e80a3e23e994c3234310617523efa3bdb81b591bda34e070368910160405180910390a150505050565b6000546001600160a01b031633146136445760405162461bcd60e51b8152600401610c0e90615add565b6001600160a01b0381166136a95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610c0e565b6136b2816144e0565b50565b61ffff81166000908152600e602090815260409182902060010180548351818402810184019094528084526060939283018282801561373b57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116137025790505b50505050509050919050565b3360009081526011602052604090205460ff166137765760405162461bcd60e51b8152600401610c0e90615961565b80516137d45760405162461bcd60e51b815260206004820152602760248201527f676f6f64206163746976697479206964206d75737420626520677265617465726044820152660207468616e20360cc1b6064820152608401610c0e565b60005b8160200151518110156138d0576000826020015182815181106137fc576137fc615858565b602002602001015161ffff16116138255760405162461bcd60e51b8152600401610c0e90615a0a565b6001600c60008460200151848151811061384157613841615858565b60209081029190910181015161ffff1682528101919091526040016000206002015460ff16600481111561387757613877614b1a565b146138be5760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610c0e565b806138c881615d4a565b9150506137d7565b506000816040015161ffff16116138f95760405162461bcd60e51b8152600401610c0e90615a96565b600160408083015161ffff166000908152600d602052206002015460ff16600481111561392857613928614b1a565b146139755760405162461bcd60e51b815260206004820152601b60248201527f676f6f642063617465676f7279206973206e6f742061637469766500000000006044820152606401610c0e565b60008160600151511161399a5760405162461bcd60e51b8152600401610c0e90615a4d565b80516000908152600e602090815260409091208251815581830151805184936139ca9260018501929101906149e0565b50604082015160028201805461ffff191661ffff90921691909117905560608201518051613a0291600384019160209091019061489a565b50608082015160048201805463ffffffff191663ffffffff90921691909117905560a08201518051613a3e91600584019160209091019061489a565b5060c082015160068201805460ff19166001836004811115613a6257613a62614b1a565b0217905550905050806040015161ffff1681600001517f27b90160eaa4ab2aa06fabc8c7f0a5acd0041ec04a3851eb1b5881c94ee37d128360200151846060015185608001518660a001518760c00151604051613ac3959493929190615d65565b60405180910390a350565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613b0382612033565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60608101516000908152600e602052604081208054613b9d5760405162461bcd60e51b815260206004820152601c60248201527f676f6f6420616374697669747920646f6573206e6f74206578697374000000006044820152606401610c0e565b6001600682015460ff166004811115613bb857613bb8614b1a565b14613c055760405162461bcd60e51b815260206004820152601b60248201527f676f6f64206163746976697479206973206e6f742061637469766500000000006044820152606401610c0e565b60005b6001820154811015613d54576001600c6000846001018481548110613c2f57613c2f615858565b6000918252602080832060108304015461ffff6002600f90941684026101000a90910416845283019390935260409091019020015460ff166004811115613c7857613c78614b1a565b14613cbf5760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610c0e565b816001018181548110613cd457613cd4615858565b60009182526020909120601082040154600f9091166002026101000a900461ffff16613d425760405162461bcd60e51b815260206004820152601860248201527f676f6f64207479706520646f6573206e6f7420657869737400000000000000006044820152606401610c0e565b80613d4c81615d4a565b915050613c08565b50600160028083015461ffff166000908152600d60205260409020015460ff166004811115613d8557613d85614b1a565b14613dd25760405162461bcd60e51b815260206004820152601b60248201527f676f6f642063617465676f7279206973206e6f742061637469766500000000006044820152606401610c0e565b608083015163ffffffff9081166000908152600f602052604090205416613e3b5760405162461bcd60e51b815260206004820152601a60248201527f676f6f64206f7261636c6520646f6573206e6f742065786973740000000000006044820152606401610c0e565b6001608084015163ffffffff166000908152600f602052604090206003015460ff166004811115613e6e57613e6e614b1a565b14613ebb5760405162461bcd60e51b815260206004820152601960248201527f676f6f64206f7261636c65206973206e6f7420616374697665000000000000006044820152606401610c0e565b3360009081526011602052604090205460ff1680613efd5750336000908152601260209081526040808320608087015163ffffffff16845290915290205460ff165b613f425760405162461bcd60e51b81526020600482015260166024820152751cd95b99195c881a5cc81b9bdd08185c1c1c9bdd995960521b6044820152606401610c0e565b6000805b608085015163ffffffff166000908152600f6020526040902060040154811015613fc557608085015163ffffffff166000908152600f60205260409020600401805482908110613f9857613f98615858565b906000526020600020015485606001511415613fb357600191505b80613fbd81615d4a565b915050613f46565b50806140275760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610c0e565b620f42408460a0015163ffffffff1611156140755760405162461bcd60e51b815260206004820152600e60248201526d756e697473206f766572666c6f7760901b6044820152606401610c0e565b60008460a0015163ffffffff16116140cf5760405162461bcd60e51b815260206004820152601c60248201527f756e697473206d7573742062652067726561746572207468616e2030000000006044820152606401610c0e565b600084610100015151116141195760405162461bcd60e51b815260206004820152601160248201527070726f6f6655524c20697320656d70747960781b6044820152606401610c0e565b60008460c001516001600160401b0316116141765760405162461bcd60e51b815260206004820181905260248201527f74696d657374616d70206d7573742062652067726561746572207468616e20306044820152606401610c0e565b5060019392505050565b6001600160a01b0382166141d65760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610c0e565b6000818152600360205260409020546001600160a01b03161561423b5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610c0e565b6001600160a01b0382166000908152600460205260408120805460019290614264908490615949565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600360205260408120546001600160a01b031661433b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610c0e565b50600092915050565b826001600160a01b031661435782612033565b6001600160a01b0316146143bb5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610c0e565b6001600160a01b03821661441d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610c0e565b614428600082613ace565b6001600160a01b0383166000908152600460205260408120805460019290614451908490615dc4565b90915550506001600160a01b038216600090815260046020526040812080546001929061447f908490615949565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b031614156145925760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610c0e565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61460a848484614344565b61461684848484614737565b612ae45760405162461bcd60e51b8152600401610c0e90615ddb565b6060816146565750506040805180820190915260018152600360fc1b602082015290565b8160005b8115614680578061466a81615d4a565b91506146799050600a83615e43565b915061465a565b6000816001600160401b0381111561469a5761469a614c7a565b6040519080825280601f01601f1916602001820160405280156146c4576020820181803683370190505b5090505b841561472f576146d9600183615dc4565b91506146e6600a86615e57565b6146f1906030615949565b60f81b81838151811061470657614706615858565b60200101906001600160f81b031916908160001a905350614728600a86615e43565b94506146c8565b949350505050565b60006001600160a01b0384163b1561482a57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061477b903390899088908890600401615e6b565b6020604051808303816000875af19250505080156147b6575060408051601f3d908101601f191682019092526147b391810190615e9e565b60015b614810573d8080156147e4576040519150601f19603f3d011682016040523d82523d6000602084013e6147e9565b606091505b5080516148085760405162461bcd60e51b8152600401610c0e90615ddb565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061472f565b506001949350505050565b82805482825590600052602060002090810192821561488a579160200282015b8281111561488a57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190614855565b50614896929150614a80565b5090565b8280546148a69061581d565b90600052602060002090601f0160209004810192826148c8576000855561488a565b82601f106148e157805160ff191683800117855561488a565b8280016001018555821561488a579182015b8281111561488a5782518255916020019190600101906148f3565b6040805160c0810182526000808252606060208301819052928201819052828201819052608082015260a081019190915290565b6040518060a00160405280600063ffffffff16815260200160608152602001606081526020016000600481111561497b5761497b614b1a565b8152602001606081525090565b82805482825590600052602060002090810192821561488a579160200282018281111561488a5782518255916020019190600101906148f3565b50805460008255906000526020600020908101906136b29190614a80565b82805482825590600052602060002090600f0160109004810192821561488a5791602002820160005b83821115614a4957835183826101000a81548161ffff021916908361ffff1602179055509260200192600201602081600101049283019260010302614a09565b8015614a775782816101000a81549061ffff0219169055600201602081600101049283019260010302614a49565b50506148969291505b5b808211156148965760008155600101614a81565b803561ffff81168114612e0e57600080fd5b600060208284031215614ab957600080fd5b612bcb82614a95565b60005b83811015614add578181015183820152602001614ac5565b83811115612ae45750506000910152565b60008151808452614b06816020860160208601614ac2565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b60058110614b4e57634e487b7160e01b600052602160045260246000fd5b9052565b61ffff84168152606060208201526000614b6f6060830185614aee565b905061472f6040830184614b30565b6001600160e01b0319811681146136b257600080fd5b600060208284031215614ba657600080fd5b8135612bcb81614b7e565b600060208284031215614bc357600080fd5b5035919050565b86815261ffff8616602082015260c060408201526000614bed60c0830187614aee565b63ffffffff861660608401528281036080840152614c0b8186614aee565b915050614c1b60a0830184614b30565b979650505050505050565b602081526000612bcb6020830184614aee565b80356001600160a01b0381168114612e0e57600080fd5b60008060408385031215614c6357600080fd5b614c6c83614c39565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715614cb357614cb3614c7a565b60405290565b60405160a081016001600160401b0381118282101715614cb357614cb3614c7a565b60405160e081016001600160401b0381118282101715614cb357614cb3614c7a565b604051601f8201601f191681016001600160401b0381118282101715614d2557614d25614c7a565b604052919050565b803563ffffffff81168114612e0e57600080fd5b80356001600160401b0381168114612e0e57600080fd5b60006001600160401b03831115614d7157614d71614c7a565b614d84601f8401601f1916602001614cfd565b9050828152838383011115614d9857600080fd5b828260208301376000602084830101529392505050565b600082601f830112614dc057600080fd5b612bcb83833560208501614d58565b600060208284031215614de157600080fd5b81356001600160401b0380821115614df857600080fd5b908301906101208286031215614e0d57600080fd5b614e15614c90565b614e1e83614c39565b8152602083013560208201526040830135604082015260608301356060820152614e4a60808401614d2d565b6080820152614e5b60a08401614d2d565b60a0820152614e6c60c08401614d41565b60c082015260e083013560e08201526101008084013583811115614e8f57600080fd5b614e9b88828701614daf565b918301919091525095945050505050565b60008060408385031215614ebf57600080fd5b82359150614ecf60208401614c39565b90509250929050565b600060208284031215614eea57600080fd5b612bcb82614c39565b600081518084526020808501808196508360051b8101915082860160005b85811015614fd357828403895281516101208151865286820151614f3f888801826001600160a01b03169052565b50604082810151908701526060808301516001600160401b03811682890152505060808281015163ffffffff811688830152505060a0828101516001600160401b03811688830152505060c08281015163ffffffff811688830152505060e0828101519087015261010091820151918601819052614fbf81870183614aee565b9a87019a9550505090840190600101614f11565b5091979650505050505050565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156150385783516001600160a01b0316825292840192600192909201919084019061500f565b5060408701516001600160401b0381166060880152935060608701516001600160401b0381166080880152935060808701516001600160401b03811660a0880152935060a0870151868203601f190160c08801529350614c1b8185614ef3565b80358015158114612e0e57600080fd5b6000806000606084860312156150bd57600080fd5b6150c684614c39565b92506150d460208501614d2d565b91506150e260408501615098565b90509250925092565b60008060006060848603121561510057600080fd5b61510984614c39565b925061511760208501614c39565b9150604084013590509250925092565b803560058110612e0e57600080fd5b60006060828403121561514857600080fd5b604051606081016001600160401b03828210818311171561516b5761516b614c7a565b8160405282935061517b85614a95565b8352602085013591508082111561519157600080fd5b5061519e85828601614daf565b6020830152506151b060408401615127565b60408201525092915050565b6000602082840312156151ce57600080fd5b81356001600160401b038111156151e457600080fd5b61472f84828501615136565b602081526000612bcb6020830184614ef3565b60006020828403121561521557600080fd5b81356001600160401b0381111561522b57600080fd5b61472f84828501614daf565b60006020828403121561524957600080fd5b612bcb82614d2d565b600081518084526020808501945080840160005b8381101561528257815187529582019590820190600101615266565b509495945050505050565b6020815263ffffffff82511660208201526000602083015160a060408401526152b960c0840182614aee565b90506040840151601f19808584030160608601526152d78383614aee565b9250606086015191506152ed6080860183614b30565b60808601519150808584030160a0860152506153098282615252565b95945050505050565b6000806040838503121561532557600080fd5b61532e83614c39565b9150614ecf60208401614d2d565b6000806040838503121561534f57600080fd5b61535883614c39565b9150614ecf60208401615098565b60006001600160401b0382111561537f5761537f614c7a565b5060051b60200190565b600082601f83011261539a57600080fd5b813560206153af6153aa83615366565b614cfd565b82815260059290921b840181019181810190868411156153ce57600080fd5b8286015b848110156153e957803583529183019183016153d2565b509695505050505050565b600080600080600060a0868803121561540c57600080fd5b61541586614d2d565b945060208601356001600160401b038082111561543157600080fd5b61543d89838a01614daf565b9550604088013591508082111561545357600080fd5b61545f89838a01614daf565b945061546d60608901615127565b9350608088013591508082111561548357600080fd5b5061549088828901615389565b9150509295509295909350565b600080600080608085870312156154b357600080fd5b6154bc85614c39565b93506154ca60208601614c39565b92506040850135915060608501356001600160401b038111156154ec57600080fd5b8501601f810187136154fd57600080fd5b61550c87823560208401614d58565b91505092959194509250565b60006020828403121561552a57600080fd5b81356001600160401b038082111561554157600080fd5b9083019060a0828603121561555557600080fd5b61555d614cb9565b61556683614d2d565b815260208301358281111561557a57600080fd5b61558687828601614daf565b60208301525060408301358281111561559e57600080fd5b6155aa87828601614daf565b6040830152506155bc60608401615127565b60608201526080830135828111156155d357600080fd5b6155df87828601615389565b60808301525095945050505050565b63ffffffff8516815260806020820152600061560d6080830186614aee565b828103604084015261561f8186614aee565b9150506153096060830184614b30565b6000806040838503121561564257600080fd5b61564b83614c39565b9150614ecf60208401614c39565b6000806040838503121561566c57600080fd5b61567583614c39565b9150614ecf60208401614a95565b600081518084526020808501945080840160005b8381101561528257815161ffff1687529582019590820190600101615697565b602081526000612bcb6020830184615683565b600082601f8301126156db57600080fd5b813560206156eb6153aa83615366565b82815260059290921b8401810191818101908684111561570a57600080fd5b8286015b848110156153e95761571f81614a95565b835291830191830161570e565b60006020828403121561573e57600080fd5b81356001600160401b038082111561575557600080fd5b9083019060e0828603121561576957600080fd5b615771614cdb565b8235815260208301358281111561578757600080fd5b615793878286016156ca565b6020830152506157a560408401614a95565b60408201526060830135828111156157bc57600080fd5b6157c887828601614daf565b6060830152506157da60808401614d2d565b608082015260a0830135828111156157f157600080fd5b6157fd87828601614daf565b60a08301525061580f60c08401615127565b60c082015295945050505050565b600181811c9082168061583157607f821691505b6020821081141561585257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600063ffffffff808316818516818304811182151516156158a7576158a761586e565b02949350505050565b60006101408c83528b60208401528a604084015289606084015263ffffffff808a1660808501528160a08501526158e98285018a614aee565b6001600160401b0398891660c0860152961660e084015250509190931661010082015261012001919091529695505050505050565b60006001600160401b038083168185168083038211156159405761594061586e565b01949350505050565b6000821982111561595c5761595c61586e565b500190565b60208082526013908201527229b2b73232b91034b9903737ba1030b236b4b760691b604082015260600190565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60208082526023908201527f676f6f642074797065206964206d75737420626520677265617465722074686160408201526206e20360ec1b606082015260800190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b604081526000615a876040830185614aee565b9050612bcb6020830184614b30565b60208082526027908201527f676f6f642063617465676f7279206964206d75737420626520677265617465726040820152660207468616e20360cc1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006001600160401b0383811690831681811015615b3257615b3261586e565b039392505050565b6000808354615b488161581d565b60018281168015615b605760018114615b7157615ba0565b60ff19841687528287019450615ba0565b8760005260208060002060005b85811015615b975781548a820152908401908201615b7e565b50505082870194505b50929695505050505050565b60008251615bbe818460208701614ac2565b9190910192915050565b60008154615bd58161581d565b808552602060018381168015615bf25760018114615c0657615c34565b60ff19851688840152604088019550615c34565b866000528260002060005b85811015615c2c5781548a8201860152908301908401615c11565b890184019650505b505050505092915050565b608081526000615c526080830187615bc8565b602083820381850152615c658288615bc8565b9150615c746040850187614b30565b83820360608501528454808352600086815282812093830191905b81811015615cab57845483526001948501949284019201615c8f565b50909998505050505050505050565b60008351615ccc818460208801614ac2565b835190830190615940818360208801614ac2565b600063ffffffff80831681811415615cfa57615cfa61586e565b6001019392505050565b608081526000615d176080830187614aee565b8281036020840152615d298187614aee565b9050615d386040840186614b30565b8281036060840152614c1b8185615252565b6000600019821415615d5e57615d5e61586e565b5060010190565b60a081526000615d7860a0830188615683565b8281036020840152615d8a8188614aee565b905063ffffffff861660408401528281036060840152615daa8186614aee565b915050615dba6080830184614b30565b9695505050505050565b600082821015615dd657615dd661586e565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b600082615e5257615e52615e2d565b500490565b600082615e6657615e66615e2d565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090615dba90830184614aee565b600060208284031215615eb057600080fd5b8151612bcb81614b7e56fea26469706673582212202782d971a327c203a2280fcc67a0a0d247d4c9c582d1eb969e1711acf99b3fdf64736f6c634300080b0033',
  linkReferences: {},
  deployedLinkReferences: {},
};
