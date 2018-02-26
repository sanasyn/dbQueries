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
      val.brief_title,
      val.official_title,
      val.description
    ]
  })
};

function criteriaInc(criteria) {
  // let inclusion = criteria.substring(0, (criteria.indexOf(criteria.match('Exclusion'))) || criteria.indexOf(criteria.match('EXCLUSION')))
  // let inclusion = criteria.substring(criteria.indexOf(criteria.match('Inclusion')), criteria.indexOf(criteria.match('Exclusion')))
  return criteria.substring(criteria.indexOf('Inclusion', 0), criteria.indexOf('Exclusion')) !== '' ? 
    criteria.substring(criteria.indexOf('Inclusion', 0), criteria.indexOf('Exclusion')) :
    criteria.substring(criteria.indexOf('INCLUSION', 0), criteria.indexOf('EXCLUSION'))
}

function criteriaEx(criteria) {
  let exclusion = criteria.substring(criteria.indexOf(criteria.match('Exclusion')) || criteria.indexOf(criteria.match('EXCLUSION')))
  return exclusion
}

module.exports = transformAactMaster;