var express = require("express");
const db = require("../database/pokeranker");
var router = express.Router();

/* GET pokemon listing. */
router.get("/", function (req, res, next) {
  res.send("Bulbasaur");
});

// GET all pokemon in DB
router.get("/all", (req, res) => {
  db.all("SELECT * FROM pokemon;", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

module.exports = router;
