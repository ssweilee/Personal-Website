import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';

function Dashboard({ onClose, onLogout }) {
  const [userInfo, setUserInfo] = useState(null);
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserInfo(decoded);
      } catch (err) {
        setError('Invalid token');
        localStorage.removeItem('token');
        onLogout();
      }
    } else {
      setError('Please log in');
    }
  }, [onLogout]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User input:', inputData);
  };

  if (error) {
    return (
      <div>
        <p className="text-danger">{error}</p>
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      </div>
    );
  }

  return (
    <div>
      {userInfo ? (
        <>
          <h4>Welcome, {userInfo.email || 'User'}!</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formInput">
              <Form.Label>Enter Information</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter data"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
          <Button variant="outline-danger" onClick={handleLogout} className="mt-3">
            Logout
          </Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard