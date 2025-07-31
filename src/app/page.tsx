"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex>
      <Box mt="24px" m="auto">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image 
            src={`/mapc-logo.png`} 
            alt="MAPC Image"
            width={500}
            height={200}
            className="rounded-lg"
          />
        </div>
        <Flex direction="column" gap="4">
          <Heading mt="8" as="h1" size="2xl" textAlign="center">
            NFT Collections
          </Heading>
          <Flex
            direction="row"
            wrap="wrap"
            mt="20px"
            gap="5"
            justifyContent="space-evenly"
          >
            {NFT_CONTRACTS.map((item) => (
              <Link
                _hover={{ textDecoration: "none" }}
                w={300}
                h={400}
                key={item.address}
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
              >
                <Image 
                  src={item.thumbnailUrl} 
                  alt="MAPC Image"
                  width={500}
                  height={300}
                />
                <Text fontSize="large" mt="10px">
                  {item.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
