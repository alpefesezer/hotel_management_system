import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Contact(props) {
  return (
    <div style={{ minHeight: "650px" }}>
      <Box style={{ padding: "8%", paddingTop: "4%", paddingBottom: "4%" }}>
        <div style={{ display: "flex" }}>
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
            YAPACAM İHTİYAR BİRAZ MOLA
          </Typography>
        </div>
      </Box>
    </div>
  );
}
