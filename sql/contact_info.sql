--------------- Query for facility contacts ----------------
-- Facility Contacts --
select 
	fc.nct_id,
	c.name,
	fc.contact_type,
	fc.name,
	fc.phone,
	fc.email
from facility_contacts fc
left join conditions c on fc.nct_id = c.nct_id
where c.name like 'Alz%';

-- Central and Facility Contacts --
select 
	cc.nct_id,
	c.name,
	cc.contact_type as central_contact_type,
	cc.name as central_contact_name,
	cc.phone as central_contact_phone,
	cc.email as central_contact_email,
	fc.contact_type as facility_contact_type,
	fc.name as facility_contact_name,
	fc.phone as facility_contact_phone,
	fc.email as facility_contact_email
from central_contacts cc
left join facility_contacts fc on cc.nct_id = fc.nct_id
left join conditions c on fc.nct_id = c.nct_id
where c.name like 'Alz%';

-----------------------------------------------------
---------- DB postgres table commands -----------
drop table contact_info;

create table contact_info (
    nct_id varchar,
    condition varchar,
	central_contact_type varchar(100),
	central_name varchar,
	central_phone varchar(100),
	central_email varchar,
	facility_contact_type varchar(100),
	facility_name varchar,
	facility_phone varchar(100),
	facility_email varchar
);

select * from contact_info;