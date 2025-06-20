import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Menu, User, X, LogOut, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import CustomButton from './CustomButton';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    toast.success("Logout successful");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl"><BookOpen /></span>
            <span className="text-xl font-semibold text-gray-800">Libraria</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Home</Link>
            <Link to="/book" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Books</Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Admin</Link>
            )}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <CustomButton
                variant="ghost"
                onClick={handleLogout}
                className="text-gray-700 cursor-pointer hover:text-gray-900 hover:bg-neutral-100"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </CustomButton>
            ) : (
              <>
                <Link to="/login">
                  <CustomButton
                    variant="ghost"
                    className="text-gray-700 cursor-pointer hover:text-gray-900 hover:bg-neutral-100"
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </CustomButton>
                </Link>
                <Link to="/register">
                  <CustomButton className="bg-gray-700 cursor-pointer hover:bg-gray-800 text-white rounded-xl px-6">
                    <User className="mr-2 h-4 w-4" />
                    Sign Up
                  </CustomButton>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-neutral-100 rounded-md font-medium transition-colors duration-200">Home</Link>
              <Link to="/book" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-neutral-100 rounded-md font-medium transition-colors duration-200">Books</Link>
              {user?.role === 'admin' && (
                <Link to="/admin/books" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-neutral-100 rounded-md font-medium transition-colors duration-200">Admin</Link>
              )}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                {user ? (
                  <CustomButton
                    onClick={handleLogout}
                    className="w-full text-left text-gray-700 hover:text-gray-900 hover:bg-neutral-100"
                  >
                    Logout
                  </CustomButton>
                ) : (
                  <>
                    <Link to="/login">
                      <CustomButton
                        variant="ghost"
                        className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-neutral-100"
                      >
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </CustomButton>
                    </Link>
                    <Link to="/register">
                      <CustomButton className="w-full bg-gray-700 hover:bg-gray-800 text-white rounded-xl">
                        <User className="mr-2 h-4 w-4" />
                        Sign Up
                      </CustomButton>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
