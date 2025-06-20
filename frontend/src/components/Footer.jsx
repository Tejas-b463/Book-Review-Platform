import { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter, Users, Star, BookOpen } from 'lucide-react';
import axios from '../api/api';

const Footer = () => {
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
    <footer className="bg-neutral-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl"><BookOpen /></span>
              <span className="text-2xl font-semibold text-gray-800 tracking-tight">
                Libraria
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              A calm corner of the internet where book lovers come together to discover, 
              review, and share their passion for literature.
            </p>
            <p className="text-sm text-gray-500">
              Built with 💖 by book lovers
            </p>
          </div>

          {/* Dynamic Stats */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Our Community
            </h3>
            <div className="space-y-4 text-sm text-gray-600">
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
                <Star className="h-5 w-5 text-yellow-500" />
                <span>
                  <strong className="text-gray-800 text-base">
                    {reviewCount.toLocaleString()}
                  </strong>{' '}
                  Book Reviews
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
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Connect
            </h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-200"
              >
                <Facebook className="h-5 w-5 text-gray-600" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-200"
              >
                <Instagram className="h-5 w-5 text-gray-600" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-200"
              >
                <Twitter className="h-5 w-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200 text-sm text-gray-500">
          © {new Date().getFullYear()} BookNest. Made with love for the reading community.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
