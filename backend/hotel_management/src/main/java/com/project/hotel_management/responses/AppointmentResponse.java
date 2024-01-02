package com.project.hotel_management.responses;

import com.project.hotel_management.entities.Appointment;
import lombok.Data;

import java.util.Date;

@Data
public class AppointmentResponse {

    Long id;
    Long userId;
    Long roomId;
    Date startDate;
    Date endDate;

    public AppointmentResponse(Appointment entity){
        this.id = entity.getId();
        this.userId = entity.getUser().getId();
        this.roomId = entity.getRoom().getId();
        this.startDate = entity.getStartDate();
        this.endDate = entity.getEndDate();
    }
}
