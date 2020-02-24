import express = require('express');
import path = require('path');

const app: express.Application = express();

app.get('/', function(req, res) {
  res.send('Hello!');
});

app.use('/static', express.static(path.join(__dirname, 'static')));

app.listen(3000, function() {
  console.log('Sports data app listening on port 3000!');
});
