create table META_CUSTOMER_STATUS (
CUSTOMER_STATUS_CODE VARCHAR(20) PRIMARY KEY NOT NULL,
CUSTOMER_STATUS_DESCRIPTION VARCHAR(40) NOT NULL,
INACTIVE_IND VARCHAR(1) NOT NULL,
AUDIT_USER_ID	VARCHAR2(20 CHAR) NOT NULL,
AUDIT_STATUS	NUMBER(2,0) NOT NULL,
AUDIT_REASON	VARCHAR2(2000 CHAR),
AUDIT_ENTRY_DATETIME	TIMESTAMP(6) NOT NULL,
AUDIT_MODIFIED_DATETIME	TIMESTAMP(6) NOT NULL
);
create table META_CHECKER_ACTION (
CHECKER_ACTION_CODE VARCHAR(20) PRIMARY KEY NOT NULL,
CHECKER_ACTION_DESCRIPTION VARCHAR(40) NOT NULL,
INACTIVE_IND VARCHAR(1) NOT NULL,
AUDIT_USER_ID	VARCHAR2(20 CHAR) NOT NULL,
AUDIT_STATUS	NUMBER(2,0) NOT NULL,
AUDIT_REASON	VARCHAR2(2000 CHAR),
AUDIT_ENTRY_DATETIME	TIMESTAMP(6) NOT NULL,
AUDIT_MODIFIED_DATETIME	TIMESTAMP(6) NOT NULL
);
create table META_USER_ROLE(
ROLE_CODE VARCHAR(20),
ROLE_DESCRIPTION VARCHAR(40),
INACTIVE_IND VARCHAR(1) NOT NULL,
AUDIT_USER_ID	VARCHAR2(20 CHAR) NOT NULL,
AUDIT_STATUS	NUMBER(2,0) NOT NULL,
AUDIT_REASON	VARCHAR2(2000 CHAR),
AUDIT_ENTRY_DATETIME	TIMESTAMP(6) NOT NULL,
AUDIT_MODIFIED_DATETIME	TIMESTAMP(6) NOT NULL
);
create table USERS(
USER_NAME VARCHAR(40) PRIMARY KEY,
PASSWORD VARCHAR(50) NOT NULL,
FIRST_NAME VARCHAR2(30 CHAR),
LAST_NAME VARCHAR2(30 CHAR) NOT NULL,
EMAIL_ADDRESS VARCHAR2(50) NOT NULL,
INACTIVE_IND VARCHAR(1) NOT NULL,
AUDIT_USER_ID	VARCHAR2(20 CHAR) NOT NULL,
AUDIT_STATUS	NUMBER(2,0) NOT NULL,
AUDIT_REASON	VARCHAR2(2000 CHAR),
AUDIT_ENTRY_DATETIME	TIMESTAMP(6) NOT NULL,
AUDIT_MODIFIED_DATETIME	TIMESTAMP(6) NOT NULL
);
create table USER_ROLE(
USER_NAME VARCHAR(40) NOT NULL,
ROLE_CODE VARCHAR(20) NOT NULL,
INACTIVE_IND VARCHAR(1) NOT NULL,
AUDIT_USER_ID	VARCHAR2(20 CHAR) NOT NULL,
AUDIT_STATUS	NUMBER(2,0) NOT NULL,
AUDIT_REASON	VARCHAR2(2000 CHAR),
AUDIT_ENTRY_DATETIME	TIMESTAMP(6) NOT NULL,
AUDIT_MODIFIED_DATETIME	TIMESTAMP(6) NOT NULL
);

create table CUSTOMER_APPLICATION(
APPLICATION_ID NUMBER(5) NOT NULL,
CUSTOMER_CODE VARCHAR2(10) PRIMARY KEY,
CUSTOMER_NAME VARCHAR2(50) NOT NULL,
CUSTOMER_ADDRESS_PRIMARY VARCHAR2(100) NOT NULL,
CUSTOMER_ADDRESS_SECONDARY VARCHAR2(100),
CUSTOMER_PIN_CODE NUMBER(6) NOT NULL,
CUSTOMER_EMAIL_ADDRESS VARCHAR2(50),
CUSTOMER_PHONE_NUMBER NUMBER(20),
PRIMARY_CONTACT_PERSON VARCHAR2(100) NOT NULL,
CUSTOMER_STATUS_CODE VARCHAR2(20) NOT NULL,
AUTHORIZED_PEROSN VARCHAR2(20),
AUTHORIZED_DATE_TIME TIMESTAMP(6),
INACTIVE_IND VARCHAR(1) NOT NULL,
AUDIT_USER_ID	VARCHAR2(20 CHAR) NOT NULL,
AUDIT_STATUS	NUMBER(2,0) NOT NULL,
AUDIT_REASON	VARCHAR2(2000 CHAR),
AUDIT_ENTRY_DATETIME	TIMESTAMP(6) NOT NULL,
AUDIT_MODIFIED_DATETIME	TIMESTAMP(6) NOT NULL
);