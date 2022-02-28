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

export const buyProduct = async () => {
  const { data } = await http.patch(config.apiEndPoint.user.buyProduct, {
    accessToken: true,
  });

  return data;
};
