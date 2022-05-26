import { useSelector, useDispatch } from "react-redux";
import "./appliance.css";
import Switch from "@material-ui/core/Switch";
import * as deviceAction from "../../Actions/deviceActions";
// import { useEffect } from "react";

const appliance = () => {
  const dispatch = useDispatch();

  const deviceData = useSelector((state) => state.deviceList);
  const deviceState = useSelector((state) => state.deviceList);

  const { devices, error } = deviceData;

  console.log(devices, error);

  const handleToggleEvent = (id, isOn) => {
    if (isOn) dispatch(deviceAction.updateAppliance(id, false));
    if (!isOn) dispatch(deviceAction.updateAppliance(id, true));
  };

  return (
    <div className="appliance--container">
      <div className="title">
        <h1>Appliances</h1>
      </div>
      {error ? (
        <div className="card-body">
          <h1
            style={{
              fontSize: "2.2rem",
              textAlign: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            Oops the device is offline 😅 😅 !!
          </h1>
        </div>
      ) : (
        <div className="card-body">
          {devices.length ? (
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
                  <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
                    {device.name}
                  </h1>
                  <Switch
                    onChange={() => handleToggleEvent(device._id, device.isOn)}
                    edge="end"
                    checked={device.isOn}
                    label={device.name}
                  />
                </div>
              );
            })
          ) : (
            <h1
              style={{
                fontSize: "2.2rem",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "40%",
              }}
            >
              Oops there are no appliances registered in your account 😅 😅 !!
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default appliance;
