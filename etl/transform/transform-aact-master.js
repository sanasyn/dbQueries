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
      criteriaInc(val.criteria),
      criteriaEx(val.criteria),
      val.status,
      val.facility_name,
      val.city,
      val.state,
      val.zip,
      val.country,
      val.phase,
      val.brief_title,
      val.official_title,
      val.description
    ]
  })
};

function criteriaInc(criteria) {
  if (criteria.indexOf('Exclusion') === -1 && criteria.indexOf('EXCLUSION') === -1) return criteria;
  else if (criteria.substring(criteria.indexOf('Inclusion', 0), criteria.indexOf('Exclusion')) !== '' ) return criteria.substring(criteria.indexOf('Inclusion', 0), criteria.indexOf('Exclusion'))
  else if (criteria.substring(criteria.indexOf('INCLUSION', 0), criteria.indexOf('EXCLUSION')) !== '') return criteria.substring(criteria.indexOf('INCLUSION', 0), criteria.indexOf('EXCLUSION'))
}

function criteriaEx(criteria) {
  if (criteria.indexOf('Exclusion') !== -1) return criteria.substring(criteria.indexOf('Exclusion'))
  else if (criteria.indexOf('EXCLUSION') !== -1) return criteria.substring(criteria.indexOf('EXCLUSION'))
  else return null;
}

module.exports = transformAactMaster;