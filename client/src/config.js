const config = {
  baseURI: process.env.REACT_APP_API_URL,
  apiEndPoint: {
    user: {
      login: "/users/login",
      create: "/users/signup",
    },
  },
};

export default config;
