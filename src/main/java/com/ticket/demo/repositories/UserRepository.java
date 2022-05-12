package com.ticket.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticket.demo.model.User;

public interface UserRepository extends  JpaRepository<User, Integer> {

	//public Iterable<User> findByRole(String name);
}
