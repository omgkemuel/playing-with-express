const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/goodbye', function(req, res) {
  res.send('Goodbye World!');
});

const server = app.listen(1337, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Your app is running at http://%s:%s', host,port);
});
