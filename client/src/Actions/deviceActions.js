import * as deviceServices from "../Services/device";
import * as deviceConstants from "../Constants/deviceConstants";

export const getAppliances = () => async (dispatch) => {
  try {
    dispatch({ type: deviceConstants.DEVICELIST_FETCH_START });

    const deviceInfo = await deviceServices.getAppliances();

    const { data } = deviceInfo;

    dispatch({
      type: deviceConstants.DEVICELIST_FETCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: deviceConstants.DEVICELIST_FETCH_FAIL });
  }
};

export const updateAppliance = (id, isOn) => async (dispatch) => {
  try {
    const body = {
      id,
      isOn,
    };

    const deviceInfo = await deviceServices.updateAppliance(body);

    const { data } = deviceInfo;

    dispatch({
      type: deviceConstants.DEVICESTATE_UPDATE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Add appliance
export const createAppliance = (formData) => async (dispatch) => {
  try {
    const deviceInfo = await deviceServices.createAppliance(formData);

    const { data } = deviceInfo;

    dispatch({
      type: deviceConstants.DEVICELIST_ADD_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getApplianceLogs = (year, month) => async (dispatch) => {
  try {
    dispatch({ type: deviceConstants.DEVICE_APPLIANCE_LOGS_START });

    const applianceLog = await deviceServices.getApplianceLog(year, month);

    const { data } = applianceLog;

    dispatch({
      type: deviceConstants.DEVICE_APPLIANCE_LOGS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: deviceConstants.DEVICE_APPLIANCE_LOGS_FAIL });
  }
};

export const getUnverifiedDevices = () => async (dispatch) => {
  try {
    dispatch({ type: deviceConstants.UNVERIFIED_DEVICELIST_FETCH_START });

    const unverifiedDevices = await deviceServices.getUnverifiedDevices();

    const { data } = unverifiedDevices;

    dispatch({
      type: deviceConstants.UNVERIFIED_DEVICELIST_FETCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: deviceConstants.UNVERIFIED_DEVICELIST_FETCH_FAIL });
  }
};

// Verify Appliance
export const verifyAppliance = (applianceId) => async (dispatch) => {
  try {
    const verifiedUser = await userServices.verifyAppliance(applianceId);

    const { data } = verifiedUser;

    dispatch({ type: deviceConstants.UNVERIFIED_DEVICE_UPDATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
