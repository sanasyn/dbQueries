'use strict';

const extractAactMaster = (db) => {
  return db.raw(
      `select
      	c.nct_id, 
        c.name, 
        e.gender,
        e.minimum_age,
        e.maximum_age,
        e.healthy_volunteers,
        e.criteria,
        f.status,
        f.city,
        f.state,
        f.zip,
        f.country
        from conditions c 
        left join eligibilities e on c.nct_id = e.nct_id
        left join facilities f on e.nct_id=f.nct_id
        where c.name like 'Alz%' and f.status = 'Recruiting';
    `)
    .then((res) => {
      return res.rows
    })
    .catch((err) => console.log(err))
}

module.exports = extractAactMaster;