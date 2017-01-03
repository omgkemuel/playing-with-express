const express = require('express');
const mysql   = require('mysql');
const app     = express();

//Application Settings
app.use(express.static('public'));
app.set('view engine', 'jade');

//Configuation
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'express'
});
 
app.get('/', function(req, res) {
  connection.connect();
 
  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
  
    console.log('The solution is: ', rows[0].solution);
  });
  
  connection.end();
  res.render('index', {title:'Express Yo!', message: 'Hey Frank!'});
});

const server = app.listen(1337, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Your app is running at http://%s:%s', host,port);
});
