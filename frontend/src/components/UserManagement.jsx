import { useEffect, useState } from 'react';
import { UserCircle, Mail } from 'lucide-react';
import axios from '../api/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/admin/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error('Failed to fetch users:', err));
  }, []);

  const getRoleBadge = (role) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    return role === 'admin'
      ? `${baseClasses} bg-purple-100 text-purple-800`
      : `${baseClasses} bg-green-100 text-green-800`;
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">User Management</h2>
        <div className="text-sm text-gray-500">
          Total Users: {users.length}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-gray-700" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">{user.name}</h3>
                  <span className={getRoleBadge(user.role)}>{user.role}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="text-xs text-gray-500">
                  Joined {formatDate(user.createdAt || user.joinDate)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
