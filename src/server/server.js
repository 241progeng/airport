const sqlite3 = require('sqlite3').verbose();
const express = require('express');

const app = express();

try {
  let db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE);
  console.log('Connected to the database.');
  db.each("SELECT login AS login FROM Users", function(err, row) {
    console.log(row.login + ": plakayu");
  });  
} catch (err) {
  console.error(err.message);
}


app.listen(3000, () => {
    console.log('Server started!');
  });



app.route('/api/cats').get((req, res) => {
  db.each("SELECT login AS login FROM Users", function(err, row) {
    console.log(row.login + ": plakayu");
  });  
  res.send({
      cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
  });

app.route('/api/cats/:name').get((req, res) => {});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name']
});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({ name: requestedCatName });
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cats').post((req, res) => {
  res.send(201, req.body);
});

app.route('/api/cats/:name').put((req, res) => {
  res.send(200, req.body);
});

app.route('/api/cats/:name').delete((req, res) => {
  res.sendStatus(204);
});