import { Select } from "@chakra-ui/react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import Pokedex from "../interfaces/Pokdex";

export default function PokemonSelector({
  pokeValues,
  pokedex,
}: {
  pokeValues: string[][];
  pokedex: Pokedex;
}) {
  const [displayed, setDisplayed] = useState({
    name: "bulbasaur",
    number: "001",
  });

  const pokeOptions: string[][] = pokeValues;

  // TODO This should control the pokemon displayed
  const handleChange = (event) => {
    const valueArray = event.target.value.split(",");

    setDisplayed({
      name: valueArray[1],
      number: valueArray[0],
    });
  };

  return (
    <div>
      <Select
        placeholder="Choose a pokemon!"
        maxWidth={"300px"}
        margin={"1em auto"}
        variant={"filled"}
        onChange={handleChange}
      >
        {pokeOptions?.map(function (pokemon, index) {
          return (
            <option value={pokemon} key={index}>
              #{pokemon[0]} - {pokemon[1]}
            </option>
          );
        })}
      </Select>
      <PokemonCard name={displayed?.name} number={displayed?.number} />
    </div>
  );
}
