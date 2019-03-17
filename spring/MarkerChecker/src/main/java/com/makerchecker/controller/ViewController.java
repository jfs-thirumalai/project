package com.makerchecker.controller;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Criteria;
import org.hibernate.Session;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;


import com.makerchecker.model.CustomerApplication;
import com.makerchecker.model.User;
import com.makerchecker.util.HibernateUtilities;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v2/viewapplications")
public class ViewController {
	
	@GetMapping
	public List<User> list() {
		SessionFactory sessionFactory  = HibernateUtilities.getSessionFactory();
		Session session = sessionFactory.openSession();
		//List<User> list = session.createCriteria(User.class).list();
		CriteriaQuery<User> query = session.getCriteriaBuilder().createQuery(User.class);
		query.from(User.class);
		List<User> list = session.createQuery(query).getResultList();
		session.close();
		return list;
	}

	@GetMapping("/customerApplication/checker/listForApproval")
	public List<CustomerApplication> listCustomerApplicationforChecker(){
		SessionFactory sessionFactory  = HibernateUtilities.getSessionFactory();
		Session session = sessionFactory.openSession();
		//CriteriaQuery<CustomerApplication> query = session.getCriteriaBuilder().createQuery(CustomerApplication.class);
		Criteria criteria = session.createCriteria(CustomerApplication.class);
		criteria.add(Restrictions.in("isQueued", 1));
		
		
		List<CustomerApplication> list = criteria.list();
		session.close();
		return list;
	}
	
	@GetMapping("/customerApplication")
	public List<CustomerApplication> listCustomerApplication(){
		SessionFactory sessionFactory  = HibernateUtilities.getSessionFactory();
		Session session = sessionFactory.openSession();
		CriteriaQuery<CustomerApplication> query = session.getCriteriaBuilder().createQuery(CustomerApplication.class);
		query.from(CustomerApplication.class);
		List<CustomerApplication> list = session.createQuery(query).getResultList();
		session.close();
		return list;
	}
	
	@GetMapping("/customerApplication/{id}")
	public CustomerApplication fetchOne(@PathVariable("id") String id){
		SessionFactory sessionFactory  = HibernateUtilities.getSessionFactory();
		Session session = sessionFactory.openSession();
		//CriteriaQuery<CustomerApplication> query = session.getCriteriaBuilder().createQuery(CustomerApplication.class).where(arg0);
		CustomerApplication customerApplication = session.get(CustomerApplication.class, id);
		//query.from(CustomerApplication.class);
		//List<CustomerApplication> list = session.createQuery(query).getResultList();
		session.close();
		return customerApplication;
	}
	
	//@GetMapping("/customerApplicatoin/create")
	@PostMapping("/customerApplicatoin/create")
	@ResponseStatus(HttpStatus.OK)
	public List<CustomerApplication> createApplication(@RequestBody CustomerApplication customerApplication){
		SessionFactory sessionFactory  = HibernateUtilities.getSessionFactory();
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		/*CustomerApplication cApplication = new CustomerApplication();
		//cApplication.setApprovalStatus(approvalStatus);
		cApplication.setCustomerCode("C02");
		cApplication.setCustomerAddressPrimary("test Address 1");
		//cApplication.setApprovalStatus(approvalStatus);
		cApplication.setApprovedTime(null);
		cApplication.setApproverPersonId(null);
		Calendar cal = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("DD-MMM-YYYY HH:mm:ss");
        sdf.format(cal.getTime());
		cApplication.setAuditEntryDateTime(new java.util.Date());
		cApplication.setAuditModifiedDateTime(new java.util.Date());
		cApplication.setAuditReason("Test");
		cApplication.setAuditStatus(1);
		cApplication.setAuditUserId("Test");
		cApplication.setCustomerEmailAddress("test@test.com");
		cApplication.setCustomerName("test User");
		cApplication.setCustomerPhoneNumber(123123);
		cApplication.setCustomerPinCode("600001");
		cApplication.setCustomerStatusCode("OPN");
		cApplication.setInactiveInd("N");
		*/
		customerApplication.setAuditEntryDateTime(new java.util.Date());
		customerApplication.setAuditModifiedDateTime(new java.util.Date());
		customerApplication.setAuditReason("Test");
		customerApplication.setAuditStatus(1);
		customerApplication.setAuditUserId("Test");
		customerApplication.setCustomerStatusCode("OPN");
		customerApplication.setInactiveInd("N");
		customerApplication.setPrimaryContactPerson("Primary test");
		customerApplication.setIsQueued(0);
		
		session.save(customerApplication);	
		session.getTransaction().commit();
		System.out.println("changes are saved");
		
		CriteriaQuery <CustomerApplication> query = session.getCriteriaBuilder().createQuery(CustomerApplication.class);
		query.from(CustomerApplication.class);
		List<CustomerApplication> list = session.createQuery(query).getResultList();
		session.close();
		return list;
	}
	
	@PostMapping("/save")
	@ResponseStatus(HttpStatus.OK)
	public void save(@RequestBody CustomerApplication customerApplication){
		System.out.println("it came inside");
		SessionFactory sessionFactory  = HibernateUtilities.getSessionFactory();
		Session session = sessionFactory.openSession();
		session.beginTransaction();

/*		customerApplication.setAuditEntryDateTime(new java.util.Date());
		customerApplication.setAuditModifiedDateTime(new java.util.Date());
		customerApplication.setAuditReason("Test");
		customerApplication.setAuditStatus(1);
		customerApplication.setAuditUserId("Test");
		customerApplication.setCustomerStatusCode("OPN");
		customerApplication.setInactiveInd("N");
		customerApplication.setPrimaryContactPerson("Primary test");
		customerApplication.setIsQueued(0);*/
		
		session.update(customerApplication);	
		session.getTransaction().commit();
		System.out.println("changes are saved");
		session.close();
	}
	@PostMapping("/delete")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@RequestBody CustomerApplication customerApplication){
		System.out.println("it came inside");
		SessionFactory sessionFactory  = HibernateUtilities.getSessionFactory();
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		customerApplication.setCustomerStatusCode("DEL");
/*		customerApplication.setAuditEntryDateTime(new java.util.Date());
		customerApplication.setAuditModifiedDateTime(new java.util.Date());
		customerApplication.setAuditReason("Test");
		customerApplication.setAuditStatus(1);
		customerApplication.setAuditUserId("Test");
		customerApplication.setCustomerStatusCode("OPN");
		customerApplication.setInactiveInd("N");
		customerApplication.setPrimaryContactPerson("Primary test");
		customerApplication.setIsQueued(0);*/
		
		session.update(customerApplication);	
		session.getTransaction().commit();
		System.out.println("changes are saved");
		session.close();
	}

}
