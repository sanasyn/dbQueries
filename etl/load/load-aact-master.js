'use strict';

// const connect_local = require('../db-keys').local;

const loadAactMaster = (res, db) => {
  // const db = require('knex')({client: 'pg', connection: connect_local})
  res.map((val) => {
    const insertQuery = "INSERT INTO public.aact_master VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.raw(insertQuery, val)
      .catch((err) => console.log(err));
  })
}

module.exports = loadAactMaster;