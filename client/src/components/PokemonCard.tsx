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
  number,
  description,
  rating,
  nickname,
  image,
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
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${image}.png`}
                    border={"1px solid black"}
                    backgroundColor={"white"}
                    borderRadius={"8px"}
                  />
                  <Text>{"★".repeat(rating) || 0}</Text>
                </VStack>
                <VStack align={""}>
                  <Text borderBottom={"4px solid white"}>#{number}</Text>
                  <Text borderBottom={"4px solid white"}>{name} </Text>
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
