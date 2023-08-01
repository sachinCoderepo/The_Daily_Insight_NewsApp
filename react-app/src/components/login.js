import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for LoginPage styles

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Here, you would typically send a login request to the backend for authentication.
    // For this example, we'll just do a simple client-side check.
    let user = "sachin"
    let paswrd = "1234"
    if (username === user && password === paswrd) {
      // Successful login
      navigate('/About'); // Replace '/dashboard' with the actual dashboard route
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <input className='my-3'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
        className='my-3'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='my-3'>
        <button  onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
