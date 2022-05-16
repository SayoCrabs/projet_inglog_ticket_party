package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.Invoice;
import com.ticket.demo.model.Ticket;
import com.ticket.demo.services.InvoiceService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class InvoiceController {
	
	@Autowired
	InvoiceService invoiceService;
	
	@RequestMapping(value ="/invoices" , produces = "application/json")
    public List<Invoice> getInvoices() {
		return this.invoiceService.getInvoices();
	 }
	
	@RequestMapping(value ="/users/{userId}/invoices", method = RequestMethod.GET,  produces = "application/json")
    public List<Invoice> findInvoicesByUserId(@PathVariable Integer userId) {
		return this.invoiceService.findInvoicesByUserId(userId);
	}
	
	@RequestMapping(value ="/invoices", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateInvoice(@RequestBody Invoice invoice ){
		
		invoiceService.updateInvoice(invoice);
			return new ResponseEntity<>("Invoice is updated successsfully", HttpStatus.OK);
	}
	@RequestMapping(value = "/invoices/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public ResponseEntity<Object> delete(@PathVariable("id") Integer id) {

		invoiceService.deleteInvoice(id);
		return new ResponseEntity<>("Invoice is deleted successsfully", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/invoices", method = RequestMethod.POST, produces = "application/json")
	public Invoice createInvoice(@RequestBody Invoice invoice) {
		return invoiceService.createInvoice(invoice);
	}
	
	@RequestMapping(value = "/invoices/{id}", method = RequestMethod.GET, produces = "application/json")
	public Invoice getInvoice(@PathVariable("id") Integer id) {
		return invoiceService.findById(id).orElse(null);
	}
}
