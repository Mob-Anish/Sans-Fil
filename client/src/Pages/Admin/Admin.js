import "./admin.css";
import injectSheet from "react-jss";
import { MdWidgets } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as getDate from "../../Utils/date";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../../Actions/userActions";
import * as deviceAction from "../../Actions/deviceActions";
import * as routes from "../../Constants/routes";
import noProf from "../../Assets/img/no-prof.png";
import Users from "../../Components/Users/Users";
import Devices from "../../Components/Devices/devices";
import { useEffect } from "react";

const styles = {
  admin: {
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
      "& .admin-container": {
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
        "& .admin--content__holder": {
          padding: "2.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
          "& .title": {
            marginBottom: "3rem",
            fontSize: "3rem",
          },
        },
      },
    },
  },
};

const mergeSideBar = () => {
  document.querySelector(".content").classList.toggle("collapsed");
};

const Admin = ({ classes }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userInfo);
  const { userInfo, isAdmin } = userData;

  const [dashboard, setDashboard] = useState("true");
  const [users, setUsers] = useState("");
  const [unverifiedDevices, setUnverifiedDevices] = useState("");

  useEffect(() => {
    dispatch(userAction.getUnverifiedUser());
    dispatch(deviceAction.getUnverifiedDevices());
  }, []);

  // OnClick logout event
  const logout = () => {
    dispatch(userAction.logout());
    navigate(routes.HOME);
  };

  const getUsers = (e) => {
    setUsers("true");
    setUnverifiedDevices("");
    setDashboard("");
  };

  const getUnverifiedDevices = () => {
    setUsers("");
    setUnverifiedDevices("true");
  };
  return isAdmin ? (
    <div className={classes.admin}>
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
                  onClick={getUsers}
                  className={users ? "active" : "users"}
                >
                  <AiOutlineUser />
                  <h2>Users</h2>
                </li>
                <li
                  key={Math.random()}
                  onClick={getUnverifiedDevices}
                  className={unverifiedDevices ? "active" : "devices"}
                >
                  <HiOutlineLightBulb />
                  <h2>Appliances</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="admin-container">
          <div className="header">
            <div className="date">
              <h2 className="date" style={{ color: "#D158C5" }}>
                {`${getDate.getDay()} ${getDate.getMonth} ${getDate.getYear}`}
              </h2>
              <h1 className="respect">Hey {userInfo.name} 😎😎</h1>
            </div>
            <div className="profile-holder">
              <div className="img-holder">
                <div className="background-image"></div>
              </div>
              <h1 className="name">{userInfo.name}</h1>
              <div className="prof-dropdown">
                <h2 style={{ padding: "1.3rem 3rem" }} onClick={logout}>
                  Logout
                </h2>
              </div>
            </div>
          </div>
          {dashboard ? (
            <div className="admin--content__holder">
              <h1 className="title">Welcome to the Admin Dashboard 🙏 🙏</h1>
            </div>
          ) : (
            ""
          )}
          {users ? <Users /> : ""}
          {unverifiedDevices ? <Devices /> : ""}
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={routes.HOME} />
  );
};

export default injectSheet(styles)(Admin);
