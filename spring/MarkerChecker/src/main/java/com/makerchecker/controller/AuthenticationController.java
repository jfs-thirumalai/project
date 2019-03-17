package com.makerchecker.controller;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.From;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.hql.internal.ast.tree.BooleanLiteralNode;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.makerchecker.model.CustomerApplication;
import com.makerchecker.model.User;
import com.makerchecker.util.HibernateUtilities;

@RestController
public class AuthenticationController {
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public boolean authenticate(@RequestBody User user) {
/*		SessionFactory sessionFactory  = HibernateUtilities.getSessionFactory();
		Session session = sessionFactory.openSession();
		CriteriaQuery<User> query = session.getCriteriaBuilder().createQuery(User.class).where();
		query.from(User.class).*/
		
		return false;
	}

}
