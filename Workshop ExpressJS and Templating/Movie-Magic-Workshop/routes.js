const express = require('express');
const router = express.Router();
const HomeController = require('./controllers/HomeController');
const MovieController = require('./controllers/movieController');

router.use(MovieController);
router.use(HomeController); // this should be the last route in order because it contatins the 404 page

module.exports = router;