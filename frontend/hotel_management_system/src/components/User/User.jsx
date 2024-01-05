import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function User(props) {
  return (
    <div style={{padding:"15px"}}>
      <Card style={{padding:"15px"}}>
      <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 800, fontSize:30 }}>Username:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>User's Username</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 800, fontSize:30 }}>Password:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>User's Password / değiştirilebilir yaparsan iyi olur</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 800, fontSize:30 }}>Name:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>User's Name</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600 , fontSize:30}}>Surname:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>User's Surname</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600 , fontSize:30}}>Age:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>User's Age</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600 , fontSize:30}}>Email Adress:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>User's Email Adress</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600, fontSize:30}}>Phone Number:</Typography>
          <Typography sx={{fontWeight: 100,fontSize:30}} style={{marginLeft:"5px", color:"#535353"}}>User's Phone Number</Typography>
        </div>
      </Card>
    </div>
  );
}
