package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.User;
import com.ticket.demo.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;
	
   public List<User> getUsers() {
		
		return (List<User>) userRepository.findAll();
	}
	@Override
	public void updateUser(int id, User user) {
		
	}
	
	@Override
	public void deleteUser(int id) {
		Optional<User> user = userRepository.findById(id);
		if (user.isPresent()) {
			userRepository.delete(user.get());
	}
		
	}

	@Override
	public void createUser(User user) {
		
		userRepository.save(user);
	}

}
