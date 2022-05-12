package com.ticket.demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticket.demo.model.Invoice;
import com.ticket.demo.model.User;

public interface InvoiceRepository extends  JpaRepository<Invoice, Integer> {

	/* @Query("SELECT user FROM User user JOIN FETCH user.invoices WHERE user.id = :id")
	public User findByIdAndFetchInvoicesEagerly(@Param("id") Integer id);
	*/
}
