import config from "../config";
import http from "../Utils/http";

// Get user appliances
export const getAppliances = async () => {
  const { data } = await http.get(config.apiEndPoint.device.getAppliances, {
    accessToken: true,
  });

  return data;
};
