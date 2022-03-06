import config from "../config";
import http from "../Utils/http";

// Get user appliances
export const getAppliances = async () => {
  const { data } = await http.get(config.apiEndPoint.device.getAppliances, {
    accessToken: true,
  });

  return data;
};

// Update user appliances
export const updateAppliance = async (body) => {
  const { data } = await http.put(config.apiEndPoint.device.updateAppliances, {
    body,
    accessToken: true,
  });

  return data;
};
