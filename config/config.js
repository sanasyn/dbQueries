'use strict'

module.exports = {
	node_env : 'dev',
	aact:{	
		port : 5432,
		client : 'postgres',
		user : 'aact',
		host : 'aact-db.ctti-clinicaltrials.org',
		database : 'aact',
		password : 'aact',
		poolMin : '0',
		poolMax : '100',
	},
	local: {
		client : 'postgres',
		user: 'marissapels',
	    host: 'localhost',
	    database: 'trials_local',
	    password: process.env.PASSWORD || 'noPassword',
	    port: 5432,
	    searchPath: 'public'
	}

}