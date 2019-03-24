'use strict'

module.exports = {
	aact: {
		connectionString : process.env.CONNECTION_AACT
	},
	local: {
		connectionString : process.env.DATABASE_URL
	},
	zip: {
		connectionString: process.env.CONNECTION_ZIP
	},
	openCageDataKey: process.env.OPENCAGEDATA_KEY
}