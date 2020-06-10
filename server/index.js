const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors')
//include models
const Bug = require('./db/schemas.js');

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

app.get('/api/bugs', (req, res) => {
  let allBugs = Bug.find( (err, bug) => {
    if(err) console.log('Error on get');
    res.status(200).send(bug);
  })
})

app.post('/api/bugs', (req, res) => {
  let postBug = new Bug(req.body)
  postBug.save( (err) => {
    if(err) console.log('Error on post');
  })
  res.status(201).send(postBug);
})



app.listen(port, () => {
  console.log("DB Server listing on port " + port);
});

module.exports = app;