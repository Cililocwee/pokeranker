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

module.exports = router;
