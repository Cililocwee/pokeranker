const path = require("path");
const sqlite3 = require("sqlite3").verbose();

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

// export connection as db
module.exports = db;
