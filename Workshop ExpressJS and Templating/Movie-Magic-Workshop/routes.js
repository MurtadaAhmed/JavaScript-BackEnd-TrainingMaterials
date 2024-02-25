const express = require('express');
const router = express.Router();
const HomeController = require('./controllers/HomeController');
const MovieController = require('./controllers/movieController');

router.use(HomeController, MovieController);

module.exports = router;