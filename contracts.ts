import type { Contracts } from "./.lib/types";

export default {
  mainnet: {
    curve: {
      usr_pool: "0x16d050778b6599ce94993d2ff83f8da7136421a9",
      rlp_pool: "0x75c91a79faf0fe64accdbd51e3fa6321d8952d84",
    },
    pt_usr: "0x4a977653c58cfd82d42fd706cf68a0c1b6d0ca56",
    weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    uniswap: {
      positions_nft: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
    },
  },
} satisfies Contracts;
