import React, { useState } from 'react';
//import { Box, Button, TextField, Typography } from '@mui/material'


export default function AuthPage({onLogin}) {
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


}