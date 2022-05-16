package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.EntityField;
import com.ticket.demo.repositories.EntityFieldDao;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class EntityFieldController {
	
	@Autowired
	EntityFieldDao entityFieldDao;

	@RequestMapping(value = "/entity/{entityName}", method = RequestMethod.GET,  produces = "application/json")
	public List<EntityField> getEntityField(@PathVariable String entityName) {
		
		
		return entityFieldDao.getEntityField(entityName);
	}
	
	
}
