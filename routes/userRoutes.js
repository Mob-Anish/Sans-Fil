const express = require("express");
const authController = require("../controllers/authController");
const passport = require("passport");

const router = express.Router();

//SignUp
router.post("/signup", authController.signup);

//Login
router.post("/login", authController.login);

//Logout
router.post("/logout", authController.logout);

//Test
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({
      status: "success",
    });
  }
);

module.exports = router;
