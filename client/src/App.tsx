import { useQuery } from "@chakra-ui/react";
import "./App.css";
import PokemonSelector from "./components/PokemonSelector";
import PokedexEntry from "./interfaces/Pokedex";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<PokedexEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pokemon/all");
        setData(response.data.data);
      } catch (error) {
        setError("Failed to fetch pokemon data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="App">
        <PokemonSelector pokedex={data} />
      </div>
    </>
  );
}

export default App;
