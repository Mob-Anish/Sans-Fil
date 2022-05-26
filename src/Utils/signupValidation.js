import validator from "validator";

export const validation = (name, email, address, password) => {
  let errors = {};

  if (!name && !email && !address && !password) {
    errors.name = "Name Field is required 😅";
    errors.email = "Name Field is required 😅";
    errors.address = "Name Field is required 😅";
    errors.password = "Name Field is required 😅";
    return errors;
  }

  if (!name) {
    errors.name = "Name Field is required 😅";
    return errors;
  }

  if (!email) {
    errors.email = "Email Field is required 😅";
    return errors;
  }
  if (!address) {
    errors.address = "Address Field is required 😅";
    return errors;
  }
  if (!password) {
    errors.password = "Password Field is required 😅";
    return errors;
  }

  if (!validator.isLength(name, { min: 3, max: 30 })) {
    errors.name = "Name must be atleast 3 characters😅";
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
