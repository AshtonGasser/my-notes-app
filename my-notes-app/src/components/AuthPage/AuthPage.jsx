import React, { useState } from 'react';
//import { Box, Button, TextField, Typography } from '@mui/material'

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

  const handleSignUp = () => {
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

  
}
