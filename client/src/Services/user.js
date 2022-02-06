import config from "../config";
import http from "../Utils/http";

export const registerUser = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.create, {
    body,
  });

  return data;
};
