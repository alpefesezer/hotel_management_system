import { Button } from "@mui/material";
import React from "react";

export default function AdminPage(){
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button>Edit Rooms</Button>
            <Button>Get Appointments</Button>
        </div>
    )
}