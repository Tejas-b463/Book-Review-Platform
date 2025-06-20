const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getAllReviews,
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

// Admin-only routes
router.get('/users', protect, adminOnly, getAllUsers);
router.get('/reviews', protect, adminOnly, getAllReviews);

module.exports = router;
