const { body, param } = require("express-validator");

exports.registerValidator = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").isLength({ min: 6 }).withMessage("Password too short"),
];

exports.loginValidator = [
  body("email").isEmail(),
  body("password").exists().withMessage("Password required"),
];
