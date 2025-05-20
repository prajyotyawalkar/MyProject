const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { age, bio } = req.body;
  
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { $set: { "profile.age": age, "profile.bio": bio } },
      { new: true } // returns the updated document
    );
  
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    res.json({ message: 'Profile updated', user: updatedUser });
  });
  

module.exports = router;