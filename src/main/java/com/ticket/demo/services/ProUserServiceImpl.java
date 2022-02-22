package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.ProUser;
import com.ticket.demo.repositories.ProUserRepository;
@Service
public class ProUserServiceImpl implements ProUserService{
	
	@Autowired
	ProUserRepository prouserRepository;

	@Override
	public List<ProUser> getProUsers() {
		return (List<ProUser>) prouserRepository.findAll();
		
		
	}

	
	@Override
	public void updateProUser(int id, ProUser prouser) {
		
	}

	@Override
	public void deleteProUser(int id) {
		
		Optional<ProUser> prouser = prouserRepository.findById(id);
		if (prouser.isPresent()) {
			prouserRepository.delete(prouser.get());
	}
		
		
	}

	@Override
	public void createProUser(ProUser prouser) {
	
		prouserRepository.save(prouser);
	} 
	
	
}
