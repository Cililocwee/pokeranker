var express = require("express");
var router = express.Router();

/* GET pokemon listing. */
router.get("/", function (req, res, next) {
  res.send("Bulbasaur");
});

module.exports = router;
