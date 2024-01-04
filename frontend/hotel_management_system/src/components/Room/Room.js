import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

export default function Room(props) {
    const {roomId, roomPrice, roomStorage, roomPicture, roomDescription} = props;

    function handleClick() {
      console.log(roomId);
    }
  return (
    <NavLink to={{ pathname: '/rooms/' + roomId }} style={{ textDecoration: 'none' }}>
    <Card style={{cursor : 'pointer'}} sx={{ maxWidth: 350, maxHeight: 350 }}>
      <CardMedia
        onClick={() => handleClick()}
        sx={{ height: 140 }}
        image={roomPicture}
        title={roomId}
      />
      <CardContent sx={{backgroundColor: 'gray'}}>
        <Typography gutterBottom variant="h5" component="div">
          {"Hotel Room for " + roomStorage + " people"} {"  " + roomPrice + "TL for night"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {roomDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor: "gray"}}>
      </CardActions>
    </Card>
    </NavLink>
  );
}