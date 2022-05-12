package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.InvoiceItem;
import com.ticket.demo.services.InvoiceItemService;

@RestController
public class InvoiceItemController {

	@Autowired
	InvoiceItemService invoiceItemService;
	
	@RequestMapping(value ="/invoiitems" , produces = "application/json")
    public List<InvoiceItem> getInvoiceItem() {
		
		return this.invoiceItemService.getInvoiceItem();
	 }
	@RequestMapping(value ="/invoiitems",method = RequestMethod.PUT)
	public ResponseEntity<Object> updateInvoice(@RequestBody InvoiceItem invoiceItem ){
		
		invoiceItemService.updateInvoiceItem(invoiceItem);
			return new ResponseEntity<>("InvoiceItem is updated successsfully", HttpStatus.OK);
	}
	@RequestMapping(value = "/invoiitems/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> delete(@PathVariable("id") Integer id) {

		invoiceItemService.deleteInvoiceItem(id);
		return new ResponseEntity<>("InvoiceItem is deleted successsfully", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/invoiitems", method = RequestMethod.POST)
	public ResponseEntity<InvoiceItem> createInvoiceItem(@RequestBody InvoiceItem invoiceItem) {
		invoiceItemService.createInvoiceItem(invoiceItem);
		return new ResponseEntity<InvoiceItem>(HttpStatus.CREATED);
	}
	
}
