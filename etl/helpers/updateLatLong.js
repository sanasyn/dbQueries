'use strict';

const connection = require('../../config/config');
const db_sanasyn = require('knex')({client: 'pg', connection: connection.local})
const db_zip = require('knex')({client: 'pg', connection: connection.zip});
const rp = require('request-promise');

// Update our database with latitude and longitude data
function updateLatLong() {
  getDestinationDbRecords()
    .then(records => queryAndUpdate(records))
    .then(() => console.log("Updated lat long 📌"))
    .then(() => {return db_sanasyn.destroy()})
    .then(() => {return db_zip.destroy()})
    .catch(err => console.log(err));
}

// Helper function to query for all the records in our database to update latitude and longitude data
function getDestinationDbRecords() {
  return db_sanasyn.raw(`select zip, facility_id, city, state from aact_master`)
    .then(records => {
      return records;
    })
}

// Helper function to query zipcodes database for latitude and longitude data.
// Fall back (e.g. in case zip is malformed or zip not in zipcodes database) 
// is to use OpenCageData api service to find latitude and longitude for update.
function queryAndUpdate(records) {
  return Promise.all(records.rows.map(record => {
    return db_zip.raw(`select latitude, longitude from zipcodes where zipcode = '${record.zip}';`)
      .then(zipRecord => {
        return db_sanasyn.raw(`update aact_master set latitude = '${zipRecord.rows[0].latitude}', longitude = '${zipRecord.rows[0].longitude}' where facility_id = '${record.facility_id}';`)
      })
      .catch(err => {
        rp(`https://api.opencagedata.com/geocode/v1/json?key=${connection.openCageDataKey}&q='${record.city} ${record.state} ${record.zip}'`)
          .then(result => {
            let resultObj = JSON.parse(result);
            return db_sanasyn.raw(`update aact_master set latitude = '${resultObj.results[0].geometry.lat}', longitude = '${resultObj.results[0].geometry.lng}' where facility_id = '${record.facility_id}';`)
          })
      })
  }))
}

module.exports = updateLatLong;