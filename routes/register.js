// Initialise express router
const express = require('express');
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require('../db/db');

// Routes here








module.exports = router;