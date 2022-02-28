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

export const removeToken = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");
};
