import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
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
      <Container maxWidth="sm">
        <Typography variant="body2" color="#ababab" align="center">
          "alpefesezer nakliyat" her hakkı saklıdır.
        </Typography>
        <Typography variant="body2" color="#ababab" align="center">
          © {new Date().getFullYear()} alpefesezer
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
