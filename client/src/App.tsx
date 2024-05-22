import "./App.css";
import PokemonSelector from "./components/PokemonSelector";
import PokedexEntry from "./interfaces/Pokedex";

function App() {
  // TODO: Replace with array from DB
  const dummyDex: PokedexEntry[] = [
    {
      name: "bulbasaur",
      number: "001",
      nickname: "Seed Pokemon",
      description:
        "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      rating: 5,
    },
    {
      name: "ivysaur",
      number: "002",
      nickname: "Seed Pokemon",
      description:
        "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      rating: 4,
    },
  ];

  return (
    <>
      <div id="App">
        <PokemonSelector pokedex={dummyDex} />
      </div>
    </>
  );
}

export default App;
