const jwt = require('jsonwebtoken');

const notFound = (req, res, next) => {
  const error = new Error('Not Found - ', req.originalUrl);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    error: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Somewhere' : error.stack,
  });
};

const createJWT = (user,res) => {
  delete user._doc.createdAt;
  delete user._doc.updatedAt;
  delete user._doc.__v;
  const payload = {...user._doc};
  jwt.sign(payload, process.env.JWTSECRET, {expiresIn:'1d'}, (error, token) => {
    if (error){
      console.log(error)
      res.status(500).json(error);
    } else {
      res.status(200).json({
        status: res.statusCode,
        token:token
      });
    }
  })
}

module.exports = {
  notFound,
  errorHandler,
  createJWT
};