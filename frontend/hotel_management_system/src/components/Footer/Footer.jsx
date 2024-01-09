import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Footer component for displaying copyright information
const Footer = () => {
  return (
    // Footer container with styling
    <footer
      style={{
        position: "relative",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "#000000",
        paddingTop: "2rem",
        height: "190px",
        width: "100%",
      }}
    >
      {/* Container for centering and limiting the content width */}
      <Container maxWidth="sm">
        {/* Copyright text with a smaller font size */}
        <Typography variant="body2" color="#ababab" align="center">
          "alpefesezer nakliyat" her hakkı saklıdır.
        </Typography>
        {/* Year and brand information with a smaller font size */}
        <Typography variant="body2" color="#ababab" align="center">
          © {new Date().getFullYear()} alpefesezer
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
