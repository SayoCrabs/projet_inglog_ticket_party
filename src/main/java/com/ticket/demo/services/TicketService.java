package com.ticket.demo.services;

import java.util.List;

import com.ticket.demo.model.Ticket;

public interface TicketService {

	List<Ticket> getTickets();

	void updateTicket(Integer id, Ticket ticket);

	void deleteTicket(Integer id);

	void createTicket(Ticket ticket);

}
