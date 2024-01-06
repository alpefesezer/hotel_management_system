import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

export default function AdminPage() {
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [roomPrice, setRoomPrice] = useState(null);
  const [roomStorage, setRoomStorage] = useState(null);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const url = "/rooms/" + id;

  const handleAdd = () => {
    sendRequest();
    setDescription("");
    setPictureUrl("");
    setRoomPrice(0);
    setRoomStorage(0);
    navigate(0);
  };

  const handleDelete = () => {
    DeleteRequest();
    setId("");
    navigate(0);
  };

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
    alert("You have completely created a room.");
  };

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
    <div>
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
                label="Description"
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
