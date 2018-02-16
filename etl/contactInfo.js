'use strict';

const extractContacts = require('./extract/extract-contact-info');
const transformContacts = require('./transform/transform-contact-info');
const loadContacts = require('./load/load-contact-info');

const connection = require('../config/config');
const db_aact = require('knex')({client: 'pg', connection: connection.aact})
const db_local = require('knex')({client: 'pg', connection: connection.local})

const contactInfo = () => {
  return new Promise((resolve, reject) => {
    return resolve(
      db_local.raw(`TRUNCATE public.contact_info`)
      .then(() => extractContacts(db_aact))
      .then((res) => transformContacts(res))
      .then((res) => loadContacts(res, db_local))
      .then(() => {return db_aact.destroy()})
      .then(() => {return db_local.destroy()})
    )
  })
  .catch((err) => {
    reject(err);
  })
}

contactInfo()
// module.exports = contactInfo;