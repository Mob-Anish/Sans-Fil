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
    case deviceConstants.DEVICELIST_FETCH_FAIL:
      return {
        error: action.payload,
      };
    case deviceConstants.DEVICELIST_ADD_SUCCESS:
      return {
        devices: state.devices,
        success: true,
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

export const scheduleLog = (state = { logs: [] }, action) => {
  switch (action.type) {
    case deviceConstants.APPLIANCE_SCHEDULE_LOGS_START:
      return {
        loading: true,
      };
    case deviceConstants.APPLIANCE_SCHEDULE_LOGS_SUCCESS:
      return {
        scheduleLog: action.payload,
        success: true,
      };
    case deviceConstants.APPLIANCE_SCHEDULE_LOGS_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const unverifiedDeviceList = (state = { devices: [] }, action) => {
  switch (action.type) {
    case deviceConstants.UNVERIFIED_DEVICELIST_FETCH_START:
      return {
        loading: true,
      };
    case deviceConstants.UNVERIFIED_DEVICELIST_FETCH_SUCCESS:
      return {
        devices: action.payload,
        count: action.payload.length,
        success: true,
      };
    case deviceConstants.UNVERIFIED_DEVICE_UPDATE:
      const item = action.payload;
      const orgDevices = state.devices;

      orgDevices.forEach((el, i, arr) => {
        if (el._id == item._id) {
          arr.splice(i, 1);
        }
      });

      return {
        devices: orgDevices,
        count: orgDevices.length,
      };
    case deviceConstants.UNVERIFIED_DEVICE_DELETE:
      const applianceId = action.payload;
      const unverDevices = state.devices;

      unverDevices.forEach((el, i, arr) => {
        if (el._id == applianceId) {
          arr.splice(i, 1);
        }
      });

      return {
        devices: unverDevices,
        count: unverDevices.length,
      };

    case deviceConstants.UNVERIFIED_DEVICELIST_FETCH_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
