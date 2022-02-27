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
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Token
  const token = jwt.signToken(user._id);

  res.status(200).json({
    status: "success",
    token: `Bearer ${token}`,
    data: {
      user,
    },
  });
};

// Login user account
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Input validation
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  // Check the user credentials
  const user = await User.findOne({
    email,
  }).select("+password");

  // If user credentials invalid
  if (!user) {
    errors.email = "Umm there is no such user with that email.😅";
    return res.status(401).json(errors);
  }

  // If password matches
  if (password === user.password) {
    // Hiding password
    user.password = undefined;

    // Token
    const token = jwt.signToken(user._id);

    return res.status(200).json({
      status: "success",
      token: `Bearer ${token}`,
      data: {
        user,
      },
    });
  }

  // If password doesnot match
  if (password !== existingUser.password) {
    existingUser.password = undefined;
    errors.password = "Your email or password may be incorrect😅";
    return res.status(401).json(errors);
  }
};

exports.logout = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    message: "login",
  });
};
