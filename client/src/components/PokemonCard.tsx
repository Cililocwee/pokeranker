import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Box,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function PokemonCard() {
  return (
    <div>
      <Box
        backgroundColor={"red"}
        padding={"2em"}
        borderRadius={"1em"}
        maxWidth={"500px"}
        margin={"auto"}
      >
        <Card size={"sm"} padding={"1em"} backgroundColor={"black"}>
          <CardBody backgroundColor={"lightblue"}>
            <VStack>
              <HStack>
                <VStack
                  backgroundColor={"lightblue"}
                  padding={"1em"}
                  borderRadius={"1em"}
                >
                  <Image
                    alt="Voltorb"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
                    border={"1px solid black"}
                    backgroundColor={"white"}
                    borderRadius={"8px"}
                  />
                  <Text>Rating: ★★★★</Text>
                </VStack>
                <VStack align={""}>
                  <Text>#100</Text>
                  <Text>Voltorb</Text>
                  <Text>Ball Pokemon</Text>
                </VStack>
              </HStack>

              <Text>
                Usually found in power plants. Easily mistaken for a Poké Ball,
                they have zapped many people.
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
}
