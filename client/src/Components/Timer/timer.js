import "./timer.css";
import Switch from "@material-ui/core/Switch";
import Select from "react-select";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deviceAction from "../../Actions/deviceActions";

const timer = () => {
  const [checked, setChecked] = useState(false);
  const [repeated, setRepeated] = useState("");
  const [appliancePin, setAppliancePin] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const deviceOptions = [];

  const dispatch = useDispatch();

  const deviceData = useSelector((state) => state.deviceList);

  const { devices } = deviceData;

  if (devices) {
    devices.forEach((device) => {
      deviceOptions.push({ value: `${device.pin}`, label: device.name });
    });
  }

  const repeatedOptions = [
    { value: "0", label: "No" },
    { value: "1", label: "Yes" },
  ];

  const handleToggleEvent = (e) => {
    checked ? setChecked(false) : setChecked(true);
  };

  const handleRecurringEvent = (selectedOption) => {
    setRepeated(selectedOption);
  };

  const handleApplianceEvent = (selectedOption) => {
    setAppliancePin(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      deviceAction.scheduleAppliance(
        appliancePin.value,
        checked,
        scheduleTime,
        repeated.value
      )
    );
  };

  return (
    <div className="timer--container">
      <h1>Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <h2>Time 🕐</h2>
          <input
            type={"text"}
            className="date"
            placeholder="Enter your time in xx:xx AM/PM"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />
        </div>
        <h2 style={{ margin: "1rem 0" }}>Appliance Selection:</h2>
        <Select options={deviceOptions} onChange={handleApplianceEvent} />
        <h2 style={{ margin: "1rem 0" }}>On/Off</h2>
        <Switch onChange={handleToggleEvent} edge="end" checked={checked} />
        <h2 style={{ margin: "1rem 0" }}>Repeated</h2>
        <Select options={repeatedOptions} onChange={handleRecurringEvent} />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};

export default timer;
