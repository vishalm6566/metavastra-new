require("dotenv").config({})
const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = process.env.PORT||5000
const route=require("./routes/auth")
app.use(express.json())
app.use(route)
if ( process.env.NODE_ENV == "production"){

  app.use(express.static("frontend/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

  })


}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})