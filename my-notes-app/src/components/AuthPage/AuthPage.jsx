import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setEmail('');
    setPassword('');
  };

  const handleSignup = () => {
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setMessage('User already exists. Please login.');
    } else {
      localStorage.setItem(email, JSON.stringify({ email, password }));
      setMessage('Signup successful! You can now log in.');
      toggleForm();
    }
  };

  const handleLogin = () => {
    const user = localStorage.getItem(email);
    if (user) {
      const storedUser = JSON.parse(user);
      if (storedUser.password === password) {
        setMessage('Login successful!');
        onLogin();
      } else {
        setMessage('Incorrect password. Please try again.');
      }
    } else {
      setMessage('User not found. Please sign up.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? handleLogin() : handleSignup();
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 4,
        textAlign: 'center',
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant='h4' component='h1' gutterBottom>
        {isLogin ? 'Login' : 'Sign Up'}
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <TextField
          label='Email'
          variant='outlined'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </form>
      {message && (
        <Typography variant='body1' color='textSecondary' sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
      <Button onClick={toggleForm} sx={{ mt: 2, textTransform: 'none' }}>
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </Button>
    </Box>
  );
}
