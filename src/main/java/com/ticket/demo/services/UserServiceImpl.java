package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.User;
import com.ticket.demo.repositories.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;
	
   public List<User> getUsers() {
		
		return (List<User>) userRepository.findAll();
	}
	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public void deleteUser(int id) {
		Optional<User> user = userRepository.findById(id);
		if (user.isPresent()) {
			userRepository.delete(user.get());
	}
		
	}

	@Override
	public User createUser(User user) {
		
		return userRepository.save(user);
	}
	
	@Override
	public Optional<User> findById(Integer id) {
		
		return userRepository.findById(id);
	}
	
	@Override
	public User getAuthenticateUser(String email, String password) {
		User user = userRepository.getUserByEmail(email);
		if (user!=null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}

}
