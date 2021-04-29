const { response } = require('express');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  /*jwt.verify(authorization, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    console.log(decoded);
    next();
  });*/
  jwt.verify(authorization, process.env.JWT_SECRETKEY, async (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    req.user = await sequelize.models.users.findOne({ where: { id: decoded.userId }});
    next();
  });
};

module.exports = authenticate;