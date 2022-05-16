package com.ticket.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticket.demo.model.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {

	
}
