-- joins with selected cols --
select
	c.nct_id, 
	c.name, 
	e.gender,
	e.minimum_age,
	e.maximum_age,
	e.healthy_volunteers,
	e.criteria,
	f.status,
	f.city,
	f.state,
	f.zip,
	f.country
from conditions c 
left join eligibilities e on c.nct_id = e.nct_id
left join facilities f on e.nct_id=f.nct_id
where c.name like 'Alz%' and f.status = 'Recruiting';


-- Create table sql --
drop table aact_master;

create table aact_master (
    nct_id varchar,
	condition_name varchar,
	gender varchar(15),
	minimum_age varchar(30),
    maximum_age varchar(30),
    healthy_volunteers varchar(50),
	criteria_inc varchar,
	criteria_ex varchar,
	status varchar(50),
	city varchar(100),
	state varchar(100),
	zip varchar(15),
	country varchar(100)
);

select * from aact_master;