const Users = require('../models/user');


exports.getHamRadioMainPage = (req, res, next) => {
  res.render('./hamradio/ham-mainpage',{
    isAuthenticated: req.isLoggedIn,
    pageTitle: 'Ham Radio Main',
    path: '/hamradio/mainpage',
  });
};

exports.getHamRadioBuildAntenna = (req, res, next) => {
  res.render('./hamradio/ham-antennabuild',{
    isAuthenticated: req.isLoggedIn,
    pageTitle: 'Build your own',
    path: '/hamradio/buildantenna',
  });
};

exports.getHamRadioSwr = (req, res, next) => {
  res.render('./hamradio/ham-swr',{
    isAuthenticated: req.isLoggedIn,
    pageTitle: 'Standing Wave Ratio',
    path: '/hamradio/swr',
  });
};


exports.getBakingYeastWater = (req, res, next) => {
    res.render('baking-yeastwater',{
      isAuthenticated: req.isLoggedIn,
      pageTitle: 'Baking Bread with Yeast Water',
      path: '/baking/yeastwater',
    });
  };

  exports.getBakingSourDough = (req, res, next) => {
    res.render('baking-sourdough',{
      pageTitle: 'Baking Bread with SourDough',
      path: '/baking/sourdough',
      isAuthenticated: req.isLoggedIn
    });
  };

  exports.getSecureIntro = (req, res, next) => {
    res.render('./security/security-intro',{
      pageTitle: 'Cyber Security Intro',
      isAuthenticated: req.isLoggedIn,
      path: '/secure/intro'
    });
}; 

  exports.getSecureSSL = (req, res, next) => {
    res.render('./security/secure-ssl',{
      pageTitle: 'SSL/TLS Certificate',
      isAuthenticated: req.isLoggedIn,
      path: '/secure/ssl'
    });
}; 

exports.getSecureMVC = (req, res, next) => {
  res.render('./security/architecture/arch-mvc',{
    pageTitle: 'MVC Architecture',
    isAuthenticated: req.isLoggedIn,
    path: '/arch/mvc'
  });
}; 

exports.getSecureTools = (req, res, next) => {
  res.render('./security/secure-tools',{
    pageTitle: 'Security Tools',
    isAuthenticated: req.isLoggedIn,
    path: '/secure/tools'
  });
}; 

exports.getSecureCyberRisk = (req, res, next) => {
  res.render('./security/secure-cyber-risk',{
    pageTitle: 'Risk Management',
    isAuthenticated: req.isLoggedIn,
    path: '/secure/risk'
  });
};

exports.getSecureCyberStandard = (req, res, next) => {
  res.render('./security/secure-cyber-standard',{
    pageTitle: 'Procedure and Policies',
    isAuthenticated: req.isLoggedIn,
    path: '/secure/standards'
  });
};

  exports.getGCPiot = (req, res, next) => {
    res.render('google-iot',{
      pageTitle: 'Google Cloud Platform - IoT',
      isAuthenticated: req.isLoggedIn,
      path: '/google/iot',
    });
};  

exports.getGCPgck = (req, res, next) => {
  res.render('google-gck',{
    pageTitle: 'Google Cloud Platform - Kubernetes',
    path: '/google/gck',
    isAuthenticated: req.isLoggedIn
  });
};  

exports.getContactMePage = (req, res, next) => {
  res.render('contactme',{
    pageTitle: 'EngineerBuddies ContactMe',
    path: '/nav/contact',
    isAuthenticated: req.isLoggedIn
  });
};

//let sessionData;
exports.getMainPage = (req, res, next) => {
  // is session/user : logged in
  const {userId} = req.session;
  if (userId) {
    // console.log('you are logged in');
    isLoggedIn = true;
  } else {
    // console.log('You are not logged in');
    isLoggedIn = false;
  }
  res.render('mainpage',{
      isAuthenticated: isLoggedIn,
      pageTitle: 'EngineerBuddies.com',
      path: '/'
    });
  };






