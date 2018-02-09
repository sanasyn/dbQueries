'use strict';

const extractStudies = require('./extract/extract-studies');
const transformStudies = require('./transform/transform-studies');
const loadStudies = require('./load/load-studies');

const studiesETL = () => {
  return new Promise((resolve, reject) => {
    return resolve(
      extractStudies()
      .then((res) => transformStudies(res))
      .then((res) => loadStudies(res))
    )
  })
  .catch((err) => {
    reject(err);
  })
}

studiesETL()
// module.exports = etl;