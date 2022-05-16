package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import com.ticket.demo.model.Company;

public interface CompanyService {

	List<Company> getCompanies();

	void updateCompany(Company company);

	void deleteCompany(Integer id);

	void createCompany(Company company);

	Optional<Company> findById(Integer id);

}
