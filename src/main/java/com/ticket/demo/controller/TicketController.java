package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.Ticket;
import com.ticket.demo.services.TicketService;

@RestController
public class TicketController {
	@Autowired
	TicketService ticketService;

	@RequestMapping(value = "/tickets", produces = "application/json")
	public List<Ticket> getTickets() {
		return this.ticketService.getTickets();
	}

	@RequestMapping(value = "/tickets", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateTicket(@RequestBody Ticket ticket) {

		ticketService.updateTicket(ticket);
		return new ResponseEntity<>("Ticket is updated successsfully", HttpStatus.OK);
	}

	@RequestMapping(value = "/tickets/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> delete(@PathVariable("id") String id) {

		ticketService.deleteTicket(Integer.parseInt(id));
		return new ResponseEntity<>("Ticket is deleted successsfully", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/ticketsByTitle", method = RequestMethod.POST, produces = "application/json")
	public List<Ticket> search(@RequestParam String title) {
		return ticketService.searchTicketByTitle(title);
	}

	@RequestMapping(value = "/tickets", method = RequestMethod.POST)
	public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
		ticketService.createTicket(ticket);
		return new ResponseEntity<Ticket>(HttpStatus.CREATED);
	}

}
