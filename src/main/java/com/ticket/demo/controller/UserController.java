package com.ticket.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.Ticket;
import com.ticket.demo.model.User;
import com.ticket.demo.services.UserService;


@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {
	@Autowired
	UserService userService;

	@RequestMapping(value = "/users", produces = "application/json")
	public List<User> getUsers() {
		return this.userService.getUsers();
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET, produces = "application/json")
	public User getUser(@PathVariable("id") Integer id) {
		return userService.findById(id).orElse(null);
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.PUT, produces = "application/json")
	public User updateUser(@PathVariable("id") String id, @RequestBody User user) {

		return userService.updateUser(user);
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public void delete(@PathVariable("id") String id) {

		userService.deleteUser(Integer.parseInt(id));
	}

	@RequestMapping(value = "/users", method = RequestMethod.POST, produces = "application/json")
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
		
	}

}
