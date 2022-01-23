const validator = require("validator");
const isEmpty = require("./isValid");

const validateRegisterInput = (data) => {
  let errors = {};

  if (!validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = "Your name length is not enough";
  }

  if (!validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.name = "Password is not strong enough";
  }

  if (!validator.isEmail(data.email)) {
    errors.name = "Email is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
