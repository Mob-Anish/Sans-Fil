export const setToken = (userInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const removeToken = () => {
  localStorage.removeItem("userInfo");
};
