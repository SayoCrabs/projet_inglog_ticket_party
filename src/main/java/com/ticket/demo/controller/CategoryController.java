package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ticket.demo.model.Category;
import com.ticket.demo.services.CategoryService;

@Controller
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@RequestMapping(value ="/categorys" , produces = "application/json")
    public List<Category> getCategorys() {
		
		return this.categoryService.getCategorys();
	 }
	
	@RequestMapping(value ="/categorys",method = RequestMethod.PUT)
	public ResponseEntity<Object> updateCategory(@RequestBody Category category ){
		
		categoryService.updateCategory(category);
			return new ResponseEntity<>("Category is updated successsfully", HttpStatus.OK);
	}
	@RequestMapping(value = "/categorys/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> delete(@PathVariable("id") Integer id) {

		categoryService.deleteCategory(id);
		return new ResponseEntity<>("Category is deleted successsfully", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/categorys", method = RequestMethod.POST)
	public ResponseEntity<Category> createCategory(@RequestBody Category category) {
		categoryService.createCategory(category);
		return new ResponseEntity<Category>(HttpStatus.CREATED);
	}
	
	
}
