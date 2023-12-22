package com.project.hotel_management.requests;

import lombok.Data;

@Data
public class RoomUpdateRequest {

    boolean isRoomFree;
    double roomPrice;
}
