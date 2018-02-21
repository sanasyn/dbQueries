----------------------- AACT Tables -----------------------
-- conditions
-- eligibilities
-- studies
-- facilities
-- facility_contacts


--- Query to get all Alzheimer's studies with eligibilities ---
select * from public.conditions c 
left join public.eligibilities e
using (nct_id)
where c.name like 'Alz%';


--- Different conditions
select * from public.conditions c 
left join public.eligibilities e
using (nct_id)
left join public.facilities f
using (nct_id)
left join public.facility_contacts fc
using (nct_id)
where c.name like 'Alz%';


select * from public.conditions c 
left join public.eligibilities e
using (nct_id)
left join public.facilities f
using (nct_id)
where c.name like 'Alz%' and f.status = 'Recruiting';


-- Other related conditions? --
select * from public.conditions c where c.downcase_name like '%cognitive%';
select * from public.conditions c where c.downcase_name like '%impair%';

-- Master table --
select 
    c.nct_id,
    c.name,
    e.gender,
    e.minimum_age,
    e.maximum_age,
    e.healthy_volunteers,
    e.criteria,
    f.status,
    fc.contact_type as facility_contact_type,
    fc.name as facility_contact_name,
    fc.phone as facility_contact_phone,
    fc.email as facility_contact_email,
    cc.contact_type as central_contact_type,
    cc.name as central_contact_name,
    cc.phone as central_contact_phone,
    cc.email as central_contact_email,
    f.name,
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
left join central_contacts cc on s.nct_id = cc.nct_id
left join facility_contacts fc on fc.facility_id = f.id
where c.name like 'Alz%' and (s.overall_status = 'Recruiting' and f.status = 'Recruiting');