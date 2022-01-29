const jwt = require("../utils/jsonWebToken");
const User = require("../models/userModel");
const validateRegisterInput = require("../utils/validation/registerValidate");
const validateLoginInput = require("../utils/validation/loginValidate");

// Create User Account.
exports.signup = async (req, res) => {
  // Input Validation
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Existing user
  const existingUser = await User.findOne({ email: req.body.email });

  // Checking if user exists.
  if (existingUser) {
    errors.email = "Email already exists";
    return res.status(400).json(errors);
  }

  // Create new user
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Token
  const token = jwt.signToken(newUser._id);

  res.status(200).json({
    status: "success",
    token: `Bearer ${token}`,
    data: {
      newUser,
    },
  });
};

// Login user account
exports.login = async (req, res, next) => {
  // Input validation
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) return res.status.json(errors);

  const existingUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  console.log(existingUser);

  // If user credentials invalid
  if (!existingUser) {
    return res.status(401).json({
      message: "Your email or password is incorrect! 😅",
    });
  }

  // Token
  const token = jwt.signToken(existingUser._id);

  res.status(200).json({
    status: "success",
    token: `Bearer ${token}`,
  });
};

exports.logout = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    message: "login",
  });
};
