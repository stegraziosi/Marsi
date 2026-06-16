import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Aircraft from './pages/Aircraft';
import Rentals from './pages/Rentals';
import Payments from './pages/Payments';
import Login from './pages/Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/members"
          element={isAuthenticated ? <Members /> : <Navigate to="/login" />}
        />
        <Route
          path="/aircraft"
          element={isAuthenticated ? <Aircraft /> : <Navigate to="/login" />}
        />
        <Route
          path="/rentals"
          element={isAuthenticated ? <Rentals /> : <Navigate to="/login" />}
        />
        <Route
          path="/payments"
          element={isAuthenticated ? <Payments /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
