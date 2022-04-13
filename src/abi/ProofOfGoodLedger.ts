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
    '0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020016a141c9bdbd993d991dbdbd960aa1b81525060405180604001604052806003815260200162504f4760e81b8152506200006c62000066620000de60201b60201c565b620000e2565b81516200008190600190602085019062000132565b5080516200009790600290602084019062000132565b505050600160116000620000b0620000de60201b60201c565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905562000214565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200014090620001d8565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b600181811c90821680620001ed57607f821691505b6020821081036200020e57634e487b7160e01b600052602260045260246000fd5b50919050565b615fe980620002246000396000f3fe608060405234801561001057600080fd5b50600436106102885760003560e01c806301b844481461028d57806301ffc9a7146102b8578063056a305c146102db57806306fdde0314610300578063081812fc14610315578063095ea7b3146103405780630c97174f146103555780630fe316481461037d57806316feb0d0146103905780631785f53c146103a35780631d3a5d29146103b65780631fb4f1a0146103e257806323b872dd146103f55780632b70027114610408578063392b7633146104295780633b093ddc1461045a57806342842e0e146104cf578063429b62e5146104e257806347f6acf114610505578063489258641461050e5780634bf25ae1146105215780635dbdf4d8146105415780636352211e14610561578063696a16cb14610574578063704802751461058757806370a082311461059a578063715018a6146105ad57806372f0d7ac146105b557806377fde7f8146105c55780637a04a419146105d8578063838bf3e5146105f85780638c3080fa146106185780638da5cb5b14610646578063949d0cae1461064e57806395d89b4114610661578063a22cb46514610669578063aa792cb31461067c578063aaa758b11461068f578063aced36ce146106af578063b0351dc4146106c2578063b88d4fde146106d5578063bc2dfced146106e8578063c87b56dd146106f1578063cc33c87514610704578063cf3b7d9014610724578063d33e515014610747578063d69167e514610767578063d6918fdb1461077a578063db16711e1461078f578063dd86d01b146107a2578063e272578e146107c2578063e95d158b146107e2578063e985e9c5146107f5578063efdcc47f14610831578063f145c3fa14610844578063f2fde38b1461088a575b600080fd5b6102a061029b366004614924565b61089d565b6040516102af939291906149cf565b60405180910390f35b6102cb6102c6366004614a18565b610952565b60405190151581526020016102af565b6102ee6102e9366004614a35565b6109a4565b6040516102af96959493929190614a4e565b610308610b01565b6040516102af9190614aa9565b610328610323366004614a35565b610b93565b6040516001600160a01b0390911681526020016102af565b61035361034e366004614ad3565b610c20565b005b60175461036a90600160201b900461ffff1681565b60405161ffff90911681526020016102af565b61035361038b366004614c52565b610d30565b61035361039e366004614d2f565b6113b3565b6103536103b1366004614d5b565b611449565b6017546103cd90600160401b900463ffffffff1681565b60405163ffffffff90911681526020016102af565b6103536103f0366004614d86565b611499565b610353610403366004614dc9565b611575565b61041b610416366004614ea2565b6115a6565b6040519081526020016102af565b6103cd610437366004614f78565b805160208183018101805160108252928201919093012091525463ffffffff1681565b6104a0610468366004614a35565b601560205260009081526040902080546002909101546001600160401b0380821691600160401b8104821691600160801b9091041684565b604080519485526001600160401b039384166020860152918316918401919091521660608201526080016102af565b6103536104dd366004614dc9565b6117c3565b6102cb6104f0366004614d5b565b60116020526000908152604090205460ff1681565b61041b60085481565b61035361051c366004614fb9565b6117de565b61041b61052f366004614a35565b60146020526000908152604090205481565b61041b61054f366004614924565b600b6020526000908152604090205481565b61032861056f366004614a35565b61192a565b600a54610328906001600160a01b031681565b610353610595366004614d5b565b6119a1565b61041b6105a8366004614d5b565b611a07565b610353611a8e565b6017546103cd9063ffffffff1681565b6103536105d336600461506f565b611ac9565b6105eb6105e6366004615160565b611e2c565b6040516102af91906151b6565b61060b610606366004614a35565b612079565b6040516102af9190615265565b6102cb6106263660046152f9565b601260209081526000928352604080842090915290825290205460ff1681565b6103286122c4565b6102cb61065c366004614ad3565b6122d3565b6103086123f1565b610353610677366004615323565b612400565b6102a061068a366004614924565b61240f565b6106a261069d366004614a35565b612441565b6040516102af9190615449565b6103536106bd366004615506565b612690565b6103536106d0366004614d5b565b6128e1565b6103536106e33660046155af565b612932565b61041b60095481565b6103086106ff366004614a35565b61296a565b610717610712366004614a35565b612a42565b6040516102af919061562a565b610737610732366004614a35565b612b6a565b6040516102af949392919061563d565b61075a610755366004614a35565b612cb0565b6040516102af919061567b565b6106a2610775366004614d5b565b612e36565b60175461036a90600160301b900461ffff1681565b61035361079d366004614fb9565b612e60565b6107b56107b036600461568e565b612f9f565b6040516102af9190615702565b61041b6107d0366004614d5b565b60136020526000908152604090205481565b6103536107f0366004615820565b613396565b6102cb610803366004615820565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6106a261083f366004614a35565b6136a9565b61041b61085236600461584a565b6001600160a01b03821660009081526013602090815260408083205483526016825280832061ffff8516845290915290205492915050565b610353610898366004614d5b565b6136bd565b600d602052600090815260409020805460018201805461ffff8316936201000090930460ff169291906108cf90615874565b80601f01602080910402602001604051908101604052809291908181526020018280546108fb90615874565b80156109485780601f1061091d57610100808354040283529160200191610948565b820191906000526020600020905b81548152906001019060200180831161092b57829003601f168201915b5050505050905083565b60006001600160e01b031982166380ac58cd60e01b148061098357506001600160e01b03198216635b5e139f60e01b145b8061099e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600e60205260009081526040902080546002820154600383018054929361ffff8316936201000090930460ff16929091906109de90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0a90615874565b8015610a575780601f10610a2c57610100808354040283529160200191610a57565b820191906000526020600020905b815481529060010190602001808311610a3a57829003601f168201915b5050506004840154600585018054949563ffffffff909216949193509150610a7e90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054610aaa90615874565b8015610af75780601f10610acc57610100808354040283529160200191610af7565b820191906000526020600020905b815481529060010190602001808311610ada57829003601f168201915b5050505050905086565b606060018054610b1090615874565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3c90615874565b8015610b895780601f10610b5e57610100808354040283529160200191610b89565b820191906000526020600020905b815481529060010190602001808311610b6c57829003601f168201915b5050505050905090565b6000610b9e8261375d565b610c045760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b6000610c2b8261192a565b9050806001600160a01b0316836001600160a01b031603610c985760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610bfb565b336001600160a01b0382161480610cb45750610cb48133610803565b610d215760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b6064820152608401610bfb565b610d2b838361377a565b505050565b3360009081526011602052604090205460ff1680610d725750336000908152601260209081526040808320608085015163ffffffff16845290915290205460ff165b610d8e5760405162461bcd60e51b8152600401610bfb906158ae565b600080610da88360400151846000015185602001516137e8565b91509150610db583613b2e565b610df25760405162461bcd60e51b815260206004820152600e60248201526d4661696c6564206120636865636b60901b6044820152606401610bfb565b610e00600780546001019055565b6000610e0b60075490565b9050610e178282613fdc565b60608401516000908152600e602052604081206004015460a0860151610e439163ffffffff16906158f4565b63ffffffff169050826001600160a01b03167fe3f157739acb4b4fca01bf36ba7ed4b2805f0a03b74d7e3a8726e11dbbe682da8387602001518789606001518a608001518b6101000151888d60a001518e60c001518f60e00151604051610eb39a99989796959493929190615920565b60405180910390a2600060405180610120016040528084815260200187606001518152602001856001600160a01b03168152602001836001600160401b031681526020018760a0015163ffffffff1681526020018760c001516001600160401b03168152602001876080015163ffffffff1681526020018760e00151815260200187610100015181525090506000600e6000886060015181526020019081526020016000206040518060e00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020018280548015610fe457602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411610fab5790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff16600481111561101b5761101b61493f565b600481111561102c5761102c61493f565b815260200160038201805461104090615874565b80601f016020809104026020016040519081016040528092919081815260200182805461106c90615874565b80156110b95780601f1061108e576101008083540402835291602001916110b9565b820191906000526020600020905b81548152906001019060200180831161109c57829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916110e690615874565b80601f016020809104026020016040519081016040528092919081815260200182805461111290615874565b801561115f5780601f106111345761010080835404028352916020019161115f565b820191906000526020600020905b81548152906001019060200180831161114257829003601f168201915b5050509190925250505060008781526015602090815260408083206003908101805460018082018355918652948490208851600690960201948555878401519085015590860151600284018054606089015160808a01516001600160a01b039094166001600160e01b031990921691909117600160a01b6001600160401b0392831602176001600160e01b0316600160e01b63ffffffff948516021790915560a0880151928501805460c08a0151949092166001600160601b031990921691909117600160401b939092169290920217905560e08501516004830155610100850151805193945085936112589260058501920190614651565b505050600086815260156020526040812060020180548592906112859084906001600160401b031661598e565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826015600088815260200190815260200160002060020160088282829054906101000a90046001600160401b03166112e1919061598e565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826001600160401b0316601660008881526020019081526020016000206000836040015161ffff1661ffff168152602001908152602001600020600082825461134e91906159b9565b92505081905550826001600160401b03166008600082825461137091906159b9565b909155505060408082015161ffff166000908152600b60205290812080546001600160401b03861692906113a59084906159b9565b909155505050505050505050565b3360009081526011602052604090205460ff166113e25760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b0381166000908152601360205260409020548015801590611417575060008181526015602052604090205481145b6114335760405162461bcd60e51b8152600401610bfb906159d1565b6000928352601460205260409092209190915550565b3360009081526011602052604090205460ff166114785760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b03166000908152601160205260409020805460ff19169055565b3360009081526011602052604090205460ff166114c85760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b0383166114db57600080fd5b8163ffffffff166000036115015760405162461bcd60e51b8152600401610bfb906159fc565b63ffffffff8083166000818152600f6020526040902054909116146115385760405162461bcd60e51b8152600401610bfb90615a2f565b6001600160a01b03909216600090815260126020908152604080832063ffffffff909416835292905220805491151560ff19909216919091179055565b61157f33826140fc565b61159b5760405162461bcd60e51b8152600401610bfb90615a5e565b610d2b838383614171565b3360009081526011602052604081205460ff166115d55760405162461bcd60e51b8152600401610bfb906158ae565b6000826040015151116115fa5760405162461bcd60e51b8152600401610bfb90615aaf565b6010826040015160405161160e9190615ad6565b9081526040519081900360200190205463ffffffff161561166e5760405162461bcd60e51b815260206004820152601a602482015279676f6f64206f7261636c6520616c72656164792065786973747360301b6044820152606401610bfb565b6017805463ffffffff808216600101811663ffffffff1992831681179093558285526000928352600f6020908152604090932085518154921692821683178155928501518593929091839164ffffffffff1990911617600160201b8360048111156116db576116db61493f565b0217905550604082015180516116fb916001840191602090910190614651565b5060608201518051611717916002840191602090910190614651565b50608082015180516117339160038401916020909101906146d5565b509050508160000151601083604001516040516117509190615ad6565b9081526040805160209281900383018120805463ffffffff191663ffffffff95861617905585519186015160608701519387015160808801519390951694600080516020615f74833981519152946117ac949293909290615af2565b60405180910390a250805163ffffffff165b919050565b610d2b83838360405180602001604052806000815250612932565b3360009081526011602052604090205460ff1661180d5760405162461bcd60e51b8152600401610bfb906158ae565b600082511161182e5760405162461bcd60e51b8152600401610bfb90615aaf565b8261ffff16600003611883576017805461ffff60301b198116600160301b9182900461ffff908116600101908116928302919091179092556000818152600c60205260409020805461ffff1916909117905592505b61ffff83166000908152600c6020908152604090912083516118ad92600190920191850190614651565b5061ffff83166000908152600c60205260409020805482919062ff00001916620100008360048111156118e2576118e261493f565b02179055508261ffff167f4fcd383604332b394161a254d359c73296253b0e25354b61f8a192f2ca90f1c0838360405161191d929190615b38565b60405180910390a2505050565b6000818152600360205260408120546001600160a01b03168061099e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610bfb565b3360009081526011602052604090205460ff166119d05760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b0381166119e357600080fd5b6001600160a01b03166000908152601160205260409020805460ff19166001179055565b60006001600160a01b038216611a725760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610bfb565b506001600160a01b031660009081526004602052604090205490565b33611a976122c4565b6001600160a01b031614611abd5760405162461bcd60e51b8152600401610bfb90615b5a565b611ac760006142fb565b565b3360009081526011602052604090205460ff16611af85760405162461bcd60e51b8152600401610bfb906158ae565b8051600003611b2f576017805463ffffffff60401b198116600160401b9182900463ffffffff908116600101169182021790915581525b60005b816020015151811015611c2e57600082602001518281518110611b5757611b57615b8f565b602002602001015161ffff1611611b805760405162461bcd60e51b8152600401610bfb906159fc565b6001600c600084602001518481518110611b9c57611b9c615b8f565b60209081029190910181015161ffff1682528101919091526040016000205462010000900460ff166004811115611bd557611bd561493f565b14611c1c5760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610bfb565b80611c2681615ba5565b915050611b32565b506000816040015161ffff1611611c575760405162461bcd60e51b8152600401610bfb906159fc565b600160408281015161ffff166000908152600d602052205462010000900460ff166004811115611c8957611c8961493f565b14611cd45760405162461bcd60e51b815260206004820152601b60248201527a676f6f642063617465676f7279206973206e6f742061637469766560281b6044820152606401610bfb565b600081608001515111611cf95760405162461bcd60e51b8152600401610bfb90615aaf565b80516000908152600e60209081526040909120825181558183015180518493611d2992600185019291019061470f565b50604082015160028201805461ffff90921661ffff1983168117825560608501519262ffffff19161762010000836004811115611d6857611d6861493f565b021790555060808201518051611d88916003840191602090910190614651565b5060a082015160048201805463ffffffff191663ffffffff90921691909117905560c08201518051611dc4916005840191602090910190614651565b50905050806040015161ffff1681600001517f27b90160eaa4ab2aa06fabc8c7f0a5acd0041ec04a3851eb1b5881c94ee37d12836020015184608001518560a001518660c001518760600151604051611e21959493929190615bbe565b60405180910390a350565b611e5f6040805160a081019091526000808252602082019081526020016060815260200160608152602001606081525090565b63ffffffff8083166000818152600f602052604090205490911614611e965760405162461bcd60e51b8152600401610bfb90615a2f565b63ffffffff8281166000908152600f6020908152604091829020825160a0810190935280549384168352919290830190600160201b900460ff166004811115611ee157611ee161493f565b6004811115611ef257611ef261493f565b8152602001600182018054611f0690615874565b80601f0160208091040260200160405190810160405280929190818152602001828054611f3290615874565b8015611f7f5780601f10611f5457610100808354040283529160200191611f7f565b820191906000526020600020905b815481529060010190602001808311611f6257829003601f168201915b50505050508152602001600282018054611f9890615874565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc490615874565b80156120115780601f10611fe657610100808354040283529160200191612011565b820191906000526020600020905b815481529060010190602001808311611ff457829003601f168201915b505050505081526020016003820180548060200260200160405190810160405280929190818152602001828054801561206957602002820191906000526020600020905b815481526020019060010190808311612055575b5050505050815250509050919050565b6120816147b3565b6000828152600e602052604081205490036120ae5760405162461bcd60e51b8152600401610bfb90615c13565b6000828152600e6020908152604091829020825160e081018452815481526001820180548551818602810186019096528086529194929385810193929083018282801561214257602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116121095790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff1660048111156121795761217961493f565b600481111561218a5761218a61493f565b815260200160038201805461219e90615874565b80601f01602080910402602001604051908101604052809291908181526020018280546121ca90615874565b80156122175780601f106121ec57610100808354040283529160200191612217565b820191906000526020600020905b8154815290600101906020018083116121fa57829003601f168201915b5050509183525050600482015463ffffffff16602082015260058201805460409092019161224490615874565b80601f016020809104026020016040519081016040528092919081815260200182805461227090615874565b80156120695780601f1061229257610100808354040283529160200191612069565b820191906000526020600020905b8154815290600101906020018083116122a057505050919092525091949350505050565b6000546001600160a01b031690565b600a546000906001600160a01b031633146123005760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b03831660009081526013602090815260408083205483526015909152812060020180548492906123419084906001600160401b0316615c44565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550816009600082825461237791906159b9565b90915550506001600160a01b038316600081815260136020908152604080832054835260158252918290206002015482518681526001600160401b03909116918101919091527f9ce3299c5bcff8db5ce8560d5c76cf01d7bc08936eca4f80b2506502560a8944910160405180910390a250600192915050565b606060028054610b1090615874565b61240b33838361434b565b5050565b600c602052600090815260409020805460018201805461ffff8316936201000090930460ff169291906108cf90615874565b612449614803565b6000828152601560209081526040808320815160c0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156124bf57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116124a1575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b828210156126685760008481526020908190206040805161012081018252600686029092018054835260018101549383019390935260028301546001600160a01b038116918301919091526001600160401b03600160a01b82048116606084015263ffffffff600160e01b90920482166080840152600384015490811660a0840152600160401b90041660c0820152600482015460e0820152600582018054919291610100840191906125d790615874565b80601f016020809104026020016040519081016040528092919081815260200182805461260390615874565b80156126505780601f1061262557610100808354040283529160200191612650565b820191906000526020600020905b81548152906001019060200180831161263357829003601f168201915b50505050508152505081526020019060010190612525565b50505091525050805190915061099e5760405162461bcd60e51b8152600401610bfb906159d1565b3360009081526011602052604090205460ff166126bf5760405162461bcd60e51b8152600401610bfb906158ae565b60008563ffffffff16116126e55760405162461bcd60e51b8152600401610bfb906159fc565b63ffffffff8086166000818152600f60205260409020549091161461271c5760405162461bcd60e51b8152600401610bfb90615a2f565b8351156127c4576010600f60008763ffffffff16815260200190815260200160002060010160405161274e9190615c6c565b908152604051908190036020018120805463ffffffff191690558590601090612778908790615ad6565b9081526040805160209281900383019020805463ffffffff191663ffffffff9485161790559187166000908152600f82529190912085516127c29260019290920191870190614651565b505b8251156127f95763ffffffff85166000908152600f6020908152604090912084516127f792600290920191860190614651565b505b600082600481111561280d5761280d61493f565b146128505763ffffffff85166000908152600f60205260409020805483919060ff60201b1916600160201b83600481111561284a5761284a61493f565b02179055505b8051156128855763ffffffff85166000908152600f602090815260409091208251612883926003909201918401906146d5565b505b63ffffffff85166000818152600f60205260409081902080549151600080516020615f74833981519152926128d29260018101926002820192600160201b900460ff169160030190615d55565b60405180910390a25050505050565b336128ea6122c4565b6001600160a01b0316146129105760405162461bcd60e51b8152600401610bfb90615b5a565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b61293c33836140fc565b6129585760405162461bcd60e51b8152600401610bfb90615a5e565b61296484848484614415565b50505050565b60606129758261375d565b6129d95760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610bfb565b60006129f060408051602081019091526000815290565b90506000815111612a105760405180602001604052806000815250612a3b565b80612a1a84614448565b604051602001612a2b929190615dd0565b6040516020818303038152906040525b9392505050565b612ab8604051806101200160405280600081526020016000815260200160006001600160a01b0316815260200160006001600160401b03168152602001600063ffffffff16815260200160006001600160401b03168152602001600063ffffffff16815260200160008152602001606081525090565b6000612af060136000612aca8661192a565b6001600160a01b03166001600160a01b0316815260200190815260200160002054612441565b905060005b8160a0015151811015612b6357838260a001518281518110612b1957612b19615b8f565b60200260200101516000015103612b51578160a001518181518110612b4057612b40615b8f565b602002602001015192505050919050565b80612b5b81615ba5565b915050612af5565b5050919050565b600f602052600090815260409020805460018201805463ffffffff831693600160201b90930460ff16929190612b9f90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054612bcb90615874565b8015612c185780601f10612bed57610100808354040283529160200191612c18565b820191906000526020600020905b815481529060010190602001808311612bfb57829003601f168201915b505050505090806002018054612c2d90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054612c5990615874565b8015612ca65780601f10612c7b57610100808354040283529160200191612ca6565b820191906000526020600020905b815481529060010190602001808311612c8957829003601f168201915b5050505050905084565b606060156000838152602001908152602001600020600301805480602002602001604051908101604052809291908181526020016000905b82821015612e2b5760008481526020908190206040805161012081018252600686029092018054835260018101549383019390935260028301546001600160a01b038116918301919091526001600160401b03600160a01b82048116606084015263ffffffff600160e01b90920482166080840152600384015490811660a0840152600160401b90041660c0820152600482015460e082015260058201805491929161010084019190612d9a90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054612dc690615874565b8015612e135780601f10612de857610100808354040283529160200191612e13565b820191906000526020600020905b815481529060010190602001808311612df657829003601f168201915b50505050508152505081526020019060010190612ce8565b505050509050919050565b612e3e614803565b6001600160a01b03821660009081526013602052604090205461099e90612441565b3360009081526011602052604090205460ff16612e8f5760405162461bcd60e51b8152600401610bfb906158ae565b6000825111612eb05760405162461bcd60e51b8152600401610bfb90615aaf565b8261ffff16600003612f05576017805461ffff60201b198116600160201b9182900461ffff908116600101908116928302919091179092556000818152600d60205260409020805461ffff1916909117905592505b61ffff83166000908152600d602090815260409091208351612f2f92600190920191850190614651565b5061ffff83166000908152600d60205260409020805482919062ff0000191662010000836004811115612f6457612f6461493f565b02179055508261ffff167fa64371df3e4e587f97e094b4e6cb2dd8780392180388ec6f7c2ac098a8452feb838360405161191d929190615b38565b60606000826001600160401b03811115612fbb57612fbb614afd565b604051908082528060200260200182016040528015612ff457816020015b612fe1614837565b815260200190600190039081612fd95790505b50905060005b8381101561338e57600061302886868481811061301957613019615b8f565b90506040020160000135612a42565b9050613032614837565b6020808301516000908152600e82526040808220815160e081018352815481526001820180548451818802810188019095528085529495919492938583019390928301828280156130ca57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116130915790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff1660048111156131015761310161493f565b60048111156131125761311261493f565b815260200160038201805461312690615874565b80601f016020809104026020016040519081016040528092919081815260200182805461315290615874565b801561319f5780601f106131745761010080835404028352916020019161319f565b820191906000526020600020905b81548152906001019060200180831161318257829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916131cc90615874565b80601f01602080910402602001604051908101604052809291908181526020018280546131f890615874565b80156132455780601f1061321a57610100808354040283529160200191613245565b820191906000526020600020905b81548152906001019060200180831161322857829003601f168201915b505050919092525050845184525060a08401516001600160401b03166020808501919091526040808601516001600160a01b0316600090815260138352819020548151928301529192500160408051601f19818403018152918152830152602081015180516000906132b9576132b9615b8f565b602090810291909101015161ffff1660608084019190915260e08085015160808086019190915260c08087015163ffffffff90811660a08801529187018051831691870191909152928601516001600160401b0316918501919091526101008086015190850152905161332c9116614448565b8160c00151604051602001613342929190615df6565b6040516020818303038152906040528261012001819052508185858151811061336d5761336d615b8f565b6020026020010181905250505050808061338690615ba5565b915050612ffa565b509392505050565b3360009081526011602052604090205460ff166133c55760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b038083166000908152601360208181526040808420548452601580835281852095871685529282528084205484529190529020805482540361343f5760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610bfb565b815461345d5760405162461bcd60e51b8152600401610bfb906159d1565b805461347b5760405162461bcd60e51b8152600401610bfb906159d1565b60028082015490830180546001600160401b03928316926000916134a19185911661598e565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160089054906101000a90046001600160401b03168260020160088282829054906101000a90046001600160401b0316613502919061598e565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160109054906101000a90046001600160401b03168260020160108282829054906101000a90046001600160401b0316613563919061598e565b92506101000a8154816001600160401b0302191690836001600160401b0316021790555060005b600182015481101561363f57826001018260010182815481106135af576135af615b8f565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b039092169190911790558454918401805460139291908590811061360857613608615b8f565b60009182526020808320909101546001600160a01b031683528201929092526040019020558061363781615ba5565b91505061358a565b506002810180546001600160c01b031916905561366060018201600061488a565b604080516001600160a01b038087168252851660208201527f239567be74fe3e80a3e23e994c3234310617523efa3bdb81b591bda34e070368910160405180910390a150505050565b6136b1614803565b61099e6107758361192a565b336136c66122c4565b6001600160a01b0316146136ec5760405162461bcd60e51b8152600401610bfb90615b5a565b6001600160a01b0381166137515760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610bfb565b61375a816142fb565b50565b6000908152600360205260409020546001600160a01b0316151590565b600081815260056020526040902080546001600160a01b0319166001600160a01b03841690811790915581906137af8261192a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080841561391657600085815260156020526040902054613911576001600160a01b0384161580159061383357506001600160a01b03841660009081526013602052604090205415155b15613858576001600160a01b03841660009081526013602052604090205494506139c7565b8215801590613874575060008381526014602052604090205415155b1561388f5760008381526014602052604090205494506139c7565b6001600160a01b0384166138b55760405162461bcd60e51b8152600401610bfb90615e32565b600085815260156020818152604080842089815581518084019092526001600160a01b0389168252938990529190526138f491600190810191906148a8565b506001600160a01b03841660009081526013602052604090208590555b6139c7565b6001600160a01b03841615613978576001600160a01b0384166000908152601360205260409020549450841580159061395c575060008581526015602052604090205485145b6139115760405162461bcd60e51b8152600401610bfb906159d1565b82156139c757600083815260146020526040902054945084158015906139ab575060008581526015602052604090205485145b6139c75760405162461bcd60e51b8152600401610bfb906159d1565b6001600160a01b038416613a0f57600085815260156020526040812060010180549091906139f7576139f7615b8f565b6000918252602090912001546001600160a01b031693505b6001600160a01b038416613a355760405162461bcd60e51b8152600401610bfb90615e32565b6001600160a01b038416600090815260136020526040902054613a9c576001600160a01b0384166000818152601360209081526040808320899055888352601582528220600190810180549182018155835291200180546001600160a01b03191690911790555b8215801590613ab957506000838152601460205260409020548514155b15613b255760008381526014602052604090205415613b135760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610bfb565b60008381526014602052604090208590555b50929391925050565b60608101516000908152600e6020526040812080548203613b615760405162461bcd60e51b8152600401610bfb90615c13565b6001600282015462010000900460ff166004811115613b8257613b8261493f565b14613b9f5760405162461bcd60e51b8152600401610bfb90615e58565b60005b6001820154811015613cbd576001600c6000846001018481548110613bc957613bc9615b8f565b60009182526020808320601083040154600f9092166002026101000a90910461ffff16835282019290925260400190205462010000900460ff166004811115613c1457613c1461493f565b14613c315760405162461bcd60e51b8152600401610bfb90615e58565b816001018181548110613c4657613c46615b8f565b600091825260208220601082040154600f9091166002026101000a900461ffff169003613cab5760405162461bcd60e51b815260206004820152601360248201527219dbdbd9081d1e5c19481b9bdd08199bdd5b99606a1b6044820152606401610bfb565b80613cb581615ba5565b915050613ba2565b506001600282015461ffff166000908152600d602052604090205462010000900460ff166004811115613cf257613cf261493f565b14613d0f5760405162461bcd60e51b8152600401610bfb90615e58565b608083015163ffffffff9081166000908152600f60205260408120549091169003613d4c5760405162461bcd60e51b8152600401610bfb90615a2f565b6001608084015163ffffffff166000908152600f6020526040902054600160201b900460ff166004811115613d8357613d8361493f565b14613da05760405162461bcd60e51b8152600401610bfb90615e58565b6000805b608085015163ffffffff166000908152600f6020526040902060030154811015613e2257608085015163ffffffff166000908152600f60205260409020600301805482908110613df657613df6615b8f565b9060005260206000200154856060015103613e1057600191505b80613e1a81615ba5565b915050613da4565b5080613e845760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610bfb565b620f42408460a0015163ffffffff161115613ed25760405162461bcd60e51b815260206004820152600e60248201526d756e697473206f766572666c6f7760901b6044820152606401610bfb565b60008460a0015163ffffffff1611613f2b5760405162461bcd60e51b815260206004820152601c60248201527b0756e697473206d7573742062652067726561746572207468616e20360241b6044820152606401610bfb565b60008461010001515111613f755760405162461bcd60e51b815260206004820152601160248201527070726f6f6655524c20697320656d70747960781b6044820152606401610bfb565b60008460c001516001600160401b031611613fd25760405162461bcd60e51b815260206004820181905260248201527f74696d657374616d70206d7573742062652067726561746572207468616e20306044820152606401610bfb565b5060019392505050565b6001600160a01b0382166140325760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610bfb565b61403b8161375d565b156140875760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610bfb565b6001600160a01b03821660009081526004602052604081208054600192906140b09084906159b9565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020615f94833981519152908290a45050565b60006141078261375d565b6141685760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610bfb565b50600092915050565b826001600160a01b03166141848261192a565b6001600160a01b0316146141e85760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610bfb565b6001600160a01b03821661424a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610bfb565b61425560008261377a565b6001600160a01b038316600090815260046020526040812080546001929061427e908490615e7c565b90915550506001600160a01b03821660009081526004602052604081208054600192906142ac9084906159b9565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151849391871691600080516020615f9483398151915291a4505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036143a85760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610bfb565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b614420848484614171565b61442c84848484614550565b6129645760405162461bcd60e51b8152600401610bfb90615e93565b60608160000361446f5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115614499578061448381615ba5565b91506144929050600a83615efb565b9150614473565b6000816001600160401b038111156144b3576144b3614afd565b6040519080825280601f01601f1916602001820160405280156144dd576020820181803683370190505b5090505b8415614548576144f2600183615e7c565b91506144ff600a86615f0f565b61450a9060306159b9565b60f81b81838151811061451f5761451f615b8f565b60200101906001600160f81b031916908160001a905350614541600a86615efb565b94506144e1565b949350505050565b60006001600160a01b0384163b1561464657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290614594903390899088908890600401615f23565b6020604051808303816000875af19250505080156145cf575060408051601f3d908101601f191682019092526145cc91810190615f56565b60015b61462c573d8080156145fd576040519150601f19603f3d011682016040523d82523d6000602084013e614602565b606091505b5080516000036146245760405162461bcd60e51b8152600401610bfb90615e93565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050614548565b506001949350505050565b82805461465d90615874565b90600052602060002090601f01602090048101928261467f57600085556146c5565b82601f1061469857805160ff19168380011785556146c5565b828001600101855582156146c5579182015b828111156146c55782518255916020019190600101906146aa565b506146d19291506148fd565b5090565b8280548282559060005260206000209081019282156146c557916020028201828111156146c55782518255916020019190600101906146aa565b82805482825590600052602060002090600f016010900481019282156146c55791602002820160005b8382111561477857835183826101000a81548161ffff021916908361ffff1602179055509260200192600201602081600101049283019260010302614738565b80156147a65782816101000a81549061ffff0219169055600201602081600101049283019260010302614778565b50506146d19291506148fd565b6040518060e001604052806000815260200160608152602001600061ffff168152602001600060048111156147ea576147ea61493f565b8152606060208201819052600060408301529081015290565b6040805160c0810182526000808252606060208301819052928201819052828201819052608082015260a081019190915290565b604080516101408101825260008082526020820181905260609282018390528282018190526080820181905260a0820181905260c0820181905260e0820152610100810182905261012081019190915290565b508054600082559060005260206000209081019061375a91906148fd565b8280548282559060005260206000209081019282156146c5579160200282015b828111156146c557825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906148c8565b5b808211156146d157600081556001016148fe565b803561ffff811681146117be57600080fd5b60006020828403121561493657600080fd5b612a3b82614912565b634e487b7160e01b600052602160045260246000fd5b6005811061497357634e487b7160e01b600052602160045260246000fd5b9052565b60005b8381101561499257818101518382015260200161497a565b838111156129645750506000910152565b600081518084526149bb816020860160208601614977565b601f01601f19169290920160200192915050565b61ffff841681526149e36020820184614955565b6060604082015260006149f960608301846149a3565b95945050505050565b6001600160e01b03198116811461375a57600080fd5b600060208284031215614a2a57600080fd5b8135612a3b81614a02565b600060208284031215614a4757600080fd5b5035919050565b86815261ffff86166020820152614a686040820186614955565b60c060608201526000614a7e60c08301866149a3565b63ffffffff8516608084015282810360a0840152614a9c81856149a3565b9998505050505050505050565b602081526000612a3b60208301846149a3565b80356001600160a01b03811681146117be57600080fd5b60008060408385031215614ae657600080fd5b614aef83614abc565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715614b3657614b36614afd565b60405290565b60405160a081016001600160401b0381118282101715614b3657614b36614afd565b60405160e081016001600160401b0381118282101715614b3657614b36614afd565b604051601f8201601f191681016001600160401b0381118282101715614ba857614ba8614afd565b604052919050565b803563ffffffff811681146117be57600080fd5b80356001600160401b03811681146117be57600080fd5b60006001600160401b03831115614bf457614bf4614afd565b614c07601f8401601f1916602001614b80565b9050828152838383011115614c1b57600080fd5b828260208301376000602084830101529392505050565b600082601f830112614c4357600080fd5b612a3b83833560208501614bdb565b600060208284031215614c6457600080fd5b81356001600160401b0380821115614c7b57600080fd5b908301906101208286031215614c9057600080fd5b614c98614b13565b614ca183614abc565b8152602083013560208201526040830135604082015260608301356060820152614ccd60808401614bb0565b6080820152614cde60a08401614bb0565b60a0820152614cef60c08401614bc4565b60c082015260e083013560e08201526101008084013583811115614d1257600080fd5b614d1e88828701614c32565b918301919091525095945050505050565b60008060408385031215614d4257600080fd5b82359150614d5260208401614abc565b90509250929050565b600060208284031215614d6d57600080fd5b612a3b82614abc565b803580151581146117be57600080fd5b600080600060608486031215614d9b57600080fd5b614da484614abc565b9250614db260208501614bb0565b9150614dc060408501614d76565b90509250925092565b600080600060608486031215614dde57600080fd5b614de784614abc565b9250614df560208501614abc565b9150604084013590509250925092565b8035600581106117be57600080fd5b60006001600160401b03821115614e2d57614e2d614afd565b5060051b60200190565b600082601f830112614e4857600080fd5b81356020614e5d614e5883614e14565b614b80565b82815260059290921b84018101918181019086841115614e7c57600080fd5b8286015b84811015614e975780358352918301918301614e80565b509695505050505050565b600060208284031215614eb457600080fd5b81356001600160401b0380821115614ecb57600080fd5b9083019060a08286031215614edf57600080fd5b614ee7614b3c565b614ef083614bb0565b8152614efe60208401614e05565b6020820152604083013582811115614f1557600080fd5b614f2187828601614c32565b604083015250606083013582811115614f3957600080fd5b614f4587828601614c32565b606083015250608083013582811115614f5d57600080fd5b614f6987828601614e37565b60808301525095945050505050565b600060208284031215614f8a57600080fd5b81356001600160401b03811115614fa057600080fd5b61454884828501614c32565b6001600160401b03169052565b600080600060608486031215614fce57600080fd5b614fd784614912565b925060208401356001600160401b03811115614ff257600080fd5b614ffe86828701614c32565b925050614dc060408501614e05565b600082601f83011261501e57600080fd5b8135602061502e614e5883614e14565b82815260059290921b8401810191818101908684111561504d57600080fd5b8286015b84811015614e975761506281614912565b8352918301918301615051565b60006020828403121561508157600080fd5b81356001600160401b038082111561509857600080fd5b9083019060e082860312156150ac57600080fd5b6150b4614b5e565b823581526020830135828111156150ca57600080fd5b6150d68782860161500d565b6020830152506150e860408401614912565b60408201526150f960608401614e05565b606082015260808301358281111561511057600080fd5b61511c87828601614c32565b60808301525061512e60a08401614bb0565b60a082015260c08301358281111561514557600080fd5b61515187828601614c32565b60c08301525095945050505050565b60006020828403121561517257600080fd5b612a3b82614bb0565b600081518084526020808501945080840160005b838110156151ab5781518752958201959082019060010161518f565b509495945050505050565b6020815263ffffffff8251166020820152600060208301516151db6040840182614955565b50604083015160a060608401526151f560c08401826149a3565b90506060840151601f198085840301608086015261521383836149a3565b925060808601519150808584030160a0860152506149f9828261517b565b600081518084526020808501945080840160005b838110156151ab57815161ffff1687529582019590820190600101615245565b60208152815160208201526000602083015160e0604084015261528c610100840182615231565b905061ffff604085015116606084015260608401516152ae6080850182614955565b506080840151601f19808584030160a08601526152cb83836149a3565b925063ffffffff60a08701511660c086015260c08601519150808584030160e0860152506149f982826149a3565b6000806040838503121561530c57600080fd5b61531583614abc565b9150614d5260208401614bb0565b6000806040838503121561533657600080fd5b61533f83614abc565b9150614d5260208401614d76565b6000610120825184526020830151602085015260018060a01b03604084015116604085015260608301516153846060860182614fac565b50608083015161539c608086018263ffffffff169052565b5060a08301516153af60a0860182614fac565b5060c08301516153c760c086018263ffffffff169052565b5060e083015160e08501526101008084015182828701526153ea838701826149a3565b9695505050505050565b600081518084526020808501808196508360051b8101915082860160005b8581101561543c57828403895261542a84835161534d565b98850198935090840190600101615412565b5091979650505050505050565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156154a15783516001600160a01b03168252928401926001929092019190840190615478565b50604087015193506154b66060870185614fac565b606087015193506154ca6080870185614fac565b608087015193506154de60a0870185614fac565b60a0870151868203601f190160c088015293506154fb81856153f4565b979650505050505050565b600080600080600060a0868803121561551e57600080fd5b61552786614bb0565b945060208601356001600160401b038082111561554357600080fd5b61554f89838a01614c32565b9550604088013591508082111561556557600080fd5b61557189838a01614c32565b945061557f60608901614e05565b9350608088013591508082111561559557600080fd5b506155a288828901614e37565b9150509295509295909350565b600080600080608085870312156155c557600080fd5b6155ce85614abc565b93506155dc60208601614abc565b92506040850135915060608501356001600160401b038111156155fe57600080fd5b8501601f8101871361560f57600080fd5b61561e87823560208401614bdb565b91505092959194509250565b602081526000612a3b602083018461534d565b63ffffffff851681526156536020820185614955565b60806040820152600061566960808301856149a3565b82810360608401526154fb81856149a3565b602081526000612a3b60208301846153f4565b600080602083850312156156a157600080fd5b82356001600160401b03808211156156b857600080fd5b818501915085601f8301126156cc57600080fd5b8135818111156156db57600080fd5b8660208260061b85010111156156f057600080fd5b60209290920196919550909350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561581257603f19898403018552815161014081518552888201516157538a870182614fac565b50878201518189870152615769828701826149a3565b9150506060808301516157818288018261ffff169052565b50506080828101519086015260a08083015163ffffffff811682880152505060c08281015163ffffffff811687830152505060e0808301516157c582880182614fac565b505061010080830151868303828801526157df83826149a3565b9250505061012080830151925085820381870152506157fe81836149a3565b968901969450505090860190600101615729565b509098975050505050505050565b6000806040838503121561583357600080fd5b61583c83614abc565b9150614d5260208401614abc565b6000806040838503121561585d57600080fd5b61586683614abc565b9150614d5260208401614912565b600181811c9082168061588857607f821691505b6020821081036158a857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252601690820152751cd95b99195c881a5cc81b9bdd08185c1c1c9bdd995960521b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff80831681851681830481118215151615615917576159176158de565b02949350505050565b60006101408c83528b60208401528a604084015289606084015263ffffffff808a1660808501528160a08501526159598285018a6149a3565b6001600160401b0398891660c0860152961660e084015250509190931661010082015261012001919091529695505050505050565b60006001600160401b038281168482168083038211156159b0576159b06158de565b01949350505050565b600082198211156159cc576159cc6158de565b500190565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b60208082526019908201527806964206d7573742062652067726561746572207468616e203603c1b604082015260600190565b60208082526015908201527419dbdbd9081bdc9858db19481b9bdd08199bdd5b99605a1b604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b60008251615ae8818460208701614977565b9190910192915050565b608081526000615b0560808301876149a3565b8281036020840152615b1781876149a3565b9050615b266040840186614955565b82810360608401526154fb818561517b565b604081526000615b4b60408301856149a3565b9050612a3b6020830184614955565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060018201615bb757615bb76158de565b5060010190565b60a081526000615bd160a0830188615231565b8281036020840152615be381886149a3565b905063ffffffff861660408401528281036060840152615c0381866149a3565b9150506153ea6080830184614955565b60208082526017908201527619dbdbd9081858dd1a5d9a5d1e481b9bdd08199bdd5b99604a1b604082015260600190565b60006001600160401b0383811690831681811015615c6457615c646158de565b039392505050565b6000808354615c7a81615874565b60018281168015615c925760018114615ca357615cd2565b60ff19841687528287019450615cd2565b8760005260208060002060005b85811015615cc95781548a820152908401908201615cb0565b50505082870194505b50929695505050505050565b60008154615ceb81615874565b808552602060018381168015615d085760018114615d1c57615d4a565b60ff19851688840152604088019550615d4a565b866000528260002060005b85811015615d425781548a8201860152908301908401615d27565b890184019650505b505050505092915050565b608081526000615d686080830187615cde565b602083820381850152615d7b8288615cde565b9150615d8a6040850187614955565b83820360608501528454808352600086815282812093830191905b81811015615dc157845483526001948501949284019201615da5565b50909998505050505050505050565b60008351615de2818460208801614977565b8351908301906159b0818360208801614977565b60008351615e08818460208801614977565b600160fd1b9083019081528351615e26816001840160208801614977565b01600101949350505050565b6020808252600c908201526b6d697373696e67206461746160a01b604082015260600190565b6020808252600a90820152696e6f742061637469766560b01b604082015260600190565b600082821015615e8e57615e8e6158de565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b600082615f0a57615f0a615ee5565b500490565b600082615f1e57615f1e615ee5565b500690565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906153ea908301846149a3565b600060208284031215615f6857600080fd5b8151612a3b81614a0256feb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e56ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220fd3ba0566e8df2102cfe49944520b1b3097b4e37af586d4bba902f094a8c751864736f6c634300080d0033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106102885760003560e01c806301b844481461028d57806301ffc9a7146102b8578063056a305c146102db57806306fdde0314610300578063081812fc14610315578063095ea7b3146103405780630c97174f146103555780630fe316481461037d57806316feb0d0146103905780631785f53c146103a35780631d3a5d29146103b65780631fb4f1a0146103e257806323b872dd146103f55780632b70027114610408578063392b7633146104295780633b093ddc1461045a57806342842e0e146104cf578063429b62e5146104e257806347f6acf114610505578063489258641461050e5780634bf25ae1146105215780635dbdf4d8146105415780636352211e14610561578063696a16cb14610574578063704802751461058757806370a082311461059a578063715018a6146105ad57806372f0d7ac146105b557806377fde7f8146105c55780637a04a419146105d8578063838bf3e5146105f85780638c3080fa146106185780638da5cb5b14610646578063949d0cae1461064e57806395d89b4114610661578063a22cb46514610669578063aa792cb31461067c578063aaa758b11461068f578063aced36ce146106af578063b0351dc4146106c2578063b88d4fde146106d5578063bc2dfced146106e8578063c87b56dd146106f1578063cc33c87514610704578063cf3b7d9014610724578063d33e515014610747578063d69167e514610767578063d6918fdb1461077a578063db16711e1461078f578063dd86d01b146107a2578063e272578e146107c2578063e95d158b146107e2578063e985e9c5146107f5578063efdcc47f14610831578063f145c3fa14610844578063f2fde38b1461088a575b600080fd5b6102a061029b366004614924565b61089d565b6040516102af939291906149cf565b60405180910390f35b6102cb6102c6366004614a18565b610952565b60405190151581526020016102af565b6102ee6102e9366004614a35565b6109a4565b6040516102af96959493929190614a4e565b610308610b01565b6040516102af9190614aa9565b610328610323366004614a35565b610b93565b6040516001600160a01b0390911681526020016102af565b61035361034e366004614ad3565b610c20565b005b60175461036a90600160201b900461ffff1681565b60405161ffff90911681526020016102af565b61035361038b366004614c52565b610d30565b61035361039e366004614d2f565b6113b3565b6103536103b1366004614d5b565b611449565b6017546103cd90600160401b900463ffffffff1681565b60405163ffffffff90911681526020016102af565b6103536103f0366004614d86565b611499565b610353610403366004614dc9565b611575565b61041b610416366004614ea2565b6115a6565b6040519081526020016102af565b6103cd610437366004614f78565b805160208183018101805160108252928201919093012091525463ffffffff1681565b6104a0610468366004614a35565b601560205260009081526040902080546002909101546001600160401b0380821691600160401b8104821691600160801b9091041684565b604080519485526001600160401b039384166020860152918316918401919091521660608201526080016102af565b6103536104dd366004614dc9565b6117c3565b6102cb6104f0366004614d5b565b60116020526000908152604090205460ff1681565b61041b60085481565b61035361051c366004614fb9565b6117de565b61041b61052f366004614a35565b60146020526000908152604090205481565b61041b61054f366004614924565b600b6020526000908152604090205481565b61032861056f366004614a35565b61192a565b600a54610328906001600160a01b031681565b610353610595366004614d5b565b6119a1565b61041b6105a8366004614d5b565b611a07565b610353611a8e565b6017546103cd9063ffffffff1681565b6103536105d336600461506f565b611ac9565b6105eb6105e6366004615160565b611e2c565b6040516102af91906151b6565b61060b610606366004614a35565b612079565b6040516102af9190615265565b6102cb6106263660046152f9565b601260209081526000928352604080842090915290825290205460ff1681565b6103286122c4565b6102cb61065c366004614ad3565b6122d3565b6103086123f1565b610353610677366004615323565b612400565b6102a061068a366004614924565b61240f565b6106a261069d366004614a35565b612441565b6040516102af9190615449565b6103536106bd366004615506565b612690565b6103536106d0366004614d5b565b6128e1565b6103536106e33660046155af565b612932565b61041b60095481565b6103086106ff366004614a35565b61296a565b610717610712366004614a35565b612a42565b6040516102af919061562a565b610737610732366004614a35565b612b6a565b6040516102af949392919061563d565b61075a610755366004614a35565b612cb0565b6040516102af919061567b565b6106a2610775366004614d5b565b612e36565b60175461036a90600160301b900461ffff1681565b61035361079d366004614fb9565b612e60565b6107b56107b036600461568e565b612f9f565b6040516102af9190615702565b61041b6107d0366004614d5b565b60136020526000908152604090205481565b6103536107f0366004615820565b613396565b6102cb610803366004615820565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6106a261083f366004614a35565b6136a9565b61041b61085236600461584a565b6001600160a01b03821660009081526013602090815260408083205483526016825280832061ffff8516845290915290205492915050565b610353610898366004614d5b565b6136bd565b600d602052600090815260409020805460018201805461ffff8316936201000090930460ff169291906108cf90615874565b80601f01602080910402602001604051908101604052809291908181526020018280546108fb90615874565b80156109485780601f1061091d57610100808354040283529160200191610948565b820191906000526020600020905b81548152906001019060200180831161092b57829003601f168201915b5050505050905083565b60006001600160e01b031982166380ac58cd60e01b148061098357506001600160e01b03198216635b5e139f60e01b145b8061099e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600e60205260009081526040902080546002820154600383018054929361ffff8316936201000090930460ff16929091906109de90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0a90615874565b8015610a575780601f10610a2c57610100808354040283529160200191610a57565b820191906000526020600020905b815481529060010190602001808311610a3a57829003601f168201915b5050506004840154600585018054949563ffffffff909216949193509150610a7e90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054610aaa90615874565b8015610af75780601f10610acc57610100808354040283529160200191610af7565b820191906000526020600020905b815481529060010190602001808311610ada57829003601f168201915b5050505050905086565b606060018054610b1090615874565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3c90615874565b8015610b895780601f10610b5e57610100808354040283529160200191610b89565b820191906000526020600020905b815481529060010190602001808311610b6c57829003601f168201915b5050505050905090565b6000610b9e8261375d565b610c045760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b6000610c2b8261192a565b9050806001600160a01b0316836001600160a01b031603610c985760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610bfb565b336001600160a01b0382161480610cb45750610cb48133610803565b610d215760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b6064820152608401610bfb565b610d2b838361377a565b505050565b3360009081526011602052604090205460ff1680610d725750336000908152601260209081526040808320608085015163ffffffff16845290915290205460ff165b610d8e5760405162461bcd60e51b8152600401610bfb906158ae565b600080610da88360400151846000015185602001516137e8565b91509150610db583613b2e565b610df25760405162461bcd60e51b815260206004820152600e60248201526d4661696c6564206120636865636b60901b6044820152606401610bfb565b610e00600780546001019055565b6000610e0b60075490565b9050610e178282613fdc565b60608401516000908152600e602052604081206004015460a0860151610e439163ffffffff16906158f4565b63ffffffff169050826001600160a01b03167fe3f157739acb4b4fca01bf36ba7ed4b2805f0a03b74d7e3a8726e11dbbe682da8387602001518789606001518a608001518b6101000151888d60a001518e60c001518f60e00151604051610eb39a99989796959493929190615920565b60405180910390a2600060405180610120016040528084815260200187606001518152602001856001600160a01b03168152602001836001600160401b031681526020018760a0015163ffffffff1681526020018760c001516001600160401b03168152602001876080015163ffffffff1681526020018760e00151815260200187610100015181525090506000600e6000886060015181526020019081526020016000206040518060e00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020018280548015610fe457602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411610fab5790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff16600481111561101b5761101b61493f565b600481111561102c5761102c61493f565b815260200160038201805461104090615874565b80601f016020809104026020016040519081016040528092919081815260200182805461106c90615874565b80156110b95780601f1061108e576101008083540402835291602001916110b9565b820191906000526020600020905b81548152906001019060200180831161109c57829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916110e690615874565b80601f016020809104026020016040519081016040528092919081815260200182805461111290615874565b801561115f5780601f106111345761010080835404028352916020019161115f565b820191906000526020600020905b81548152906001019060200180831161114257829003601f168201915b5050509190925250505060008781526015602090815260408083206003908101805460018082018355918652948490208851600690960201948555878401519085015590860151600284018054606089015160808a01516001600160a01b039094166001600160e01b031990921691909117600160a01b6001600160401b0392831602176001600160e01b0316600160e01b63ffffffff948516021790915560a0880151928501805460c08a0151949092166001600160601b031990921691909117600160401b939092169290920217905560e08501516004830155610100850151805193945085936112589260058501920190614651565b505050600086815260156020526040812060020180548592906112859084906001600160401b031661598e565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826015600088815260200190815260200160002060020160088282829054906101000a90046001600160401b03166112e1919061598e565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550826001600160401b0316601660008881526020019081526020016000206000836040015161ffff1661ffff168152602001908152602001600020600082825461134e91906159b9565b92505081905550826001600160401b03166008600082825461137091906159b9565b909155505060408082015161ffff166000908152600b60205290812080546001600160401b03861692906113a59084906159b9565b909155505050505050505050565b3360009081526011602052604090205460ff166113e25760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b0381166000908152601360205260409020548015801590611417575060008181526015602052604090205481145b6114335760405162461bcd60e51b8152600401610bfb906159d1565b6000928352601460205260409092209190915550565b3360009081526011602052604090205460ff166114785760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b03166000908152601160205260409020805460ff19169055565b3360009081526011602052604090205460ff166114c85760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b0383166114db57600080fd5b8163ffffffff166000036115015760405162461bcd60e51b8152600401610bfb906159fc565b63ffffffff8083166000818152600f6020526040902054909116146115385760405162461bcd60e51b8152600401610bfb90615a2f565b6001600160a01b03909216600090815260126020908152604080832063ffffffff909416835292905220805491151560ff19909216919091179055565b61157f33826140fc565b61159b5760405162461bcd60e51b8152600401610bfb90615a5e565b610d2b838383614171565b3360009081526011602052604081205460ff166115d55760405162461bcd60e51b8152600401610bfb906158ae565b6000826040015151116115fa5760405162461bcd60e51b8152600401610bfb90615aaf565b6010826040015160405161160e9190615ad6565b9081526040519081900360200190205463ffffffff161561166e5760405162461bcd60e51b815260206004820152601a602482015279676f6f64206f7261636c6520616c72656164792065786973747360301b6044820152606401610bfb565b6017805463ffffffff808216600101811663ffffffff1992831681179093558285526000928352600f6020908152604090932085518154921692821683178155928501518593929091839164ffffffffff1990911617600160201b8360048111156116db576116db61493f565b0217905550604082015180516116fb916001840191602090910190614651565b5060608201518051611717916002840191602090910190614651565b50608082015180516117339160038401916020909101906146d5565b509050508160000151601083604001516040516117509190615ad6565b9081526040805160209281900383018120805463ffffffff191663ffffffff95861617905585519186015160608701519387015160808801519390951694600080516020615f74833981519152946117ac949293909290615af2565b60405180910390a250805163ffffffff165b919050565b610d2b83838360405180602001604052806000815250612932565b3360009081526011602052604090205460ff1661180d5760405162461bcd60e51b8152600401610bfb906158ae565b600082511161182e5760405162461bcd60e51b8152600401610bfb90615aaf565b8261ffff16600003611883576017805461ffff60301b198116600160301b9182900461ffff908116600101908116928302919091179092556000818152600c60205260409020805461ffff1916909117905592505b61ffff83166000908152600c6020908152604090912083516118ad92600190920191850190614651565b5061ffff83166000908152600c60205260409020805482919062ff00001916620100008360048111156118e2576118e261493f565b02179055508261ffff167f4fcd383604332b394161a254d359c73296253b0e25354b61f8a192f2ca90f1c0838360405161191d929190615b38565b60405180910390a2505050565b6000818152600360205260408120546001600160a01b03168061099e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610bfb565b3360009081526011602052604090205460ff166119d05760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b0381166119e357600080fd5b6001600160a01b03166000908152601160205260409020805460ff19166001179055565b60006001600160a01b038216611a725760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610bfb565b506001600160a01b031660009081526004602052604090205490565b33611a976122c4565b6001600160a01b031614611abd5760405162461bcd60e51b8152600401610bfb90615b5a565b611ac760006142fb565b565b3360009081526011602052604090205460ff16611af85760405162461bcd60e51b8152600401610bfb906158ae565b8051600003611b2f576017805463ffffffff60401b198116600160401b9182900463ffffffff908116600101169182021790915581525b60005b816020015151811015611c2e57600082602001518281518110611b5757611b57615b8f565b602002602001015161ffff1611611b805760405162461bcd60e51b8152600401610bfb906159fc565b6001600c600084602001518481518110611b9c57611b9c615b8f565b60209081029190910181015161ffff1682528101919091526040016000205462010000900460ff166004811115611bd557611bd561493f565b14611c1c5760405162461bcd60e51b8152602060048201526017602482015276676f6f642074797065206973206e6f742061637469766560481b6044820152606401610bfb565b80611c2681615ba5565b915050611b32565b506000816040015161ffff1611611c575760405162461bcd60e51b8152600401610bfb906159fc565b600160408281015161ffff166000908152600d602052205462010000900460ff166004811115611c8957611c8961493f565b14611cd45760405162461bcd60e51b815260206004820152601b60248201527a676f6f642063617465676f7279206973206e6f742061637469766560281b6044820152606401610bfb565b600081608001515111611cf95760405162461bcd60e51b8152600401610bfb90615aaf565b80516000908152600e60209081526040909120825181558183015180518493611d2992600185019291019061470f565b50604082015160028201805461ffff90921661ffff1983168117825560608501519262ffffff19161762010000836004811115611d6857611d6861493f565b021790555060808201518051611d88916003840191602090910190614651565b5060a082015160048201805463ffffffff191663ffffffff90921691909117905560c08201518051611dc4916005840191602090910190614651565b50905050806040015161ffff1681600001517f27b90160eaa4ab2aa06fabc8c7f0a5acd0041ec04a3851eb1b5881c94ee37d12836020015184608001518560a001518660c001518760600151604051611e21959493929190615bbe565b60405180910390a350565b611e5f6040805160a081019091526000808252602082019081526020016060815260200160608152602001606081525090565b63ffffffff8083166000818152600f602052604090205490911614611e965760405162461bcd60e51b8152600401610bfb90615a2f565b63ffffffff8281166000908152600f6020908152604091829020825160a0810190935280549384168352919290830190600160201b900460ff166004811115611ee157611ee161493f565b6004811115611ef257611ef261493f565b8152602001600182018054611f0690615874565b80601f0160208091040260200160405190810160405280929190818152602001828054611f3290615874565b8015611f7f5780601f10611f5457610100808354040283529160200191611f7f565b820191906000526020600020905b815481529060010190602001808311611f6257829003601f168201915b50505050508152602001600282018054611f9890615874565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc490615874565b80156120115780601f10611fe657610100808354040283529160200191612011565b820191906000526020600020905b815481529060010190602001808311611ff457829003601f168201915b505050505081526020016003820180548060200260200160405190810160405280929190818152602001828054801561206957602002820191906000526020600020905b815481526020019060010190808311612055575b5050505050815250509050919050565b6120816147b3565b6000828152600e602052604081205490036120ae5760405162461bcd60e51b8152600401610bfb90615c13565b6000828152600e6020908152604091829020825160e081018452815481526001820180548551818602810186019096528086529194929385810193929083018282801561214257602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116121095790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff1660048111156121795761217961493f565b600481111561218a5761218a61493f565b815260200160038201805461219e90615874565b80601f01602080910402602001604051908101604052809291908181526020018280546121ca90615874565b80156122175780601f106121ec57610100808354040283529160200191612217565b820191906000526020600020905b8154815290600101906020018083116121fa57829003601f168201915b5050509183525050600482015463ffffffff16602082015260058201805460409092019161224490615874565b80601f016020809104026020016040519081016040528092919081815260200182805461227090615874565b80156120695780601f1061229257610100808354040283529160200191612069565b820191906000526020600020905b8154815290600101906020018083116122a057505050919092525091949350505050565b6000546001600160a01b031690565b600a546000906001600160a01b031633146123005760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b03831660009081526013602090815260408083205483526015909152812060020180548492906123419084906001600160401b0316615c44565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550816009600082825461237791906159b9565b90915550506001600160a01b038316600081815260136020908152604080832054835260158252918290206002015482518681526001600160401b03909116918101919091527f9ce3299c5bcff8db5ce8560d5c76cf01d7bc08936eca4f80b2506502560a8944910160405180910390a250600192915050565b606060028054610b1090615874565b61240b33838361434b565b5050565b600c602052600090815260409020805460018201805461ffff8316936201000090930460ff169291906108cf90615874565b612449614803565b6000828152601560209081526040808320815160c0810183528154815260018201805484518187028101870190955280855291949293858401939092908301828280156124bf57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116124a1575b505050918352505060028201546001600160401b03808216602080850191909152600160401b83048216604080860191909152600160801b9093049091166060840152600384018054835181840281018401909452808452608090940193909160009084015b828210156126685760008481526020908190206040805161012081018252600686029092018054835260018101549383019390935260028301546001600160a01b038116918301919091526001600160401b03600160a01b82048116606084015263ffffffff600160e01b90920482166080840152600384015490811660a0840152600160401b90041660c0820152600482015460e0820152600582018054919291610100840191906125d790615874565b80601f016020809104026020016040519081016040528092919081815260200182805461260390615874565b80156126505780601f1061262557610100808354040283529160200191612650565b820191906000526020600020905b81548152906001019060200180831161263357829003601f168201915b50505050508152505081526020019060010190612525565b50505091525050805190915061099e5760405162461bcd60e51b8152600401610bfb906159d1565b3360009081526011602052604090205460ff166126bf5760405162461bcd60e51b8152600401610bfb906158ae565b60008563ffffffff16116126e55760405162461bcd60e51b8152600401610bfb906159fc565b63ffffffff8086166000818152600f60205260409020549091161461271c5760405162461bcd60e51b8152600401610bfb90615a2f565b8351156127c4576010600f60008763ffffffff16815260200190815260200160002060010160405161274e9190615c6c565b908152604051908190036020018120805463ffffffff191690558590601090612778908790615ad6565b9081526040805160209281900383019020805463ffffffff191663ffffffff9485161790559187166000908152600f82529190912085516127c29260019290920191870190614651565b505b8251156127f95763ffffffff85166000908152600f6020908152604090912084516127f792600290920191860190614651565b505b600082600481111561280d5761280d61493f565b146128505763ffffffff85166000908152600f60205260409020805483919060ff60201b1916600160201b83600481111561284a5761284a61493f565b02179055505b8051156128855763ffffffff85166000908152600f602090815260409091208251612883926003909201918401906146d5565b505b63ffffffff85166000818152600f60205260409081902080549151600080516020615f74833981519152926128d29260018101926002820192600160201b900460ff169160030190615d55565b60405180910390a25050505050565b336128ea6122c4565b6001600160a01b0316146129105760405162461bcd60e51b8152600401610bfb90615b5a565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b61293c33836140fc565b6129585760405162461bcd60e51b8152600401610bfb90615a5e565b61296484848484614415565b50505050565b60606129758261375d565b6129d95760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610bfb565b60006129f060408051602081019091526000815290565b90506000815111612a105760405180602001604052806000815250612a3b565b80612a1a84614448565b604051602001612a2b929190615dd0565b6040516020818303038152906040525b9392505050565b612ab8604051806101200160405280600081526020016000815260200160006001600160a01b0316815260200160006001600160401b03168152602001600063ffffffff16815260200160006001600160401b03168152602001600063ffffffff16815260200160008152602001606081525090565b6000612af060136000612aca8661192a565b6001600160a01b03166001600160a01b0316815260200190815260200160002054612441565b905060005b8160a0015151811015612b6357838260a001518281518110612b1957612b19615b8f565b60200260200101516000015103612b51578160a001518181518110612b4057612b40615b8f565b602002602001015192505050919050565b80612b5b81615ba5565b915050612af5565b5050919050565b600f602052600090815260409020805460018201805463ffffffff831693600160201b90930460ff16929190612b9f90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054612bcb90615874565b8015612c185780601f10612bed57610100808354040283529160200191612c18565b820191906000526020600020905b815481529060010190602001808311612bfb57829003601f168201915b505050505090806002018054612c2d90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054612c5990615874565b8015612ca65780601f10612c7b57610100808354040283529160200191612ca6565b820191906000526020600020905b815481529060010190602001808311612c8957829003601f168201915b5050505050905084565b606060156000838152602001908152602001600020600301805480602002602001604051908101604052809291908181526020016000905b82821015612e2b5760008481526020908190206040805161012081018252600686029092018054835260018101549383019390935260028301546001600160a01b038116918301919091526001600160401b03600160a01b82048116606084015263ffffffff600160e01b90920482166080840152600384015490811660a0840152600160401b90041660c0820152600482015460e082015260058201805491929161010084019190612d9a90615874565b80601f0160208091040260200160405190810160405280929190818152602001828054612dc690615874565b8015612e135780601f10612de857610100808354040283529160200191612e13565b820191906000526020600020905b815481529060010190602001808311612df657829003601f168201915b50505050508152505081526020019060010190612ce8565b505050509050919050565b612e3e614803565b6001600160a01b03821660009081526013602052604090205461099e90612441565b3360009081526011602052604090205460ff16612e8f5760405162461bcd60e51b8152600401610bfb906158ae565b6000825111612eb05760405162461bcd60e51b8152600401610bfb90615aaf565b8261ffff16600003612f05576017805461ffff60201b198116600160201b9182900461ffff908116600101908116928302919091179092556000818152600d60205260409020805461ffff1916909117905592505b61ffff83166000908152600d602090815260409091208351612f2f92600190920191850190614651565b5061ffff83166000908152600d60205260409020805482919062ff0000191662010000836004811115612f6457612f6461493f565b02179055508261ffff167fa64371df3e4e587f97e094b4e6cb2dd8780392180388ec6f7c2ac098a8452feb838360405161191d929190615b38565b60606000826001600160401b03811115612fbb57612fbb614afd565b604051908082528060200260200182016040528015612ff457816020015b612fe1614837565b815260200190600190039081612fd95790505b50905060005b8381101561338e57600061302886868481811061301957613019615b8f565b90506040020160000135612a42565b9050613032614837565b6020808301516000908152600e82526040808220815160e081018352815481526001820180548451818802810188019095528085529495919492938583019390928301828280156130ca57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116130915790505b5050509183525050600282015461ffff8116602083015260409091019062010000900460ff1660048111156131015761310161493f565b60048111156131125761311261493f565b815260200160038201805461312690615874565b80601f016020809104026020016040519081016040528092919081815260200182805461315290615874565b801561319f5780601f106131745761010080835404028352916020019161319f565b820191906000526020600020905b81548152906001019060200180831161318257829003601f168201915b5050509183525050600482015463ffffffff1660208201526005820180546040909201916131cc90615874565b80601f01602080910402602001604051908101604052809291908181526020018280546131f890615874565b80156132455780601f1061321a57610100808354040283529160200191613245565b820191906000526020600020905b81548152906001019060200180831161322857829003601f168201915b505050919092525050845184525060a08401516001600160401b03166020808501919091526040808601516001600160a01b0316600090815260138352819020548151928301529192500160408051601f19818403018152918152830152602081015180516000906132b9576132b9615b8f565b602090810291909101015161ffff1660608084019190915260e08085015160808086019190915260c08087015163ffffffff90811660a08801529187018051831691870191909152928601516001600160401b0316918501919091526101008086015190850152905161332c9116614448565b8160c00151604051602001613342929190615df6565b6040516020818303038152906040528261012001819052508185858151811061336d5761336d615b8f565b6020026020010181905250505050808061338690615ba5565b915050612ffa565b509392505050565b3360009081526011602052604090205460ff166133c55760405162461bcd60e51b8152600401610bfb906158ae565b6001600160a01b038083166000908152601360208181526040808420548452601580835281852095871685529282528084205484529190529020805482540361343f5760405162461bcd60e51b815260206004820152600c60248201526b73616d652070726f66696c6560a01b6044820152606401610bfb565b815461345d5760405162461bcd60e51b8152600401610bfb906159d1565b805461347b5760405162461bcd60e51b8152600401610bfb906159d1565b60028082015490830180546001600160401b03928316926000916134a19185911661598e565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160089054906101000a90046001600160401b03168260020160088282829054906101000a90046001600160401b0316613502919061598e565b92506101000a8154816001600160401b0302191690836001600160401b031602179055508060020160109054906101000a90046001600160401b03168260020160108282829054906101000a90046001600160401b0316613563919061598e565b92506101000a8154816001600160401b0302191690836001600160401b0316021790555060005b600182015481101561363f57826001018260010182815481106135af576135af615b8f565b600091825260208083209091015483546001818101865594845291832090910180546001600160a01b0319166001600160a01b039092169190911790558454918401805460139291908590811061360857613608615b8f565b60009182526020808320909101546001600160a01b031683528201929092526040019020558061363781615ba5565b91505061358a565b506002810180546001600160c01b031916905561366060018201600061488a565b604080516001600160a01b038087168252851660208201527f239567be74fe3e80a3e23e994c3234310617523efa3bdb81b591bda34e070368910160405180910390a150505050565b6136b1614803565b61099e6107758361192a565b336136c66122c4565b6001600160a01b0316146136ec5760405162461bcd60e51b8152600401610bfb90615b5a565b6001600160a01b0381166137515760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610bfb565b61375a816142fb565b50565b6000908152600360205260409020546001600160a01b0316151590565b600081815260056020526040902080546001600160a01b0319166001600160a01b03841690811790915581906137af8261192a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080841561391657600085815260156020526040902054613911576001600160a01b0384161580159061383357506001600160a01b03841660009081526013602052604090205415155b15613858576001600160a01b03841660009081526013602052604090205494506139c7565b8215801590613874575060008381526014602052604090205415155b1561388f5760008381526014602052604090205494506139c7565b6001600160a01b0384166138b55760405162461bcd60e51b8152600401610bfb90615e32565b600085815260156020818152604080842089815581518084019092526001600160a01b0389168252938990529190526138f491600190810191906148a8565b506001600160a01b03841660009081526013602052604090208590555b6139c7565b6001600160a01b03841615613978576001600160a01b0384166000908152601360205260409020549450841580159061395c575060008581526015602052604090205485145b6139115760405162461bcd60e51b8152600401610bfb906159d1565b82156139c757600083815260146020526040902054945084158015906139ab575060008581526015602052604090205485145b6139c75760405162461bcd60e51b8152600401610bfb906159d1565b6001600160a01b038416613a0f57600085815260156020526040812060010180549091906139f7576139f7615b8f565b6000918252602090912001546001600160a01b031693505b6001600160a01b038416613a355760405162461bcd60e51b8152600401610bfb90615e32565b6001600160a01b038416600090815260136020526040902054613a9c576001600160a01b0384166000818152601360209081526040808320899055888352601582528220600190810180549182018155835291200180546001600160a01b03191690911790555b8215801590613ab957506000838152601460205260409020548514155b15613b255760008381526014602052604090205415613b135760405162461bcd60e51b8152602060048201526016602482015275195b585a5b08185b1c9958591e48185cdcda59db995960521b6044820152606401610bfb565b60008381526014602052604090208590555b50929391925050565b60608101516000908152600e6020526040812080548203613b615760405162461bcd60e51b8152600401610bfb90615c13565b6001600282015462010000900460ff166004811115613b8257613b8261493f565b14613b9f5760405162461bcd60e51b8152600401610bfb90615e58565b60005b6001820154811015613cbd576001600c6000846001018481548110613bc957613bc9615b8f565b60009182526020808320601083040154600f9092166002026101000a90910461ffff16835282019290925260400190205462010000900460ff166004811115613c1457613c1461493f565b14613c315760405162461bcd60e51b8152600401610bfb90615e58565b816001018181548110613c4657613c46615b8f565b600091825260208220601082040154600f9091166002026101000a900461ffff169003613cab5760405162461bcd60e51b815260206004820152601360248201527219dbdbd9081d1e5c19481b9bdd08199bdd5b99606a1b6044820152606401610bfb565b80613cb581615ba5565b915050613ba2565b506001600282015461ffff166000908152600d602052604090205462010000900460ff166004811115613cf257613cf261493f565b14613d0f5760405162461bcd60e51b8152600401610bfb90615e58565b608083015163ffffffff9081166000908152600f60205260408120549091169003613d4c5760405162461bcd60e51b8152600401610bfb90615a2f565b6001608084015163ffffffff166000908152600f6020526040902054600160201b900460ff166004811115613d8357613d8361493f565b14613da05760405162461bcd60e51b8152600401610bfb90615e58565b6000805b608085015163ffffffff166000908152600f6020526040902060030154811015613e2257608085015163ffffffff166000908152600f60205260409020600301805482908110613df657613df6615b8f565b9060005260206000200154856060015103613e1057600191505b80613e1a81615ba5565b915050613da4565b5080613e845760405162461bcd60e51b815260206004820152602b60248201527f676f6f64206163746976697479206964206973206e6f7420617070726f76656460448201526a20666f72206f7261636c6560a81b6064820152608401610bfb565b620f42408460a0015163ffffffff161115613ed25760405162461bcd60e51b815260206004820152600e60248201526d756e697473206f766572666c6f7760901b6044820152606401610bfb565b60008460a0015163ffffffff1611613f2b5760405162461bcd60e51b815260206004820152601c60248201527b0756e697473206d7573742062652067726561746572207468616e20360241b6044820152606401610bfb565b60008461010001515111613f755760405162461bcd60e51b815260206004820152601160248201527070726f6f6655524c20697320656d70747960781b6044820152606401610bfb565b60008460c001516001600160401b031611613fd25760405162461bcd60e51b815260206004820181905260248201527f74696d657374616d70206d7573742062652067726561746572207468616e20306044820152606401610bfb565b5060019392505050565b6001600160a01b0382166140325760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610bfb565b61403b8161375d565b156140875760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610bfb565b6001600160a01b03821660009081526004602052604081208054600192906140b09084906159b9565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020615f94833981519152908290a45050565b60006141078261375d565b6141685760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610bfb565b50600092915050565b826001600160a01b03166141848261192a565b6001600160a01b0316146141e85760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610bfb565b6001600160a01b03821661424a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610bfb565b61425560008261377a565b6001600160a01b038316600090815260046020526040812080546001929061427e908490615e7c565b90915550506001600160a01b03821660009081526004602052604081208054600192906142ac9084906159b9565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151849391871691600080516020615f9483398151915291a4505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036143a85760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610bfb565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b614420848484614171565b61442c84848484614550565b6129645760405162461bcd60e51b8152600401610bfb90615e93565b60608160000361446f5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115614499578061448381615ba5565b91506144929050600a83615efb565b9150614473565b6000816001600160401b038111156144b3576144b3614afd565b6040519080825280601f01601f1916602001820160405280156144dd576020820181803683370190505b5090505b8415614548576144f2600183615e7c565b91506144ff600a86615f0f565b61450a9060306159b9565b60f81b81838151811061451f5761451f615b8f565b60200101906001600160f81b031916908160001a905350614541600a86615efb565b94506144e1565b949350505050565b60006001600160a01b0384163b1561464657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290614594903390899088908890600401615f23565b6020604051808303816000875af19250505080156145cf575060408051601f3d908101601f191682019092526145cc91810190615f56565b60015b61462c573d8080156145fd576040519150601f19603f3d011682016040523d82523d6000602084013e614602565b606091505b5080516000036146245760405162461bcd60e51b8152600401610bfb90615e93565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050614548565b506001949350505050565b82805461465d90615874565b90600052602060002090601f01602090048101928261467f57600085556146c5565b82601f1061469857805160ff19168380011785556146c5565b828001600101855582156146c5579182015b828111156146c55782518255916020019190600101906146aa565b506146d19291506148fd565b5090565b8280548282559060005260206000209081019282156146c557916020028201828111156146c55782518255916020019190600101906146aa565b82805482825590600052602060002090600f016010900481019282156146c55791602002820160005b8382111561477857835183826101000a81548161ffff021916908361ffff1602179055509260200192600201602081600101049283019260010302614738565b80156147a65782816101000a81549061ffff0219169055600201602081600101049283019260010302614778565b50506146d19291506148fd565b6040518060e001604052806000815260200160608152602001600061ffff168152602001600060048111156147ea576147ea61493f565b8152606060208201819052600060408301529081015290565b6040805160c0810182526000808252606060208301819052928201819052828201819052608082015260a081019190915290565b604080516101408101825260008082526020820181905260609282018390528282018190526080820181905260a0820181905260c0820181905260e0820152610100810182905261012081019190915290565b508054600082559060005260206000209081019061375a91906148fd565b8280548282559060005260206000209081019282156146c5579160200282015b828111156146c557825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906148c8565b5b808211156146d157600081556001016148fe565b803561ffff811681146117be57600080fd5b60006020828403121561493657600080fd5b612a3b82614912565b634e487b7160e01b600052602160045260246000fd5b6005811061497357634e487b7160e01b600052602160045260246000fd5b9052565b60005b8381101561499257818101518382015260200161497a565b838111156129645750506000910152565b600081518084526149bb816020860160208601614977565b601f01601f19169290920160200192915050565b61ffff841681526149e36020820184614955565b6060604082015260006149f960608301846149a3565b95945050505050565b6001600160e01b03198116811461375a57600080fd5b600060208284031215614a2a57600080fd5b8135612a3b81614a02565b600060208284031215614a4757600080fd5b5035919050565b86815261ffff86166020820152614a686040820186614955565b60c060608201526000614a7e60c08301866149a3565b63ffffffff8516608084015282810360a0840152614a9c81856149a3565b9998505050505050505050565b602081526000612a3b60208301846149a3565b80356001600160a01b03811681146117be57600080fd5b60008060408385031215614ae657600080fd5b614aef83614abc565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715614b3657614b36614afd565b60405290565b60405160a081016001600160401b0381118282101715614b3657614b36614afd565b60405160e081016001600160401b0381118282101715614b3657614b36614afd565b604051601f8201601f191681016001600160401b0381118282101715614ba857614ba8614afd565b604052919050565b803563ffffffff811681146117be57600080fd5b80356001600160401b03811681146117be57600080fd5b60006001600160401b03831115614bf457614bf4614afd565b614c07601f8401601f1916602001614b80565b9050828152838383011115614c1b57600080fd5b828260208301376000602084830101529392505050565b600082601f830112614c4357600080fd5b612a3b83833560208501614bdb565b600060208284031215614c6457600080fd5b81356001600160401b0380821115614c7b57600080fd5b908301906101208286031215614c9057600080fd5b614c98614b13565b614ca183614abc565b8152602083013560208201526040830135604082015260608301356060820152614ccd60808401614bb0565b6080820152614cde60a08401614bb0565b60a0820152614cef60c08401614bc4565b60c082015260e083013560e08201526101008084013583811115614d1257600080fd5b614d1e88828701614c32565b918301919091525095945050505050565b60008060408385031215614d4257600080fd5b82359150614d5260208401614abc565b90509250929050565b600060208284031215614d6d57600080fd5b612a3b82614abc565b803580151581146117be57600080fd5b600080600060608486031215614d9b57600080fd5b614da484614abc565b9250614db260208501614bb0565b9150614dc060408501614d76565b90509250925092565b600080600060608486031215614dde57600080fd5b614de784614abc565b9250614df560208501614abc565b9150604084013590509250925092565b8035600581106117be57600080fd5b60006001600160401b03821115614e2d57614e2d614afd565b5060051b60200190565b600082601f830112614e4857600080fd5b81356020614e5d614e5883614e14565b614b80565b82815260059290921b84018101918181019086841115614e7c57600080fd5b8286015b84811015614e975780358352918301918301614e80565b509695505050505050565b600060208284031215614eb457600080fd5b81356001600160401b0380821115614ecb57600080fd5b9083019060a08286031215614edf57600080fd5b614ee7614b3c565b614ef083614bb0565b8152614efe60208401614e05565b6020820152604083013582811115614f1557600080fd5b614f2187828601614c32565b604083015250606083013582811115614f3957600080fd5b614f4587828601614c32565b606083015250608083013582811115614f5d57600080fd5b614f6987828601614e37565b60808301525095945050505050565b600060208284031215614f8a57600080fd5b81356001600160401b03811115614fa057600080fd5b61454884828501614c32565b6001600160401b03169052565b600080600060608486031215614fce57600080fd5b614fd784614912565b925060208401356001600160401b03811115614ff257600080fd5b614ffe86828701614c32565b925050614dc060408501614e05565b600082601f83011261501e57600080fd5b8135602061502e614e5883614e14565b82815260059290921b8401810191818101908684111561504d57600080fd5b8286015b84811015614e975761506281614912565b8352918301918301615051565b60006020828403121561508157600080fd5b81356001600160401b038082111561509857600080fd5b9083019060e082860312156150ac57600080fd5b6150b4614b5e565b823581526020830135828111156150ca57600080fd5b6150d68782860161500d565b6020830152506150e860408401614912565b60408201526150f960608401614e05565b606082015260808301358281111561511057600080fd5b61511c87828601614c32565b60808301525061512e60a08401614bb0565b60a082015260c08301358281111561514557600080fd5b61515187828601614c32565b60c08301525095945050505050565b60006020828403121561517257600080fd5b612a3b82614bb0565b600081518084526020808501945080840160005b838110156151ab5781518752958201959082019060010161518f565b509495945050505050565b6020815263ffffffff8251166020820152600060208301516151db6040840182614955565b50604083015160a060608401526151f560c08401826149a3565b90506060840151601f198085840301608086015261521383836149a3565b925060808601519150808584030160a0860152506149f9828261517b565b600081518084526020808501945080840160005b838110156151ab57815161ffff1687529582019590820190600101615245565b60208152815160208201526000602083015160e0604084015261528c610100840182615231565b905061ffff604085015116606084015260608401516152ae6080850182614955565b506080840151601f19808584030160a08601526152cb83836149a3565b925063ffffffff60a08701511660c086015260c08601519150808584030160e0860152506149f982826149a3565b6000806040838503121561530c57600080fd5b61531583614abc565b9150614d5260208401614bb0565b6000806040838503121561533657600080fd5b61533f83614abc565b9150614d5260208401614d76565b6000610120825184526020830151602085015260018060a01b03604084015116604085015260608301516153846060860182614fac565b50608083015161539c608086018263ffffffff169052565b5060a08301516153af60a0860182614fac565b5060c08301516153c760c086018263ffffffff169052565b5060e083015160e08501526101008084015182828701526153ea838701826149a3565b9695505050505050565b600081518084526020808501808196508360051b8101915082860160005b8581101561543c57828403895261542a84835161534d565b98850198935090840190600101615412565b5091979650505050505050565b60208082528251828201528281015160c06040840152805160e084018190526000929182019083906101008601905b808310156154a15783516001600160a01b03168252928401926001929092019190840190615478565b50604087015193506154b66060870185614fac565b606087015193506154ca6080870185614fac565b608087015193506154de60a0870185614fac565b60a0870151868203601f190160c088015293506154fb81856153f4565b979650505050505050565b600080600080600060a0868803121561551e57600080fd5b61552786614bb0565b945060208601356001600160401b038082111561554357600080fd5b61554f89838a01614c32565b9550604088013591508082111561556557600080fd5b61557189838a01614c32565b945061557f60608901614e05565b9350608088013591508082111561559557600080fd5b506155a288828901614e37565b9150509295509295909350565b600080600080608085870312156155c557600080fd5b6155ce85614abc565b93506155dc60208601614abc565b92506040850135915060608501356001600160401b038111156155fe57600080fd5b8501601f8101871361560f57600080fd5b61561e87823560208401614bdb565b91505092959194509250565b602081526000612a3b602083018461534d565b63ffffffff851681526156536020820185614955565b60806040820152600061566960808301856149a3565b82810360608401526154fb81856149a3565b602081526000612a3b60208301846153f4565b600080602083850312156156a157600080fd5b82356001600160401b03808211156156b857600080fd5b818501915085601f8301126156cc57600080fd5b8135818111156156db57600080fd5b8660208260061b85010111156156f057600080fd5b60209290920196919550909350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561581257603f19898403018552815161014081518552888201516157538a870182614fac565b50878201518189870152615769828701826149a3565b9150506060808301516157818288018261ffff169052565b50506080828101519086015260a08083015163ffffffff811682880152505060c08281015163ffffffff811687830152505060e0808301516157c582880182614fac565b505061010080830151868303828801526157df83826149a3565b9250505061012080830151925085820381870152506157fe81836149a3565b968901969450505090860190600101615729565b509098975050505050505050565b6000806040838503121561583357600080fd5b61583c83614abc565b9150614d5260208401614abc565b6000806040838503121561585d57600080fd5b61586683614abc565b9150614d5260208401614912565b600181811c9082168061588857607f821691505b6020821081036158a857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252601690820152751cd95b99195c881a5cc81b9bdd08185c1c1c9bdd995960521b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff80831681851681830481118215151615615917576159176158de565b02949350505050565b60006101408c83528b60208401528a604084015289606084015263ffffffff808a1660808501528160a08501526159598285018a6149a3565b6001600160401b0398891660c0860152961660e084015250509190931661010082015261012001919091529695505050505050565b60006001600160401b038281168482168083038211156159b0576159b06158de565b01949350505050565b600082198211156159cc576159cc6158de565b500190565b6020808252601190820152701c1c9bd99a5b19481b9bdd08199bdd5b99607a1b604082015260600190565b60208082526019908201527806964206d7573742062652067726561746572207468616e203603c1b604082015260600190565b60208082526015908201527419dbdbd9081bdc9858db19481b9bdd08199bdd5b99605a1b604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252600d908201526c6e616d6520697320656d70747960981b604082015260600190565b60008251615ae8818460208701614977565b9190910192915050565b608081526000615b0560808301876149a3565b8281036020840152615b1781876149a3565b9050615b266040840186614955565b82810360608401526154fb818561517b565b604081526000615b4b60408301856149a3565b9050612a3b6020830184614955565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060018201615bb757615bb76158de565b5060010190565b60a081526000615bd160a0830188615231565b8281036020840152615be381886149a3565b905063ffffffff861660408401528281036060840152615c0381866149a3565b9150506153ea6080830184614955565b60208082526017908201527619dbdbd9081858dd1a5d9a5d1e481b9bdd08199bdd5b99604a1b604082015260600190565b60006001600160401b0383811690831681811015615c6457615c646158de565b039392505050565b6000808354615c7a81615874565b60018281168015615c925760018114615ca357615cd2565b60ff19841687528287019450615cd2565b8760005260208060002060005b85811015615cc95781548a820152908401908201615cb0565b50505082870194505b50929695505050505050565b60008154615ceb81615874565b808552602060018381168015615d085760018114615d1c57615d4a565b60ff19851688840152604088019550615d4a565b866000528260002060005b85811015615d425781548a8201860152908301908401615d27565b890184019650505b505050505092915050565b608081526000615d686080830187615cde565b602083820381850152615d7b8288615cde565b9150615d8a6040850187614955565b83820360608501528454808352600086815282812093830191905b81811015615dc157845483526001948501949284019201615da5565b50909998505050505050505050565b60008351615de2818460208801614977565b8351908301906159b0818360208801614977565b60008351615e08818460208801614977565b600160fd1b9083019081528351615e26816001840160208801614977565b01600101949350505050565b6020808252600c908201526b6d697373696e67206461746160a01b604082015260600190565b6020808252600a90820152696e6f742061637469766560b01b604082015260600190565b600082821015615e8e57615e8e6158de565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b600082615f0a57615f0a615ee5565b500490565b600082615f1e57615f1e615ee5565b500690565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906153ea908301846149a3565b600060208284031215615f6857600080fd5b8151612a3b81614a0256feb959624540ed244831518321fc427570cf2e153735d04ac37642acf310f95e56ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220fd3ba0566e8df2102cfe49944520b1b3097b4e37af586d4bba902f094a8c751864736f6c634300080d0033',
  linkReferences: {},
  deployedLinkReferences: {},
};
