import React, { useState, useEffect } from "react";
import FilterCard from "./FilterCard";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress
} from "@mui/material";
import Room from "../Room/Room";

export default function Filter() {
  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [roomList, setRoomList] = useState([]);
    const [data, setData] = useState([])


    useEffect(() => {
        fetch("/rooms")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setRoomList(result);
                setData(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

  const [selectedStorage, setSelectedStorage] = useState("all");

  const handleStorageChange = (event) => {
    setSelectedStorage(event.target.value);
  };

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

  if(error){
    return(
    <div className="container" style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", width: '90%', marginLeft: '5%', marginTop: '4%', flexDirection: "row", columnGap:'6%', rowGap: '70px'}}>
    </div>
    )
}else if(!isLoaded){
    return <CircularProgress color="secondary"/>
}else {
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
        <InputLabel style={{color:"white"}} id="storage-label">Guests</InputLabel>
        <Select
          labelId="storage-label"
          id="storage-select"
          value={selectedStorage}
          label="Guests"
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
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        style={{ marginLeft: "15px", backgroundColor:"#000000" }}
        onClick={applyFilter}
      >
      Search
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
        {roomList.map((room) => (
          <Room
          roomStorage = {room.roomStorage} roomPrice={room.roomPrice} roomId={room.id} roomPicture={room.pictureUrl} roomDescription={room.description}
          ></Room>
        ))}
      </div>
    </div>
  ); 
}}
