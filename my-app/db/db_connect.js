const mysql = require('mysql')
const bluebird = require('bluebird')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'test',
  password: 'T1st@localhost',
  database: 'animalfriend',
  supportBigNumbers: true,
  charset: 'UTF8_GENERAL_CI',
  dateStrings: true,
})

bluebird.promisifyAll(pool)

module.exports = pool
