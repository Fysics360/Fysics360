const Sequelize = require('express')
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${fyzics360}`, {
  logging: false
})

module.exports = db; 