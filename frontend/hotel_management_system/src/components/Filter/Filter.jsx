import React, { useState, useEffect } from "react";
import FilterCard from "./FilterCard";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
} from "@mui/material";

// Filter component for displaying a filter interface and room cards
export default function Filter() {
  // State variables for handling data loading and filtering
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [data, setData] = useState([]);

  // Fetch data from the server on component mount
  useEffect(() => {
    fetch("/rooms")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRoomList(result);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // State variable for selected storage filter
  const [selectedStorage, setSelectedStorage] = useState("all");

  // Handler for changing the selected storage filter
  const handleStorageChange = (event) => {
    setSelectedStorage(event.target.value);
  };

  // Function to apply the selected filter and update roomList
  const applyFilter = () => {
    if (selectedStorage === "all") {
      setRoomList(data);
    } else {
      const storageValue = parseInt(selectedStorage, 10);
      const filteredData = data.filter(
        (room) => room.roomStorage === storageValue
      );
      setRoomList(filteredData);
    }
  };

  // Conditional rendering based on data loading and errors
  if (error) {
    // Render when there is an error
    return (
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          width: "90%",
          marginLeft: "5%",
          marginTop: "4%",
          flexDirection: "row",
          columnGap: "6%",
          rowGap: "70px",
        }}
      ></div>
    );
  } else if (!isLoaded) {
    // Render a loading spinner while data is being fetched
    return <CircularProgress color="secondary" />;
  } else {
    // Render the filter interface and room cards when data is loaded
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2%",
          flexDirection: "row",
        }}
      >
        {/* Filter interface with storage dropdown and search button */}
        <FormControl>
          <InputLabel style={{ color: "white" }} id="storage-label">
            Guests
          </InputLabel>
          <Select
            labelId="storage-label"
            id="storage-select"
            value={selectedStorage}
            label="Guests"
            style={{ backgroundColor: "#000000" }}
            sx={{
              textAlign: "center",
              width: "110px",
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
            onChange={handleStorageChange}
          >
            {/* Dropdown options for number of guests */}
            <MenuItem value="all">Show All</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
        </FormControl>
        {/* Search button to apply the selected filter */}
        <Button
          variant="contained"
          style={{ marginLeft: "15px", backgroundColor: "#000000" }}
          onClick={applyFilter}
        >
          Search
        </Button>
        {/* Container for displaying filtered room cards */}
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "90%",
            marginLeft: "5%",
            marginTop: "2%",
            flexDirection: "row",
            columnGap: "6%",
            rowGap: "70px",
          }}
        >
          {/* Map through roomList to render FilterCard for each room */}
          {roomList.map((room) => (
            <FilterCard
              roomStorage={room.roomStorage}
              roomPrice={room.roomPrice}
              roomId={room.id}
              roomPicture={room.pictureUrl}
              roomDescription={room.description}
            ></FilterCard>
          ))}
        </div>
      </div>
    );
  }
}
