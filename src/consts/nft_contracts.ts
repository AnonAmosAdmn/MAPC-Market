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
      "/MAPC.gif",
    type: "ERC721",
  },
];
