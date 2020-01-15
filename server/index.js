const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const Bug = require('./db/queries.js');

const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  // get back all bug reports in the DBs
  Bug.find(req.body)
    .then((bug) => {
      res.send(200, bug)
    }
    );
});

app.post('/', (req, res) => {
  // send new bug to the server
    Bug.create(req.body)
    .then((bug) =>
  res.send(201, bug)
    );
});

app.listen(port, () => console.log(`Listening on port:${port}`));

module.exports = app;
