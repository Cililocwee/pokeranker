import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";

export default function PokemonCard() {
  return (
    <div>
      <Card>
        <CardBody>
          <Text>Bulbasaur</Text>
          <Text>Pokedex: 001</Text>
          <Text>Rating: ★★★★</Text>
        </CardBody>
      </Card>
    </div>
  );
}
