module.exports = {
  jwtSecret: process.env.JWT_SECRET || "secret",
  jwtExpiresIn: "2h",
  jwtRefreshExpiresIn: "1d",
};
