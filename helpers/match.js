const config = require('../config/config');
const pg = require('pg');
const knex = require('knex')(getConnectionOptions());
const basicQuery = require('./exampleObjects').basic;

function getConnectionOptions() {
	return {
		client: config.client,
		connection : {
			host: config.host,
			user: config.user,
			password: config.password,
			database: config.database
		},
		pool: {
			min: config.poolMin,
			max: config.poolMax
		}
	}
}

function runQuery() {
	return knex.count()
	.from('eligibilities')
	.where(function() {
		this
		.where('minimum_age', '<=' , basicQuery.age)
		.andWhere('maximum_age', '>=' , basicQuery.age)
	})
	.orWhere(function() {
		this
		.where('minimum_age', 'N/A')
		.andWhere('maximum_age', 'N/A')
	})
	// .andWhere('gender', basicQuery.sex)
	.then(function(rows) {
		console.log(rows);
	})
	.catch(function(error){
		console.log(error)
	});
}

runQuery();