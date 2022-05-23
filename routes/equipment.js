// Initialise express router
const express = require("express");
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require("../db/skt_db");

// Endpoint All equipment '/equipment'
router.get("/", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM equipment";

    // Execute query
    const rows = await conn.query(myquery);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// End point models equipment '/models'
router.get("/models", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "SELECT model_categorie FROM equipment GROUP BY model_categorie asc";

    // Execute query
    const rows = await conn.query(myquery);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint New equipment '/equipment/new'
router.post("/new", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "INSERT INTO equipment (ean13, model_name, model_categorie, serial_number, location, is_alert, notes ) VALUES (?, ?, ?, ?, ?, ?)";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.name,
      req.body.serial,
      req.body.description,
      req.body.location,
      req.body.is_alert,
      req.body.qr_code_url,
    ]);
    conn.end();
    conn.release();

    // Response to client
    res.status(201).send(`Equipment ${req.body.name}, created!`);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Single equipment '/equipment/:id'
router.get("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM equipment WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.params.id]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Update equipment '/equipment/:id'
router.put("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "UPDATE equipment SET ean13 = ?, model_name = ?, model_categorie = ?, serial_number = ?, location = ?, is alert = ?, note = ? WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.ean13,
      req.body.model_name,
      req.body.model_categorie,
      req.body.serial_number,
      req.body.location,
      req.body.is_alert,
      req.body.note,
      req.params.id,
    ]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).send(`Equipment ${req.body.model_name}, updated!`);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Delete equipment '/equipment/:id'
router.delete("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "DELETE FROM equipment WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.params.id]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).send(`Equipment ${req.params.id}, deleted!`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
