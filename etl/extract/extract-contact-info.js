'use strict';

const extractContacts = (db) => {
  return db.raw(`
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
    `)
    .then((res) => {
      return res.rows
    })
}

module.exports = extractContacts;