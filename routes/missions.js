// Initialise express router
const express = require("express");
const router = express.Router();

// tool UTC format date
const { formatDate } = require("../db/tools");

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require("../db/skt_db");

// Endpoint All Missions '/missions'
router.get("/", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM missions";

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

// Endpoint New Mission '/missions/'
router.post("/", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();
    const startDate = formatDate(req.body.start_date);
    const endDate = formatDate(req.body.end_date);

    // Create new query
    const myquery =
      "INSERT INTO missions (title, details, location, start_date, end_date, customer_info) VALUES (?, ?, ?, ?, ?, ?)";
    // Execute query
    const rows = await conn.query(myquery, [
      req.body.title,
      req.body.details,
      req.body.location,
      startDate,
      endDate,
      req.body.customer_info,
    ]);
    conn.end();
    conn.release();

    // Response to client
    res.status(201).send({ message: "Mission created!" });
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Single Mission /missions/1
router.get("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM missions WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.mission]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Update Mission '/Missions/update/:id'
router.put("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();
    const startDate = formatDate(req.body.start_date);
    const endDate = formatDate(req.body.end_date);

    // Create new query
    const myquery =
      "UPDATE missions SET title = ?, details = ?, location = ?, start_date = ?, end_date = ?, customer_info = ? WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.title,
      req.body.details,
      req.body.location,
      startDate,
      endDate,
      req.body.customer_info,
      req.params.id,
    ]);
    conn.end();
    conn.release();

    // Response to client
    res.status(202).send({ message: "Missions updated!" });
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Delete Mission '/Missions/delete/1'
router.delete("/:id", async (req, res) => {
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "DELETE FROM missions WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.mission]);
    conn.end();
    conn.release();

    // Response to client
    res.status(200).send({ message: "Mission deleted!" });
  } catch (err) {
    console.log(err);
  }
});

// Router params for Mission id
router.param("id", (req, res, next, id) => {
  req.mission = id;
  next();
});

module.exports = router;
