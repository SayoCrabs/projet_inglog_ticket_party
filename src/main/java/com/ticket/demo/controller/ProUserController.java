package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.ProUser;
import com.ticket.demo.services.ProUserService;
@RestController
public class ProUserController {
	@Autowired
	ProUserService prouserService;
	@RequestMapping(value = "/prousers", produces = "application/json")
	   public List<ProUser> getProUsers() {
	      return this.prouserService.getProUsers();
	   }
	   @RequestMapping(value = "/prousers/{id}", method = RequestMethod.PUT)
	   public ResponseEntity<Object> 
	      updateUser(@PathVariable("id") int id, @RequestBody ProUser prouser) {
	      
	      prouserService.updateProUser(id, prouser);
	      return new ResponseEntity<>("ProUser is updated successsfully", HttpStatus.OK);
	   }
	   @RequestMapping(value = "/prousers/{id}", method = RequestMethod.DELETE)
	   public ResponseEntity<Object> delete(@PathVariable("id") int id) {
		   
	      prouserService.deleteProUser(id);
	      return new ResponseEntity<>("ProUser is deleted successsfully", HttpStatus.OK);
	   }
	   @RequestMapping(value = "/prousers", method = RequestMethod.POST)
	   public ResponseEntity<ProUser> createProUser(@RequestBody ProUser prouser) {
	      prouserService.createProUser(prouser);
	      return new ResponseEntity<ProUser>(HttpStatus.CREATED);
	   }
	   
}
