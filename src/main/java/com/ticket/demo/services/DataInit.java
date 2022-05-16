package com.ticket.demo.services;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ticket.demo.enumerations.RoleEnum;
import com.ticket.demo.enumerations.SexeEnum;
import com.ticket.demo.model.Category;
import com.ticket.demo.model.Company;
import com.ticket.demo.model.Invoice;
import com.ticket.demo.model.InvoiceItem;
import com.ticket.demo.model.Ticket;
import com.ticket.demo.model.User;
import com.ticket.demo.model.UserRole;
import com.ticket.demo.repositories.CategoryRepository;
import com.ticket.demo.repositories.CompanyRepository;
import com.ticket.demo.repositories.InvoiceItemRepository;
import com.ticket.demo.repositories.InvoiceRepository;
import com.ticket.demo.repositories.TicketRepository;
import com.ticket.demo.repositories.UserRepository;
import com.ticket.demo.repositories.UserRoleRepository;

@Component
public class DataInit implements CommandLineRunner {
	
	@Autowired
	TicketRepository ticketRepository;
	
	@Autowired
	UserService userService;
	
	@Autowired
	InvoiceRepository invoiceRepository;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	CompanyRepository companyRepository;
	
	@Autowired
	InvoiceItemRepository invoiceItemRepository;
	
	@Autowired
	UserRoleRepository userRoleRepository;
	
	
	@Override
	@Transactional
	public void run(String... args) throws Exception {
		
		SimpleDateFormat dateFormatter = new SimpleDateFormat("dd/MM/yyyy");
		
		Date startDate = dateFormatter.parse("10/06/2022");
		
		Date endDate = dateFormatter.parse("12/06/2022");
		
		Date today = dateFormatter.parse("17/04/2022");
		
		Company company = new Company();
		company.setName("Amazon SAS");
		companyRepository.save(company);
		
		Company marchand1 = new Company();
		marchand1.setName("Marchand 1");
		companyRepository.save(marchand1);
		
		Company marchand2 = new Company();
		marchand2.setName("EKS");
		companyRepository.save(marchand2);
		
		User user = new User();
		user.setEmail("a@gmail.com");
		user.setAddress("49 route brazzaville");
		user.setAge(25);
		user.setFirstname("rodney");
		user.setName("Damien");
		user.setPassword("12345");
		user.setDateOfbirth(today);
		user.setSexe(SexeEnum.Male);
		user.getRoles().add(new UserRole(RoleEnum.User, marchand1, user));
		user.getRoles().add(new UserRole(RoleEnum.ProUser, marchand2, user));
		userService.createUser(user);
		
		User user1 = new User();
		user1.setEmail("b@gmail.com");
		user1.setAddress("49 route tranquille");
		user1.setAge(30);
		user1.setFirstname("arnald");
		user1.setName("Robert");
		user1.setPassword("2489");
		user1.setDateOfbirth(today);
		user1.setSexe(SexeEnum.Male);
		user1.getRoles().add(new UserRole(RoleEnum.User, marchand1, user1));
		//user1.getRoles().add(new UserRole(RoleEnum.ProUser, marchand2, user1));
		userService.createUser(user1);
		
		User user2 = new User();
		user2.setEmail("c@gmail.com");
		user2.setAddress("49 route tranquille");
		user2.setAge(30);
		user2.setFirstname("proUser");
		user2.setName("proUser");
		user2.setPassword("12345");
		user2.setDateOfbirth(today);
		user2.setSexe(SexeEnum.Male);
		//user2.getRoles().add(new UserRole(RoleEnum.User, marchand1, user2));
		user2.getRoles().add(new UserRole(RoleEnum.ProUser, marchand2, user2));
		userService.createUser(user2);
		
		/*UserRole userRole = new UserRole();
		userRole.setRole(RoleEnum.User);
		userRole.setCompany(company);
		userRoleRepository.save(userRole);
		
		UserRole userRole1 = new UserRole();
		userRole1.setRole(RoleEnum.User);
		userRole1.setCompany(company);
		userRoleRepository.save(userRole1);*/
		
		Category category = new Category();
		category.setDescription("Film");
		categoryRepository.save(category);
		
		Category category1 = new Category();
		category1.setDescription("Danse");
		categoryRepository.save(category1);
		
		Category category2 = new Category();
		category2.setDescription("Musique");
		categoryRepository.save(category2);
		
	
		
		Ticket ticket = new Ticket();
		ticket.setTitle("rombo");
		ticket.setStartDate(startDate);
		ticket.setEndDate(endDate);
		ticket.setPosition("Lyon");
		ticket.setPrice(12.50);
		ticket.setQuantite(30);
		ticket.setLimitAge(20);
		ticket.setCategory(category);
		ticketRepository.save(ticket);
		
		Ticket ticket1 = new Ticket();
		ticket1.setTitle("hip-hop");
		ticket1.setStartDate(startDate);
		ticket1.setEndDate(endDate);
		ticket1.setPosition("Toulouse");
		ticket1.setPrice(20.00);
		ticket1.setQuantite(40);
		ticket1.setLimitAge(19);
		ticket1.setCategory(category);
		ticketRepository.save(ticket1);
		
		
		
		Invoice facture = new Invoice();
		facture.setNumberInvoice(111111);
		facture.setDateFacture(today);
		facture.setClient(user);
		//facture.setClient(user1);
		invoiceRepository.save(facture);
		
		InvoiceItem invoiceItem = new InvoiceItem();
		invoiceItem.setQuantity(6);
		invoiceItem.setTicket(ticket);
		invoiceItem.setInvoice(facture);
		invoiceItemRepository.save(invoiceItem);
		
		InvoiceItem invoiceItem1 = new InvoiceItem();
		invoiceItem1.setQuantity(20);
		invoiceItem1.setTicket(ticket1);
		invoiceItem1.setInvoice(facture);
		invoiceItemRepository.save(invoiceItem1);
	}

}
