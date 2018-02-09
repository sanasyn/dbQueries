'use strict';

const connect_aact =  require('../db-keys').aact;

const extractStudies = () => {
  const db = require('knex')({client: 'pg', connection: connect_aact})
  return db.raw('SELECT * FROM public.studies limit 5')
    .then((res) => {
      db.destroy()
      return res.rows
    })
}

module.exports = extractStudies;