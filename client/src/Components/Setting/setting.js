import "./setting.css";
import { useState } from "react";
import * as deviceAction from "../../Actions/deviceActions";
import { useDispatch, useSelector } from "react-redux";

const setting = () => {
  const [applianceName, setApplianceName] = useState("");
  const [power, setPower] = useState("");
  const [pin, setPin] = useState("");
  const [uploadOnImage, setUploadOnImage] = useState("");
  const [uploadOffImage, setUploadOffImage] = useState("");

  const dispatch = useDispatch();

  const image1Upload = (e) => {
    setUploadOffImage(e.target.files[0]);
  };

  const image2Upload = (e) => {
    setUploadOnImage(e.target.files[0]);
  };

  const addAppliance = () => {
    const formData = new FormData();
    formData.append("name", applianceName);
    formData.append("power", power);
    formData.append("pin", pin);
    formData.append("image1", uploadOffImage);
    formData.append("image2", uploadOnImage);
    dispatch(deviceAction.createAppliance(formData));
  };

  return (
    <div className="setting--container">
      <h1>Add Device</h1>
      <div className="content-holder">
        <div className="input-holder">
          <div className="input-field">
            <label htmlFor="applianceName">Appliance Name</label>
            <input
              type={"text"}
              name="applianceName"
              className="appliance-name"
              placeholder="Light Bulb"
              autoFocus
              value={applianceName}
              onChange={(e) => setApplianceName(e.target.value)}
            />
            {/* <div className="error-field">{uiError ? uiError.email : ""}</div> */}
          </div>
          <div className="input-field">
            <label htmlFor="power">Power</label>
            <input
              type={"number"}
              name="power"
              className="power"
              placeholder="100"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
            {/* <div className="error-field">
            {uiError ? uiError.password : ""}
            {error ? error.message : ""}
          </div> */}
          </div>
          <div className="input-field">
            <label htmlFor="pin">Pin</label>
            <input
              type={"number"}
              name="pin"
              className="pin"
              placeholder="1"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            {/* <div className="error-field">
            {uiError ? uiError.password : ""}
            {error ? error.message : ""}
          </div> */}
          </div>
          <button type="text" className="add-appliance" onClick={addAppliance}>
            Add Appliance
          </button>
        </div>
        <div className="import-image">
          <div className="image1">
            <h2>Image upload for off state</h2>
            <input type={"file"} onChange={image1Upload} />
          </div>
          <div className="image2">
            <h2>Image upload for on state</h2>
            <input type={"file"} onChange={image2Upload} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default setting;
