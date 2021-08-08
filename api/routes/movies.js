const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');

// Create
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
});

// Update
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(updatedMovie);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
});

// Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedMovie);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
});

// GetAll
router.get('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (e) {
      res.status(500).json(e);
    }
  }
  else {
    res.status(403).json('You are not allowed!');
  }
});

// Get
router.get('/find/:id', verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Get Random
router.get('/random', verify, async (req, res) => {
  const type = req.query.type;
  const genre = req.query.genre;
  let movie;
  let queryConditions = [{ $match: {} }, { $sample: { size: 1 } }];
  if (type === 'series') queryConditions[0].$match.isSeries = true;
  if (type === 'movies') queryConditions[0].$match.isSeries = false;
  if (genre) queryConditions[0].$match.genre = genre;
  try {
    movie = await Movie.aggregate(queryConditions);
    res.status(200).json(movie);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;