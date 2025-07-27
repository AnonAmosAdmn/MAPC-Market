import type { Chain } from "thirdweb";
import { monadTestnet } from "thirdweb/chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};


export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xA4a3B33100ddb12B4563F01152Ee55b96886ef0D",
    chain: monadTestnet,
    title: "Monad Ape Punks Club",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmNY6eNXJBMKSyjPG7ndpbf6FubtLSrkFzQhaMWG5SsiXD/0.gif",
    type: "ERC721",
  },
];
