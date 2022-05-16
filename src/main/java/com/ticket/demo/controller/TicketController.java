package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.Ticket;
import com.ticket.demo.services.TicketService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class TicketController {
	@Autowired
	TicketService ticketService;
	
	@GetMapping("/{id}/tickets")
	@RequestMapping(value = "/tickets", produces = "application/json")
	public List<Ticket> getTickets() {
		return this.ticketService.getTickets();
	}

	@RequestMapping(value = "/tickets/{id}", method = RequestMethod.PUT, produces = "application/json")
	public Ticket updateTicket(@PathVariable("id") String id, @RequestBody Ticket ticket) {

		return ticketService.updateTicket(id, ticket);
	}

	@RequestMapping(value = "/tickets/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public void delete(@PathVariable("id") String id) {

		ticketService.deleteTicket(Integer.parseInt(id));
	}
	
	@RequestMapping(value = "/ticketsByTitle", method = RequestMethod.POST, produces = "application/json")
	public List<Ticket> search(@RequestParam String title) {
		return ticketService.searchTicketByTitle(title);
	}

	@RequestMapping(value = "/tickets", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
		ticketService.createTicket(ticket);
		return new ResponseEntity<Ticket>(HttpStatus.CREATED);
	}

}
