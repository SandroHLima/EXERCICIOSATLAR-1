import React, { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import { Container, Form, Input, Button, Message, SwitchButton, ForgotPasswordForm } from './components/StyledComponents';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [loggedInUsername, setLoggedInUsername] = useState(localStorage.getItem('loggedInUsername') || '');
  const [users, setUsers] = useState([]);
  const [showRegister, setShowRegister] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Load users and token from localStorage on mount
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  // Save users to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Username and password are required');
      return;
    }

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      setMessage('Username already exists');
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      setUsers([...users, { username, password: hashedPassword }]);
      setMessage('Registration successful! Please log in.');
      setUsername('');
      setPassword('');
      setShowRegister(false);
    } catch (error) {
      setMessage('Registration failed');
      console.error('Error during registration:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Username and password are required');
      return;
    }

    const user = users.find(u => u.username === username);
    if (!user) {
      setMessage('User not found');
      return;
    }

    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        setMessage('Invalid credentials');
        return;
      }

      const fakeToken = btoa(`${username}:${Date.now()}`);
      setToken(fakeToken);
      localStorage.setItem('authToken', fakeToken);
      localStorage.setItem('loggedInUsername', username); // Persist the logged-in username
      setLoggedInUsername(username);
      setIsLoggedIn(true);
      setMessage('Login successful!');
      setUsername('');
      setPassword('');
    } catch (error) {
      setMessage('Login failed');
      console.error('Error during login:', error);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setLoggedInUsername('');
    localStorage.removeItem('authToken');
    localStorage.removeItem('loggedInUsername');
    setIsLoggedIn(false);
    setMessage('Logged out successfully');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      const updatedUsers = users.filter(user => user.username !== loggedInUsername);
      setUsers(updatedUsers);
      handleLogout();
      setMessage('Account deleted successfully');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Username and new password are required');
      return;
    }

    const userIndex = users.findIndex(u => u.username === username);
    if (userIndex === -1) {
      setMessage('User not found');
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const updatedUsers = [...users];
      updatedUsers[userIndex] = { ...updatedUsers[userIndex], password: hashedPassword };
      setUsers(updatedUsers);
      setMessage('Password updated successfully! Please log in with your new password.');
      setShowForgotPassword(false);
      setUsername('');
      setPassword('');
      setShowRegister(false);
    } catch (error) {
      setMessage('Password update failed');
      console.error('Error during password update:', error);
    }
  };

  const checkProtectedContent = () => {
    if (token) {
      setMessage(`Welcome, ${loggedInUsername}! You have access to protected content.`);
    } else {
      setMessage('Access denied');
    }
  };

  return (
    <Container>
      <h1>User Authentication System</h1>
      {!isLoggedIn ? (
        <>
          <SwitchButton onClick={() => { setShowRegister(!showRegister); setShowForgotPassword(false); }}>
            Switch to {showRegister ? 'Login' : 'Register'}
          </SwitchButton>
          {showRegister ? (
            <Form onSubmit={handleRegister}>
              <h2>Register</h2>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <Button type="submit">Register</Button>
            </Form>
          ) : (
            <Form onSubmit={handleLogin}>
              <h2>Login</h2>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <Button type="submit">Login</Button>
              <Button type="button" onClick={() => setShowForgotPassword(true)}>Forgot Password?</Button>
            </Form>
          )}
          {showForgotPassword && (
            <ForgotPasswordForm onSubmit={handleForgotPassword}>
              <h2>Forgot Password</h2>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
              />
              <Button type="submit">Update Password</Button>
              <Button type="button" onClick={() => setShowForgotPassword(false)}>Cancel</Button>
            </ForgotPasswordForm>
          )}
        </>
      ) : (
        <div>
          <h2>Welcome, {loggedInUsername}!</h2>
          <Button onClick={checkProtectedContent}>Check Protected Content</Button>
          <Button onClick={handleDeleteAccount}>Delete Account</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      )}
      {message && <Message>{message}</Message>}
    </Container>
  );
}

export default App;