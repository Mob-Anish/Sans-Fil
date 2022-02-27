const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
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
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

//---------- Users route --------------//
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  authController.restrictTo("admin"),
  userController.getAllUsers
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  userController.deleteUser
);

router.patch(
  "/buy",
  passport.authenticate("jwt", { session: false }),
  userController.buyProduct
);

module.exports = router;
