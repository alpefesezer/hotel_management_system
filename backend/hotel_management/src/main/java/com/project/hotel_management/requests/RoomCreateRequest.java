package com.project.hotel_management.requests;

import lombok.Data;

import java.util.Date;

@Data
public class RoomCreateRequest {
    Long id;
    int roomStorage;
    boolean isRoomFree;
    double roomPrice;
    String description;
    String pictureUrl;
}
