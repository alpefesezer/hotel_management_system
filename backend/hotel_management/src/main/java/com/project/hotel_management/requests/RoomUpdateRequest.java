package com.project.hotel_management.requests;

import lombok.Data;

@Data
public class RoomUpdateRequest {


    String pictureUrl;
    double roomPrice;
    String description;
}
