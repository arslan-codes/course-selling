const { JWT_ADMIN_PASSWORD } = require("../../config");
const JWT = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = JWT.verify(token, JWT_ADMIN_PASSWORD);
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
  adminMiddleware: adminMiddleware,
};
