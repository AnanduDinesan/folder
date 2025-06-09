// src/components/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styling/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log('Login Successful:', response.data);
    } catch (err) {
      console.error('Login Failed:', err.response?.data || err.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h2>Login Page</h2>
        {error && <p>{error}</p>}
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>LOGIN</button>
      </form>
    </div>
  );
};

export default LoginPage;
