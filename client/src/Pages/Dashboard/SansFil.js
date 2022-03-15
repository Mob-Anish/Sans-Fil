import injectSheet from "react-jss";
import { MdWidgets } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { GoLightBulb } from "react-icons/go";
import { ImPower } from "react-icons/im";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import "./index.css";
import noProf from "../../Assets/img/no-prof.png";
import { useDispatch, useSelector } from "react-redux";
// import * as userConstants from "../../Constants/userConstants";
import * as userAction from "../../Actions/userActions";
import * as deviceAction from "../../Actions/deviceActions";
import * as getDate from "../../Utils/date";
import { useEffect, useState } from "react";
import * as routes from "../../Constants/routes";
import Appliance from "../../Components/Appliance/appliance";
import Timer from "../../Components/Timer/timer";
import Setting from "../../Components/Setting/setting";
import AboutUs from "../../Components/AboutUs/aboutUs";
import Power from "../../Components/Power Consumption/power";
import { getYear, getCurrentMonth } from "../../Utils/date";

const styles = {
  dashboard: {
    height: "100vh",
    background: "#E6E6EA",
    padding: "6rem",
    "& .content": {
      height: "100%",
      display: "flex",
      "& .sidebar": {
        borderTopLeftRadius: "2rem",
        borderBottomLeftRadius: "2rem",
        backgroundColor: "#ffffff",
        width: "32rem",
        "& .content-holder": {
          height: "100%",
          "& .title": {
            padding: "2.5rem 2.5rem 0 2.5rem",
            fontSize: "1.9rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
          "& svg": {
            fontSize: "3.5rem",
            color: "#A1A0A3",
            cursor: "pointer",
            "&.active": {
              background: "#000000",
              color: "#FFFFFF",
              padding: "5px",
              borderRadius: "50%",
            },
          },
          "& .menu-bar": {
            marginTop: "6rem",
            marginRight: "1rem",

            "& ul": {
              listStyle: "none",
              "& li": {
                padding: "1.3rem 2.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                borderTopRightRadius: "3rem",
                borderBottomRightRadius: "3rem",
                marginBottom: "1.5rem",
                "&.active": {
                  background: "red",
                  "& svg": {
                    color: "#ffffff",
                  },
                },
                "& h2": {
                  fontSize: "2rem",
                  paddingLeft: "3.5rem",
                },
                "&:hover": {
                  background: "red",
                  "& svg": {
                    color: "#ffffff",
                  },
                },
              },
            },
          },
        },
      },
      "& .dashboard-container": {
        width: "calc(100% - 32rem)",
        background: "#F3F3F4",
        borderTopRightRadius: "2rem",
        borderBottomRightRadius: "2rem",
        "& .header": {
          padding: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          "& .profile-holder": {
            display: "flex",
            alignItems: "center",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "5px 10px",
            borderRadius: "3.2rem",
            cursor: "pointer",
            position: "relative",
            "&:hover .prof-dropdown": {
              display: "flex",
            },
            "&:hover": {
              boxShadow: "none",
            },
            "& .prof-dropdown": {
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              position: "absolute",
              borderRadius: "1rem",
              left: "0",
              top: "6rem",
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              fontSize: "1.2rem",
              "& h2": {
                borderRadius: "1rem",
              },
              "& h2:hover": {
                background: "red",
              },
            },
            "& .img-holder": {
              marginRight: "1rem",
              height: "5rem",
              width: "5rem",
              borderRadius: "50%",
              "& .background-image": {
                height: "100%",
                width: "100%",
                background: `url(${noProf})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
              },
            },
          },
        },
        "& .dashboard--content__holder": {
          padding: "2.5rem",
          "& .title": {
            marginBottom: "3rem",
          },
          "& .card": {
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "10px",
            width: "43%",
            padding: "1.5rem",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            "& .appliances": {
              display: "flex",
              alignItems: "center",
              "& svg": {
                fontSize: "7rem",
                color: "#FFFFFF",
                padding: "10px",
                borderRadius: "50%",
                background: "#6bc4dc",
                marginRight: "1rem",
              },
            },
            "& h2": {
              fontSize: "1.7rem",
            },
          },
        },
      },
    },
  },
};

const mergeSideBar = () => {
  document.querySelector(".content").classList.toggle("collapsed");
};

const Dashboard = ({ classes }) => {
  const [appliances, setAppliances] = useState("");
  const [dashboard, setDashboard] = useState("true");
  const [timer, setTimer] = useState("");
  const [setting, setSetting] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [power, setPower] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deviceData = useSelector((state) => state.deviceList);
  const { count } = deviceData;
  const userData = useSelector((state) => state.userInfo);

  const { userInfo } = userData;

  useEffect(() => {
    dispatch(deviceAction.getAppliances());
    dispatch(deviceAction.getApplianceLogs(getYear, getCurrentMonth));
  }, []);

  // OnClick logout event
  const logout = () => {
    dispatch(userAction.logout());
    navigate(routes.HOME);
  };

  const getAppliance = (e) => {
    setAppliances("true");
    setDashboard("");
    setTimer("");
    setSetting("");
    setAboutUs("");
    setPower("");
  };

  const getTimer = () => {
    setAppliances("");
    setDashboard("");
    setTimer("true");
    setSetting("");
    setAboutUs("");
    setAboutUs("");
    setPower("");
  };

  const getSetting = () => {
    setAppliances("");
    setDashboard("");
    setTimer("");
    setSetting("true");
    setAboutUs("");
    setPower("");
  };

  const getAboutUs = () => {
    setAppliances("");
    setDashboard("");
    setTimer("");
    setSetting("");
    setAboutUs("true");
    setPower("");
  };

  const getPower = () => {
    setAppliances("");
    setDashboard("");
    setTimer("");
    setSetting("");
    setAboutUs("");
    setPower("true");
  };

  return (
    <div className={classes.dashboard}>
      <div className="content">
        <div className="sidebar">
          <div className="content-holder">
            <div className="title">
              <h1>Sans Fil</h1>
              <MdWidgets className="active" onClick={mergeSideBar} />
            </div>
            <div className="menu-bar">
              <ul>
                <li
                  key={Math.random()}
                  onClick={getAppliance}
                  className={appliances ? "active" : "appliances"}
                >
                  <HiOutlineLightBulb />
                  <h2>Appliances</h2>
                </li>
                <li
                  key={Math.random()}
                  onClick={getPower}
                  className={power ? "active" : "power"}
                >
                  <ImPower />
                  <h2>Energy Usage</h2>
                </li>
                <li
                  key={Math.random()}
                  onClick={getTimer}
                  className={timer ? "active" : "timer"}
                >
                  <BiTime />
                  <h2>Timer</h2>
                </li>
                <li
                  key={Math.random()}
                  onClick={getSetting}
                  className={setting ? "active" : "setting"}
                >
                  <FiSettings />
                  <h2>Setting</h2>
                </li>
                <li
                  key={Math.random()}
                  onClick={getAboutUs}
                  className={aboutUs ? "active" : "aboutus"}
                >
                  <BiBookmark />
                  <h2>About Us</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="header">
            <div className="date">
              <h2 className="date" style={{ color: "#D158C5" }}>
                {`${getDate.getDay()} ${getDate.getMonth} ${getDate.getYear}`}
              </h2>
              <h1 className="respect">
                Welcome {userInfo.name} to the smart home 😎😎
              </h1>
            </div>
            <div className="profile-holder">
              <div className="img-holder">
                <div className="background-image"></div>
              </div>
              <h1 className="name">{userInfo.name}</h1>
              <div className="prof-dropdown">
                <h2 style={{ padding: "1.3rem 6rem" }}>Profile</h2>
                <h2 style={{ padding: "1.3rem 6rem" }} onClick={logout}>
                  Logout
                </h2>
              </div>
            </div>
          </div>
          {dashboard ? (
            <div className="dashboard--content__holder">
              <h1 className="title">Today's Report</h1>
              <div className="card">
                <div className="appliances">
                  <GoLightBulb />
                  <h2>Appliances Connected</h2>
                </div>
                <h2 className="number">{count}</h2>
              </div>
            </div>
          ) : (
            ""
          )}
          {appliances ? <Appliance /> : ""}
          {power ? <Power /> : ""}
          {timer ? <Timer /> : ""}
          {setting ? <Setting /> : ""}
          {aboutUs ? <AboutUs /> : ""}
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Dashboard);
