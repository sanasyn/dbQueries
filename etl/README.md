# Getting Started
### Create DB in PostgreSQL
`$ psql postgres`

`postgres=# create database <dbname>`

### Create Table in DB
1. In the SQL directory, copy from aact_master.sql the `create table` block.
2. Paste the sql command in postgres. 
`$ psql <dbname>`

`testdb=# create table (...);`

### Change local variables
Update `db-keys.js` with your db variables.

### Run node function
This will change in the future, but for now you can run this in the command line and it will run the ETL.

`node aactMaster.js`

The function seems to get hung up, so you will have to 'CTRL+C' or let it timeout. On the list of things to fix.
