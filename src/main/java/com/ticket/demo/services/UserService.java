package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import com.ticket.demo.model.User;

public interface UserService {

	User updateUser(User user);

	void deleteUser(int id);

	User createUser(User user);

	List<User> getUsers();

	Optional<User> findById(Integer id);

	User getAuthenticateUser(String email, String password);

}
