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
                  <Text>Rating: {"★".repeat(rating) || 0}</Text>
                </VStack>
                <VStack align={""}>
                  <Text>#{number}</Text>
                  <Text>{name} </Text>
                  <Text>{nickname || "The Missing Pokemon"}</Text>
                </VStack>
              </HStack>

              <Text maxWidth={"300px"}>{description}</Text>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
}
