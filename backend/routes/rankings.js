var express = require("express");
var router = express.Router();
const db = require("../database/pokeranker");

/* GET rankings listing. */
router.get("/", function (req, res, next) {
  res.send("Rankings");
});

// GET all rankings in DB
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
