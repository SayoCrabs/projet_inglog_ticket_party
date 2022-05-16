package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import com.ticket.demo.model.Category;

public interface CategoryService {

	List<Category> getCategorys();

	void updateCategory(Category category);

	void deleteCategory(Integer id);

	void createCategory(Category category);

	Optional<Category> findById(Integer id);

}
