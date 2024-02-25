const express = require('express');
const router = express.Router();
const HomeController = require('./controllers/HomeController');
 
router.use(HomeController);

module.exports = router;