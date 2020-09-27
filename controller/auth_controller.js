const myUser = require('../util/users.json');
const bcrypt = require('bcryptjs');

exports.redirectLogin = (req, res, next) => {
  if(!req.session.userId) {
    // console.log('redirected');
    res.redirect('/login');
  } else {
    // console.log('not redirected');
    next();
  }
};

exports.getFamilyMainPage = (req, res, next) => {
  // console.log('in FamilyMainPage');
    const {user} = res.locals;
    if (req.session.isLoggedIn) {
      isLoggedIn = true;
    };

    res.render('auth/familymainpagelogin',{
      isAuthenticated: isLoggedIn,
      pageTitle: 'Family and Friends Login',
      path: '/familyandfriends/familymainpage',
      userData: user
    });
  };

exports.getLogin = (req, res ,next) => { 
 res.render('auth/login', {
    path: '/login',
    isAuthenticated: req.isLoggedIn,
    pageTitle: 'Login'
  });
};

exports.postLogin = (req, res, next) => {
  const {email, password} = req.body;
  if(email && password){
    const user = myUser.find(user => user.email === email);
    if(user) {
      bcrypt.compare(password,user.hash)
        .then(result => {
            if(result) {
              // console.log('in result as hashed password matched');
              req.session.userId = user.id;
              req.session.isLoggedIn = true;
              return req.session.save(err => {
                console.log(err);
                res.redirect('/familyandfriends/familymainpage');
              });
              //res.redirect('/familyandfriends/familymainpage');
            }
            res.redirect('/login');
        })
        .catch((err) => {
          console.log(err);
          res.redirect('/login');
      });
    } else {
      res.redirect('/login');
    }
   };  
  };

  exports.getLogout = (req, res ,next) => {
 //   req.session.isLoggedIn = false;
    req.session.destroy((err) => {
      // console.log('removing session cookie');
      if(err) {
        return res.redirect('/familyandfriends/familymainpage');
      }
      //
      res.clearCookie('eb-sid');
      // console.log(process.env.SESS_NAME);
      res.redirect('/');
    });
  };
