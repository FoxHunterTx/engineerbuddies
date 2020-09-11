const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const fs = require('fs');
// const https = require('https');

const errorController = require('./controller/error_controller');

const app = express();

// const privateKey = fs.readFileSync('engineerbuddies.key');
// const publicKey = fs.readFileSync('www_engineerbuddies_com.crt');

//set view engine to EJS - dynamic pages
app.set('view engine','ejs');
app.set('views','views');

// my route path files
const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/public');


// for parsing the req.body message for form data
// npm install --save body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(publicRoutes);

// no fitting of any router path ->catch all error 
app.use(errorController.get404error); 

app.listen(3000);
// https.createServer( {key: privateKey, cert: publicKey},app).listen(8443);