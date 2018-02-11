'use strict';

const extractAactMaster = require('./extract/extract-aact-master');
const transformAactMaster = require('./transform/transform-aact-master');
const loadAactMaster = require('./load/load-aact-master');

const aactMasterETL = () => {
  return new Promise((resolve, reject) => {
    return resolve(
      extractAactMaster()
      .then((res) => transformAactMaster(res))
      .then((res) => loadAactMaster(res))
      .then(() => console.log("Done inserting data"))
    )
  })
  .catch((err) => {
    reject(err);
  })
}

aactMasterETL()
// module.exports = aactMasterETL;