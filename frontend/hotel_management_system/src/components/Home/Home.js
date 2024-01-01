import React, {useEffect, useState} from "react";
import Room from "../Room/Room";
import CircularProgress from '@mui/material/CircularProgress';

function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        fetch("/rooms")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setRoomList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error){
        return <div className="container" style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", width: '90%', marginLeft: '5%', marginTop: '4%', flexDirection: "row", columnGap:'6%', rowGap: '70px'}}>
            <Room roomStorage = {10} roomPrice={5000} roomId={0} roomPicture={"pictureUrl"} roomDescription={"asd"}></Room>
            <Room roomStorage = {10} roomPrice={5000} roomId={1} roomPicture={"pictureUrl"} roomDescription={"asd"}></Room>
            <Room roomStorage = {10} roomPrice={5000} roomId={2} roomPicture={"pictureUrl"} roomDescription={"asd"}></Room>
            <Room roomStorage = {10} roomPrice={5000} roomId={3} roomPicture={"pictureUrl"} roomDescription={"asd"}></Room>
            <Room roomStorage = {10} roomPrice={5000} roomId={4} roomPicture={"pictureUrl"} roomDescription={"asd"}></Room>
            <Room roomStorage = {10} roomPrice={5000} roomId={5} roomPicture={"pictureUrl"} roomDescription={"asd"}></Room>


        </div>
        
    }else if(!isLoaded){
        return <CircularProgress color="secondary"/>
    }else {
        return(
            <div className="container" style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", width: '90%', marginLeft: '5%', marginTop: '4%', flexDirection: "row", columnGap:'6%', rowGap: '70px'}}>
                {roomList.map(room => (
                    <Room roomStorage = {room.roomStorage} roomPrice={room.roomPrice} roomId={room.id} roomPicture={room.pictureUrl} roomDescription={room.description}></Room>
                ))}
                <Room roomStorage = {10} roomPrice={5000} roomId={0} roomPicture={"pictureUrl"} roomDescription={"asd"}></Room>
            </div>
        ); 
    }
}

export default Home;