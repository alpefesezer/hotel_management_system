package com.project.hotel_management.requests;

import lombok.Data;

import java.util.Date;

@Data
public class RoomCreateRequest {

    int roomStorage;
    double roomPrice;
    String description;
    String pictureUrl;
}
