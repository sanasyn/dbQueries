'use strict';

const extractAactMaster = require('./extract/extract-aact-master');
const transformAactMaster = require('./transform/transform-aact-master');
const loadAactMaster = require('./load/load-aact-master');

const connection = require('../config/config');
const db_aact = require('knex')({client: 'pg', connection: connection.aact})
const db_local = require('knex')({client: 'pg', connection: connection.local})

const aactMasterETL = () => {
  return new Promise((resolve, reject) => {
    return resolve(
      db_local.raw(`TRUNCATE public.aact_master`)
      .then(() => extractAactMaster(db_aact))
      .then((res) => transformAactMaster(res))
      .then((res) => loadAactMaster(res, db_local))
      .then(() => console.log("Inserted all AACT data 🎉"))
      .then(() => {return db_aact.destroy()})
      .then(() => {return db_local.destroy()})
    )
  })
  .catch((err) => {
    reject(err);
  })
}

module.exports = aactMasterETL;