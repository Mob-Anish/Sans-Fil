const config = {
  baseURL: process.env.REACT_APP_API_URL,
  baseURI: process.env.REACT_APP_ANSARI_API_URL,
  apiEndPoint: {
    user: {
      login: "/auth/login",
      create: "/signup",
      getUnverfiedUser: "/user/unverified-users",
      grantArduinoToken: "/user/verify-user",
    },
    device: {
      getAppliances: "/appliance/auth",
      updateAppliance: "/appliance/updateState",
      createAppliance: "/appliance/",
      getAppliancesLog: "/appliance/auth-appliancesLog",
      getUnverfiedDevice: "/appliance/auth/unverified",
      verifyAppliance: "/appliance/verify-appliance",
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
