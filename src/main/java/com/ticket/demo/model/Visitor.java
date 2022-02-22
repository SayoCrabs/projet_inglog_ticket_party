package com.ticket.demo.model;

import javax.persistence.Entity;

@Entity
public class Visitor extends User {

	public Visitor() {
		super();
	}

	public Visitor(String name, String firstname, String email, String pasword, int age) {
		super(name, firstname, email, pasword, age);
	
	}
	
	

	
	
}
