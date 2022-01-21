// const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    message: "signup",
  });
};

exports.login = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    message: "login",
  });
};

exports.logout = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    message: "login",
  });
};
