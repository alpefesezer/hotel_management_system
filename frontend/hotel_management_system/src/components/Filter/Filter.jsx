import React, { useState } from "react";
import FilterCard from "./FilterCard";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function Filter() {
  const filterData = [
    {
      roomStorage: 2,
      roomPrice: 222,
      roomId: 1,
      roomPicture: "",
      roomDescription: "description",
    },
    {
      roomStorage: 3,
      roomPrice: 222,
      roomId: 2,
      roomPicture: "",
      roomDescription: "description",
    },
    {
      roomStorage: 4,
      roomPrice: 222,
      roomId: 3,
      roomPicture: "",
      roomDescription: "description",
    },
    {
      roomStorage: 1,
      roomPrice: 222,
      roomId: 4,
      roomPicture: "",
      roomDescription: "description",
    },
    {
      roomStorage: 1,
      roomPrice: 222,
      roomId: 5,
      roomPicture: "",
      roomDescription: "description",
    },
    {
      roomStorage: 4,
      roomPrice: 222,
      roomId: 6,
      roomPicture: "",
      roomDescription: "description",
    },
    {
      roomStorage: 3,
      roomPrice: 222,
      roomId: 7,
      roomPicture: "",
      roomDescription: "description",
    },
    {
      roomStorage: 2,
      roomPrice: 222,
      roomId: 8,
      roomPicture: "",
      roomDescription: "description",
    },
    {
      roomStorage: 1,
      roomPrice: 222,
      roomId: 9,
      roomPicture: "",
      roomDescription: "description",
    },
  ];

  const [selectedStorage, setSelectedStorage] = useState("all");
  const [filteredData, setFilteredData] = useState(filterData);

  const handleStorageChange = (event) => {
    setSelectedStorage(event.target.value);
  };

  const applyFilter = () => {
    if (selectedStorage === "all") {
      setFilteredData(filterData);
    } else {
      const storageValue = parseInt(selectedStorage, 10);
      const filteredData = filterData.filter(
        (data) => data.roomStorage === storageValue
      );
      setFilteredData(filteredData);
    }
  };

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
      <FormControl>
        <InputLabel style={{color:"white"}} id="storage-label">Guests Number</InputLabel>
        <Select
          labelId="storage-label"
          id="storage-select"
          value={selectedStorage}
          label="Guests Number"
          style={{backgroundColor:"#000000"}}
          sx={{
            textAlign:"center",
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
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // Change border color on hover
            },
          }}
          onChange={handleStorageChange}
        >
          <MenuItem value="all">Show All</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        style={{ marginLeft: "15px", backgroundColor:"#000000" }}
        onClick={applyFilter}
      >
        Apply Filter
      </Button>
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
        {filteredData.map((data) => (
          <FilterCard
            key={data.roomId}
            roomStorage={data.roomStorage}
            roomPrice={data.roomPrice}
            roomId={data.roomId}
            roomPicture={data.roomPicture}
            roomDescription={data.roomDescription}
          ></FilterCard>
        ))}
      </div>
    </div>
  );
}
