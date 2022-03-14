import "./setting.css";
import { useState } from "react";

const setting = () => {
  const [appliaceName, setApplianceName] = useState("");
  const [power, setPower] = useState("");
  const [pin, setPin] = useState("");

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
              value={appliaceName}
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
          <button type="text" className="add-appliance">
            Add Appliance
          </button>
        </div>
        <div className="import-image">
          <div className="image1">
            <h2>Image upload for off state</h2>
            <input type={"file"} />
          </div>
          <div className="image2">
            <h2>Image upload for on state</h2>
            <input type={"file"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default setting;
