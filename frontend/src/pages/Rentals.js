import React, { useState, useEffect } from 'react';
import './Pages.css';

function Rentals() {
  const [rentals, setRentals] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    member_id: '',
    aircraft_id: '',
    rental_start: ''
  });

  useEffect(() => {
    // TODO: Fetch rentals from API
    // fetchRentals();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit form to API
    console.log('Submitting:', formData);
    setShowForm(false);
    setFormData({
      member_id: '',
      aircraft_id: '',
      rental_start: ''
    });
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Aircraft Rentals</h1>
        <button 
          className="primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'New Rental'}
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h2>Create New Rental</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Member</label>
              <select
                name="member_id"
                value={formData.member_id}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a member</option>
                {/* TODO: Populate from API */}
              </select>
            </div>
            <div className="form-group">
              <label>Aircraft</label>
              <select
                name="aircraft_id"
                value={formData.aircraft_id}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an aircraft</option>
                {/* TODO: Populate from API */}
              </select>
            </div>
            <div className="form-group">
              <label>Rental Start</label>
              <input
                type="datetime-local"
                name="rental_start"
                value={formData.rental_start}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="primary">Create Rental</button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Member</th>
            <th>Aircraft</th>
            <th>Start</th>
            <th>End</th>
            <th>Hours</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rentals.length === 0 ? (
            <tr>
              <td colSpan="8">No rentals found</td>
            </tr>
          ) : (
            rentals.map((rental) => (
              <tr key={rental.id}>
                <td>{rental.member_name}</td>
                <td>{rental.aircraft_registration}</td>
                <td>{new Date(rental.rental_start).toLocaleDateString()}</td>
                <td>{rental.rental_end ? new Date(rental.rental_end).toLocaleDateString() : '-'}</td>
                <td>{rental.hours_used ? rental.hours_used.toFixed(1) : '-'}</td>
                <td>€{rental.total_amount ? rental.total_amount.toFixed(2) : '-'}</td>
                <td>{rental.status}</td>
                <td>
                  {rental.status === 'active' && (
                    <button className="primary">End Rental</button>
                  )}
                  <button className="danger">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Rentals;
