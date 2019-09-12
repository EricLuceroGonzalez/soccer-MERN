// Servidor en express
const express = require("express");
const app = express();

// Check port
const port = process.env.port || 8000;

// ----------- BODY PARSER  ---------------
var bodyParser = require("body-parser");  // for parsing application/json
app.use(bodyParser.json());   // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Require Schema's

// -------------   CRUD  -----------------
app.get("/", (req, res) => {
  console.log("Hello World");
});

// Send variables when this file is 'required'
module.exports = { app, port };