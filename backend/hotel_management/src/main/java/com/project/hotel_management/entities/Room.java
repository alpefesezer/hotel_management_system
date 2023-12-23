package com.project.hotel_management.entities;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "room")
@Data
public class Room {
    @Id
    Long id;

    int roomStorage;
    boolean isRoomFree;
    double roomPrice;
    String pictureUrl;
    String description;

}

