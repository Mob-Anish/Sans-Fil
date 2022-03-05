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

    console.log(deviceInfo);
  } catch (err) {
    console.log(err);
    dispatch({ type: deviceConstants.DEVICELIST_FETCH_FAIL });
  }
};
