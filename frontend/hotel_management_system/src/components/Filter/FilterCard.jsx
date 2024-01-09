import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

// FilterCard component for rendering a clickable card with room details
export default function FilterCard(props) {
  // Destructuring props to extract room details
  const { roomId, roomPrice, roomStorage, roomPicture, roomDescription } =
    props;

  return (
    // Wrap the card content with NavLink for navigation to individual room
    <NavLink
      to={{ pathname: "/rooms/" + roomId }}
      style={{ textDecoration: "none" }}
    >
      {/* Material-UI Card component for displaying room information */}
      <Card
        style={{ cursor: "pointer" }}
        sx={{ height: 400, width: 650, overflow: "hidden" }}
      >
        {/* CardMedia for displaying room image */}
        <CardMedia sx={{ height: 200 }} image={roomPicture} title={roomId} />
        {/* CardContent for room details */}
        <CardContent sx={{ backgroundColor: "white", height: "100%" }}>
          {/* Typography for room title (number of people and price) */}
          <Typography gutterBottom variant="h5" component="div">
            {"Hotel Room for " + roomStorage + " people"}{" "}
            {"  " + roomPrice + "₺ for night"}
          </Typography>
          {/* Typography for room description */}
          <Typography variant="body2" color="text.secondary">
            {roomDescription}
          </Typography>
        </CardContent>
        {/* CardActions for additional actions (if needed) */}
        <CardActions sx={{ backgroundColor: "gray" }}></CardActions>
      </Card>
    </NavLink>
  );
}
