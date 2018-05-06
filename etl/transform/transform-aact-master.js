'use strict';

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
      trimCanadaZip(val.zip, val.country),
      val.country,
      val.phase,
      val.brief_title,
      val.official_title,
      val.description
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

// Trim Canada zip to first 3 characters for querying later
function trimCanadaZip(zip, country) {
  if (country !== 'Canada') return zip;
  else return zip.slice(0,3)
}

// Remove newline (\n) from criteria text
function formatText(text){
  let formattedText = text.replace(/\n/g, '')
  return formattedText;
}

module.exports = transformAactMaster;