import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

// ButtonAppBar component for the navigation bar
export default function ButtonAppBar() {
  // useNavigate hook to handle navigation
  let navigate = useNavigate();

  // Function to handle logout button click
  const onClick = () => {
    // Remove user-related data from local storage
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userName");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("email");
    // Navigate to the home page
    navigate(0);
  };

  return (
    // Main container with styling
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      {/* Material-UI AppBar component with styling */}
      <AppBar
        position="static"
        sx={{ color: "white", backgroundColor: "#000", height: "80px" }}
      >
        {/* Toolbar component with navigation buttons */}
        <Toolbar style={{ marginTop: "10px" }}>
          {/* Home button */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Button color="inherit" style={{ margin: 10 }}>
                Home
              </Button>
            </Link>
            {/* Contact button */}
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" style={{ margin: 10 }}>
                Contact
              </Button>
            </Link>
            {/* See Our Rooms button */}
            <Link
              to="/filter"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" style={{ margin: 10 }} variant="outlined">
                See Our Rooms
              </Button>
            </Link>
          </Typography>

          {/* Admin button (visible only for admin users) */}
          {localStorage.getItem("userName") === "admin" ? (
            <Link
              to="/admin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Admin</Button>
            </Link>
          ) : null}

          {/* Login or Profile button based on user authentication */}
          {localStorage.getItem("currentUser") == null ? (
            <Link
              to="/auth/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Login</Button>
            </Link>
          ) : (
            <Link
              to={{ pathname: "/users/" + localStorage.getItem("currentUser") }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Profile</Button>
            </Link>
          )}

          {/* Sign Up or Log out button based on user authentication */}
          {localStorage.getItem("currentUser") == null ? (
            <Link
              to="/auth/signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Sign Up</Button>
            </Link>
          ) : (
            <Link
              to="/auth/signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" onClick={onClick}>
                Log out
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
