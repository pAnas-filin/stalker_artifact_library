const jwt = require("jsonwebtoken");
const {
  jwtSecret,
  jwtExpiresIn,
  jwtRefreshExpiresIn,
} = require("../config/jwt");

// gen token
function generateToken(payload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
}

// refr token
function generateRefreshToken(payload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtRefreshExpiresIn });
}

// verify token
function verifyToken(token) {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
};
