const Sequelize = require('sequelize')
const db = require('../db/index.js')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    isEmail: true
  },
  password: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db,
  User
}
