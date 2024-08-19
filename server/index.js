const express = require('express');
const path = require('path');
const mongoose = require("mongoose")
const app = express();
const port = 8000;


app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://hyunah2765:h27652765@mern-stack-study-cluste.49uhp.mongodb.net/?retryWrites=true&w=majority&appName=mern-stack-study-cluste"
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