var express = require("express");
var router = express.Router();
const db = require("../database/pokeranker");

/* GET rankings listing. */
router.get("/", function (req, res, next) {
  res.send("Rankings");
});

module.exports = router;
