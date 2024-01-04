import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

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

const RoomPage = () => {
  const { roomId } = useParams();
  const [selectedImage, setSelectedImage] = useState(1);

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);
  };
  //IMAGE HEIGHTLERI FIXED Bİ VALUE OLSUN ONLARI SEÇERKEN DİKKAT ET SONRA BURAYA MAPLERSİN ATTIĞIN İSTEKTEN
  const imageUrls = [
    "/hotel1.png",
    "https://i.imgur.com/mHN46yD.png",
    "https://www.asortie.com/uploads/en_urun_resimleri/Sapore_otel_odas%C4%B1_mobilyas%C4%B1.JPG",
    "https://furnicdn.fra1.digitaloceanspaces.com/mobilya/saricammobilya/product/3981/b/otelicodadekorasyonu.jpg",
  ];

  return (
    <div style={{ margin: "10px" }}>
      <Typography variant="h4" component="h4">
        Hotel Room for "storage of roomid:{roomId}" People
      </Typography>
      <div style={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 2,
            marginRight: 2, // Add margin-right for spacing between the Box and the second div
          }}
        >
          <img
            src={imageUrls[selectedImage - 1]}
            style={{ width: "700px", height: "485px", objectFit: "cover" }}
            alt={`Selected Image ${selectedImage}`}
          />
        </Box>
        <div style={{ marginTop: "10px", marginLeft: "30px" }}>
          <Card style={{marginTop: "5px",padding:"10px"}}>
          <Typography>
            Description:
            <Typography>
              An Grand Hotel, Ankara’nın en merkezi yerinde, tüm turistik
              yerlere yakın mesafede bulunup, geniş ve ferah odalarıyla siz
              değerli misafirlerimize en iyi ve en kaliteli hizmeti sunmayı
              amaçlamaktadır.
              <br />
              <br />
              Covid-19 Pandemi sürecinde bütün önlemlerimizi ve TSE Güvenli
              Turizm Sertifikası'nı alarak hizmetimize en güvenilir oteller
              arasında devam etmekteyiz. Otelimiz genel olarak, düzenli bir
              şekilde uzman ekiplerce ilaçlanmaktadır.
              <br />
              <br />
              Hamam, sauna, tuz odası, açık büfe kahvaltı hizmetlerimiz ve
              misafir memnuniyeti odaklı çalışmalarımız sizlere kendinizi
              evinizde hissettirecektir. Misafirlerimizin günlük streslerden
              uzaklaşmaları ve rahatlamaları için hamam ve sauna hizmetlerimizi
              kaliteli ve hijyen koşullarına uyarak gerçekleştiriyoruz. Tuzun
              iyileştirici gücünün kullanıldığı himalaya tuz odalarımız ile
              misafirlerimizin sağlıkları için keyifli ve rahat anlar
              geçirmelerini sağlıyoruz.
            </Typography>
          </Typography>
          </Card>
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
                    alt={`Image ${index + 1}`}
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
