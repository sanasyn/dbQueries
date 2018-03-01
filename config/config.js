'use strict'

module.exports = {
	aact: {
		connectionString : process.env.CONNECTION_AACT || 'postgres://aact:aact@aact-db.ctti-clinicaltrials.org:5432/aact'
	},
	local: {
		connectionString : process.env.DATABASE_URL || 'postgres://whitneywong:test@localhost/testdb'	
	}
}