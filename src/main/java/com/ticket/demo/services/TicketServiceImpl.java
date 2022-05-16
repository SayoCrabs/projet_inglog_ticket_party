package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.Ticket;
import com.ticket.demo.repositories.TicketRepository;

@Service
@Transactional
public class TicketServiceImpl implements TicketService {
	
	@Autowired
	TicketRepository ticketRepository;

	@Override
	public List<Ticket> getTickets() {
		
		return (List<Ticket>) ticketRepository.findAll();
	}

	@Override
	public Ticket updateTicket(String id, Ticket ticket) {
	
		Optional<Ticket> upTicket = ticketRepository.findById(Integer.parseInt(id));
		if (upTicket.isPresent()) {
			return ticketRepository.save(ticket);
		}
		return null;
		
	}

	@Override
	public void deleteTicket(Integer id) {
		
		Optional<Ticket> ticket = ticketRepository.findById(id);
		if (ticket.isPresent()) {
			ticketRepository.delete(ticket.get());
		}
	}
	

	@Override
	public void createTicket(Ticket ticket) {
		
		ticketRepository.save(ticket);
	}

	@Override
	public List<Ticket> searchTicketByTitle(String title) {
		return ticketRepository.findByTitle(title);
	}

	

}
