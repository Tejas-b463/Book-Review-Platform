import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/api';
import { useAuth } from '../context/AuthContext';
import StarRating from '../components/StarRating';
import ReviewCard from '../components/ReviewCard';
import ShimmerBookDetail from '../components/ShimmerBookDetail';
import toast from 'react-hot-toast';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { user, token } = useAuth();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchData = async () => {
      try {
        const bookRes = await axios.get(`/books/${id}`);
        setBook(bookRes.data);
        const reviewRes = await axios.get(`/reviews?bookId=${id}`);
        setReviews(reviewRes.data);
      } catch (err) {
        console.error('Error loading book detail:', err);
      }
    };
    fetchData();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error('Please login first to review this book');
      return;
    }

    setSubmitting(true);
    try {
      const res = await axios.post(
        `/reviews/${id}`,
        { rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReviews([res.data, ...reviews]);
      setRating(0);
      setComment('');

      // ✅ Show toast on successful review
      toast.success('Review submitted successfully!');
    } catch (err) {
      console.error('Review submission failed:', err);
      toast.error('Something went wrong while submitting the review');
    } finally {
      setSubmitting(false);
    }
  };


  const averageRating = book?.rating || 0;

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {book ? (
          <>
            {/* 📘 Book Info */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-96 h-96 object-cover rounded-lg shadow-lg"
                />

                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
                      {book.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
                    <div className="flex items-center gap-2 mb-6">
                      <StarRating rating={averageRating} onRatingChange={() => { }} size="sm" />
                      <span className="text-gray-600">{averageRating}/5</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {book.description}
                  </p>
                </div>
              </div>
            </div>

            {/* ✍️ Review Form */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Rating & Review</h2>
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Rate this book
                  </label>
                  <StarRating
                    rating={rating}
                    onRatingChange={setRating}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Share your thoughts
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="What did you think of this book?"
                    className="w-full min-h-32 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gray-700 hover:bg-gray-800 text-white px-8 py-2 rounded-lg cursor-pointer"
                  disabled={submitting || !rating || !comment.trim()}
                >
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            </div>

            {/* 💬 Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">What Readers Are Saying</h2>
              {reviews.length === 0 ? (
                <p className="text-gray-400 text-center py-12">
                  No reviews yet — be the first to share your thoughts!
                </p>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {reviews.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <ShimmerBookDetail />
        )}
      </div>
    </div>
  );
};

export default BookDetail;
