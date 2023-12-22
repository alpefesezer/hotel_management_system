package com.project.hotel_management.controllers;

import com.project.hotel_management.entities.Room;
import com.project.hotel_management.requests.RoomCreateRequest;
import com.project.hotel_management.requests.RoomUpdateRequest;
import com.project.hotel_management.services.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/rooms")
public class RoomController {

    RoomService roomService;

    public RoomController(RoomService roomService){
        this.roomService = roomService;
    }

    @GetMapping
    public List<Room> getAllRooms(@RequestParam Optional<Long> userId){
        return roomService.getAllRooms();
    }

    @GetMapping("/{roomId}")
    public Room getRoom(@PathVariable Long roomId){
        return roomService.getRoomById(roomId);
    }

    @PostMapping
    public Room createRoom(@RequestBody RoomCreateRequest newRoomRequest){
        return roomService.createRoom(newRoomRequest);
    }

    @PutMapping("/{roomId}")
    public Room updateRoomSituation(@PathVariable Long roomId, @RequestBody RoomUpdateRequest updateRoom){
        return roomService.updateRoomSituation(roomId, updateRoom);
    }

    @DeleteMapping("/{roomId}")
    public void deleteRoom(@PathVariable Long roomId){
        roomService.deleteRoom(roomId);
    }
}

