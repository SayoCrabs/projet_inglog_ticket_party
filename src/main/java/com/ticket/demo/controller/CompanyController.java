package com.ticket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ticket.demo.model.Company;
import com.ticket.demo.services.CompanyService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class CompanyController {
	@Autowired
	CompanyService companyService;
	
	@GetMapping("/{id}/companies")
	@RequestMapping(value ="/companies", produces = "application/json")
	 public List<Company> getCompanies() {
		
		return this.companyService.getCompanies();
	 }
		
	@RequestMapping(value ="/companies",method = RequestMethod.PUT)
	public ResponseEntity<Object> updateCompany(@RequestBody Company company ){
		
			companyService.updateCompany(company);
			return new ResponseEntity<>("Company is updated successsfully", HttpStatus.OK);
	}
	@RequestMapping(value = "/companies/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> delete(@PathVariable("id") Integer id) {

		companyService.deleteCompany(id);
		return new ResponseEntity<>("Company is deleted successsfully", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/companies", method = RequestMethod.POST)
	public ResponseEntity<Company> createCompany(@RequestBody Company company) {
		companyService.createCompany(company);
		return new ResponseEntity<Company>(HttpStatus.CREATED);
	}
	
}
