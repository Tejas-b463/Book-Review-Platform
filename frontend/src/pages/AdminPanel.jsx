
import { useState } from 'react';
import BookManagement from '../components/BookManagement';
import UserManagement from '../components/UserManagement';
import ReviewManagement from '../components/ReviewManagment';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('books');

  const navItems = [
    { id: 'books', label: 'Manage Books', icon: '📚' },
    { id: 'users', label: 'Users', icon: '👤' },
    { id: 'reviews', label: 'Reviews', icon: '💬' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'books' && <BookManagement />}
        {activeSection === 'users' && <UserManagement />}
        {activeSection === 'reviews' && <ReviewManagement />}
      </main>
    </div>
  );
};

export default AdminPanel;