'use strict';

const zipcodes = require('zipcodes')

const transformAactMaster = (res) => {
  return res.map((val) => {
    return [
        val.facility_id,
        val.nct_id,
        val.condition_name,
        val.gender,
        val.minimum_age,
        val.maximum_age,
        val.healthy_volunteers,
        val.criteria,
        criteriaInc(val.criteria),
        criteriaEx(val.criteria),
        val.status,
        val.facility_name,
        val.city,
        val.state,
        sanitizeZip(val.zip, val.city, val.state, val.country),
        val.country,
        val.phase,
        val.brief_title,
        val.official_title,
        val.description,
        null,
        null
      ]
    })
};

// Function to return inclusion criteria
function criteriaInc(criteria) {
  if (criteria.indexOf(' Exclusion') === -1 && criteria.indexOf(' EXCLUSION') === -1) {
    return formatText(criteria)
  }
  else if (criteria.substring(criteria.indexOf('Inclusion', 0), criteria.indexOf(' Exclusion')) !== '' ) {
    const text = criteria.substring(criteria.indexOf('Inclusion', 0), criteria.indexOf(' Exclusion'));
    return formatText(text)
  }
  else if (criteria.substring(criteria.indexOf('INCLUSION', 0), criteria.indexOf(' EXCLUSION')) !== '') {
    const text = criteria.substring(criteria.indexOf('INCLUSION', 0), criteria.indexOf(' EXCLUSION'));
    return formatText(text)
  }
}

// Function to return exclusion criteria
function criteriaEx(criteria) {
  if (criteria.indexOf(' Exclusion') !== -1) {
    const text = criteria.substring(criteria.indexOf(' Exclusion'));
    return formatText(text)
  }
  else if (criteria.indexOf(' EXCLUSION') !== -1) {
    const text = criteria.substring(criteria.indexOf(' EXCLUSION'));
    return formatText(text)
  } 
  else return null;
}

// Function to clean up zipcodes. For now leaving unknown Canada zipcodes blank/empty.
function sanitizeZip(zip, city, state, country) {
  if(zip === '' && country === "United States") return zipcodes.lookupByName(city, state)[0].zip;
  if(zip === '' && country === "Canada") return '';
  if(zip !== '' && country === 'United States') return zip.substring(0,5);
  if(zip !== '' && country === "Canada") return zip.slice(0,3);
}

// Remove newline (\n) from criteria text
function formatText(text){
  let formattedText = text.replace(/\n/g, '')
  return formattedText;
}

module.exports = transformAactMaster;