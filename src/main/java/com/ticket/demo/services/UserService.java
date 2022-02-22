package com.ticket.demo.services;

import java.util.List;

import com.ticket.demo.model.User;

public interface UserService {

	void updateUser(int id, User user);

	void deleteUser(int id);

	void createUser(User user);

	List<User> getUsers();

}
