import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  let navigate = useNavigate();

  const onClick = () => {
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userName");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("email");
    navigate(0);
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar
        position="static"
        sx={{ color: "white", backgroundColor: "#000", height: "80px" }}
      >
        <Toolbar style={{ marginTop: "10px" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Button color="inherit" style={{ margin: 10 }}>
                Home
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" style={{ margin: 10 }}>
                Contact
              </Button>
            </Link>
            <Link
              to="/filter"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" style={{ margin: 10 }} variant="outlined">
                See Our Rooms
              </Button>
            </Link>
          </Typography>

          {localStorage.getItem("userName") === "admin" ? (
            <Link
              to="/admin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Admin</Button>
            </Link>
          ) : null}

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
