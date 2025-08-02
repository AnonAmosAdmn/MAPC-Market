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
    address: "0x94475C04c5413c9FE532675fB921fC8b9a24475b",
    chain: monadTestnet,
    title: "Ape Punks Access Pass",
    thumbnailUrl:
      "/AC.gif",
    type: "ERC721",
  },
];
