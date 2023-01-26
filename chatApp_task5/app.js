const http = require('http');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const loginRoutes = require('./routes/login');
const homePage = require('./routes/homePage');
const messageROutes = require('./routes/sendmsg');

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoutes);
app.use(messageROutes);
app.use(homePage);

app.listen(3000);