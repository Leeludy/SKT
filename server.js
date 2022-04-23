// Load express server and instantiate the application
const express = require('express');
const app = express();

// Load environment variables
require('dotenv').config();

// Load date-fns
const { format } = require('date-fns');

// Load UUID
const { v4: uuidv4 } = require('uuid');

// Load cors
const cors = require('cors');
app.use(cors({ origin: '*', credentials: true }));

// Load bcrypt
const bcrypt = require('bcrypt');

// Load Json Web Token
const jwt = require('jsonwebtoken');

// Static pages are served from the public folder
app.use(express.static('public'));

// Define Routes
const userRoute = require('./routes/users');
const equipmentRoute = require('./routes/equipment');
const missionRoute = require('./routes/missions');

// Use Routes
app.use('/users', userRoute);
app.use('/equipment', equipmentRoute);
app.use('/missions', missionRoute);

// Initialize listening port
const port = 3030;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
