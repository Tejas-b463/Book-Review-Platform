const express = require('express');
const router = express.Router();

const { addReview, getReviews } = require('../controllers/reviewController');
const { protect } = require('../middlewares/authMiddleware');

// ✅ GET all reviews or by bookId
router.get('/', getReviews);

// ✅ POST a review for a specific book
router.post('/:bookId', protect, addReview);

module.exports = router;
