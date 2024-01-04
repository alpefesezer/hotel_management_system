// Import necessary modules and components
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#FFF', // Change primary color
    },
    // Add more customizations as needed
  },
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    sendRequest();
    navigate(0);
    setUsername("");
    setPassword("");
  };

  const sendRequest = () => {
    fetch("/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    })
        .then((res) => res.json())
        .then((result) =>
                        {
                        localStorage.setItem("tokenKey", result.message);
                        localStorage.setItem("currentUser", result.userId);
                        localStorage.setItem("userName", username)})
        .catch((err) => console.log(err))
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ mt: 3 }}
        >
          <ThemeProvider theme={theme}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </ThemeProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
