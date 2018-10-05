const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express()
const PORT = 3000

app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use((err, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})
db.sync().then(() => console.log('Database is synced'))
app.listen(PORT, () => {
  console.log('Feeling lucky')
})
module.exports = app;