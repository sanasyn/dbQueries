'use strict';

const loadAactMaster = (res, db) => {
  res.map((val) => {
    const insertQuery = "INSERT INTO public.aact_master VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.raw(insertQuery, val)
      .catch((err) => console.log(err));
  })
}

module.exports = loadAactMaster;