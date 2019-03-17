package com.makerchecker.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class User {
private String userName;
private String password;
private String firstName;
private String lastName;
private String emailAddress;
private String inactiveInd;
private String auditUserId;
private int auditStatus;
private String auditReason;
private Date auditEntryDateTime;
private Date auditModifiedDateTime;

public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmailAddress() {
	return emailAddress;
}
public void setEmailAddress(String emailAddress) {
	this.emailAddress = emailAddress;
}
public String getInactiveInd() {
	return inactiveInd;
}
public void setInactiveInd(String inactiveInd) {
	this.inactiveInd = inactiveInd;
}
public String getAuditUserId() {
	return auditUserId;
}
public void setAuditUserId(String auditUserId) {
	this.auditUserId = auditUserId;
}
public int getAuditStatus() {
	return auditStatus;
}
public void setAuditStatus(int auditStatus) {
	this.auditStatus = auditStatus;
}
public String getAuditReason() {
	return auditReason;
}
public void setAuditReason(String auditReason) {
	this.auditReason = auditReason;
}
public Date getAuditEntryDateTime() {
	return auditEntryDateTime;
}
public void setAuditEntryDateTime(Date auditEntryDateTime) {
	this.auditEntryDateTime = auditEntryDateTime;
}
public Date getAuditModifiedDateTime() {
	return auditModifiedDateTime;
}
public void setAuditModifiedDateTime(Date auditModifiedDateTime) {
	this.auditModifiedDateTime = auditModifiedDateTime;
}
}
