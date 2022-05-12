package com.ticket.demo.services;

import java.util.List;

import com.ticket.demo.model.Company;

public interface CompanyService {

	List<Company> getCompanys();

	void updateCompany(Company company);

	void deleteCompany(Integer id);

	void createCompany(Company company);

}
