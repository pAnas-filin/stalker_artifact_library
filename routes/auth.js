const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const {
  registerValidator,
  loginValidator,
} = require("../validators/auth.validator");

router.post("/register", registerValidator, AuthController.register);
router.post("/login", loginValidator, AuthController.login);
router.post("/refresh-token", AuthController.refreshToken);

module.exports = router;
