// Load express server and instantiate the application
const express = require("express");
const app = express();

// Load environment variables
require("dotenv").config();

// Load date-fns
const { format } = require("date-fns");

// Load UUID
const { v4: uuidv4 } = require("uuid");

// Load cors
const cors = require("cors");
app.use(cors({ origin: "*", credentials: true }));

//const bcrypt = require("bcrypt");

// Load bcrypt
// Load Json Web Token
const jwt = require("jsonwebtoken");

// Static pages are served from the public folder
app.use(express.static("public"));

// Define Routes
const userRoute = require("./routes/users");
const equipmentRoute = require("./routes/equipment");
const thresholdsRoute = require("./routes/thresholds");
const notificationsRoute = require("./routes/notifications");
const missionsRoute = require("./routes/missions");
const batteryRoute = require("./routes/batteries");
//const loginRoute = require("./routes/login");

// Use Routes
app.use("/users", userRoute);
app.use("/equipment", equipmentRoute);
app.use("/thresholds", thresholdsRoute);
app.use("/notifications", notificationsRoute);
app.use("/missions", missionsRoute);
app.use("/batteries", batteryRoute);
//app.use("/", loginRoute);

// Initialize listening port
const port = 3030;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
