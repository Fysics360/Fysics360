const db = require('./server/db')
const User = require('./server/model')
console.log("IN THE SEED FILE", db)

const seed = async () => {
  try {
    await db.sync({ force: true })
    await User.create({
      name: 'Spiderman',
      email: 'marino@myemail.com',
      password: 'yahoo'
    })
    db.close('Seed work')
  } catch (error) {
    console.error('oh yea, you suck')
    console.error(error.stack)
    db.close()
  }
}
seed()

// const users = [{
//   name: 'Spiderman',
//   email: 'marino@myemail.com',
//   password: 'yahoo'
// }];

// const seed = () => {
//   Promise.all(users.map(user => {
//     User.create(user)
//   }))
// }

// const main = () => {
//   console.log("Syncing db..");
//   db.sync()
//     .then(() => {
//       console.log('Seeding database');
//       return seed();
//     })
//     .catch(err => {
//       console.log('Erro while seeding');
//       console.log(err.stack)
//     })
//     .then(() => {
//       db.close();
//       return null;
//     })
// };

// main();
