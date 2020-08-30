const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');


router.get('/baking/yeastwater', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','baking-yeastwater.html'));
  res.render('baking-yeastwater',{
    pageTitle: 'Baking Bread with Yeast Water',
    path: '/baking/yeastwater'});
});

router.get('/google/iot', (req, res, next) => {
  //res.sendFile(path.join(rootDir,'views','google-iot.html'));
  res.render('google-iot',{
    pageTitle: 'Google Cloud Platform - IoT',
    path: '/google/iot'});
});

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir,'views','mainpage.html'));
  res.render('mainpage',{
    pageTitle: 'EngineerBuddies.com',
    path: '/'});
});


module.exports = router;