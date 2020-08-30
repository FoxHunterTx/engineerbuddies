const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

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
app.use((req, res, next) => {
  res.status(404).render('404',{
    pageTitle: 'Page Not Found',
    path: 'unknown'});
});

app.listen(3000);
