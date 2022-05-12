package com.ticket.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticket.demo.model.Ticket;
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

	public List<Ticket> findByTitle(String title);
}
