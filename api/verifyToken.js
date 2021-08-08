const jwt = require('jsonwebtoken');

function verify(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (err,payload) => {
      if (err) res.status(403).json('Token is not Valid!');
      req.user = payload;
      next();
    });
  } else {
    return res.status(401).json('You Are Not Authenticated!');
  }
}

module.exports = verify;