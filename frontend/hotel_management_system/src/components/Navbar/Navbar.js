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
import { Link, useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  let navigate = useNavigate();
  
  const onClick = () => {
    localStorage.removeItem("tokenKey")
    localStorage.removeItem("currentUser")
    localStorage.removeItem("userName")
    navigate(0)
  }


  
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static" sx={{ color: 'white', backgroundColor: '#000', height: '80px' }}>
        <Toolbar style={{marginTop:"10px"}}>
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
                Home başlamadım
              </Button>
            </Link>
            <Button color="inherit" style={{ margin: 10 }}>
                Contact boş
              </Button>
              <Button color="inherit" style={{ margin: 10 }}>
                About boş
              </Button>
              <Link to="/filter" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit" style={{ margin: 10}} variant='outlined'>
                Filter Geçiçi Tuşu daha iyi biyer bulmak lazım
              </Button>
              </Link>
          </Typography>

          {localStorage.getItem("userName") === "admin" ? 
          <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Admin</Button>
        </Link>:null
          }



          {localStorage.getItem("currentUser") == null ? 
          <Link to="/auth/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Login</Button>
          </Link>:
          <Link to={{pathname: '/users/' + localStorage.getItem("currentUser")}} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Profile</Button>
          </Link>
          }

          {localStorage.getItem("currentUser") == null ? 
          <Link to="/auth/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Sign Up</Button>
          </Link>:
          <Link to="/auth/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit" onClick={onClick}>Log out</Button>
          </Link>}

          
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          <ListItem button component={Link} to="/user">
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
