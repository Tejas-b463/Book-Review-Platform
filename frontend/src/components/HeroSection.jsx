import { useState, useEffect } from 'react';
import { User, BookOpenText, Users, Star, BookOpen } from 'lucide-react';
import CustomButton from './CustomButton';
import axios from '../api/api';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [userCount, setUserCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [bookCount, setBookCount] = useState(0);

 useEffect(() => {
  const fetchStats = async () => {
    try {
      const { data } = await axios.get('/stats');
      setUserCount(data.users || 0);
      setReviewCount(data.reviews || 0);
      setBookCount(data.books || 0);
    } catch (err) {
      console.error('Failed to load footer stats:', err);
    }
  };

  fetchStats();
}, []);
  return (
    <div className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-2">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Fall in Love With
            <span className="block">Reading</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover books. Share reviews. Inspire others.
          </p>

          {/* Stats */}
          <div className="flex justify-center flex-wrap gap-4 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm px-4 py-3">
              <Users className="h-5 w-5 text-gray-500" />
              <span>
                <strong className="text-gray-800 text-base">
                  {userCount.toLocaleString()}
                </strong>{' '}
                Happy Readers
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm px-4 py-3">
              <BookOpen className="h-5 w-5 text-indigo-500" />
              <span>
                <strong className="text-gray-800 text-base">
                  {bookCount.toLocaleString()}
                </strong>{' '}
                Books Listed
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm px-4 py-3">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>
                <strong className="text-gray-800 text-base">
                  {reviewCount.toLocaleString()}
                </strong>{' '}
                Book Reviews
              </span>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/book">
            <CustomButton
              size="lg"
              className="bg-gray-700 hover:bg-gray-800 text-white cursor-pointer rounded-xl px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <User className="mr-2 h-5 w-5" />
              Start Reviewing
            </CustomButton>
            </Link>
            <Link to="/book">
            <CustomButton
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-800 rounded-xl px-8 py-3 text-lg transition-all duration-300 hover:-translate-y-1"
            >
              <BookOpenText className="mr-2 h-5 w-5" />
              Explore Books
            </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
