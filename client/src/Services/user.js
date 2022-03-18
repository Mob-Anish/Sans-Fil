import config from "../config";
import http from "../Utils/http";

export const registerUser = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.create, {
    body,
  });

  return data;
};

export const loginUser = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.login, {
    body,
  });

  return data;
};

export const getUnverifiedUsers = async (body) => {
  const { data } = await http.get(config.apiEndPoint.user.getUnverfiedUser, {
    body,
    accessToken: true,
  });

  return data;
};

export const grantArduinoToken = async (body, userId) => {
  const { data } = await http.put(
    config.apiEndPoint.user.grantArduinoToken + `/${userId}`,
    {
      body,
      accessToken: true,
    }
  );

  return data;
};
