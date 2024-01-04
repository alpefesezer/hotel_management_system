package com.project.hotel_management.requests;

import lombok.Data;

import java.util.Date;

@Data
public class AppointmentCreateRequest {

    Date startDate;
    Date endDate;
    Long userId;
    Long roomId;
}
