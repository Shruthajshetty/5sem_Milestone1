
const express = require('express')
const mongoose = require('mongoose')
const app  = express()
require("dotenv").config();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

// Check MongoDB connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(4000,()=>{
    console.log("Server listening successfully on port 4000")
})
 