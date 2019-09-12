// Mongoose
const mongoose = require("mongoose");

// Conectar mongoose con MongoDB
var db_url = process.env.DB_URI

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (!err) {
    console.log("Conexion exitosa a MongoDB!!");
  } else {
    console.log('Something bad happen with database');
  }
});