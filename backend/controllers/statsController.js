const User = require('../models/User');
const Book = require('../models/Book');
const Review = require('../models/Review');

const getStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const books = await Book.countDocuments();
    const reviews = await Review.countDocuments();

    res.status(200).json({ users, books, reviews });
  } catch (error) {
    console.error('Stats Error:', error);
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
};

module.exports = { getStats };
