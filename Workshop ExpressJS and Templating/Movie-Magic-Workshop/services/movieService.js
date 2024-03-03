const Movie = require('../models/Movies');

const movies = [{
    _id: 1,
    title: 'Test title',
    genre: 'Test Genre',
    director: 'Test Director',
    date: '2004',
    imageURL: '..\\static\\img\\jungle-cruise.jpeg',
    rating: '5',
    description: 'Test Description'
  }]

exports.getAll = () => {
    return movies.slice();
}

exports.getOne = (id) => {
    const movie = movies.find(movie => movie._id == id);
    return movie;
}

exports.search = (title, genre, date) => {
    let moviesSearch = movies.slice();

    if(title){
        moviesSearch = moviesSearch.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
    }

    if(genre){
        moviesSearch = moviesSearch.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()))
    }

    if(date){
        moviesSearch = moviesSearch.filter(movie => movie.date == date)
    }

    return moviesSearch;
}

exports.create = (movieData) => {
    Movie.create(movieData)
    
}