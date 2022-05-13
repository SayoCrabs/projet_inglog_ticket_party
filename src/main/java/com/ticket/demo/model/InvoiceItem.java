package com.ticket.demo.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table (name="T_invoice_Item")
public class InvoiceItem {

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Integer id;
	
	private Integer quantity;
	
	@JsonBackReference("invoice-invoiceItems")
	@ManyToOne //(cascade = CascadeType.ALL)
	@JoinColumn(name="invoice_id", referencedColumnName = "id", foreignKey = @ForeignKey(name="fk_invoiceItem_invoice"))
	private Invoice invoice;
	
	
	@ManyToOne (fetch = FetchType.EAGER)
	@JoinColumn(name="ticket_id", referencedColumnName = "id", foreignKey = @ForeignKey(name="fk_invoiceItem_ticket"))
	private Ticket ticket;
	

	public Integer getQuantity() {
		return quantity;
	}


	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Invoice getInvoice() {
		return invoice;
	}


	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}


	public Ticket getTicket() {
		return ticket;
	}


	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}
	
	
	
	
}
