'use strict';

const acctMaster = require('./aactMaster');
const contactInfo = require('./contactInfo');

const getClinicalTrialsData = () => {
    acctMaster()
    .then(() => contactInfo());
};

getClinicalTrialsData();