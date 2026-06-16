import React, { useState, useEffect } from 'react';
import './Pages.css';

function Dashboard() {
  const [stats, setStats] = useState({
    total_members: 0,
    total_aircraft: 0,
    active_rentals: 0,
    total_revenue: 0,
    pending_payments: 0,
    available_aircraft: 0
  });

  useEffect(() => {
    // TODO: Fetch dashboard statistics from API
    // fetchDashboardStats();
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Members</h3>
          <p className="stat-value">{stats.total_members}</p>
        </div>
        <div className="stat-card">
          <h3>Total Aircraft</h3>
          <p className="stat-value">{stats.total_aircraft}</p>
        </div>
        <div className="stat-card">
          <h3>Active Rentals</h3>
          <p className="stat-value">{stats.active_rentals}</p>
        </div>
        <div className="stat-card">
          <h3>Available Aircraft</h3>
          <p className="stat-value">{stats.available_aircraft}</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-value">€{stats.total_revenue.toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Payments</h3>
          <p className="stat-value">€{stats.pending_payments.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
