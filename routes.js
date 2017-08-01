console.log("routes.js loaded");

var express = require('express');
var router = express.Router();
var quotes = require('./quotes.js')

router.get('/random-quote', function (req, res) {
  //send random lyric
  res.json(quotes[Math.floor(Math.random() * quotes.length)]);
});

router.get('/quotes', function (req, res) {
  res.json(quotes);
});

router.get('/', function (req, res) {
  res.send('howdy');
});

module.exports = router;
