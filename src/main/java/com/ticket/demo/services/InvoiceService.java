package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import com.ticket.demo.model.Invoice;

public interface InvoiceService {

	List<Invoice> getInvoices();

	void updateInvoice(Invoice invoice);

	void deleteInvoice(Integer id);

	void createInvoice(Invoice invoice);

	List<Invoice> findInvoicesByUserId(Integer userId);

	Optional<Invoice> findById(Integer id);

}
