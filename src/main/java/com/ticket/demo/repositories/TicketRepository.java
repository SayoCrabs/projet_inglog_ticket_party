package com.ticket.demo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ticket.demo.model.Ticket;
public interface TicketRepository extends CrudRepository<Ticket, Integer> {

}
