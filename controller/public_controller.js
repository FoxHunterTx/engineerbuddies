exports.getBakingYeastWater = (req, res, next) => {
    res.render('baking-yeastwater',{
      pageTitle: 'Baking Bread with Yeast Water',
      path: '/baking/yeastwater'
    });
  };


  exports.getGCPiot = (req, res, next) => {
    res.render('google-iot',{
      pageTitle: 'Google Cloud Platform - IoT',
      path: '/google/iot'
    });
};  


exports.getMainPage = (req, res, next) => {
    res.render('mainpage',{
      pageTitle: 'EngineerBuddies.com',
      path: '/'
    });
  };






