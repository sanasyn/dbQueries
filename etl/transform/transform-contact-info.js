'use strict';

const transformContacts = (res) => {
  return res.map((val) => {
    return [
      val.id,
      val.nct_id,
      val.condition_name,
      val.central_contact_type,
      val.central_contact_name,
      val.central_contact_phone,
      val.central_contact_email,
      val.facility_contact_type,
      val.facility_contact_name,
      val.facility_contact_phone,
      val.facility_contact_email,
      val.facility_name,
      val.city,
      val.state,
      val.zip,
      val.country,
      val.pi_name,
      val.pi_role
    ]
  })
};

module.exports = transformContacts;