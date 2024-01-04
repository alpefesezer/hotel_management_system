package com.project.hotel_management.repos;

import com.project.hotel_management.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{

    User findByUserName(String username);
}
