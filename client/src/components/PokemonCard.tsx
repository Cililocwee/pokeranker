import { Card, CardBody, Box, VStack } from "@chakra-ui/react";
import PokemonInfoWindow from "./PokemonInfoWindow";
import PokemonDescription from "./PokemonDescription";

interface PokemonCardProps {
  name: string;
  pokedexNumber: number;
  description: string;
  rating: number | undefined;
  nickname: string;
  sprite: string;
}

export default function PokemonCard({
  name,
  pokedexNumber,
  description,
  rating,
  nickname,
  sprite,
}: PokemonCardProps) {
  return (
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
            <PokemonInfoWindow
              name={name}
              pokedexNumber={pokedexNumber}
              rating={rating}
              nickname={nickname}
              sprite={sprite}
            />
            <PokemonDescription description={description} />
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
