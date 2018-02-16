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