const path = require('path');
const express = require('express');
const router = express.Router();
const publicController = require('../controller/public_controller');
//const privateController = require('../controller/private_controller');

router.get('/nav/contact',publicController.getContactMePage); 

router.get('/hamradio/mainpage',publicController.getHamRadioMainPage); 
router.get('/hamradio/buildantenna',publicController.getHamRadioBuildAntenna);
router.get('/hamradio/swr',publicController.getHamRadioSwr);

router.get('/baking/yeastwater',publicController.getBakingYeastWater); 
router.get('/baking/sourdough',publicController.getBakingSourDough); 

router.get('/secure/intro',publicController.getSecureIntro);
router.get('/secure/tools',publicController.getSecureTools);
router.get('/secure/risk',publicController.getSecureCyberRisk); 
router.get('/secure/standards',publicController.getSecureCyberStandard);
router.get('/secure/ssl',publicController.getSecureSSL);
router.get('/arch/mvc',publicController.getSecureMVC);

router.get('/google/iot',publicController.getGCPiot);
router.get('/google/gck',publicController.getGCPgck);

router.get('/', publicController.getMainPage);

module.exports = router;