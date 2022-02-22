package com.ticket.demo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table (name="T_TICKET")
public class Ticket {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

	private String title;
	
	private String entreprise; 
	
	private Date startDate;
	
	private Date endDate;
	
	private String position; 
	
	private double price;
	
	private int quantite;
	
	public Ticket() {
		super();
	
	}

	public Ticket(String title, String entreprise, Date startDate, Date endDate, String position, double price,
			int quantite) {
		
		this.title = title;
		this.entreprise = entreprise;
		this.startDate = startDate;
		this.endDate = endDate;
		this.position = position;
		this.price = price;
		this.quantite = quantite;
		
	}

	public Integer getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getEntreprise() {
		return entreprise;
	}

	public void setEntreprise(String entreprise) {
		this.entreprise = entreprise;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}

		
	
	
	
	
	
	
	

}
