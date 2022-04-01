export const validation = (name, power, pin, imageOff, imageOn) => {
  let errors = {};

  if (!name && !power && !pin && !imageOff && !imageOn) {
    errors.name = "Appliance name is required 😅";
    errors.power = "Power for appliance is required 😅";
    errors.pin = "Pin for appliance is required 😅";
    errors.image1Upload = "Image for off state is required 😅";
    errors.image2Upload = "Image for on state is required 😅";
    return errors;
  }

  if (!name) {
    errors.name = "Appliance name is required 😅";
    return errors;
  }

  if (!power) {
    errors.power = "Power for appliance is required 😅";
    return errors;
  }

  if (!pin) {
    errors.pin = "Pin for appliance is required 😅";
    return errors;
  }

  if (!imageOff) {
    errors.image1Upload = "Image for off state is required 😅";
    return errors;
  }

  if (!imageOn) {
    errors.image2Upload = "Image for on state is required 😅";
    return errors;
  }
};
