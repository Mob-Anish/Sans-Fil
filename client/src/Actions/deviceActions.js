import * as deviceServices from "../Services/device";
import * as tokenSystem from "../Services/token";
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
    dispatch({ type: deviceConstants.DEVICESTATE_UPDATE_START });

    const body = {
      id,
      isOn,
    };

    console.log(body);

    const deviceInfo = await deviceServices.updateAppliance(body);

    const { data } = deviceInfo;

    dispatch({
      type: deviceConstants.DEVICESTATE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: deviceConstants.DEVICESTATE_UPDATE_FAIL });
  }
};

export const getApplianceLogs = () => async (dispatch) => {
  try {
    dispatch({ type: deviceConstants.DEVICE_APPLIANCE_LOGS_START });

    const applianceLog = await deviceServices.getApplianceLog();

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
