// Load Mariadb dependency
const { send } = require("express/lib/response");
const res = require("express/lib/response");
const mariadb = require("mariadb");

// Initialise connection constant to MariaDB server
const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  port: "3344",
  password: "root",
  database: "skt_database",
  //connectionLimit: 10,
  //acquireTimeout: 30000,
  timezone: "utc",
});

// Create connection
function getConnection() {
  return pool.getConnection().catch((error) => {
    console.error(error);
    res.sendStatus(503).end();
  });
}

module.exports = { getConnection };
