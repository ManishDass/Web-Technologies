const express = require('express')
const path = require('path');

const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/main.css'));
  });

app.get('/about', (req, res) => {
    res.send('Welcome to about page!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})