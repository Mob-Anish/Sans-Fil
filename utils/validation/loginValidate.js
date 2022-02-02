const validator = require("validator");
const isEmpty = require("./isValid");

const validateLoginInput = (data) => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is not valid 😅";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Your email is empty 😅";
  }

  if (!validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be atleast 8 characters😅";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required 😅";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateLoginInput;
