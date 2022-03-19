import "./device.css";
import { useSelector, useDispatch } from "react-redux";
import * as deviceAction from "../../Actions/deviceActions";

const devices = () => {
  const dispatch = useDispatch();

  const unverifiedAppliances = useSelector(
    (state) => state.unverifiedDeviceList
  );

  const { devices } = unverifiedAppliances;

  // Verify appliance
  const acceptAppliance = (id) => {
    dispatch(deviceAction.verifyAppliance(id));
  };

  // Reject appliance
  const rejectAppliance = (id) => {
    dispatch(deviceAction.deleteAppliance(id));
  };

  return (
    <div className="devices--container">
      <h1>Appliances</h1>
      <div className="card-body">
        {devices &&
          devices.map((appliance) => {
            return (
              <div className="card">
                <div className="appliance-content">
                  <div className="img-holder">
                    <div
                      className="bg-image"
                      style={{ backgroundImage: `url(${appliance.image2})` }}
                    ></div>
                  </div>
                  <div className="content-holder">
                    <h2 className="name">Name: {appliance.name}</h2>
                    <h2 className="pin">Pin: {appliance.pin}</h2>
                    <h2 className="power">Power: {appliance.power} Watt</h2>
                    <h2 className="id">UserId: {appliance.ownerId}</h2>
                  </div>
                </div>
                <div className="button">
                  <div
                    className="accept"
                    onClick={() => acceptAppliance(appliance._id)}
                  >
                    Accept
                  </div>
                  <div
                    className="reject"
                    onClick={() => rejectAppliance(appliance._id)}
                  >
                    Reject
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default devices;
