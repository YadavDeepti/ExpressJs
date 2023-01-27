const http = require('http');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success')

const errorController = require('./controllers/404')

// app.use('/',(req, res, next) =>{
//     console.log("This always run");
//    next();
// }); 

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(express.static(path.join(__dirname, 'public')))

app.use(errorController.get404)



app.listen(3000);

