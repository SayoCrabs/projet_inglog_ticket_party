package com.ticket.demo.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ticket.demo.model.Invoice;

public interface InvoiceRepository extends  JpaRepository<Invoice, Integer> {

	@Query("SELECT DISTINCT inv FROM Invoice inv  JOIN FETCH inv.client JOIN FETCH inv.invoiceItems invItem JOIN FETCH invItem.ticket WHERE inv.client.id = :userId")
	List<Invoice> findByUserId(Integer userId);

	
}
