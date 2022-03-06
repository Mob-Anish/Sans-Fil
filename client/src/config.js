const config = {
  baseURL: process.env.REACT_APP_API_URL,
  baseURI: process.env.REACT_APP_ANSARI_API_URL,
  apiEndPoint: {
    user: {
      login: "/auth/login",
      create: "/signup",
    },
    device: {
      getAppliances: "/appliance/auth",
      updateAppliances: "/appliance/updateState",
    },
  },
  apiEndPoints: {
    user: {
      login: "/users/login",
      create: "/users/signup",
    },
    device: {
      buyProduct: "/devices/buy",
    },
  },
};

export default config;
