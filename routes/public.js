const path = require('path');
const express = require('express');
const router = express.Router();
const publicController = require('../controller/public_controller');
const privateController = require('../controller/private_controller');
//const rootDir = require('../util/path');


router.get('/baking/yeastwater',publicController.getBakingYeastWater); 
router.get('/google/iot',publicController.getGCPiot);
router.get('/familyandfriends/familymainpage',privateController.getFamilyMainPage);

router.get('/', publicController.getMainPage);


module.exports = router;