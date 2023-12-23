import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Room(props) {
    const {roomId, roomPrice, roomStorage, roomPicture, roomDescription} = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={roomPicture}
        title={roomId}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {roomPrice + "TL "} ----------- {roomStorage + " people"} {roomId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {roomDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Now!</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}