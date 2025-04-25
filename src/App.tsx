import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import LowesDashboard from './pages/lowes/LowesDashboard';
import AmazonDashboard from './pages/amazon/AmazonDashboard';
import LoginPage from './pages/LoginPage';
import { useAuth } from './hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from './lib/firebase';

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  }, [user]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => console.log('User signed out'))
      .catch((err) => console.error('Logout error', err));
  };

  if (user === undefined) {
    return <p className="p-6 text-center">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="p-4 bg-white shadow-md flex space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Lowe's Tracker</Link>
        <Link to="/amazon" className="text-blue-600 hover:underline">Amazon Tracker</Link>
      </nav>

      {user && (
        <div className="p-4 bg-gray-100 text-sm text-gray-800 flex items-center justify-between">
          <span>👋 Welcome, {user.displayName || user.email}</span>
          <button
            onClick={handleLogout}
            className="text-blue-600 hover:underline ml-4"
          >
            Logout
          </button>
        </div>
      )}

      <main className="p-6">
<Routes>
  {user ? (
    <>
      <Route path="/" element={<HomePage />} /> {/* ✅ new homepage */}
      <Route path="/lowes" element={<LowesDashboard />} />
      <Route path="/amazon" element={<AmazonDashboard />} />
    </>
  ) : (
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} />
    </>
  )}
</Routes>


      </main>
    </div>
  );
}

export default App;
