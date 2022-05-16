package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.Invoice;
import com.ticket.demo.repositories.InvoiceRepository;

@Service
@Transactional
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
	public Invoice createInvoice(Invoice invoice) {
		return invoiceRepository.save(invoice);
		
	}
	
	@Override
	public List<Invoice> findInvoicesByUserId(Integer userId) {
		
		return invoiceRepository.findByUserId(userId);
	}
	@Override
	public Optional<Invoice> findById(Integer id) {
		return invoiceRepository.findById(id);
	}
	

}
