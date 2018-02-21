'use strict';

const loadContacts = (res, db) => {
  res.map((val) => {
    const insertQuery = "INSERT INTO public.contact_info VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.raw(insertQuery, val)
      .catch((err) => console.log(err));
  })
}

module.exports = loadContacts;