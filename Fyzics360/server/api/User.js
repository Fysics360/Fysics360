const router = require('express').Router()

const User = require('../model')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['name', 'email']
    })
    console.log('Insied user', users)
    res.json(users)
  } catch (error) {
    next(error)
  }
});
module.exports = router;
