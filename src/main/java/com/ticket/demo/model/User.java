package com.ticket.demo.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ticket.demo.enumerations.SexeEnum;
 
@Entity
@Table (name="T_USER")
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;
	
	private String name;
	
	private String firstname;
	
	private String email ;
	
	private String pasword;
	
	private Integer age;
	
	private Date dateOfbirth;
	
	private String address;
	
	@Enumerated(EnumType.STRING)
	private SexeEnum sexe;
	
	@OneToMany(mappedBy = "client")
	private Set<Invoice> invoices = new HashSet<>();
	
	@JsonManagedReference("user-roles")
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER , cascade = CascadeType.ALL)
	private Set<UserRole> roles = new HashSet<>();
	
	public SexeEnum getSexe() {
		return sexe;
	}

	public void setSexe(SexeEnum sexe) {
		this.sexe = sexe;
	}

	public Set<UserRole> getRoles() {
		return roles;
	}

	public void setRoles(Set<UserRole> roles) {
		this.roles = roles;
	}

	public User() 
	{
		
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

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}
	



	public void setId(Integer id) {
		this.id = id;
	}

	
	
	public Date getDateOfbirth() {
		return dateOfbirth;
	}

	public void setDateOfbirth(Date dateOfbirth) {
		this.dateOfbirth = dateOfbirth;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Set<Invoice> getInvoices() {
		return invoices;
	}

	public void setInvoices(Set<Invoice> invoices) {
		this.invoices = invoices;
	}

	/*public void addRoles(UserRole... userRole) {
		for (int i = 0; i < userRole.length; i++) {
			this.roles.add(userRole[i]);
			userRole[i].setUser(this);
		}
		
	}*/
}
