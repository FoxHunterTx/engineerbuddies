const path = require('path');
const express = require('express');
const router = express.Router();
const authController = require('../controller/auth_controller');

router.get('/familyandfriends/familymainpage',authController.redirectLogin,authController.getFamilyMainPage);
router.get('/login',authController.getLogin);
router.post('/login',authController.postLogin);

router.get('/logout',authController.redirectLogin,authController.getLogout);
module.exports = router;