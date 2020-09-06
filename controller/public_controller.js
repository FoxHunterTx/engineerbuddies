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






