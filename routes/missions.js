// Initialise express router
const express = require('express');
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require('../db/db');

// Endpoint All Missions '/missions'
router.get('/', async (req, res) => {

  console.log('HEY!!!');

   try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM missions";

    // Execute query
    const rows = await conn.query(myquery);

    // Response to client
    res.status(200).json(rows);

  } catch (err) {
    console.log(err);
  } 
});

// Endpoint New Mission '/missions/'
router.post('/', async (req, res) => {

  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "INSERT INTO missions (title, description, location, start_date, end_date, customer_info) VALUES (?, ?, ?, ?, ?, ?)";
    // Execute query
    const rows = await conn.query(myquery, [
      req.body.title,
      req.body.description,
      req.body.location,
      req.body.start_date,
      req.body.end_date,
      req.body.customer_info,
    ]);
    
    // Response to client
    res.status(201).send({message: 'User created!'});
    
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Single Mission /missions/1
router.get('/:id', async (req, res) => {

  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM missions WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.mission]);

    // Response to client
    res.status(200).json(rows);

  } catch (err) {
    console.log(err);
  }
});

// Endpoint Update Mission '/Missions/update/:id'
router.put('/:id', async (req, res) => {

    try {
      // Get connection from pool
      const conn = await pool.getConnection();

      // Create new query
      const myquery =
        'UPDATE missions SET title = ?, description = ?, location = ?, start_date = ?, end_date = ?, customer_info = ? WHERE id = ?';

      // Execute query
      const rows = await conn.query(myquery, [
        req.body.title,
        req.body.description,
        req.body.location,
        req.body.start_date,
        req.body.end_date,
        req.body.customer_info,
        req.mission
      ]);

      // Response to client
      res.status(202).send({message:'Missions updated!'});
    } catch (err) {
        console.log(err);
    }
});

// Endpoint Delete Mission '/Missions/delete/1'
router.delete('/:id', async (req, res) => {

  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "DELETE FROM Missions WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.mission]);

    // Response to client
    res.status(200).send({message:'Mission deleted!'});

  } catch (err) {
    console.log(err);
  }
});

// Router params for Mission id
router.param('id', (req, res, next, id) => {
    req.mission = id;
    next();
});

module.exports = router;