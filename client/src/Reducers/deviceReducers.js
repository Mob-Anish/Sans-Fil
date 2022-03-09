import * as deviceConstants from "../Constants/deviceConstants";

// Fetch device list
export const deviceList = (state = { devices: [] }, action) => {
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
    case deviceConstants.DEVICESTATE_UPDATE:
      const item = action.payload;

      const mapData = state.devices.map((device) =>
        device._id === item._id ? item : device
      );

      return {
        devices: mapData,
      };
    case deviceConstants.DEVICESTATE_UPDATE_FAIL:
      return {
        error: action.payload,
      };
    case deviceConstants.DEVICELIST_FETCH_FAIL:
      return {
        error: action.payload,
      };
    case deviceConstants.DEVICELIST_RESET:
      return {};
    default:
      return state;
  }
};

export const applianceLog = (state = { logs: [] }, action) => {
  switch (action.type) {
    case deviceConstants.DEVICE_APPLIANCE_LOGS_START:
      return {
        loading: true,
      };
    case deviceConstants.DEVICE_APPLIANCE_LOGS_SUCCESS:
      return {
        applianceLog: action.payload,
        success: true,
      };
    case deviceConstants.DEVICE_APPLIANCE_LOGS_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
