package com.ticket.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticket.demo.model.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {

}
