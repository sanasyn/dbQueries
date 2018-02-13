'use strict';

const extractAactMaster = require('./extract/extract-aact-master');
const transformAactMaster = require('./transform/transform-aact-master');
const loadAactMaster = require('./load/load-aact-master');

const connect_local = require('./db-keys').local;
const connect_aact =  require('./db-keys').aact;
const db_aact = process.env.CONNECT_AACT || require('knex')({client: 'pg', connection: connect_aact})
const db_local = process.env.DATABASE_URL || require('knex')({client: 'pg', connection: connect_local})

const aactMasterETL = () => {
  return new Promise((resolve, reject) => {
    return resolve(
      extractAactMaster(db_aact)
      .then((res) => transformAactMaster(res))
      .then((res) => loadAactMaster(res, db_local))
      .then(() => console.log("Inserted all data 🎉"))
      .then(() => {return db_aact.destroy()})
      .then(() => {return db_local.destroy()})
    )
  })
  .catch((err) => {
    reject(err);
  })
}

aactMasterETL()
// module.exports = aactMasterETL;