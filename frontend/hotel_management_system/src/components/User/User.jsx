import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function User(props) {
  return (
    <div style={{padding:"15px"}}>
      <Card style={{padding:"15px"}}>
      <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 800, fontSize:30 }}>Username:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>{localStorage.getItem("userName")}</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 800, fontSize:30 }}>Name:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>{localStorage.getItem("name")}</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600 , fontSize:30}}>Surname:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>{localStorage.getItem("surname")}</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600 , fontSize:30}}>Email Adress:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>{localStorage.getItem("email")}</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600, fontSize:30}}>Phone Number:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>{localStorage.getItem("phoneNumber")}</Typography>
        </div>
      </Card>
    </div>
  );
}
