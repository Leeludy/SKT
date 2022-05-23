const express = require("express");
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require("../db/skt_db");

// Format date utc
const { formatDate } = require("../db/tools");

// Endpoint All thresholds '/thresholds'
router.get("/", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM thresholds ORDER BY ref_equipment ASC ;";

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

// Endpoint New Thresholds '/thresholds/'
router.post("/", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "INSERT INTO thresholds (threshold_level, expiration_date, ref_equipment) VALUES (?, ?, ?)";
    // Execute query
    const rows = await conn.query(myquery, [
      req.body.threshold_level,
      req.body.expiration_date ? formatDate(req.body.expiration_date) : null,
      req.body.ref_equipment,
    ]);
    conn.end();
    conn.release();

    // Response to client
    res.status(201).send({ message: "Threshold Alert created!" });
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Single Threshold /thresholds/1
router.get("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM thresholds WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.threshold]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Update Threshold '/thresholds/update/:id'
router.put("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "UPDATE thresholds SET threshold_level = ?, expiration_date = ?, ref_equipment = ? WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.threshold_level,
      formatDate(req.body.expiration_date),
      req.body.ref_equipment,
      req.params.id,
    ]);
    conn.end();
    conn.release();

    // Response to client
    res.status(202).send({ message: "Threshold Alert updated!" });
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Delete threshold '/thershold/:id'
router.delete("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "DELETE FROM thresholds WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.threshold]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).send(`Threshold Alert ${req.threshold}, deleted!`);
  } catch (err) {
    console.log(err);
  }
});

// Router params for threshold id
router.param("id", (req, res, next, id) => {
  req.threshold = id;
  next();
});

module.exports = router;
