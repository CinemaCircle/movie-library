const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

const getMovie = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  res.status(200).json(movies);
});

const setMovie = asyncHandler(async (req, res) => {
  if (!req.body.movie) {
    res.status(400);
    throw new Error("Please enter the movie informations");
  }

  const movie = await Movie.create({
    title: req.body.movie.title,
  });

  res.status(200).json(movie);
});

module.exports = {
  getMovie,
  setMovie,
};
