import validator from "validator";

export const validation = (email, password) => {
  let errors = {};

  if (!email && !password) {
    errors.email = "Email Field is required 😅";
    errors.password = "Password Field is required 😅";
    return errors;
  }

  if (!email) {
    errors.email = "Email Field is required 😅";
    return errors;
  }

  if (!password) {
    errors.password = "Password Field is required 😅";
    return errors;
  }

  if (!validator.isEmail(email)) {
    errors.email = "Email is not valid 😅";
    return errors;
  }

  if (!validator.isLength(password, { min: 8, max: 30 })) {
    errors.password = "Password must be atleast 8 characters😅";
    return errors;
  }
};
