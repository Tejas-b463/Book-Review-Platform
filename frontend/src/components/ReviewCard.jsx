import { User } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-600' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-neutral-50 rounded-lg p-6 space-y-4 border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <span className="font-medium text-gray-900">
            {review.user.name || 'Anonymous'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-sm">{renderStars(review.rating)}</div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">{review.comment}</p>

    </div>
  );
};

export default ReviewCard;
