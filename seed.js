const { db, User } = require('./server/model/user')

const seed = async () => {
  try {
    await db.sync({ force: true })
    await User.create({
      name: 'Spiderman',
      password: 'yahoo',
      email: 'marino@myemail.com'
    })
    db.close('Seed work')
  } catch (error) {
    console.error('oh yea, you suck')
    console.error(err.stack)
    db.close()
  }
}
seed()