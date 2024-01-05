// Import necessary modules and components
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: "#FFF", // Change primary color
    },
    // Add more customizations as needed
  },
});

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    sendRequest();
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setAge("");
    setName("");
    setSurname("");
    setEmail("");
    setPhoneNumber("");
    navigate(0);
  };

  const sendRequest = () => {
    fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        password: password,
        confirmPassword: confirmPassword,
        age: age,
        name: name,
        surname: surname,
        email: email,
        phoneNumber: phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("tokenKey", result.message);
        localStorage.setItem("currentUser", result.userId);
        localStorage.setItem("userName", username);
      })
      .catch((err) => console.log(err));
    alert("You have completely registered.");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <Typography component="h1" variant="h5" color={"white"}>
          Sign Up
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
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
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white", // Change label color
                },
                "& .MuiInputBase-input": {
                  color: "white", // Change input text color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color on focus
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Change border color on hover
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
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white", // Change label color
                },
                "& .MuiInputBase-input": {
                  color: "white", // Change input text color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color on focus
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Change border color on hover
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white", // Change label color
                },
                "& .MuiInputBase-input": {
                  color: "white", // Change input text color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color on focus
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Change border color on hover
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white", // Change label color
                },
                "& .MuiInputBase-input": {
                  color: "white", // Change input text color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color on focus
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Change border color on hover
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="surname"
              label="Surname"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white", // Change label color
                },
                "& .MuiInputBase-input": {
                  color: "white", // Change input text color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color on focus
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Change border color on hover
                },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="age"
              label="Age"
              name="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white", // Change label color
                },
                "& .MuiInputBase-input": {
                  color: "white", // Change input text color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color on focus
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Change border color on hover
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white", // Change label color
                },
                "& .MuiInputBase-input": {
                  color: "white", // Change input text color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color on focus
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Change border color on hover
                },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  textAlign: "center",
                  color: "white", // Change label color
                },
                "& .MuiInputBase-input": {
                  color: "white", // Change input text color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color
                },
                "&:focus .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white !important", // Change border color on focus
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Change border color on hover
                },
              }}
            />
          </ThemeProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSignup}
            sx={{ mt: 3, mb: 2 }}
            style={{backgroundColor:"black"}}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
