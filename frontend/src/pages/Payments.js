import React, { useState, useEffect } from 'react';
import './Pages.css';

function Payments() {
  const [payments, setPayments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    rental_id: '',
    member_id: '',
    amount: '',
    payment_method: ''
  });

  useEffect(() => {
    // TODO: Fetch payments from API
    // fetchPayments();
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
      rental_id: '',
      member_id: '',
      amount: '',
      payment_method: ''
    });
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Payments</h1>
        <button 
          className="primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Record Payment'}
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h2>Record Payment</h2>
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
              <label>Rental</label>
              <select
                name="rental_id"
                value={formData.rental_id}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a rental</option>
                {/* TODO: Populate from API */}
              </select>
            </div>
            <div className="form-group">
              <label>Amount (€)</label>
              <input
                type="number"
                step="0.01"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select
                name="payment_method"
                value={formData.payment_method}
                onChange={handleInputChange}
                required
              >
                <option value="">Select payment method</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="check">Check</option>
              </select>
            </div>
            <button type="submit" className="primary">Record Payment</button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Member</th>
            <th>Rental ID</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan="7">No payments found</td>
            </tr>
          ) : (
            payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.member_name}</td>
                <td>{payment.rental_id}</td>
                <td>€{payment.amount.toFixed(2)}</td>
                <td>{payment.payment_method}</td>
                <td>{new Date(payment.payment_date).toLocaleDateString()}</td>
                <td>{payment.status}</td>
                <td>
                  <button className="primary">View</button>
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

export default Payments;
