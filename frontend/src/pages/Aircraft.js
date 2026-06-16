import React, { useState, useEffect } from 'react';
import './Pages.css';

function Aircraft() {
  const [aircraft, setAircraft] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    registration: '',
    aircraft_type: '',
    manufacturer: '',
    model: '',
    hourly_rate: ''
  });

  useEffect(() => {
    // TODO: Fetch aircraft from API
    // fetchAircraft();
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
      registration: '',
      aircraft_type: '',
      manufacturer: '',
      model: '',
      hourly_rate: ''
    });
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Aircraft</h1>
        <button 
          className="primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Aircraft'}
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h2>Add New Aircraft</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Registration</label>
              <input
                type="text"
                name="registration"
                value={formData.registration}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Aircraft Type</label>
              <input
                type="text"
                name="aircraft_type"
                value={formData.aircraft_type}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Manufacturer</label>
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Hourly Rate (€)</label>
              <input
                type="number"
                step="0.01"
                name="hourly_rate"
                value={formData.hourly_rate}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="primary">Add Aircraft</button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Registration</th>
            <th>Type</th>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Hourly Rate</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {aircraft.length === 0 ? (
            <tr>
              <td colSpan="7">No aircraft found</td>
            </tr>
          ) : (
            aircraft.map((plane) => (
              <tr key={plane.id}>
                <td>{plane.registration}</td>
                <td>{plane.aircraft_type}</td>
                <td>{plane.manufacturer}</td>
                <td>{plane.model}</td>
                <td>€{plane.hourly_rate}</td>
                <td>{plane.is_available ? '✓ Available' : '✗ Rented'}</td>
                <td>
                  <button className="primary">Edit</button>
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

export default Aircraft;
