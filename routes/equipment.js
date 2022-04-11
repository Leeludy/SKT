// Initialise express router
const express = require('express');
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require('../db/db');

// Endpoint All equipment '/equipment'
router.get('/', async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = 'SELECT * FROM equipment';

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
      "INSERT INTO equipment (name, serial, description, location, is_alert, qr_code_url) VALUES (?, ?, ?, ?, ?, ?)";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.name,
      req.body.serial,
      req.body.description,
      req.body.location,
      req.body.is_alert,
      req.body.qr_code_url,
    ]);

    // Response to client
    res.status(201).send(`Equipment ${req.body.name}, created!`);
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
    const myquery = 'SELECT * FROM equipment WHERE id = ?';

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
      'UPDATE equipment SET name = ?, serial = ?, description = ?, location = ?, is_alert = ?, qr_code_url = ? WHERE id = ?';

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.name,
      req.body.serial,
      req.body.description,
      req.body.location,
      req.body.is_alert,
      req.body.qr_code_url,
      req.params.id,
    ]);

    // Response to client
    res.status(200).send(`Equipment ${req.body.name}, updated!`);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Delete equipment '/equipment/:id'
router.delete('/:id', async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = 'DELETE FROM equipment WHERE id = ?';

    // Execute query
    const rows = await conn.query(myquery, [req.params.id]);

    // Response to client
    res.status(200).send(`Equipment ${req.params.id}, deleted!`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;