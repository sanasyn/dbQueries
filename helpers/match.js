const config = require('../config/config');
const pg = require('pg');
const knex = require('knex')(getConnectionOptions());
const query = require('./exampleObjects').complete;

function getConnectionOptions() {
	return {
		client: config.local.client,
		connection : {
			host: config.local.host,
			user: config.local.user,
			password: config.local.password,
			database: config.local.database
		}
	}
}

function medicationsArray(queryMedications) {
	let buildArray = [];
	let queryArray = [];
	const aricept = ['%donepezil%', '%aricept%', '%cholinesterase%'];
	const exelon = ['%rivastigmine%', '%exelon%', '%cholinesterase%'];
	const razadyne = ['%galantamine%', '%razadyne%', '%cholinesterase%'];
	const namenda = ['%memantine%', '%namenda%'];

	if (queryMedications.indexOf('aricept') > -1) {
		buildArray = buildArray.concat(aricept);
	};
	if (queryMedications.indexOf('exelon') > -1) {
		buildArray = buildArray.concat(exelon);
	};
	if (queryMedications.indexOf('razadyneEr') > -1) {
		buildArray = buildArray.concat(razadyne);
	};
	if (queryMedications.indexOf('namenda') > -1) {
		buildArray = buildArray.concat(namenda);
	};

	//removes duplicates
	buildArray.forEach(element => {
		if (queryArray.indexOf(element) === -1) {
			queryArray.push(element);
		}
	})

	return queryArray;
}


function runQuery() {
	return knex.count()
	.from('aact_master')
	.where(function() {
		this
		.where('minimum_age', '<=' , query.age)
		.andWhere('maximum_age', '>=' , query.age)
		.orWhere({
			'minimum_age': 'N/A',
			'maximum_age': 'N/A'
		})
	})
	.andWhere(function() {
		this
		.where('gender', query.gender)
		.orWhere('gender', 'All')
	})
	.andWhere(function() {
		this
		.where(knex.raw("criteria_inc like any (array ?,?,?,?,?,?,?,?,?)", medicationsArray(query.medications)));
		// .where(knex.raw("criteria_inc like any (array['%donepezil%','%memantine%'])"));
		// .where(knex.raw("criteria_inc ~ 'donepezil'"))
	})
	.then(function(rows) {
		console.log(rows);
	})
	.catch(function(error){
		console.log(error)
	});
}

function testQuery() {
	return knex.select()
	.from('aact_master')
	.where('nct_id','NCT02951559')
	.then(function(rows) {
		console.log(rows);
	})
	.catch(function(error){
		console.log(error)
	});
}

// medicationsArray(query.medications);
runQuery();
// testQuery();