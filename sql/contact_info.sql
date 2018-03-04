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


-- Facilities, Facility Contacts, Central Contacts --
select 
	distinct on(fc.id)
	f.id as facility_id,
	fc.nct_id,
	c.name as condition_name,
	cc.contact_type as central_contact_type,
    cc.name as central_contact_name,
    cc.phone as central_contact_phone,
    cc.email as central_contact_email,
    fc.contact_type as facility_contact_type,
    fc.name as facility_contact_name,
    fc.phone as facility_contact_phone,
    fc.email as facility_contact_email,
    f.name as facility_name,
    f.city,
    f.state,
    f.zip,
    f.country
from facility_contacts fc
left join facilities f on f.id = fc.facility_id
left join conditions c on c.nct_id = f.nct_id
left join central_contacts cc on cc.nct_id = f.nct_id
left join studies s on s.nct_id = c.nct_id
where c.name like 'Alz%' and (f.status = 'Recruiting' and s.overall_status = 'Recruiting') order by fc.id;

-- Contacts limited to United States and Canada --
select 
    distinct on(fc.id)
    f.id as facility_id,
    fc.nct_id,
    c.name as condition_name,
    cc.contact_type as central_contact_type,
    cc.name as central_contact_name,
    cc.phone as central_contact_phone,
    cc.email as central_contact_email,
    fc.contact_type as facility_contact_type,
    fc.name as facility_contact_name,
    fc.phone as facility_contact_phone,
    fc.email as facility_contact_email,
    f.name as facility_name,
    f.city,
    f.state,
    f.zip,
    f.country
from facility_contacts fc
left join facilities f on f.id = fc.facility_id
left join conditions c on c.nct_id = f.nct_id
left join central_contacts cc on cc.nct_id = f.nct_id
left join studies s on s.nct_id = c.nct_id
where c.name like 'Alz%' 
	and (f.country = 'United States' or f.country = 'Canada') 
	and (f.status = 'Recruiting' and s.overall_status = 'Recruiting') 
order by fc.id;



-----------------------------------------------------
---------- DB postgres table commands -----------
drop table contact_info;

create table contact_info (
	facility_id varchar,
    nct_id varchar,
    condition_name varchar,
	central_contact_type varchar(100),
	central_contact_name varchar,
	central_contact_phone varchar(100),
	central_contact_email varchar,
	facility_contact_type varchar(100),
	facility_contact_name varchar,
	facility_contact_phone varchar(100),
	facility_contact_email varchar,
	facility_name varchar,
	city varchar(100),
	state varchar(100),
	zip varchar(15),
	country varchar(100)
);

select * from contact_info;