// Set Token
export const setToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

// Set user information
export const setUserInfo = (userInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

// Set user appliance details
export const setDeviceState = (deviceState) => {
  localStorage.setItem("deviceState", JSON.stringify(deviceState));
};

// Get user appliance details
export const getDeviceState = (deviceState) => {
  return JSON.parse(localStorage.getItem("deviceState"));
};

export const removeToken = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");
};
