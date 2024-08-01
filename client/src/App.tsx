import "./App.css";
import PokemonSelector from "./components/PokemonSelector";
import PokedexEntry from "./interfaces/PokedexEntry";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonRatingResponse from "./interfaces/PokemonRatingResponse";
import LogIn from "./components/LogIn";
import { Button, Text } from "@chakra-ui/react";

function App() {
  const [pokeData, setPokeData] = useState<PokedexEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokeData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pokemon/all");
        // setPokeData(response.data.data);
        return response.data.data;
      } catch (error) {
        console.error("Failed to fetch pokedata.");
        return [];
      }
    };

    const fetchRatings = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/ratings/all/avg`);
        const pokeArray: PokemonRatingResponse[] = res.data.data;

        const pokemonRatingsArray = pokeArray.map((rating) => ({
          pokemon_id: rating.pokemon_id,
          avg: rating["AVG(rating)"],
        }));

        return pokemonRatingsArray;
      } catch (err) {
        console.error("Failed to fetch rating.");
        return [];
      }
    };

    const fetchData = async () => {
      setLoading(true);

      const pokeData = await fetchPokeData();
      if (pokeData.length === 0) {
        setLoading(false);
        return;
      }

      const ratings = await fetchRatings();

      const updatePokeData = pokeData.map((pokemon: PokedexEntry) => {
        const rating = ratings.find((r) => r.pokemon_id === pokemon.id);
        return {
          ...pokemon,
          rating: rating ? rating.avg : null,
        };
      });

      setPokeData(updatePokeData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="App">
        <PokemonSelector pokedex={pokeData} />
        {/* <RatingForm /> */}
        {/* <LogIn /> */}
      </div>
    </>
  );
}

export default App;
