'use strict';

const extractAactMaster = (db) => {
  return db.raw(`
      select 
        c.nct_id,
        c.name,
        e.gender,
        e.minimum_age,
        e.maximum_age,
        e.healthy_volunteers,
        e.criteria,
        f.status,
        f.name,
        f.city,
        f.state,
        f.zip,
        f.country,
        s.brief_title,
        s.official_title,
        sum.description
      from conditions c
      left join eligibilities e on c.nct_id = e.nct_id
      left join facilities f on e.nct_id = f.nct_id
      left join studies s on f.nct_id = s.nct_id
      left join brief_summaries sum on s.nct_id = sum.nct_id
      where c.name like 'Alz%' and (s.overall_status = 'Recruiting' and f.status = 'Recruiting');
    `)
    .then((res) => {
      return res.rows
    })
    .catch((err) => console.log(err))
}

module.exports = extractAactMaster;