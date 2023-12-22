package com.project.hotel_management.controllers;

import com.project.hotel_management.entities.Appointment;
import com.project.hotel_management.requests.AppointmentCreateRequest;
import com.project.hotel_management.requests.AppointmentUpdateRequest;
import com.project.hotel_management.services.AppointmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService){
        this.appointmentService = appointmentService;
    }

    @GetMapping
    public List<Appointment> getAllAppointments(){
        return appointmentService.getAllAppointments();
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody AppointmentCreateRequest newAppointment){
        return appointmentService.createAppointment(newAppointment);
    }

    @GetMapping("/{appointmentId}")
    public Appointment getAppointment(@PathVariable Long appointmentId){
        return appointmentService.getAppointment(appointmentId);
    }

    @PutMapping("/{appointmentId}")
    public Appointment updateAppointment(@PathVariable Long appointmentId, @RequestBody AppointmentUpdateRequest updateAppointment){
        return appointmentService.updateAppointment(appointmentId, updateAppointment);
    }

    @DeleteMapping("/{appointmentId}")
    public void deleteAppointment(@PathVariable Long appointmentId){
        appointmentService.deleteAppointmentById(appointmentId);
    }
}
