// ** Run this script if you don't have a database ready

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

// Collect first 151 Pokemon for ranking
const fetchAndInsertPokemon = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    const pokemons = response.data.results;

    for (const pokemon of pokemons) {
      const pokemonDetails = await axios.get(pokemon.url);
      const id = pokemonDetails.data.id;
      const name = pokemonDetails.data.name;

      db.run(
        `INSERT INTO pokemon (id, name) VALUES (?, ?)`,
        [id, name],
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
    console.error(error);
  }
};

// Create table if not exists
db.run(
  `CREATE TABLE IF NOT EXISTS pokemon (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
)`,
  (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Pokemon table created");
    console.log("Fetching pokemon from POKEAPI");
    fetchAndInsertPokemon();
  }
);

db.run(
  `CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL
);`,
  (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Users table created");
  }
);

db.run(
  `CREATE TABLE ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    pokemon_id INTEGET NOT NULL,
    rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
    UNIQUE(user_id, pokemon_id)
);`,
  (err) => {
    if (err) {
      console.error(err.message);
      return;
    } else {
      console.log("Ratings table created");
    }
  }
);
