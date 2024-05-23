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
      (element) => element.id.toString() === event.currentTarget.value
    );
    setDisplayed({
      id: newValue?.id,
      name: newValue?.name,
      description: newValue?.description,
      nickname: newValue?.nickname,
      sprite: newValue?.sprite,
      rating: newValue?.rating || 0,
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
            <option
              style={{ textTransform: "capitalize" }}
              value={pokemon.id}
              key={index}
            >
              #{pokemon.id} - {pokemon.name}
            </option>
          );
        })}
      </Select>
      <PokemonCard
        name={pokemonOnDisplay?.name}
        pokedexNumber={pokemonOnDisplay?.id}
        description={pokemonOnDisplay?.description}
        rating={pokemonOnDisplay?.rating}
        nickname={pokemonOnDisplay?.nickname}
        sprite={pokemonOnDisplay?.sprite}
      />
    </div>
  );
}
