const express = require("express");
const deviceController = require("../controllers/deviceController");
const passport = require("passport");

const router = express.Router();

router.patch(
  "/buy",
  passport.authenticate("jwt", { session: false }),
  deviceController.buyProduct
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  deviceController.getAllDevices
);

module.exports = router;
