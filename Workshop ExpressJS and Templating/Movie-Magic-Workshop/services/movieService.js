const movies = [{
    title: 'Test title',
    genre: 'Test Genre',
    director: 'Test Director',
    date: '2004',
    imageURL: 'static\\img\\jungle-cruise.jpeg',
    rating: '5',
    description: 'Test Description'
  }]

exports.getAll = () => {
    return movies.slice();
}

exports.create = (movieData) => {
    movies.push(movieData);
    console.log(movies);
    
}