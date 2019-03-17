package com.makerchecker.model;

import java.util.Date;

public class CustomerApplication {
	private long id;
	private String customerCode;
	private String customerName;
	private String customerAddressPrimary;
	private String customerAddressSecondary;
	private String customerPinCode;
	private String customerEmailAddress;
	private long customerPhoneNumber;
	private String primaryContactPerson;
	private String customerStatusCode;
	private String approverPersonId;
	private Date approvedTime;
	private String approvalStatus;
	private String inactiveInd;
	private String auditUserId;
	private int auditStatus;
	private String auditReason;
	private Date auditEntryDateTime;
	private Date auditModifiedDateTime;
	private int isQueued;
	
	public int getIsQueued() {
		return isQueued;
	}
	public void setIsQueued(int isQueued) {
		this.isQueued = isQueued;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCustomerCode() {
		return customerCode;
	}
	public void setCustomerCode(String customerCode) {
		this.customerCode = customerCode;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCustomerAddressPrimary() {
		return customerAddressPrimary;
	}
	public void setCustomerAddressPrimary(String customerAddressPrimary) {
		this.customerAddressPrimary = customerAddressPrimary;
	}
	public String getCustomerAddressSecondary() {
		return customerAddressSecondary;
	}
	public void setCustomerAddressSecondary(String customerAddressSecondary) {
		this.customerAddressSecondary = customerAddressSecondary;
	}
	public String getCustomerPinCode() {
		return customerPinCode;
	}
	public void setCustomerPinCode(String customerPinCode) {
		this.customerPinCode = customerPinCode;
	}
	public String getCustomerEmailAddress() {
		return customerEmailAddress;
	}
	public void setCustomerEmailAddress(String customerEmailAddress) {
		this.customerEmailAddress = customerEmailAddress;
	}
	public long getCustomerPhoneNumber() {
		return customerPhoneNumber;
	}
	public void setCustomerPhoneNumber(long customerPhoneNumber) {
		this.customerPhoneNumber = customerPhoneNumber;
	}
	public String getPrimaryContactPerson() {
		return primaryContactPerson;
	}
	public void setPrimaryContactPerson(String primaryContactPerson) {
		this.primaryContactPerson = primaryContactPerson;
	}
	public String getCustomerStatusCode() {
		return customerStatusCode;
	}
	public void setCustomerStatusCode(String customerStatusCode) {
		this.customerStatusCode = customerStatusCode;
	}
	public String getApproverPersonId() {
		return approverPersonId;
	}
	public void setApproverPersonId(String approverPersonId) {
		this.approverPersonId = approverPersonId;
	}
	public Date getApprovedTime() {
		return approvedTime;
	}
	public void setApprovedTime(Date approvedTime) {
		this.approvedTime = approvedTime;
	}
	public String getApprovalStatus() {
		return approvalStatus;
	}
	public void setApprovalStatus(String approvalStatus) {
		this.approvalStatus = approvalStatus;
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
