const { Pool } = require('pg')

module.exports = new Pool({
    database : "nd-foodfy",
    user : "postgres",
    password: "nilo",
    host : "localhost",
    port: 5432
})