package com.ticket.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="T_Societe")
public class ProUser {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
    private Integer id;

	private String name;
	
	private String email;
	
	private String password;
	
	private String type;

	public ProUser() {
		super();
	}

	public ProUser(String name, String email, String password, String type) {
	
		this.name = name;
		this.email = email;
		this.password = password;
		this.type = type;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
	
	
}
