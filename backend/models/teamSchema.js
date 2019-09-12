// We create a Mongo db schema for this variable
// Copy from mongoose docs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Player = require("./playerSchema");

const teamSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  flag: { type: String, required: true },
  players: { type: Schema.ObjectId, ref: "Player" }
});

// Lets create (convert) this schema Model with ---> mongoose.model(modelName, schema):
const team = mongoose.model("team", teamSchema);

// Send it:
module.exports = team;
