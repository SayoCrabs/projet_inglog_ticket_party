package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.Category;
import com.ticket.demo.repositories.CategoryRepository;

@Transactional
@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;
	@Override
	public List<Category> getCategorys() {
		return (List<Category>) categoryRepository.findAll();
	}

	@Override
	public void updateCategory(Category category) {
		categoryRepository.save(category);
		
	}

	@Override
	public void deleteCategory(Integer id) {
	
		Optional<Category> category = categoryRepository.findById(id);
		if (category.isPresent()) {
			categoryRepository.delete(category.get());
		}
		
	}

	@Override
	public void createCategory(Category category) {
		categoryRepository.save(category);		
	}

	@Override
	public Optional<Category> findById(Integer id) {
		return categoryRepository.findById(id);
	}

}
