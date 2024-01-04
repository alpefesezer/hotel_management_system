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
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import DatesPicker from '../DatesPicker/DatesPicker';
import ControlledOpenSelect from '../Selection/Selection';

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
      <AppBar position="static" sx={{ color: 'white', backgroundColor: 'black', height: '80px' }}>
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
                Home
              </Button>
            </Link>
          </Typography>
          
          <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',display: "flex", alignItems: "center", justifyContent: "center",}}>
          <DatesPicker label="Check In" />
          <DatesPicker label="Check Out" />
          <ControlledOpenSelect />
          <Button className= "filter_btn" style={{color: 'gray', backgroundColor: 'white'}}>Filter</Button>
          </div>


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
