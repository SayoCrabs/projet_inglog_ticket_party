package com.ticket.demo.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name="T_INVOICE")
public class Invoice {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
	
	private Date invoiceDate;
	
	@ManyToOne 
	@JoinColumn(name="customer_id", nullable=false)
	private User customer;
	
	@OneToMany(mappedBy = "invoice")
	private Set<InvoiceItem> items = new HashSet<>();

	public Invoice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Invoice(Ticket ticket, Date invoiceDate) {
		super();
		this.invoiceDate = invoiceDate;
	}


	public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append( "Facture de" ).append( this.customer )
               .append( " - " ).append( "\n" );
        return builder.toString();
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getInvoiceDate() {
		return invoiceDate;
	}

	public void setInvoiceDate(Date invoiceDate) {
		this.invoiceDate = invoiceDate;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	public Set<InvoiceItem> getItems() {
		return items;
	}

	public void setItems(Set<InvoiceItem> items) {
		this.items = items;
	}   
	
	
	
	
	

}
