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
const cors = require ('cors');

// Load bcrypt
const bcrypt = require('bcrypt');

// Load Json Web Token
const jwt = require('jsonwebtoken');

// Static pages are served from the public folder
app.use(express.static('public'));

// Define Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const forgotPasswordRoute = require('./routes/forgotPassword');
const userRoute = require('./routes/users');
const equipmentRoute = require('./routes/equipment');

// Use Routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/forgotPassword', forgotPasswordRoute);
app.use('/users', userRoute);
app.use('/equipment', equipmentRoute);

// Initialize listening port
const port =  3030;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
