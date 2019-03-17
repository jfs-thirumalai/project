--To add a new column in customer applications
alter table customer_application add is_queued number(1) default 0;