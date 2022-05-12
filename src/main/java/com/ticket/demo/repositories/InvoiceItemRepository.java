package com.ticket.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticket.demo.model.InvoiceItem;

public interface InvoiceItemRepository extends JpaRepository<InvoiceItem, Integer> {

}
