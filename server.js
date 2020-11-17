'use strict';

const express = require('express');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('server.db');

// Parse argumets
const args = require('minimist')(process.argv.slice(2));
if (!('host' in args) || !('port' in args)) {
  console.log('host or port were not specified');
  process.exit(1);
}

const host = args['host'];
const port = args['port'];

// App
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// index page
app.get('/', (req, res) => {
  res.render('pages/index');
});

// about page
app.get('/about', (req, res) => {
  var quotes = [
    'Everything in moderation - including moderation.',
    'Common sense is not a common thing.',
    'To go wrong in one\'s own way is better than to go right in someone' +
    ' else\'s.',
  ];

  var images = [];
  db.each('SELECT name FROM images', (err, rows) => {
    if (err != null) {
      console.log('Unexpected error occured');
    } else {
      images.push(rows.name);
    }
  }, () => {
    res.render('pages/about', {
      quotes: quotes,
      about_image: images[Math.floor(Math.random() * images.length)],
    });
  });
});

const server = app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
  console.log('Brought by', process.env.USER);
});

process.on('SIGINT', () => {
  server.close(() => {
    // Close the Database
    db.close();

    console.log('\nServer closed');
  });
});
