// Load Mariadb dependency
const mariadb = require('mariadb');

// Initialise connection constant to MariaDB server
const pool = mariadb.createPool({
  host: '172.17.0.2',
  user: 'root',
  password: 'root',
  database: 'skt_database',
});

// Create connection
async function getConnection() {
  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {getConnection};