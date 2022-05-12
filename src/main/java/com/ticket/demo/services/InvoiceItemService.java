package com.ticket.demo.services;

import java.util.List;

import com.ticket.demo.model.InvoiceItem;

public interface InvoiceItemService {

	List<InvoiceItem> getInvoiceItem();

	void updateInvoiceItem(InvoiceItem invoiceItem);

	void deleteInvoiceItem(Integer id);

	void createInvoiceItem(InvoiceItem invoiceItem);

}
