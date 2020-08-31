exports.getFamilyMainPage = (req, res, next) => {
    res.render('familymainpage',{
      pageTitle: 'Family and Friends',
      path: '/familyandfriends/familymainpage'
    });
  };