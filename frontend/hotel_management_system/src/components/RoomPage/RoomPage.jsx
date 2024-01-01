import React from 'react';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
  const { roomId } = useParams();
  return (
    <div>
      <h2>{roomId}</h2>
    </div>
  );
};

export default RoomPage;
