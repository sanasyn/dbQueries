'use strict';

const extractContacts = (db) => {
  return db.raw(`
      select 
        distinct on(f.id)
        f.id,
        f.nct_id,
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
      full outer join facilities f on f.id = fc.facility_id
      left outer join conditions c on c.nct_id = f.nct_id
      left outer join central_contacts cc on cc.nct_id = f.nct_id
      left outer join studies s on s.nct_id = c.nct_id
      where c.name like 'Alz%'
        and (f.country = 'United States' or f.country = 'Canada')  
        and (f.status = 'Recruiting' and s.overall_status = 'Recruiting') 
        and (cc.contact_type is null or cc.contact_type = 'primary')
        and (fc.contact_type is null or fc.contact_type = 'primary')
      order by f.id asc;
    `)
    .then((res) => {
      return res.rows
    })
}

module.exports = extractContacts;