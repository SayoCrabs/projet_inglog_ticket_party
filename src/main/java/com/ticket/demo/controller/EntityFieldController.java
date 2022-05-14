package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.EntityField;
import com.ticket.demo.repositories.EntityFieldDao;

@RestController
public class EntityFieldController {
	
	@Autowired
	EntityFieldDao entityFieldDao;

	@RequestMapping(value = "/entity/{entityName}")
	public List<EntityField> getEntityField(@PathVariable String entityName) {
		
		
		return entityFieldDao.getEntityField(entityName);
	}
	
	
}
