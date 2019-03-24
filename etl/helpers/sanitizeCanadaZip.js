'use strict';

const connection = require('../../config/config');
const aact_zip = require('knex')({client: 'pg', connection: connection.local})

// Finds Canada entries where zipcode is empty string. 
// Updates blank zipcode entries to an existing Canada entry that has same city and state.
function sanitizeCanadaZip() {
  // search criteria to narrow down Canada entries with no zipcode
  return aact_zip.raw(`select facility_id, city, state from aact_master where zip = '' and country = 'Canada';`) 
    .then(records => {
      return queryAndUpdate(records);      
    })
    .then(() => console.log("Updated Canada zipcodes 🇨🇦"))
    .then(() => {return aact_zip.destroy()})
    .catch(err => console.log(err))
}

// Helper function to query and then update zipcode data
function queryAndUpdate(records) {
  return Promise.all(records.rows.map(record => {
    return aact_zip.raw(`select zip from aact_master where city like '%${record.city}%' and state like '%${record.state}%' and zip != '' limit 1;`)
      .then(zipRecord => {
        return aact_zip.raw(`update aact_master set zip = '${zipRecord.rows[0].zip}' where facility_id = '${record.facility_id}'`)
      })
  }))
}

module.exports = {
  sanitizeCanadaZip
};