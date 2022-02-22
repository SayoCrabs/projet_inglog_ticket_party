package com.ticket.demo.services;

import java.util.List;

import com.ticket.demo.model.ProUser;

public interface ProUserService {

	List<ProUser> getProUsers();

	void updateProUser(int id, ProUser prouser);

	void deleteProUser(int id);

	void createProUser(ProUser prouser);

	

	
}
