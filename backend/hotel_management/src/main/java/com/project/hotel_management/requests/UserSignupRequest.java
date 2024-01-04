package com.project.hotel_management.requests;

import lombok.Data;

@Data
public class UserSignupRequest {

    String userName;
    String password;
    String name;
    String surname;
    String email;
    String phoneNumber;
}
