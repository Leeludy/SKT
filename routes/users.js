// Initialise express router
const express = require('express');
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require('../db/skt_db');

// Endpoint All Users '/users'
router.get('/', async (req, res) => {
 
  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM users";

    // Execute query
    const rows = await conn.query(myquery);

    // Response to client
    res.status(200).json(rows);

  } catch (err) {
    console.log(err);
  }
});

// Endpoint New User '/users/new'
router.post('/new', async (req, res) => {

  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery =
      "INSERT INTO users (first_name, last_name, email, password, role, notes) VALUES (?, ?, ?, ?, ?, ?)";

    // Execute query
    const rows = await conn.query(myquery, [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.password,
      req.body.role,
      req.body.notes,
    ]);
    
    // Response to client
    res.status(201).send(`User ${req.body.first_name}, created!`);
    
  } catch (err) {
    console.log(err);
  }
});

// Endpoint Single User /users/1
router.get('/:id', async (req, res) => {

  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "SELECT * FROM users WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.user]);

    // Response to client
    res.status(200).json(rows);

  } catch (err) {
    console.log(err);
  }
});

// Endpoint Update User '/users/update/:id'
router.put('/:id', async (req, res) => {

    try {
      // Get connection from pool
      const conn = await pool.getConnection();

      // Create new query
      const myquery =
        'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, role = ?, notes = ? WHERE id = ?';

      // Execute query
      const rows = await conn.query(myquery, [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password,
        req.body.role,
        req.body.notes,
        req.user
      ]);

      // Response to client
      res.status(202).send('Users updated!');
    } catch (err) {
        console.log(err);
    }
});

// Endpoint Delete User '/users/delete/1'
router.delete('/:id', async (req, res) => {

  try {
    // Get connection from pool
    const conn = await pool.getConnection();

    // Create new query
    const myquery = "DELETE FROM users WHERE id = ?";

    // Execute query
    const rows = await conn.query(myquery, [req.user]);

    // Response to client
    res.status(200).send('User deleted!');

  } catch (err) {
    console.log(err);
  }
});

// Router params for user id
router.param('id', (req, res, next, id) => {
    req.user = id;
    next();
});

module.exports = router;