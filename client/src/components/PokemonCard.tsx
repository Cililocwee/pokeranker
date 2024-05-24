import {
  Card,
  CardBody,
  Text,
  Image,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import PokemonCardProps from "../interfaces/PokemonCardProps";
import DefaultImage from "../assets/0.png";

export default function PokemonCard({
  name,
  pokedexNumber,
  description,
  rating,
  nickname,
  sprite,
}: PokemonCardProps) {
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
                    alt={`${nickname}`}
                    src={sprite || DefaultImage}
                    border={"1px solid black"}
                    backgroundColor={"white"}
                    borderRadius={"8px"}
                  />
                  <Text>{"★".repeat(rating) || "★"}</Text>
                </VStack>
                <VStack align={""}>
                  <Text borderBottom={"4px solid white"}>
                    #{pokedexNumber?.toString().padStart(3, "0") || "000"}
                  </Text>
                  <Text
                    borderBottom={"4px solid white"}
                    textTransform={"capitalize"}
                  >
                    {name || "Choose a pokemon!"}
                  </Text>
                  <Text borderBottom={"4px solid white"}>
                    {nickname || "Gotta Catch 'Em All!"}
                  </Text>
                </VStack>
              </HStack>

              <Text borderTop={"4px solid white"} maxWidth={"300px"}>
                {description}
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
}
