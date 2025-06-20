const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
  try {
    const { bookId } = req.query;
    const filter = bookId ? { book: bookId } : {};
    const reviews = await Review.find(filter)
      .populate('user', 'name')
      .populate('book', 'title');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const { bookId } = req.params;

    if (!rating || !comment) {
      return res.status(400).json({ message: 'Rating and comment are required' });
    }

    const review = new Review({
      book: bookId,
      user: req.user._id,
      rating,
      comment
    });

    const saved = await review.save();

    const populated = await Review.findById(saved._id)
      .populate('user', 'name')
      .populate('book', 'title');

    res.status(201).json(populated);
  } catch (err) {
    res.status(500).json({ message: 'Error submitting review' });
  }
};
