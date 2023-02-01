const express = require("express");
const router = express.Router();
const { getMovie, setMovie } = require("../controllers/movieController");

router.get("/movies", getMovie);
router.post("/movies", setMovie);

module.exports = router;
