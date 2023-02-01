const asyncHandler = require("express-async-handler");

const getMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Getting movie" });
});

const setMovie = asyncHandler(async (req, res) => {
  if (!req.body.q) {
    res.status(400);
    throw new Error("Please enter the query");
  }
  res.status(200).json({ message: "Setting movie" });
});

module.exports = {
  getMovie,
  setMovie,
};
