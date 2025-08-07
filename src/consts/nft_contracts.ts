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
      "/AP.gif",
    type: "ERC721",
  },
  {
    address: "0x3019BF1dfB84E5b46Ca9D0eEC37dE08a59A41308",
    chain: monadTestnet,
    title: ".NAD DOMAINS",
    thumbnailUrl:
      "/AP.gif",
    type: "ERC721",
  },
];
