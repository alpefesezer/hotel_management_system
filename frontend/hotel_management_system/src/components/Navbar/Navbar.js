import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  let userId = 5;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static" sx={{ color: 'white', backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit" style={{ margin: 10 }}>
                Home
              </Button>
            </Link>
          </Typography>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Sign Up</Button>
          </Link>
          <NavLink to={{ pathname: '/users/' + userId }}>User</NavLink>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Check In" />
          </ListItem>
          <ListItem button component={Link} to="/login">
            <ListItemText primary="Check out" />
          </ListItem>
          <ListItem button component={Link} to="/signup">
            <ListItemText primary="Guests" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
