import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

// Room component for displaying individual room details
export default function Room(props) {
  // Destructuring props to get room details
  const { roomId, roomPrice, roomStorage, roomPicture, roomDescription } =
    props;

  // Function to handle click on the card media
  function handleClick() {
    console.log(roomId);
  }

  return (
    // NavLink for navigation to the room details page
    <NavLink
      to={{ pathname: "/rooms/" + roomId }}
      style={{ textDecoration: "none" }}
    >
      {/* Material-UI Card component with styling */}
      <Card
        style={{ cursor: "pointer" }}
        sx={{ maxWidth: 350, maxHeight: 350 }}
      >
        {/* CardMedia component for displaying room image */}
        <CardMedia
          onClick={() => handleClick()}
          sx={{ height: 140 }}
          image={roomPicture}
          title={roomId}
        />
        {/* CardContent for displaying room details */}
        <CardContent sx={{ backgroundColor: "gray" }}>
          {/* Typography for room title and price */}
          <Typography gutterBottom variant="h5" component="div">
            {"Hotel Room for " + roomStorage + " people"}{" "}
            {"  " + roomPrice + "₺ for night"}
          </Typography>
          {/* Typography for room description */}
          <Typography variant="body2" color="text.secondary">
            {roomDescription}
          </Typography>
        </CardContent>
        {/* CardActions component (can be used for additional actions) */}
        <CardActions sx={{ backgroundColor: "gray" }}></CardActions>
      </Card>
    </NavLink>
  );
}
