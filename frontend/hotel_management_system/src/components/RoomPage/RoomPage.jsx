import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Item = styled(Paper)(({ theme, selected }) => ({
  backgroundColor: selected
    ? theme.palette.primary.main
    : theme.palette.mode === "dark"
    ? "#1A2027"
    : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
  },
});

const RoomPage = () => {
  // Fetch the roomId from the URL parameters
  const { roomId } = useParams();

  // State to manage the selected image
  const [selectedImage, setSelectedImage] = useState(1);

  // State to store room data
  const [room, setRoomData] = useState(null);

  // States for selected check-in and check-out dates
  const [selectedCheckIn, setSelectedCheckIn] = useState(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState(null);

  // State to store existing appointments
  const [appointments, setAppointments] = useState([]);

  // Effect hook to fetch existing appointments from the server
  useEffect(() => {
    fetch("/appointments")
      .then((res) => res.json())
      .then((result) => {
        setAppointments(result);
      });
  }, []);

  // Function to check for date conflicts with existing appointments
  const checkConflict = () => {
    // Check for conflicts only if both check-in and check-out dates are selected
    if (selectedCheckIn && selectedCheckOut) {
      const newAppointmentRange = {
        startDate: new Date(selectedCheckIn).getTime(),
        endDate: new Date(selectedCheckOut).getTime(),
        roomId: roomId, // assuming you have a variable for the selected room id
      };

      // Iterate through existing appointments
      for (const appointment of appointments) {
        const existingAppointmentRange = {
          startDate: new Date(appointment.startDate).getTime(),
          endDate: new Date(appointment.endDate).getTime(),
        };

        // Check for overlap, considering strict inequalities
        if (
          newAppointmentRange.startDate < existingAppointmentRange.endDate &&
          newAppointmentRange.endDate > existingAppointmentRange.startDate &&
          newAppointmentRange.roomId == appointment.roomId
        ) {
          // There is a conflict for the same room, reject the booking
          alert(
            "There is a conflict with an existing appointment in the same room. Please choose different dates or room."
          );
          return false;
        }
      }
    }

    // No conflicts, proceed with the booking
    return true;
  };

  // Effect hook to fetch room data based on the roomId
  useEffect(() => {
    fetch(`/rooms/${roomId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRoomData(data))
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, [roomId]);

  // Function to send a booking request to the server
  const sendRequest = () => {
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: selectedCheckIn,
        endDate: selectedCheckOut,
        roomId: roomId,
        userId: localStorage.getItem("currentUser"),
      }),
    })
      .then((res) => res.json())
      .then((result) => {})
      .catch((err) => console.log(err));
  };

  // Function to handle the "Book Now" button click
  const handleBookNow = () => {
    // Check if the user is logged in
    if (localStorage.getItem("currentUser") != null) {
      // Check for conflicts before making the booking
      if (checkConflict()) {
        // Check if the selectedCheckIn is earlier than selectedCheckOut
        if (
          selectedCheckIn &&
          selectedCheckOut &&
          selectedCheckIn > selectedCheckOut
        ) {
          alert(
            "Please select a valid date range. Check-in date cannot be later than the check-out date."
          );
        } else {
          // If everything is fine, proceed with the booking
          sendRequest();
          setSelectedCheckIn(null);
          setSelectedCheckOut(null);
          alert("You have completely booked the room");
        }
      }
    } else {
      // User is not logged in, show an alert
      setSelectedCheckIn(null);
      setSelectedCheckOut(null);
      alert("You have to log in to book a room!");
    }
  };

  // Function to handle image clicks and update the selectedImage state
  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);
  };

  // Extracted room details from the fetched data or set to "N/A" if data is not available
  const roomStorage =
    room && room.roomStorage !== null ? room.roomStorage : "N/A";
  const roomPrice = room && room.roomPrice !== null ? room.roomPrice : "N/A";
  const roomDescription =
    room && room.description !== null ? room.description : "N/A";
  const roomPicture =
    room && room.pictureUrl !== null ? room.pictureUrl : "N/A";

  // Array to store image URLs, here only one image is considered
  const imageUrls = [roomPicture];
  return (
    <div
      style={{
        margin: "10px",
        padding: "4%",
        paddingLeft: "8%",
        paddingRight: "8%",
      }}
    >
      <Typography variant="h4" component="h4" sx={{ color: "white" }}>
        Hotel room for {" " + roomStorage + " "} people {" " + roomPrice + "₺ "}{" "}
        for night.
      </Typography>
      <div style={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 2,
            marginRight: 2,
          }}
        >
          <img
            src={imageUrls[selectedImage - 1]}
            style={{ width: "700px", height: "485px", objectFit: "cover" }}
            alt={`Selected${selectedImage}`}
          />
        </Box>
        <div style={{ marginTop: "10px", marginLeft: "30px" }}>
          <Card style={{ marginTop: "5px", padding: "10px" }}>
            <Typography>
              Description:
              <Typography>
                <br></br>
                {roomDescription}
              </Typography>
            </Typography>
          </Card>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
              <DatePicker
                sx={{
                  marginTop: "15px",
                  textAlign: "center",
                  width: "150px",
                  "& .MuiInputLabel-root": {
                    textAlign: "center",
                    color: "white", // Change label color
                  },
                  "& .MuiInputBase-input": {
                    color: "white", // Change input text color
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white !important", // Change border color
                  },
                  "&:focus .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white !important", // Change border color on focus
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white", // Change border color on hover
                    },
                }}
                value={selectedCheckIn}
                onChange={(newValue) => {
                  setSelectedCheckIn(newValue);
                }}
                label="Check in"
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {},
                }}
              />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <DatePicker
                sx={{
                  marginTop: "15px",
                  ml: 2,
                  textAlign: "center",
                  width: "150px",
                  "& .MuiInputLabel-root": {
                    textAlign: "center",
                    color: "white", // Change label color
                  },
                  "& .MuiInputBase-input": {
                    color: "white", // Change input text color
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white !important", // Change border color
                  },
                  "&:focus .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white !important", // Change border color on focus
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white", // Change border color on hover
                    },
                }}
                value={selectedCheckOut}
                onChange={(newValue) => {
                  setSelectedCheckOut(newValue);
                }}
                label="Check out"
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {},
                }}
              />
            </ThemeProvider>
          </LocalizationProvider>
          <Button
            type="submit"
            variant="contained"
            onClick={handleBookNow}
            sx={{ mt: 3, mb: 2, ml: 2 }}
            style={{ backgroundColor: "black" }}
          >
            Book Now!
          </Button>
        </div>
      </div>

      <div style={{ marginTop: "20px", marginLeft: "55px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            {imageUrls.map((imageUrl, index) => (
              <Grid key={index}>
                <Item
                  onClick={() => handleImageClick(index + 1)}
                  selected={selectedImage === index + 1}
                >
                  <img
                    src={imageUrl}
                    style={{
                      width: "120px",
                      height: "75px",
                      objectFit: "cover",
                    }}
                    alt={`${index + 1}`}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default RoomPage;
