package com.ticket.demo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ticket.demo.model.Visitor;

public interface VisitorRepository extends CrudRepository<Visitor, Integer> {

}
