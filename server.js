const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});

app.get('/about', (req, res) => {
  res.send('Hello about');
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Unable to handle request'
  });
});

// Binds the app to the port 3000
app.listen(3000);