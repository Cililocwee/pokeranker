import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import DefaultImage from "../assets/0.png";

interface PokemonInfoWindowProps {
  name: string;
  pokedexNumber: number;
  rating: number;
  nickname: string;
  sprite: string;
}

export default function PokemonInfoWindow({
  name,
  pokedexNumber,
  rating,
  nickname,
  sprite,
}: PokemonInfoWindowProps) {
  return (
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
        <Text>Avg: {"★".repeat(rating) || "Unrated"}</Text>
      </VStack>
      <VStack align={""}>
        <Text borderBottom={"4px solid white"}>
          #{pokedexNumber?.toString().padStart(3, "0") || "000"}
        </Text>
        <Text borderBottom={"4px solid white"} textTransform={"capitalize"}>
          {name || "Choose a pokemon!"}
        </Text>
        <Text borderBottom={"4px solid white"}>
          {nickname || "Gotta Catch 'Em All!"}
        </Text>
      </VStack>
    </HStack>
  );
}
