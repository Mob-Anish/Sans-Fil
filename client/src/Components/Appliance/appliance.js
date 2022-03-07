import { useSelector, useDispatch } from "react-redux";
import "./appliance.css";
import Switch from "@material-ui/core/Switch";
// import { useState } from "react";
import * as deviceAction from "../../Actions/deviceActions";
// import { useEffect } from "react";

const appliance = () => {
  // const [devState, setDevState] = useState("");

  const dispatch = useDispatch();

  const deviceData = useSelector((state) => state.deviceList);
  const deviceState = useSelector((state) => state.deviceState);

  const { devices } = deviceData;
  const { appliance } = deviceState;

  // if (devices) console.log(devices);
  // if (appliance) console.log(appliance);

  const handleToggleEvent = (id, isOn) => {
    if (isOn) dispatch(deviceAction.updateAppliance(id, false));
    if (!isOn) dispatch(deviceAction.updateAppliance(id, true));
  };

  // useEffect(() => {
  //   dispatch(deviceAction.getAppliances());
  // }, []);

  return (
    <div className="appliance--container">
      <div className="title">
        <h1>Appliances</h1>
      </div>
      <div className="card-body">
        {devices &&
          devices.map((device) => {
            return (
              <div className="card">
                <div className="img-holder">
                  <div
                    className="bg-image"
                    style={{
                      backgroundImage: `url(${
                        device.isOn ? device.image2 : device.image1
                      })`,
                    }}
                  ></div>
                </div>
                <Switch
                  onChange={() => handleToggleEvent(device._id, device.isOn)}
                  edge="end"
                  checked={
                    appliance && device._id == appliance._id
                      ? appliance.isOn
                      : device.isOn
                  }
                  label={device.name}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default appliance;
