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
            style={{ marginLeft: "5px", color: "#535353" }}
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
            style={{ marginLeft: "5px", color: "#535353" }}
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
            style={{ marginLeft: "5px", color: "#535353" }}
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
            style={{ marginLeft: "5px", color: "#535353" }}
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
            style={{ marginLeft: "5px", color: "#535353" }}
          >
            {localStorage.getItem("phoneNumber")}
          </Typography>
        </div>
      </Box>
    </div>
  );
}
