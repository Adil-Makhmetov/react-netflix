const router = require('express').Router();
const List = require('../models/List');
const validate = require('../verifyToken');

// Create
router.post('/', validate, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedNewList = await newList.save();
      res.status(200).json(savedNewList);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
})

// Delete
router.delete('/:id', validate, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const deletedList = await List.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedList);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
})

// Get One
router.get('/:id', validate, async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json(list);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Get
router.get('/', validate, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;

  try {
    const queryParams = [{ $sample: {size: 10} }];
    const match = { $match: {} };
    if (typeQuery) match.$match.type = typeQuery;
    if (genreQuery) match.$match.genre = genreQuery;
    queryParams.push(match);

    const list = await List.aggregate(queryParams);
    res.status(200).json(list);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;