const router = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('../db/models/users');
const { createJWT, sanitize} = require('../middleware');

router.post('/create', sanitize, async (req, res, next) => {
  try {
    const userData = req.body;
    if(userData){
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      userData.password = bcrypt.hashSync(userData.password, salt);
      const user = await Users.create(userData);
      await user.save();
      res.status(200).json({
        status: 200,
        message: 'User Created',
      });
    } else {
      const error = new Error('Missing Values');
      res.status(401);
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/login', sanitize, async (req, res, next) => {
  try {
    const loginData = req.body;
    if(loginData){
      const user = await Users.findOne({email: loginData.email});
      if(user){
        const validPassword = bcrypt.compareSync(loginData.password, user.password);
        if(validPassword){
          delete user._doc.password;
          createJWT(user, res);
        } else {
          const error = new Error('Password did not match');
          res.status(401);
          next(error);
        }
      } else {
        const error = new Error('Users does not exists');
        res.status(401);
        next(error);
      }
    } else {
      const error = new Error('Missing Values');
      res.status(401);
      next(error);
    }
  } catch (error) {
    next(error);
  }
})

module.exports = router;