package com.project.hotel_management.controllers;

import com.project.hotel_management.entities.User;
import com.project.hotel_management.requests.UserRequest;
import com.project.hotel_management.requests.UserSignupRequest;
import com.project.hotel_management.responses.AuthenticationResponse;
import com.project.hotel_management.security.JwtTokenProvider;
import com.project.hotel_management.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {


    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;
    private UserService userService;
    private PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserService userService, PasswordEncoder passwordEncoder){
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody UserRequest loginRequest){
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(loginRequest.getUserName(),loginRequest.getPassword());
        Authentication auth = authenticationManager.authenticate(authToken);
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwtToken = jwtTokenProvider.generateJwtToken(auth);
        User user = userService.getUserByUserName(loginRequest.getUserName());
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setMessage("Bearer " + jwtToken);
        authenticationResponse.setUserId(user.getId());
        authenticationResponse.setName(user.getName());
        authenticationResponse.setSurname(user.getSurname());
        authenticationResponse.setEmail(user.getEmail());
        authenticationResponse.setPhoneNumber(user.getPhoneNumber());
        return authenticationResponse;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> signup(@RequestBody UserSignupRequest signupRequest){
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        if(userService.getUserByUserName(signupRequest.getUserName()) != null){
            authenticationResponse.setMessage("Username already in use. ");
            return new ResponseEntity<>(authenticationResponse, HttpStatus.BAD_REQUEST);
        }
        User user = new User();
        user.setUserName(signupRequest.getUserName());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setPhoneNumber(signupRequest.getPhoneNumber());
        user.setName(signupRequest.getName());
        user.setSurname(signupRequest.getSurname());
        user.setEmail(signupRequest.getEmail());
        userService.createUser(user);
        authenticationResponse.setMessage("User successfully registered. ");
        return new ResponseEntity<>(authenticationResponse, HttpStatus.CREATED);

    }
}
