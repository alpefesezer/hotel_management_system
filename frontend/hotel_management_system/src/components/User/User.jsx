import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";

export default function User() {
  const [appointments, setAppointments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = "/appointments/";

  useEffect(() => {
    fetch("/appointments")
      .then((res) => res.json())
      .then((result) => {
        setAppointments(result);
        setIsLoaded(true);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const handleDelete = (id) => {
    fetch(url + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        // Update state after successful delete
        setAppointments((prevAppointments) => prevAppointments.filter(appointment => appointment.id !== id));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const callAppointments = (userId) => {
    const userAppointments = appointments.filter(
      (appointment) => appointment.userId == userId
    );
    if (userAppointments.length > 0) {
      return userAppointments.map((appointment) => (
        <div>
        <Typography
          sx={{
            fontWeight: "100",
            color: "#FFF",
            fontSize: "30px",
            textShadow: "1.5px 1.5px 1.5px #000",
            textAlign: "justify",
            marginTop: "10px",
            marginRight: "20px",
          }}
        >
          Start Date: {formatDate(appointment.startDate)}
          <br></br>
          End Date: {formatDate(appointment.endDate)}
          <br></br>
          Room Id: {appointment.roomId}
        </Typography>
        <IconButton onClick= {()=> handleDelete(appointment.id)} aria-label="delete" size="large">
              <DeleteIcon fontSize="inherit" />
        </IconButton>
        </div>
      ));
    } else {
      return (
        <Typography
          sx={{
            fontWeight: "100",
            color: "#FFF",
            fontSize: "30px",
            textShadow: "1.5px 1.5px 1.5px #000",
            textAlign: "justify",
            marginTop: "10px",
          }}
        >
          You don't have any appointments.
        </Typography>
      );
    }
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  } else {
    return (
      <div style={{ minHeight: "650px" }}>
        <Box style={{ padding: "8%", paddingTop: "4%", paddingBottom: "4%" }}>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "800",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              Username:
            </Typography>
            <Typography
              sx={{
                fontWeight: "100",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
              }}
            >
              {localStorage.getItem("userName")}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "800",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              Name:
            </Typography>
            <Typography
              sx={{
                fontWeight: "100",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
              }}
            >
              {localStorage.getItem("name")}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "800",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              Surname:
            </Typography>
            <Typography
              sx={{
                fontWeight: "100",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
              }}
            >
              {localStorage.getItem("surname")}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "800",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              Email Adress:
            </Typography>
            <Typography
              sx={{
                fontWeight: "100",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
              }}
            >
              {localStorage.getItem("email")}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "800",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              Phone Number:
            </Typography>
            <Typography
              sx={{
                fontWeight: "100",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
              }}
            >
              {localStorage.getItem("phoneNumber")}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "800",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              Your Appointment:
            </Typography>
            {callAppointments(localStorage.getItem("currentUser"))}
          </div>
        </Box>
      </div>
    );
  }
}
