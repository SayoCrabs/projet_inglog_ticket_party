package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticket.demo.model.Company;
import com.ticket.demo.repositories.CompanyRepository;

@Transactional
@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	CompanyRepository companyRepository;

	@Override
	public List<Company> getCompanies() {
		
		return (List<Company>) companyRepository.findAll();
	}

	@Override
	public void updateCompany(Company company) {
		
		companyRepository.save(company);
	}

	@Override
	public void deleteCompany(Integer id) {
		
		Optional<Company> company = companyRepository.findById(id);
		if (company.isPresent()) {
			companyRepository.delete(company.get());
		}
	}

	@Override
	public void createCompany(Company company) {
		
		companyRepository.save(company);
	}
	
	
}
