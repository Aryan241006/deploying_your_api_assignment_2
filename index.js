const express = require('express');
const { resolve } = require('path');
require('dotenv').config();

const app = express();

// Middleware to serve static files
app.use(express.static('static'));

// Dynamic route handling
app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

// Start server on environment-defined port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
