const router = require('express').Router();
const movieServie = require('../services/movieService');

router.get('/', (req, res) => {
    const movies = movieServie.getAll();
    res.render("home" , { movies });
})

router.get('/about', (req, res) => {
    res.render("about" );
})

router.get('/search', (req,res) => {
    const {title, genre, date} = req.query;
    const movieResult = movieServie.search(title, genre, date);
    res.render("search", {movies: movieResult});

})

router.get('*', (req, res) => {
    res.render("404");
})

module.exports = router; 