import React from "react"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { createTheme } from "@mui/material";
import "../cssFiles/searchbar.css"


export default function Searhbar(){

    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000',
            },
        },
    });

return <div>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 5,
        },
      }}
    >
<ButtonGroup theme={theme} variant="text" aria-label="text button group">
  <Button className= "button" sx={{color: "black"}}>Check in</Button>
  <Button className= "button" sx={{color: "black"}}>Check Out</Button>
  <Button className= "button" sx={{color: "black"}}>Guests</Button>
</ButtonGroup>
</Box>
</div>
}