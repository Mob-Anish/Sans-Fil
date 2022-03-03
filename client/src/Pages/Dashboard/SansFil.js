import injectSheet from "react-jss";
import { MdWidgets } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { GoLightBulb } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import "./index.css";
import noProf from "../../Assets/img/no-prof.png";
import { useDispatch, useSelector } from "react-redux";
// import * as userConstants from "../../Constants/userConstants";
import * as userAction from "../../Actions/userActions";
import * as getDate from "../../Utils/date";
import { useEffect } from "react";
import * as routes from "../../Constants/routes";

const styles = {
  dashboard: {
    height: "100vh",
    background: "#e76305",
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
        background: "#f3f3f4",
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
        "& .content-holder": {
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
  console.log("hello");
  document.querySelector(".content").classList.toggle("collapsed");
};

const Dashboard = ({ classes }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const userAuthData = useSelector((state) => state.userInfo);

  // const { isAuthorized } = userAuthData;

  // useEffect(() => {
  //   if (!isAuthorized) {
  //     navigate(routes.HOME);
  //   }
  // });

  // OnClick logout event
  const logout = () => {
    dispatch(userAction.logout());
    navigate(routes.HOME);
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
                <li>
                  <HiOutlineLightBulb />
                  <h2>Appliances</h2>
                </li>
                <li>
                  <BiTime />
                  <h2>Timer</h2>
                </li>
                <li>
                  <FiSettings />
                  <h2>Setting</h2>
                </li>
                <li>
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
              <h1 className="respect">Good Morning 😎😎</h1>
            </div>
            <div className="profile-holder">
              <div className="img-holder">
                <div className="background-image"></div>
              </div>
              <h1 className="name">Anish Manandhar</h1>
              <div className="prof-dropdown">
                <h2 style={{ padding: "1.3rem 6rem" }}>Profile</h2>
                <h2 style={{ padding: "1.3rem 6rem" }} onClick={logout}>
                  Logout
                </h2>
              </div>
            </div>
          </div>
          <div className="content-holder">
            <h1 className="title">Today's Report</h1>
            <div className="card">
              <div className="appliances">
                <GoLightBulb />
                <h2>Appliances Connected</h2>
              </div>
              <h2 className="number">2</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Dashboard);
