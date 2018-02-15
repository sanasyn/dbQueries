'use strict';

const loadAactMaster = (res, db) => {
  db.raw(`TRUNCATE aact_master`)
  .then(() => {
    res.map((val) => {
      const insertQuery = "INSERT INTO public.aact_master VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
      db.raw(insertQuery, val)
        .catch((err) => console.log(err));
    })
  })
}

module.exports = loadAactMaster;