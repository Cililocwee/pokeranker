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
                    alt="Voltorb"
                    src={sprite}
                    border={"1px solid black"}
                    backgroundColor={"white"}
                    borderRadius={"8px"}
                  />
                  <Text>{"★".repeat(rating) || "★"}</Text>
                </VStack>
                <VStack align={""}>
                  <Text borderBottom={"4px solid white"}>#{pokedexNumber}</Text>
                  <Text
                    borderBottom={"4px solid white"}
                    textTransform={"capitalize"}
                  >
                    {name}{" "}
                  </Text>
                  <Text borderBottom={"4px solid white"}>
                    {nickname || "The Missing Pokemon"}
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
