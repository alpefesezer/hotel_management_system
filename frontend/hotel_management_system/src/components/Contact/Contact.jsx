import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Contact(props) {
  return (
    <div style={{ minHeight: "650px" }}>
      <Box style={{ padding: "8%", paddingTop: "4%", paddingBottom: "4%" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#FFF",
              fontSize: "90px",
              textShadow: "1.5px 1.5px 1.5px #000",
              textAlign: "justify",
              marginTop: "10px",
            }}
          >
            Contact
            <div style={{ display: "flex" }}>
              <div>
                <Typography
                  sx={{
                    fontWeight: "100",
                    color: "#FFF",
                    fontSize: "30px",
                    textShadow: "1.5px 1.5px 1.5px #000",
                    textAlign: "justify",
                    marginTop: "10px",
                    marginRight: "120px",
                  }}
                >
                  alpefesezer@info.com
                  <br />
                  +90 542 222 22 22
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{
                    fontWeight: "100",
                    color: "#FFF",
                    fontSize: "30px",
                    textShadow: "1.5px 1.5px 1.5px #000",
                    textAlign: "justify",
                    marginTop: "10px",
                  }}
                >
                  furkanfarsak@info.com
                  <br />
                  +90 542 111 11 11
                </Typography>
              </div>
            </div>
            <Typography
              sx={{
                fontWeight: "100",
                color: "#FFF",
                fontSize: "30px",
                textShadow: "1.5px 1.5px 1.5px #000",
                textAlign: "justify",
                marginTop: "40px",
                marginRight: "20px",
              }}
            >
              Adress: Küçük Ayasofya Mahallesi, Katip Sinan Cami Sk. No:30,
              34122 Fatih/İstanbul
              <br />
              <br />
              Info Number: 444 1 444
            </Typography>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
