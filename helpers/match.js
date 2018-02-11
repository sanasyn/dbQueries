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
		.orWhere({
			'minimum_age': 'N/A',
			'maximum_age': 'N/A'
		})
	})
	.andWhere(function() {
		this
		.where('gender', basicQuery.gender)
		.orWhere('gender', 'All')
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
	.from('eligibilities')
	.where('id','<=','1711380')
	.then(function(rows) {
		console.log(rows);
	})
	.catch(function(error){
		console.log(error)
	});
}
// runQuery();
testQuery();