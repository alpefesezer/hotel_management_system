package com.project.hotel_management.services;

import com.project.hotel_management.entities.User;
import com.project.hotel_management.repos.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User newUser) {
        return userRepository.save(newUser);
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public User updateUser(Long userId, User newUser) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()) {
            User foundUser = user.get();
            foundUser.setUserName(newUser.getUserName());
            foundUser.setId(newUser.getId());
            foundUser.setSurname(newUser.getSurname());
            foundUser.setPassword(newUser.getPassword());
            foundUser.setName(newUser.getName());
            foundUser.setEmail(newUser.getEmail());
            foundUser.setPhoneNumber(newUser.getPhoneNumber());
            userRepository.save(newUser);
            return foundUser;
        }else
            return null;
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
