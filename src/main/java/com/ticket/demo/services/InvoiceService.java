package com.ticket.demo.services;

import java.util.List;

import com.ticket.demo.model.Invoice;

public interface InvoiceService {

	List<Invoice> getInvoices();

	void updateInvoice(Invoice invoice);

	void deleteInvoice(Integer id);

	void createInvoice(Invoice invoice);

}