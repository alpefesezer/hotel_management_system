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
        return <div>Error!!</div>
    }else if(!isLoaded){
        return <CircularProgress color="secondary"/>
    }else {
        return(
            <div className="container" style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", width: '90%', marginLeft: '5%', marginTop: '4%', flexDirection: "row", columnGap:'6%', rowGap: '70px'}}>
                {roomList.map(room => (
                    <Room roomStorage = {room.roomStorage} roomPrice={room.roomPrice} roomId={room.id} roomPicture={room.pictureUrl} roomDescription={room.description}></Room>
                ))}
            </div>
        ); 
    }
}

export default Home;