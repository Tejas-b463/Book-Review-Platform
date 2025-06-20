import React from 'react';

const StarRating = ({ rating, onRatingChange, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onRatingChange(starValue)}
            className={`${sizeClasses[size]} transition-colors hover:scale-110 transform transition-transform ${
              starValue <= rating
                ? 'text-yellow-600 hover:text-yellow-700'
                : 'text-gray-300 hover:text-yellow-400'
            }`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
