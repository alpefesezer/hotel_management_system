import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          "alpefesezer nakliyat" her hakkı saklıdır.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} alpefesezer
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
