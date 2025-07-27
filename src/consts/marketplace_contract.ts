import type { Chain } from "thirdweb";
import { monadTestnet } from "thirdweb/chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x8A0C171d3E11135B0f2eb6e3ccdC355B0eF5b0eD",
    chain: monadTestnet,
  },
];
