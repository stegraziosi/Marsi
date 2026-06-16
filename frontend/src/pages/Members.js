import React, { useState, useEffect } from 'react';
import './Pages.css';

function Members() {
  const [members, setMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    license_number: ''
  });

  useEffect(() => {
    // TODO: Fetch members from API
    // fetchMembers();
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
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      license_number: ''
    });
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Members</h1>
        <button 
          className="primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Member'}
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h2>Add New Member</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>License Number</label>
              <input
                type="text"
                name="license_number"
                value={formData.license_number}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="primary">Add Member</button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>License</th>
            <th>Member Since</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.length === 0 ? (
            <tr>
              <td colSpan="6">No members found</td>
            </tr>
          ) : (
            members.map((member) => (
              <tr key={member.id}>
                <td>{member.first_name} {member.last_name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.license_number}</td>
                <td>{member.member_since}</td>
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

export default Members;
