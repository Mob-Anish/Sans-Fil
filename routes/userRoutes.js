const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

//SignUp
router.post("/signup", authController.signup);

//Login
router.post("/login", authController.login);

//Logout
router.post("/logout", authController.logout);

module.exports = router;
