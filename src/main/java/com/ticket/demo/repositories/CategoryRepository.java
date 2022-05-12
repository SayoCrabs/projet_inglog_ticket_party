package com.ticket.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticket.demo.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

	
}
