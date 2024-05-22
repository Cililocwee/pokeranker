import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PokemonSelector from "./components/PokemonSelector";

function App() {
  const foo = [
    ["001", "bulbasaur"],
    ["002", "ivysaur"],
    ["003", "venusaur"],
    ["100", "voltorb"],
    ["101", "electrode"],
  ];

  const bar = [
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
        <PokemonSelector pokeValues={foo} pokedex={bar} />
        {/* <PokemonCard name="Voltorb" /> */}
      </div>
    </>
  );
}

export default App;
