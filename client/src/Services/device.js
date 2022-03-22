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
  const { data } = await http.put(config.apiEndPoint.device.updateAppliance, {
    body,
    accessToken: true,
  });

  return data;
};

// Create user appliances
export const createAppliance = async (body) => {
  const { data } = await http.post(config.apiEndPoint.device.createAppliance, {
    body,
    accessToken: true,
  });

  return data;
};

export const getApplianceLog = async (year, month) => {
  const { data } = await http.get(
    config.apiEndPoint.device.getAppliancesLog +
      `?selectedDate=${year}-${month}`,
    {
      accessToken: true,
    }
  );

  return data;
};

export const getUnverifiedDevices = async () => {
  const { data } = await http.get(
    config.apiEndPoint.device.getUnverfiedDevice,
    {
      accessToken: true,
    }
  );

  return data;
};

export const verifyAppliance = async (applianceId) => {
  const { data } = await http.put(
    config.apiEndPoint.device.verifyAppliance + `/${applianceId}`,
    {
      accessToken: true,
    }
  );

  return data;
};

export const deleteAppliance = async (applianceId) => {
  const { data } = await http.remove(
    config.apiEndPoint.device.deleteAppliance + `/${applianceId}`,
    {
      accessToken: true,
    }
  );

  return data;
};

export const scheduleAppliance = async (body) => {
  const { data } = await http.post(
    config.apiEndPoint.schedule.scheduleAppliance,
    { body, accessToken: true }
  );

  return data;
};
