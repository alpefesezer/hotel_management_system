package com.project.hotel_management.responses;

import lombok.Data;

@Data
public class AuthenticationResponse {
    String message;
    Long UserId;
    String name;
    String surname;
    String email;
    String phoneNumber;
}
