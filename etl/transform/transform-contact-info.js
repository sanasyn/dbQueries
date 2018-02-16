'use strict';

//TODO: Create function to nullify undefined values

const transformContacts = (res) => {
  return res.map((val) => {
    return [
      val.nct_id,
      val.condition,
      val.central_contact_type,
      val.central_contact_name,
      val.central_contact_phone,
      val.central_contact_email,
      val.facility_contact_type,
      val.facility_contact_name,
      val.facility_contact_phone,
      val.facility_contact_email
    ]
  })
};

module.exports = transformContacts;