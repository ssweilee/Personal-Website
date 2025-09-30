import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/Login.css';

function Login({ onClose, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
   const params = new URLSearchParams(window.location.search);
   const token = params.get('token');
   if (token) {
      localStorage.setItem('token', token);
      onLogin();
      onClose();
    }
  }, [onClose, onLogin]);
 
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
         localStorage.setItem('token', data.token);
         onLogin();
         onClose();
       } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = '/api/auth/google';
  };

  return (
    <div className="login-form">
      <Form onSubmit={handleEmailLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <p className="text-danger mt-2">{error}</p>}
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Login
        </Button>
      </Form>
      <div className="text-center mt-3">
        <Button variant="outline-primary" onClick={handleGoogleLogin} className="w-100">
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login