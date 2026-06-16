import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Call login API
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      // const data = await response.json();
      // localStorage.setItem('token', data.token);
      // setIsAuthenticated(true);
      // navigate('/');
      
      // Mock login for now
      if (email && password) {
        localStorage.setItem('token', 'mock-token');
        setIsAuthenticated(true);
        navigate('/');
      } else {
        setError('Please enter email and password');
      }
    } catch (err) {
      setError('Login failed: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>✈ AeroclubDeiMarsi</h1>
        <h2>Fly School Management</h2>
        
        {error && <div className="alert error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="primary" style={{ width: '100%' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
