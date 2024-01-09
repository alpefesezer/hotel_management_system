// Import necessary modules and components
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

// Create a custom theme for Material-UI components
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF", // Customize primary color
    },
  },
});

// Define the Login functional component
const Login = () => {
  // State variables for username, password, and navigation
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Event handler for the login button
  const handleLogin = () => {
    if(username == `` || password == ``){
      alert(`username or password is null.`)
    }else{
      sendRequest();
    }
  };

  // Function to send a login request
  const sendRequest = () => {
    fetch("/auth/login", {
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
      .then((result) => {
        // Store user-related data in local storage upon successful login
        localStorage.setItem("tokenKey", result.message);
        localStorage.setItem("currentUser", result.userId);
        localStorage.setItem("userName", username);
        localStorage.setItem("name", result.name);
        localStorage.setItem("surname", result.surname);
        localStorage.setItem("email", result.email);
        localStorage.setItem("phoneNumber", result.phoneNumber);
      })
      .catch((err) => console.log(err));
  };

  // JSX structure rendering the Material-UI components for the login form
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" color={"white"}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
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
              sx={{
                // Styling for the username TextField
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important",
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
              }}
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
              sx={{
                // Styling for the password TextField
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important",
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
              }}
            />
          </ThemeProvider>
          {/* Login button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
            style={{ backgroundColor: "black" }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

// Export the Login component as the default export
export default Login;
