import config from "../config";
import http from "../Utils/http";

export const buyProduct = async () => {
  const { data } = await http.patch(config.apiEndPoint.device.buyProduct, {
    accessToken: true,
  });

  return data;
};
