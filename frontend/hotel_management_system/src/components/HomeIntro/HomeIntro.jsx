import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Hidden } from "@mui/material";

export default function HomeIntro() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
        width: "100%",
        height: "100%",
        marginTop: "5.5%",
        marginRight: "7%",
      }}
    >
      <Box sx={{ width: 720, height: 1150, overflowY: "hidden" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
    title: "Bed",
  },
  {
    img: "https://www.atriumhotelandsuites.com/gallery-images/properties/7/6/1/1680846167_guestroom-mob_2.jpg",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://sthotelsmalta.com/wp-content/uploads/2022/06/modern-luxury-bedroom-suite-and-bathroom-with-working-table-scaled.jpg",
    title: "Blinds",
  },
  {
    img: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    title: "Chairs",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg",
    title: "Laptop",
  },
  {
    img: "https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png",
    title: "Doors",
  },
  {
    img: "https://vforvanessahome.files.wordpress.com/2020/12/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg?w=1024",
    title: "Coffee",
  },
  {
    img: "https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg",
    title: "Storage",
  },
  {
    img: "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    title: "Coffee table",
  },
  {
    img: "https://hotelandra.com/wp-content/uploads/2022/01/Andra2483-Andra-Queen-Queen.jpg",
    title: "Coffee table",
  },
];
