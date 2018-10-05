const router = require('express').Router()

const { User } = require('../model/user')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['name', 'email']
    })
    res.send(users)
  } catch (error) {
    console.error(error)
  }
});
module.exports = router;