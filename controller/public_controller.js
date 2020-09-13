exports.getBakingYeastWater = (req, res, next) => {
    res.render('baking-yeastwater',{
      pageTitle: 'Baking Bread with Yeast Water',
      path: '/baking/yeastwater'
    });
  };

  exports.getBakingSourDough = (req, res, next) => {
    res.render('baking-sourdough',{
      pageTitle: 'Baking Bread with SourDough',
      path: '/baking/sourdough'
    });
  };

  exports.getSecureSSL = (req, res, next) => {
    res.render('secure-ssl',{
      pageTitle: 'SSL/TLS Certificate',
      path: '/secure/ssl'
    });
}; 

exports.getSecureMVC = (req, res, next) => {
  res.render('secure-mvc',{
    pageTitle: 'MVC Architecture',
    path: '/secure/mvc'
  });
}; 

  exports.getGCPiot = (req, res, next) => {
    res.render('google-iot',{
      pageTitle: 'Google Cloud Platform - IoT',
      path: '/google/iot'
    });
};  

exports.getGCPgck = (req, res, next) => {
  res.render('google-gck',{
    pageTitle: 'Google Cloud Platform - Kubernetes',
    path: '/google/gck'
  });
};  

exports.getMainPage = (req, res, next) => {
    res.render('mainpage',{
      pageTitle: 'EngineerBuddies.com',
      path: '/'
    });
  };

  exports.getContactMePage = (req, res, next) => {
    res.render('contactme',{
      pageTitle: 'EngineerBuddies ContactMe',
      path: '/nav/contact'
    });
  };




