package com.ticket.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name="T_USER")
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;

	protected String name;
	
	protected String firstname;
	
	protected String email ;
	
	protected String pasword;
	
	protected int age;
	
	protected String role;
	
	@OneToMany (mappedBy="customer")
	private List<Invoice> invoices = new ArrayList<>();

	public User() {}

	public User(String name, String firstname, String email, String pasword, int age) {
		
		this.name = name;
		this.firstname = firstname;
		this.email = email;
		this.pasword = pasword;
		this.age = age;
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

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasword() {
		return pasword;
	}

	public void setPasword(String pasword) {
		this.pasword = pasword;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	

	public String getRole() {
		return role;
	}

	public void setRôle(String role) {
		this.role = role;
	}

	public List<Invoice> getInvoices() {
		return invoices;
	}
	
	

	public void setId(Integer id) {
		this.id = id;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void setInvoices(List<Invoice> invoices) {
		this.invoices = invoices;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", firstname=" + firstname + ", email=" + email + ", pasword="
				+ pasword + ", age=" + age + ", rôle=" + role + "]";
	}

	
		
	

}
