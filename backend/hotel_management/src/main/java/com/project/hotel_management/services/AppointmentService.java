package com.project.hotel_management.services;

import com.project.hotel_management.entities.Appointment;
import com.project.hotel_management.entities.Room;
import com.project.hotel_management.entities.User;
import com.project.hotel_management.repos.AppointmentRepository;
import com.project.hotel_management.requests.AppointmentCreateRequest;
import com.project.hotel_management.requests.AppointmentUpdateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {
    
    private AppointmentRepository appointmentRepository;
    private UserService userService;
    private RoomService roomService;
    
    public AppointmentService(AppointmentRepository appointmentRepository, UserService userService, RoomService roomService){
        this.appointmentRepository = appointmentRepository;
        this.userService = userService;
        this.roomService = roomService;
    }

    public Appointment createAppointment(AppointmentCreateRequest newAppointmentRequest) {
        User user = userService.getUser(newAppointmentRequest.getUserId());
        Room room = roomService.getRoomById(newAppointmentRequest.getRoomId());
        if(user == null && room == null)
            return null;
        Appointment toSave = new Appointment();
        toSave.setId(newAppointmentRequest.getId());
        toSave.setStartDate(newAppointmentRequest.getStartDate());
        toSave.setEndDate(newAppointmentRequest.getEndDate());
        toSave.setUser(user);
        toSave.setRoom(room);
        return appointmentRepository.save(toSave);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Appointment getAppointment(Long appointmentId) {
        return appointmentRepository.findById(appointmentId).orElse(null);
    }


    public Appointment updateAppointment(Long appointmentId, AppointmentUpdateRequest updateAppointment) {
        Optional<Appointment> appointment = appointmentRepository.findById(appointmentId);
        if(appointment.isPresent()){
            Appointment toUpdate = appointment.get();
            toUpdate.setStartDate(updateAppointment.getStartDate());
            toUpdate.setEndDate(updateAppointment.getEndDate());
            appointmentRepository.save(toUpdate);
            return toUpdate;
        }
        return null;
    }

    public void deleteAppointmentById(Long appointmentId) {
        appointmentRepository.deleteById(appointmentId);
    }
}
