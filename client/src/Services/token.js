export const setToken = (useInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const removeToken = () => {
  localStorage.removeItem("userInfo");
};
