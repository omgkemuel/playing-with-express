const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index', {title:'Express Yo!', message: 'Hey Frank!'});
});

const server = app.listen(1337, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Your app is running at http://%s:%s', host,port);
});
