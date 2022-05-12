package com.ticket.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.ticket.demo.enumerations.RoleEnum;

@Entity
@Table (name="T_USER_ROLE")
public class UserRole {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;
	
	@Enumerated(EnumType.STRING)
	private RoleEnum role;
	
	@ManyToOne //(cascade = CascadeType.ALL) 
	@JoinColumn(name= "user_id", referencedColumnName = "id", foreignKey = @ForeignKey(name="fk_userrole_user"))
	private User user;
	
	@ManyToOne 
	@JoinColumn(name= "company_id", referencedColumnName = "id", foreignKey = @ForeignKey(name="fk_userrole_company"))
	private Company company;
	
	public UserRole() {
		
	}

	public UserRole(RoleEnum role, Company company) {
		this.company = company;
		this.role = role;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public RoleEnum getRole() {
		return role;
	}

	public void setRole(RoleEnum role) {
		this.role = role;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
	

	
	
	

}
