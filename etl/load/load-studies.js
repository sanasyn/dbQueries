'use strict';

const connect_local = require('../db-keys').local;

const loadStudies = (res) => {
  const db = require('knex')({client: 'pg', connection: connect_local})
  res.map((val) => {
    console.log(val.length)
    ////---------Need to add ?'s and column headings to insert query-----------////
    const insertQuery = "INSERT INTO public.studies VALUES (?, ?)";
    db.raw(insertQuery, val)
      .then((row) => console.log(row))
      .then(() => db.destroy())
      .catch((err) => console.log(err));
  })
}

module.exports = loadStudies;