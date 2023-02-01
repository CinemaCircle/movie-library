const mongoose = require("mongoose");
const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add title"],
    },
    year: {
      type: String,
    },
    rated: {
      type: String,
    },
    released: {
      type: String,
    },
    runtime: {
      type: String,
    },
    genre: {
      type: String,
    },
    director: {
      type: String,
    },
    writer: {
      type: String,
    },
    actors: {
      type: String,
    },
    plot: {
      type: String,
    },
    language: {
      type: String,
    },
    country: {
      type: String,
    },
    awards: {
      type: String,
    },
    poster: {
      type: String,
    },
    ratings: {
      type: Array,
    },
    metascore: {
      type: String,
    },
    imdbRating: {
      type: String,
    },
    imdbVotes: {
      type: String,
    },
    imdbID: {
      type: String,
    },
    type: {
      type: String,
    },
    DVD: {
      type: String,
    },
    boxOffice: {
      type: String,
    },
    production: {
      type: String,
    },
    website: {
      type: String,
    },
    totalSeasons: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
