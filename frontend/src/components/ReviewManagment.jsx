import { useEffect, useState } from 'react';
import { UserCircle } from 'lucide-react';
import axios from '../api/api';

const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('/admin/reviews')
      .then((res) => setReviews(res.data))
      .catch((err) => console.error('Failed to fetch reviews:', err));
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <div className="flex items-center text-yellow-500">
        {'★'.repeat(fullStars)}
        {'☆'.repeat(emptyStars)}
      </div>
    );
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

  const truncateComment = (comment, maxLength = 150) =>
    comment.length <= maxLength ? comment : comment.substring(0, maxLength) + '...';

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1)).toFixed(1);
  const positiveCount = reviews.filter((r) => r.rating >= 4).length;
  const avgCommentLength = Math.round(
    reviews.reduce((sum, r) => sum + r.comment.length, 0) / (reviews.length || 1)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Review Management</h2>
        <div className="text-sm text-gray-500">
          Total Reviews: {reviews.length}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <UserCircle className="w-6 h-6 text-gray-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.user?.name}</h4>
                    <p className="text-sm text-gray-600 italic">"{review.book?.title}"</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-500">{formatDate(review.createdAt)}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{truncateComment(review.comment)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewManagement;
