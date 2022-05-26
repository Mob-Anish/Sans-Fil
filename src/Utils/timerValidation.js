export const validation = (time, appliance, repeated) => {
  let errors = {};

  if (!time && !appliance && !repeated) {
    errors.time = "Timer cant be set without time 😅";
    errors.appliance = "Appliance need to be selected 😅";
    errors.repeated = "The repeated need to be selected 😅";
    return errors;
  }

  if (!time) {
    errors.time = "Timer cant be set without time 😅";
    return errors;
  }

  if (!appliance) {
    errors.appliance = "Appliance need to be selected 😅";
    return errors;
  }

  if (!repeated) {
    errors.repeated = "The repeated need to be selected 😅";
    return errors;
  }
};
