import "./power.css";
import { useSelector, useDispatch } from "react-redux";
import ImageBulb from "../../Assets/img/bulb.png";

const power = () => {
  // const dispatch = useDispatch();

  const logReport = useSelector((state) => state.applianceLog);

  const { applianceLog } = logReport;

  console.log(applianceLog);

  return (
    <div className="power--container">
      <h1>Energy Consumption 💡</h1>
      <div className="content-holder">
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
