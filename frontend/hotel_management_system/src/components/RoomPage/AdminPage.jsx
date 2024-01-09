import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

export default function AdminPage() {
  // State variables for form input fields
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [roomPrice, setRoomPrice] = useState(null);
  const [roomStorage, setRoomStorage] = useState(null);
  const [id, setId] = useState("");

  // React Router navigation hook
  const navigate = useNavigate();
  const url = "/rooms/" + id;

  const theme = createTheme({
    // Customize your theme here
    palette: {
      primary: {
        main: "#FFF", // Change primary color
      },
    },
  });

  // Function to handle adding a new room
  const handleAdd = () => {
    // Invoke the sendRequest function to make a POST request
    sendRequest();
    // Clear form input fields after a successful request

    setDescription("");
    setPictureUrl("");
    setRoomPrice(0);
    setRoomStorage(0);
    // Navigate to the specified route

    navigate(0);
  };

  // Function to handle deleting a room by id
  const handleDelete = () => {
    // Invoke the DeleteRequest function to make a DELETE request

    DeleteRequest();
    // Clear the id state after a successful request
    alert(`You have completely deleted a room.`)
    setId("");
    // Clear the id state after a successful request

    navigate(0);
  };

  // Function to make a POST request to add a new room

  const sendRequest = () => {
    fetch("/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomStorage: roomStorage,
        roomPrice: roomPrice,
        pictureUrl: pictureUrl,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((result) => {})
      .catch((err) => console.log(err));

    // Display a user-friendly alert after a successful request
    alert("You have completely created a room.");
  };

  // Function to make a DELETE request to delete a room by id

  const DeleteRequest = () => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "13%",
        columnGap: "6%",
      }}
    >
      {/* Add new Room section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <Typography component="h1" variant="h5" color={"white"}>
              Add new Room
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <ThemeProvider theme={theme}>
                {/* TextFields */}

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="roomStorage"
                  label="Room Storage"
                  name="roomStorage"
                  autoFocus
                  onChange={(e) => setRoomStorage(e.target.value)}
                  value={roomStorage}
                  sx={{
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
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="pictureUrl"
                  label="Picture URL"
                  id="pictureUrl"
                  onChange={(e) => setPictureUrl(e.target.value)}
                  value={pictureUrl}
                  sx={{
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
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="Description (Max 255 Characters)"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  sx={{
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
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="roomPrice"
                  label="Room Price"
                  id="roomPrice"
                  onChange={(e) => setRoomPrice(e.target.value)}
                  value={roomPrice}
                  sx={{
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
                />
              </ThemeProvider>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleAdd}
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "black" }}
              >
                ADD
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <Typography component="h1" variant="h5" color={"white"}>
              Delete Room By Id
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <ThemeProvider theme={theme}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="roomId"
                  label="Room Id"
                  name="roomId"
                  autoFocus
                  onChange={(e) => setId(e.target.value)}
                  value={roomStorage}
                  sx={{
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
                />
              </ThemeProvider>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleDelete}
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "black" }}
              >
                DELETE
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
