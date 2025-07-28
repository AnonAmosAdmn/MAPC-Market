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
  {
    address: "0xDBb7b5AB71c162e41EEC9c9D7a6F9326530fCeD0",
    chain: monadTestnet,
    title: "MetaFoxes",
    thumbnailUrl:
      "/mf.jpg",
    type: "ERC1155",
  },
  {
    address: "0xdD7E7c7d8525F8C749BDD592656e9f970100d5Bd",
    chain: monadTestnet,
    title: "Monad Toads",
    thumbnailUrl:
      "/MT.gif",
    type: "ERC1155",
  },
];
