const getMovie = (req, res) => {
  res.status(200).json({ message: "Getting movie" });
};

const setMovie = (req, res) => {
  res.status(200).json({ message: "Setting movie" });
};

module.exports = {
  getMovie,
  setMovie,
};
