package com.ticket.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticket.demo.model.User;

public interface UserRepository extends  JpaRepository<User, Integer> {

	//public Iterable<User> findByRole(String name);
	
	 @Query("SELECT u FROM User u WHERE u.email = :email")
	 public User getUserByEmail(@Param("email") String email);
}
