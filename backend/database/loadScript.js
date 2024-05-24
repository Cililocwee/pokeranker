// ** Just a loading script to set up the database
// ** Right now just adds pokemon data in
// TODO need to set up the whole database in one script

const axios = require("axios");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// db connection
const DBSOURCE = path.join(__dirname, "pokeranker.db");

// connect to db
let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log("Connected to the SQLite database...");
  }
});

// Function to fetch data from PokeAPI and insert into the database
const fetchAndInsertPokemon = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    const pokemons = response.data.results;

    for (const pokemon of pokemons) {
      const pokemonDetails = await axios.get(pokemon.url);
      const speciesDetails = await axios.get(pokemonDetails.data.species.url);

      const id = pokemonDetails.data.id;
      const name = pokemonDetails.data.name;
      const sprite = pokemonDetails.data.sprites.front_default;
      const nickname = speciesDetails.data.genera.find(
        (genus) => genus.language.name === "en"
      ).genus;

      let description = "";
      const versionDescriptions = ["red", "blue", "yellow"];
      for (const version of versionDescriptions) {
        const versionFlavorText = speciesDetails.data.flavor_text_entries.find(
          (entry) =>
            entry.version.name === version && entry.language.name === "en"
        );
        if (versionFlavorText) {
          description = versionFlavorText.flavor_text.replace(
            /(\r\n|\n|\r|\f)/gm,
            " "
          );
          break;
        }
      }

      db.run(
        `INSERT INTO pokemon (id, name, sprite, nickname, description) VALUES (?, ?, ?, ?, ?)`,
        [id, name, sprite, nickname, description],
        (err) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`Inserted ${name} with ID ${id}`);
          }
        }
      );
    }
  } catch (error) {
    console.error("Error fetching data from PokeAPI:", error);
  }
};

// If the pokemon table doesn't exist, create it
db.run(
  `CREATE TABLE IF NOT EXISTS pokemon (
    id INTEGER PRIMARY KEY,
    name TEXT,
    sprite TEXT,
    nickname TEXT,
    description TEXT
  )`,
  (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    // Fetch data and insert into the database
    console.log("Pokemon table created");
    console.log("Fetching Pokemon...");
    fetchAndInsertPokemon();
  }
);
