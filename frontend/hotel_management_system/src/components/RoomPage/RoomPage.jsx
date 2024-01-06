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
  const { roomId } = useParams();
  const [selectedImage, setSelectedImage] = useState(1);
  const [room, setRoomData] = useState(null);
  const [selectedCheckIn, setSelectedCheckIn] = useState(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState(null);

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

  const handleBookNow = () => {
    if (localStorage.getItem("currentUser") != null) {
      sendRequest();
      setSelectedCheckIn(null);
      setSelectedCheckOut(null);
      alert("You have completely booked the room");
    } else {
      setSelectedCheckIn(null);
      setSelectedCheckOut(null);
      alert("You have to login to book a room!");
    }
  };

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);
  };
  //IMAGE HEIGHTLERI FIXED Bİ VALUE OLSUN ONLARI SEÇERKEN DİKKAT ET SONRA BURAYA MAPLERSİN ATTIĞIN İSTEKTEN

  const roomStorage =
    room && room.roomStorage !== null ? room.roomStorage : "N/A";
  const roomPrice = room && room.roomPrice !== null ? room.roomPrice : "N/A";
  const roomDescription =
    room && room.description !== null ? room.description : "N/A";
  const roomPicture =
    room && room.pictureUrl !== null ? room.pictureUrl : "N/A";

  const imageUrls = [roomPicture];

  return (
    <div style={{ margin: "10px" }}>
      <Typography variant="h4" component="h4" sx={{ color: "white" }}>
        ID is {roomId}
        storage is {roomStorage}
        price is {roomPrice}
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
                  width: "130px",
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
                  width: "130px",
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
                  selected={selectedImage === index + 1}                >
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
