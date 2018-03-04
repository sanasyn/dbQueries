-- joins with selected cols --
select 
	distinct on(f.id)
	f.id as facility_id,
    c.nct_id,
    c.name as condition_name,
    e.gender,
    e.minimum_age,
    e.maximum_age,
    e.healthy_volunteers,
    e.criteria,
    f.status,
    f.name as facility_name,
    f.city,
    f.state,
    f.zip,
    f.country,
    s.brief_title,
    s.official_title,
    sum.description
from conditions c
left join eligibilities e on c.nct_id = e.nct_id
left join facilities f on e.nct_id = f.nct_id
left join studies s on f.nct_id = s.nct_id
left join brief_summaries sum on s.nct_id = sum.nct_id
where c.name like 'Alz%' and (s.overall_status = 'Recruiting' and f.status = 'Recruiting')
order by f.id asc;

-- Limit scope of query to return studies conducted in the United States
      select 
        distinct on(f.id)
        f.id as facility_id,
        c.nct_id,
        c.name as condition_name,
        e.gender,
        e.minimum_age,
        e.maximum_age,
        e.healthy_volunteers,
        e.criteria,
        f.status,
        f.name as facility_name,
        f.city,
        f.state,
        f.zip,
        f.country,
        s.brief_title,
        s.official_title,
        sum.description
      from conditions c
      left join eligibilities e on c.nct_id = e.nct_id
      left join facilities f on e.nct_id = f.nct_id
      left join studies s on f.nct_id = s.nct_id
      left join brief_summaries sum on s.nct_id = sum.nct_id
      where c.name like 'Alz%' 
      	and (f.country = 'United States' or f.country = 'Canada') 
      	and (s.overall_status = 'Recruiting' and f.status = 'Recruiting')
      order by f.id asc;

-- Create table sql --
drop table aact_master;

create table aact_master (
	facility_id varchar,
    nct_id varchar,
	condition_name varchar,
	gender varchar(15),
	minimum_age varchar(30),
    maximum_age varchar(30),
    healthy_volunteers varchar(50),
	criteria_inc varchar,
	criteria_ex varchar,
	status varchar(50),
	facility_name varchar,
	city varchar(100),
	state varchar(100),
	zip varchar(15),
	country varchar(100),
	brief_title varchar,
	official_title varchar,
	description varchar
);

select * from aact_master;