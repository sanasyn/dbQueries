'use strict';

const transformAactMaster = (res) => {
  return res.map((val) => {
    return [
      val.nct_id,
      val.name,
      val.gender,
      val.minimum_age,
      val.maximum_age,
      val.healthy_volunteers,
      criteriaInc(val.criteria),
      criteriaEx(val.criteria),
      val.status,
      val.city,
      val.state,
      val.zip,
      val.country
    ]
  })
};

function criteriaInc(criteria) {
  let inclusion = criteria.substring(0, (criteria.indexOf(criteria.match('Exclusion'))) || criteria.indexOf(criteria.match('EXCLUSION')))
  return inclusion
}

function criteriaEx(criteria) {
  let exclusion = criteria.substring(criteria.indexOf(criteria.match('Exclusion')) || criteria.indexOf(criteria.match('Exclusion')))
  return exclusion
}

module.exports = transformAactMaster;