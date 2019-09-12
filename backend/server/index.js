// Servidor en express
const express = require("express");
const app = express();
// import CORS
const cors = require("cors");
// Use CORS
app.use(cors());

// Check port
const port = process.env.port || 4001;

var dotenv = require("dotenv");
dotenv.config();

// ----------- BODY PARSER  ---------------
var bodyParser = require("body-parser"); // for parsing application/json
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Require Schema's
const Player = require('../models/playerSchema');

// -------------   CRUD  -----------------
app.get("/", (req, res) => {
  console.log("Hello World");
});

//  C: CREATE ------------
app.post("/api/v1/player", (req, res) => {
  // Recibir el jugador
  console.log(req.body);

  // Guardar en db
  const newPlayer = new Player(req.body);
  newPlayer.save((err, newPlayer) => {
    return err
      ? res.status(400).send({ mensaje: "Hay un error", res: err })
      : res.status(200).send({ mensaje: "Player guardado", res: newPlayer });
  });
});

// Send variables when this file is 'required'
module.exports = { app, port };
