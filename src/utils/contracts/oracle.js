export default [
  {
    name: "BombOracle",
    id: 1,
    contractChain: "0x38",
    address: "0x3eBa42e813c82857F412c7bCE33BE2FBdC18cDf0",
    abi: [
      {
        inputs: [],
        name: "BOMB",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "BOMB_BTC",
        outputs: [
          {
            internalType: "contract IUniswapV2Pair",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "BOMB_ORACLE",
        outputs: [
          {
            internalType: "contract IBombOracle",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "BTC_USD",
        outputs: [
          {
            internalType: "contract IAggregator",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "XBOMB",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_get",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "get",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "peek",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        name: "peekSpot",
        outputs: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
];
