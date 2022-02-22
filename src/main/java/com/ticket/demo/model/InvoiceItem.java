package com.ticket.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table (name="T_INVOICE_ITEM")
public class InvoiceItem {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
	
	private Integer quantity;
	
	@ManyToOne
	@JoinColumn(name = "invoice_id")
	private Invoice invoice;
	
	@ManyToOne
	@JoinColumn(name = "ticket_id")
	private Ticket ticket;
	
	public InvoiceItem() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String toString() {
        StringBuilder builder = new StringBuilder();
        
        return builder.toString();
    }


	public void setId(Integer id) {
		this.id = id;
	}


	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}


	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}


	public Invoice getInvoice() {
		return invoice;
	}


	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}


	public Integer getId() {
		return id;
	}


	public Integer getQuantity() {
		return quantity;
	}


	public Ticket getTicket() {
		return ticket;
	}   
	
	
	
	
	

}
