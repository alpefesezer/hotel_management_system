package com.project.hotel_management.repos;

import com.project.hotel_management.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long>{
}
