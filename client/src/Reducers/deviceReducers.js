import * as deviceConstants from "../Constants/deviceConstants";

// Fetch device list
export const deviceList = (state = { users: [] }, action) => {
  switch (action.type) {
    case deviceConstants.DEVICELIST_FETCH_START:
      return {
        loading: true,
      };
    case deviceConstants.DEVICELIST_FETCH_SUCCESS:
      return {
        devices: action.payload,
        count: action.payload.length,
        success: true,
      };
    case deviceConstants.DEVICELIST_FETCH_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
