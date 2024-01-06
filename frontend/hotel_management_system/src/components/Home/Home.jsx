import React, { useEffect, useState } from "react";
import Room from "../Room/Room";
import CircularProgress from "@mui/material/CircularProgress";
import HomeIntro from "../HomeIntro/HomeIntro";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    fetch("/rooms")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRoomList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <div
        style={{
          backgroundImage: "url('wallpaperflare.com_wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "-60px",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
            marginLeft: "8%",
            marginRight: "8%",
            marginTop: "3%",
            marginBottom: "-10%",
            flexDirection: "row",
            columnGap: "6%",
            rowGap: "70px",
          }}
        >
          <Box sx={{ width: "100%", height: "48rem", marginTop: "5%" }}>
            <Typography
              sx={{
                fontWeight: "700",
                color: "#FFF",
                fontSize: "70px",
                textShadow: "1.5px 1.5px 1.5px #000",
              }}
            >
              Welcome
              <br />
              <Typography
                sx={{
                  fontWeight: "100",
                  color: "#FFF",
                  fontSize: "20px",
                  textShadow: "1.5px 1.5px 1.5px #000",
                  textAlign: "justify",
                  marginTop: "10px",
                }}
              >
                The Istanbul Hotel brings together traditional bazaar culture
                and new shopping trends at the New Istanbul Train Station, which
                has a magnificent location at world standards with its
                contemporary design at the most important intersection of the
                city. The world's best restaurants and bars are presented to
                your liking. Our team is ready to provide our guests with an
                unparalleled personalized service. With its perfect location, it
                carries all the values ​​of Istanbul to the highest level.
                <br />
                <br />
                <Typography
                  sx={{
                    fontWeight: "100",
                    color: "#FFF",
                    fontSize: "20px",
                    textShadow: "1.5px 1.5px 1.5px #000",
                    textAlign: "justify",
                  }}
                >
                  This stylish hotel offers views of the Marmara Sea; It is 3
                  minutes from the tram stop, 7 minutes from the Grand Bazaar
                  and 2 km from the Topkapi Palace Museum. The modest rooms
                  feature WiFi, a flat-screen TV and a mini refrigerator.
                  Stylish sets additionally include tea and coffee supplies,
                  marble bathrooms and Turkish baths, as well as sofas and/or
                  antique furniture. Two-storey suites with fragmentary
                  Ottoman-era craftsmanship include seating areas. An upper
                  class suite has a balcony and sea view. Breakfast is served on
                  the roof terrace, which has a pine-lined area and sea views.
                  In addition to the gym, there is a lavish lobby lounge with a
                  manually operated ceiling.
                </Typography>
              </Typography>
            </Typography>
            <Divider sx={{ marginTop: "30px", borderBottomWidth: "5px" }} />
            <NavLink
              to={{ pathname: "/filter/" }}
              style={{ textDecoration: "none" }}
            >
              <Button
                sx={{
                  width: "100%",
                  marginTop: "35px",
                  height: "55px",
                  backgroundColor: "#FFF",
                  ":hover": {
                    backgroundColor: "#000",
                    "& > :first-child": {
                      color: "#FFF",
                    },
                  },
                }}
                variant="contained"
              >
                <Typography
                  sx={{ color: "#000", fontWeight: "700", fontSize: "20px" }}
                >
                  SEE OUR ROOMS
                </Typography>
              </Button>
            </NavLink>
          </Box>
          <HomeIntro />
        </div>
      </div>
    );
  } else if (!isLoaded) {
    return <CircularProgress color="secondary" />;
  } else {
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
      >
        {roomList.map((room) => (
          <Room
            roomStorage={room.roomStorage}
            roomPrice={room.roomPrice}
            roomId={room.id}
            roomPicture={room.pictureUrl}
            roomDescription={room.description}
          ></Room>
        ))}
      </div>
    );
  }
}

export default Home;
