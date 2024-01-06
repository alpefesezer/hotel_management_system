import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function FilterCard(props) {
  const { roomId, roomPrice, roomStorage, roomPicture, roomDescription } =
    props;

  return (
    <NavLink
      to={{ pathname: "/rooms/" + roomId }}
      style={{ textDecoration: "none" }}
    >
      <Card style={{ cursor: "pointer" }} sx={{ height: 400, width: 650, overflow: "hidden" }}>
        <CardMedia sx={{ height: 200 }} image={roomPicture} title={roomId} />
        <CardContent sx={{ backgroundColor: "white", height: "100%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {"Hotel Room for " + roomStorage + " people"}{" "}
            {"  " + roomPrice + "₺ for night"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {roomDescription}
          </Typography>
        </CardContent>
        <CardActions sx={{ backgroundColor: "gray" }}></CardActions>
      </Card>
    </NavLink>
  );
}
