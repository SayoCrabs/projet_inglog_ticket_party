package com.ticket.demo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ticket.demo.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	public Iterable<User> findByRole(String name);
}
