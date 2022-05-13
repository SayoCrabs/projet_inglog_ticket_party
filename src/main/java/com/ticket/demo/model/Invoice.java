package com.ticket.demo.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table (name="T_INVOICE")
public class Invoice {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
	
	private Integer numberInvoice;
	
	private Date dateFacture;
	
	@ManyToOne
	@JoinColumn(name= "user_id", referencedColumnName = "id", foreignKey = @ForeignKey(name="fk_invoice_user"))
	private User client;
	
	@JsonManagedReference("invoice-invoiceItems")
	@OneToMany (cascade = CascadeType.ALL, mappedBy = "invoice", fetch = FetchType.EAGER)
	@Fetch(FetchMode.JOIN)
	private Set<InvoiceItem> invoiceItems = new HashSet<>();
	
	@JsonGetter("price")
	public double getPrice() {
		double price = 0;
		
		for (InvoiceItem invItem : invoiceItems) {
			price += invItem.getPrice();
		} 
		return price;
	}
	
	public Set<InvoiceItem> getInvoiceItems() {
		return invoiceItems;
	}


	public void setInvoiceItems(Set<InvoiceItem> invoiceItems) {
		this.invoiceItems = invoiceItems;
	}


	public Invoice() {
		super();
	}


	public Invoice(Integer numberInvoice, Date dateFacture) {
		this.numberInvoice = numberInvoice;
		this.dateFacture = dateFacture;
	}
	
	
	public Integer getNumberInvoice() {
		return numberInvoice;
	}


	public void setNumberInvoice(Integer numberInvoice) {
		this.numberInvoice = numberInvoice;
	}


	public Date getDateFacture() {
		return dateFacture;
	}

	public void setDateFacture(Date dateFacture) {
		this.dateFacture = dateFacture;
	}
	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public User getClient() {
		return client;
	}


	public void setClient(User client) {
		this.client = client;
	}



	

	
	

	





	/*
	public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append( "Facture de" ).append( this.customer )
               .append( " - " ).append( "\n" );
        return builder.toString();
    }
	*/
	
	
	
	/*
	public Date getInvoiceDate() {
		return invoiceDate;
	}

	public void setInvoiceDate(Date invoiceDate) {
		this.invoiceDate = invoiceDate;
	}
	/*
	/*
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
		*/
 
	
	
	
	
	

}
