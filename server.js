'use strict';

const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 'https://lucid-cray-84ad58.netlify.com/' || 5000;

app.use(cors());

app.get('/api/model_info', (req, res) => {
  const date = fs.readFileSync('model_info.txt', 'utf8');
  return res.status(200).json({
    last_updated: date.trim()
  });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen('https://lucid-cray-84ad58.netlify.com/' || port);
console.log(`Running on http://localhost:${port}`);
