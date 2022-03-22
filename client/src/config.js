const config = {
  baseURL: process.env.REACT_APP_API_URL,
  baseURI: process.env.REACT_APP_ANSARI_API_URL,
  scheduleURI: process.env.REACT_APP_PAPPU_API_URL,
  apiEndPoint: {
    user: {
      login: "/auth/login",
      create: "/auth/register",
      verifyEmail: "/auth/verify-email",
      getUnverfiedUser: "/user/unverified-users",
      grantArduinoToken: "/user/verify-user",
    },
    device: {
      getAppliances: "/appliance/auth",
      updateAppliance: "/appliance/updateState",
      createAppliance: "/appliance/",
      getAppliancesLog: "/appliance/auth-appliancesLog",
      getUnverfiedDevice: "/appliance/unverified-appliances",
      verifyAppliance: "/appliance/verify-appliance",
      deleteAppliance: "/appliance",
    },
    schedule: {
      scheduleAppliance: "/schedule/set-schedule",
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
