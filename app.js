const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const cookieParser = require('cookie-parser');
let  FileStore = require('session-file-store')(session)
const myUser = require('./util/users.json');

const errorController = require('./controller/error_controller');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

//set view engine to EJS - dynamic pages
app.set('view engine','ejs');
app.set('views','views');

// my route path files
const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/public');
const authRoutes = require('./routes/auth');
const Users = require('./models/user');

const myStore = new FileStore(
  {
    path: './session-store'
  }
);

// for parsing the req.body message for form data
// npm install --save body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const {
  PORT = 3000,
  SESS_NAME = 'eb-sid',
  SESS_LIVE_TIME = 1000*60*60*2,
} = process.env;

 // cookie authentication
app.set('trust proxy', 1);
app.use(cookieParser());

app.use(session({
    name: SESS_NAME,
    secret: '1234-abcd',
    resave: false,
    saveUninitialized: false,
    store: myStore,
    cookie: {
      maxAge: SESS_LIVE_TIME,
      sameSite: true
    }
  })
);
//set user when in session cookie to local variable
app.use( (req, res, next) => {
  const {userId} = req.session;
  if(userId) {
    res.locals.user = myUser.find(
      user => user.id === req.session.userId);
  }
  next();
});

app.use('/admin',adminRoutes);
app.use(publicRoutes);
app.use(authRoutes);

// no fitting of any router path ->catch all error 
app.use(errorController.get404error); 
    console.log('Starting Web App')
    let webserver = app.listen(3000, () => {
      let port = webserver.address().port;
    console.log("Started WebServer at engineerbuddies.com:%s",port);
 });

// https.createServer( {key: privateKey, cert: publicKey},app).listen(8443);