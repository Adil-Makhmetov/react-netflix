const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const verify = require('../verifyToken');

// Update
router.put('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      const { password, ...info } = updatedUser._doc;
      res.status(200).json(info);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json('You can update only your account!');
  }
});

// Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedUser);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json('You can delete only your account!');
  }
});

// Get
router.get('/find/:id', verify, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) res.status(404).json('User not found');
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Get All
router.get('/', verify, async (req, res) => {
  const limit = +req.query.limit;
  if (req.user.isAdmin) {
    try {
      const users = limit ? await User.find().sort({createdAt: -1}).limit(limit) : await User.find().sort({createdAt: -1});
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json('You are not allowed to see all users!');
  }
});


//Get User Stats
router.get('/stats', async (req, res) => {
  try {
    const data = await User.aggregate([
      {
        $project: {
          month: {$month: "$createdAt"},
        }
      },{
        $group: {
          _id: "$month",
          total: {$sum:1}
        }
      },{
        $sort: { _id: 1 }
      }
    ]);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;