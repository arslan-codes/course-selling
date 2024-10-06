const { JWT_USER_PASSWORD } = require("../config");
const JWT = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = JWT.verify(token, JWT_USER_PASSWORD);
  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({
      message: "you are not signed in",
    });
  }
}

module.exports = {
  userMiddleware: userMiddleware,
};
