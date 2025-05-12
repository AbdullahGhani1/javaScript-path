require("dotenv").config();
const express = require("express");

// Create an instance of express
const app = express();

// open a port
const PORT = process.env.PORT || 3000;

// get request
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
