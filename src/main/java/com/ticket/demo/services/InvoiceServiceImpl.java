package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.Invoice;
import com.ticket.demo.repositories.InvoiceRepository;
@Service
public class InvoiceServiceImpl implements InvoiceService{
	
	@Autowired
	InvoiceRepository invoiceRepository;
	@Override
	public List<Invoice> getInvoices() {
		
		return (List<Invoice>) invoiceRepository.findAll();
	}
	@Override
	public void updateInvoice(Invoice invoice) {
		invoiceRepository.save(invoice);
	}
	@Override
	public void deleteInvoice(Integer id) {
	
		Optional<Invoice> invoice = invoiceRepository.findById(id);
		if (invoice.isPresent()) {
			invoiceRepository.delete(invoice.get());
		}
		
	}
	@Override
	public void createInvoice(Invoice invoice) {
		invoiceRepository.save(invoice);
		
	}
	

}