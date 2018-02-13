'use strict'

module.exports = {
	node_env : process.env.NODE_ENV || 'dev',
	port : process.env.NODE_ENV || 5432,
	client : process.env.CLIENT || 'postgres',
	user : process.env.DB_USER || 'aact',
	host : process.env.HOST || 'aact-db.ctti-clinicaltrials.org',
	database : process.env.DATABASE || 'aact',
	password : process.env.PASSWORD || 'aact',
	poolMin : process.env.poolMin || '0',
	poolMax : process.env.poolMax || '100',
}