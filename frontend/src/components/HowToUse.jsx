import { BookOpen, Users, Star, Search } from 'lucide-react';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

const HowToUse = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Discover Books",
      description: "Search through our vast collection of books by title, author, or genre to find your next great read."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Read & Track",
      description: "Keep track of books you've read, are currently reading, or want to read in the future."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Rate & Review",
      description: "Share your thoughts by rating books and writing detailed reviews to help other readers."
    }
  ];

  const topView = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How to Use Libraria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with Libraria in just a few simple steps and discover your next favorite Book
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                  <div className="text-gray-700">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/book" onClick={topView}>
            <CustomButton
              size="lg"
              className="bg-gray-700 hover:bg-gray-800 text-white cursor-pointer rounded-xl px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </CustomButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
