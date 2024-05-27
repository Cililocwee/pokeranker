import { Text } from "@chakra-ui/react";

interface PokemonDescriptionProps {
  description: string;
}

export default function PokemonDescription({
  description,
}: PokemonDescriptionProps) {
  return (
    <Text borderTop={"4px solid white"} maxWidth={"300px"}>
      {description}
    </Text>
  );
}
