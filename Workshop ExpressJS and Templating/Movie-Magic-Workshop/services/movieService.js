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

exports.create = (movieData) => {
    movieData._id = movies.length + 1;
    movies.push(movieData);
    
    
}