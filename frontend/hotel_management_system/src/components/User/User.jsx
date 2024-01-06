import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function User(props) {
  return (
    <div style={{ minHeight: "650px" }}>
      <Box style={{ padding: "8%", paddingTop: "4%", paddingBottom: "4%" }}>
        <div style={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#FFF",
              fontSize: "30px",
              textShadow: "1.5px 1.5px 1.5px #000",
              textAlign: "justify",
              marginTop: "10px",
              marginRight: "20px",
            }}
          >
            Username:
          </Typography>
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
            {localStorage.getItem("userName")}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#FFF",
              fontSize: "30px",
              textShadow: "1.5px 1.5px 1.5px #000",
              textAlign: "justify",
              marginTop: "10px",
              marginRight: "20px",
            }}
          >
            Name:
          </Typography>
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
            {localStorage.getItem("name")}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#FFF",
              fontSize: "30px",
              textShadow: "1.5px 1.5px 1.5px #000",
              textAlign: "justify",
              marginTop: "10px",
              marginRight: "20px",
            }}
          >
            Surname:
          </Typography>
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
            {localStorage.getItem("surname")}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#FFF",
              fontSize: "30px",
              textShadow: "1.5px 1.5px 1.5px #000",
              textAlign: "justify",
              marginTop: "10px",
              marginRight: "20px",
            }}
          >
            Email Adress:
          </Typography>
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
            {localStorage.getItem("email")}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#FFF",
              fontSize: "30px",
              textShadow: "1.5px 1.5px 1.5px #000",
              textAlign: "justify",
              marginTop: "10px",
              marginRight: "20px",
            }}
          >
            Phone Number:
          </Typography>
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
            {localStorage.getItem("phoneNumber")}
          </Typography>
        </div>
      </Box>
    </div>
  );
}
