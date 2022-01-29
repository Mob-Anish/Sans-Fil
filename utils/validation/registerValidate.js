// Validation
const validator = require("validator");
const isEmpty = require("./isValid");

const validateRegisterInput = (data) => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = "Your name is not strong enough 😅";
  }

  if (!validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password is not strong enough 😅";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "Your name is empty";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is not valid 😅";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Your email is empty 😅";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required 😅";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
