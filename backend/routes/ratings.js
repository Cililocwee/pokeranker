var express = require("express");
var router = express.Router();
const db = require("../database/pokeranker");

/* GET rankings listing. */
router.get("/", function (req, res, next) {
  res.send("Ratings");
});

// GET all ratings
router.get("/all", (req, res) => {
  db.all("SELECT * FROM ratings;", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// GET all AVG ratings
router.get("/all/avg", (req, res) => {
  const query =
    "SELECT pokemon_id, AVG(rating) FROM ratings GROUP BY pokemon_id";
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// GET specific avg from pokemon_id
router.get("/:pokemonId", (req, res) => {
  db.all(
    `SELECT AVG(rating) FROM ratings WHERE pokemon_id = ${req.params.pokemonId};`,
    [],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    }
  );
});

// POST submit new rating
router.post("/:userId/:pokemonId/:rating", async (req, res) => {
  const userId = req.params.userId;
  const pokemonId = req.params.pokemonId;
  const rating = req.params.rating;

  // TODO: Expand on validation
  if (
    !userId ||
    !pokemonId ||
    !rating ||
    isNaN(pokemonId) ||
    isNaN(userId) ||
    isNaN(rating)
  ) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  db.all(
    `INSERT INTO ratings (user_id, pokemon_id, rating) VALUES (${userId}, ${pokemonId}, ${rating})`,
    [],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    }
  );
});

module.exports = router;
