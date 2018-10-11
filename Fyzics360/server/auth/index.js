const router = require('express').Router();
const User = require('../model/index');
module.exports = router;

router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then(user => {
      console.log(user);
      if (user) {
        req.session.userId = user.id;
        res.json(user);
      } else {
        const err = new Error('Incorrect email or password');
        err.status = 401;
        next(err);
      }
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)));
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists');
      } else {
        next(err);
      }
    });
});
