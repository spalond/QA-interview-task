import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if token exists
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/home'); // Redirect to home on successful login
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
      <div className="login-container" data-cy="login-container">
        <div className="login-form" data-cy="login-form">
          <h2 data-cy="login-header">Login</h2>
          {error && <p className="error" data-cy="error-message">{error}</p>}
          <form onSubmit={handleSubmit} data-cy="login-form-submit">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                data-cy="username-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                data-cy="password-input"
            />
            <button type="submit" data-cy="login-button">Login</button>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;

