import { Select } from "@chakra-ui/react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import PokedexEntry from "../interfaces/Pokedex";

export default function PokemonSelector({
  pokedex,
}: {
  pokedex: PokedexEntry[];
}) {
  const [pokemonOnDisplay, setDisplayed] = useState(pokedex[0]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = pokedex.find(
      (element) => element.number === event.currentTarget.value
    );
    setDisplayed({
      name: newValue?.name,
      number: newValue?.number,
      description: newValue?.description,
      nickname: newValue?.nickname,
      rating: newValue?.rating,
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
        {pokedex?.map(function (pokemon, index) {
          return (
            <option value={pokemon.number} key={index}>
              #{pokemon.number} - {pokemon.name}
            </option>
          );
        })}
      </Select>
      <PokemonCard
        name={pokemonOnDisplay?.name}
        number={pokemonOnDisplay?.number}
        description={pokemonOnDisplay?.description}
        rating={pokemonOnDisplay.rating}
        nickname={pokemonOnDisplay.nickname}
        image={Number(pokemonOnDisplay.number)}
      />
    </div>
  );
}
