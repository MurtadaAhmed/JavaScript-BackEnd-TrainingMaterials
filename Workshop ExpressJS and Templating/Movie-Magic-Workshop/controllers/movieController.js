const router = require("express").Router();
const movieService = require("../services/movieService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const newMovie = req.body;
  try {
    await movieService.create(newMovie);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.redirect("/create");
  }
});

router.get("/details/:id", (req, res) => {
  const movieId = req.params.id;

  const movie = movieService.getOne(movieId);
  movie.ratingStars = "&#x2605;".repeat(movie.rating);

  res.render("details", { movie });
});

module.exports = router;
