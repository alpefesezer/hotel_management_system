import React from "react";
import HomeIntro from "../HomeIntro/HomeIntro";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

// Home component for the main landing page
function Home() {
    return (
      // Main container with background image and styling
      <div
        style={{
          backgroundImage: "url('wallpaperflare.com_wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "-60px",
        }}
      >
        {/* Content container with flex layout */}
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
          {/* Left side box containing welcome text and hotel description */}
          <Box sx={{ width: "100%", height: "48rem", marginTop: "5%" }}>
            {/* Welcome message and hotel description */}
            <Typography
              sx={{
                fontWeight: "700",
                color: "#FFF",
                fontSize: "70px",
                textShadow: "1.5px 1.5px 1.5px #000",
              }}
            >
              Welcome {localStorage.getItem("name")}
              <br />
              {/* Hotel description text */}
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
                {/* Additional hotel information */}
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
            {/* Divider for separating content sections */}
            <Divider sx={{ marginTop: "30px", borderBottomWidth: "5px" }} />
            {/* Button for navigating to the room filter page */}
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
                {/* Button text */}
                <Typography
                  sx={{ color: "#000", fontWeight: "700", fontSize: "20px" }}
                >
                  SEE OUR ROOMS
                </Typography>
              </Button>
            </NavLink>
          </Box>
          {/* Right side box containing HomeIntro component */}
          <HomeIntro />
        </div>
      </div>
    );
  }

export default Home;
