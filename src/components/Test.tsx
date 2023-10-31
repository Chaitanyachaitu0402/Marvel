import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegistration = () => {
    axios.post('/api/register', { email, password })
      .then(response => {
        setMessage('Registration successful.');
        // Redirect to login or perform other actions as needed
      })
      .catch(error => {
        setMessage('Registration failed. Email may already be in use.');
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
      <p>{message}</p>
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    axios.post('/api/login', { email, password })
      .then(response => {
        setMessage('Login successful.');
        // Redirect to user dashboard or perform other actions as needed
      })
      .catch(error => {
        setMessage('Login failed. Check your credentials.');
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default { RegistrationForm, LoginForm };
