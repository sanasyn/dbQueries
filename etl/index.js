'use strict';

const acctMaster = require('./aactMaster');
const contactInfo = require('./contactInfo');
const updateCanadaZip = require('./helpers/sanitizeCanadaZip').sanitizeCanadaZip;
const updateLatLong = require('./helpers/updateLatLong');

const getClinicalTrialsData = () => {
    acctMaster()                        // Populates main study data table
    .then(() => contactInfo())          // Populates contact information table for facility/study
    .then(() => updateCanadaZip())      // Helper function to update unknown Canada zipcodes
    .then(() => updateLatLong());       // Helper function to update latitude and longitude
};

getClinicalTrialsData();