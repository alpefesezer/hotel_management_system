package com.project.hotel_management.requests;

import lombok.Data;

import java.util.Date;

@Data
public class AppointmentUpdateRequest {

    Date startDate;
    Date endDate;

}
