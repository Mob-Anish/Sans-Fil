import "./power.css";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { getYearAndMonth } from "../../Utils/date";
import * as deviceAction from "../../Actions/deviceActions";
// import { useEffect } from "react";
// import { getYear, getCurrentMonth } from "../../Utils/date";

const power = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const logReport = useSelector((state) => state.applianceLog);

  const { applianceLog } = logReport;

  // useEffect(() => {
  //   dispatch(deviceAction.getApplianceLogs(getYear, getCurrentMonth));
  // }, []);

  // Update date along with power consumption
  const changeDate = (date) => {
    setStartDate(date);
    const arr = date.toString().split(" ");
    const monthNumber = getYearAndMonth(arr[1]);
    dispatch(deviceAction.getApplianceLogs(arr[3], monthNumber));
  };

  return (
    <div className="power--container">
      <h1>Energy Consumption 💡</h1>
      <div className="content-holder">
        <DatePicker
          dateFormat="yyyy MMMM"
          showMonthYearPicker
          selected={startDate}
          onChange={(date) => changeDate(date)}
        />
        {applianceLog && applianceLog.length == "" && (
          <div
            className="no-results"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Sorry there are no connection!!😅😅
          </div>
        )}
        {applianceLog &&
          applianceLog.map((log) => {
            return (
              <div className="energy-card">
                <div className="image">
                  <div className="img-holder">
                    <div
                      className="bg-image"
                      style={{ backgroundImage: `url(${log.image})` }}
                    ></div>
                  </div>
                  <div
                    className="device-name"
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <div>{log.name}</div>
                    <div>{log.power} Watt</div>
                  </div>
                </div>
                <div
                  className="power-consumed"
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {log.totalPowerConsumed} kWh
                </div>
              </div>
            );
          })}
        {/* <div className="energy-card">
          <div className="image">
            <div className="img-holder">
              <div
                className="bg-image"
                style={{ backgroundImage: `url(${ImageBulb})` }}
              ></div>
            </div>
            <div
              className="device-name"
              style={{ fontSize: "1.5rem", color: "white" }}
            >
              Light
            </div>
          </div>
          <div
            className="power-consumed"
            style={{ fontSize: "1.5rem", color: "white" }}
          >
            1.99 kwh
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default power;
