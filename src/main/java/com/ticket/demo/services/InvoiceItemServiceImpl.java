package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.InvoiceItem;
import com.ticket.demo.repositories.InvoiceItemRepository;
@Service
public class InvoiceItemServiceImpl implements InvoiceItemService {
	
	@Autowired
	InvoiceItemRepository invoiceItemRepository;
	
	@Override
	public List<InvoiceItem> getInvoiceItem() {
		
		return (List<InvoiceItem>) invoiceItemRepository.findAll();
	}

	@Override
	public void updateInvoiceItem(InvoiceItem invoiceItem) {
		
		invoiceItemRepository.save(invoiceItem);
	}

	@Override
	public void deleteInvoiceItem(Integer id) {
		Optional<InvoiceItem> invoiceItem = invoiceItemRepository.findById(id);
		if (invoiceItem.isPresent()) {
			invoiceItemRepository.delete(invoiceItem.get());
		}		
	}

	@Override
	public void createInvoiceItem(InvoiceItem invoiceItem) {
		invoiceItemRepository.save(invoiceItem);
		
	}

}
