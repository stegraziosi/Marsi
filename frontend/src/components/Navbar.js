import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">✈ AeroclubDeiMarsi</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/aircraft">Aircraft</Link></li>
        <li><Link to="/rentals">Rentals</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
