// Initialise express router
const express = require('express');
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require('../db/skt_db');

// Endpoint All batteries '/batteries'
router.get('/', async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = 'SELECT * FROM batteries';

    // Execute query
    const rows = await conn.query(myquery);

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint New equipment '/equipment/new'
router.post('/new', async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "INSERT INTO batteries (capacity, voltage, expiration_date, current_cycles, max_cycles, id_equipment) VALUES (?, ?, ?, ?, ?, ?)";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.capacity,
      req.body.voltage,
      req.body.expiration_date,
      req.body.current_cycles,
      req.body.max_cycles,
      req.body.id_equipment,
    ]);

    // Response to client
    res.status(201).send(`Batteries ${req.body.id_battery}, created!`);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Single equipment '/equipment/:id'
router.get('/:id', async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = 'SELECT * FROM batteries WHERE id = ?';

    // Execute query
    const rows = await conn.query(myquery, [req.params.id]);

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Update equipment '/equipment/:id'
router.put('/:id', async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      'UPDATE batteries SET name = ?, serial = ?, description = ?, location = ?, is_alert = ?, qr_code_url = ? WHERE id = ?';

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.capacity,
      req.body.voltage,
      req.body.expiration_date,
      req.body.current_cycles,
      req.body.max_cycles,
      req.body.id_equipment,
    ]);

    // Response to client
    res.status(200).send(`Battery ${req.body.id_equipment}, updated!`);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Delete battery '/battery/:id'
router.delete('/:id', async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = 'DELETE FROM batteries WHERE id = ?';

    // Execute query
    const rows = await conn.query(myquery, [req.params.id]);

    // Response to client
    res.status(200).send(`Battery ${req.params.id}, deleted!`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;