const express = require('express');
const path = require('path');
const mongoose = require("mongoose")
const app = express();
const port = 8000;

const config = require("./config/key.js"); 

app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(port, () => {
  mongoose.connect(
    config.mongoURI
  ).then(()=> {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log("Connecting MongoDB...")
  }).catch((err)=> {
    console.log(`${err}`)
  });
  
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
});