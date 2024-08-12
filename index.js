const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRouters);
app.use(shopRouters);

app.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.post('/success', (req, res, next) => {
  console.log('Name:', req.body.name);
  console.log('Email:', req.body.email);
  res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
