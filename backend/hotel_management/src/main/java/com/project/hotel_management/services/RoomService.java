package com.project.hotel_management.services;

import com.project.hotel_management.entities.Room;
import com.project.hotel_management.entities.User;
import com.project.hotel_management.repos.RoomRepository;
import com.project.hotel_management.requests.RoomCreateRequest;
import com.project.hotel_management.requests.RoomUpdateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    private RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository){
        this.roomRepository = roomRepository;
    }

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room getRoomById(Long roomId) {
        return roomRepository.findById(roomId).orElse(null);
    }

    public Room createRoom(RoomCreateRequest newRoomRequest) {
        Room toSave = new Room();
        toSave.setId(newRoomRequest.getId());
        toSave.setRoomFree(newRoomRequest.isRoomFree());
        toSave.setRoomStorage(newRoomRequest.getRoomStorage());
        toSave.setRoomPrice(newRoomRequest.getRoomPrice());
        toSave.setDescription(newRoomRequest.getDescription());
        toSave.setPictureUrl(newRoomRequest.getPictureUrl());
        return roomRepository.save(toSave);
    }

    public Room updateRoomSituation(Long roomId, RoomUpdateRequest updateRoom) {
        Optional<Room> room = roomRepository.findById(roomId);
        if(room.isPresent()){
            Room toUpdate = new Room();
            toUpdate.setRoomFree(updateRoom.isRoomFree());
            toUpdate.setRoomPrice(updateRoom.getRoomPrice());
            toUpdate.setPictureUrl(updateRoom.getPictureUrl());
            toUpdate.setDescription(updateRoom.getDescription());
            roomRepository.save(toUpdate);
            return toUpdate;
        }
        return null;
    }

    public void deleteRoom(Long roomId) {
        roomRepository.deleteById(roomId);
    }
}
