import { useEffect, useState } from "react";
import imageOne from "../../Assets/img/login-illus.png";
// import imageBg from "../../Assets/img/bg1.jpg";
import bulb from "../../Assets/img/bulb.png";
import injectSheet from "react-jss";
import { Link, useNavigate } from "react-router-dom";
import * as routes from "../../Constants/routes";
import * as userAction from "../../Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "../../Utils/loginValidation";
import { toast } from "react-toastify";

const styles = {
  login: {
    // background: `url(${imageBg})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "65% 100%",
    // backgroundPosition: "left",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .content-holder": {
      height: "75vh",
      display: "flex",
      width: "78vw",
      borderRadius: "4rem",
      backgroundColor: "white",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      "& .login-content": {
        padding: "6rem 0 5rem 25rem",
        width: "60%",
        position: "relative",
        "& .img": {
          top: "6.2rem",
          left: "7rem",
          position: "absolute",
          height: "19rem",
          width: "15rem",
        },
      },
      "& form": {
        marginTop: "6rem",
        "& .input-field": {
          display: "flex",
          flexDirection: "column",

          "&:not(last-child)": {
            marginBottom: "1.5rem",
          },

          "& .error-field": {
            fontSize: "1.5rem",
            height: "1.5rem",
            color: "red",
          },
        },
        "& label": {
          fontSize: "2.5rem",
        },
        "& input": {
          padding: "10px",
          width: "70%",
          marginTop: "10px",
          background: "none",
          border: "none",
          borderBottom: "1px solid #000000",
          fontSize: "2rem",
          "&:focus": {
            outline: "none",
          },
        },
        "& button": {
          width: "30%",
          color: "#ffffff",
          cursor: "pointer",
          border: "none",
          background: "#17c317",
          padding: "1.5rem 2.5rem",
          fontSize: "2.2rem",
          textTransform: "uppercase",
          borderRadius: "3rem",
          fontFamily: "Quicksand",
          transition: "transform 0.3s ease-out",
        },
      },
      // "& .login-illustration": {
      //   position: "absolute",
      //   bottom: "12rem",
      //   "& .img-holder": {
      //     height: "25rem",
      //     width: "25rem",
      //     "& .bg-stretch": {
      //       background: `url(${loginIllus})`,
      //       height: "100%",
      //       width: "100%",
      //       backgroundSize: "cover",
      //       backgroundRepeat: "no-repeat",
      //       backgroundPosition: "center",
      //     },
      //   },
      // },
      "& .title": {
        lineHeight: "2.1rem",
      },
      "& span": {
        fontSize: "2rem",
        fontWeight: "bold",
      },
      "& h1": {
        fontSize: "4rem",
      },
      "& .logo-image": {
        marginBottom: "5rem",
      },
      "& .image-content": {
        margin: "2rem",
        width: "40%",
        borderRadius: "4rem",
        background: "#82ccdd",
        "& .img-holder": {
          height: "60rem",
          width: "60rem",
          "& .bg-stretch": {
            background: `url(${imageOne})`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        },
      },
    },
  },
};

toast.configure();

const Login = ({ classes }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uiError, setUiError] = useState("");

  const navigate = useNavigate();

  const userLoginData = useSelector((state) => state.userLogin);
  const userAuthData = useSelector((state) => state.userInfo);

  const { isAuthenticated } = userAuthData;

  const { error, success } = userLoginData;

  const dispatch = useDispatch();

  useEffect(() => {
    // if (isAuthorized) {
    //   return navigate(routes.DASHBOARD);
    // }

    // if (isAdmin) {
    //   return navigate(routes.ADMIN);
    // }

    // setTimeout(() => {
    //   if (success) {
    //     navigate(routes.DASHBOARD);
    //   }
    // }, 1800);

    if (isAuthenticated) {
      navigate(routes.DASHBOARD);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client Validation
    const errors = validation(email, password, setUiError);

    if (errors) return setUiError(errors);

    setUiError("");

    // Dispatch action
    dispatch(userAction.login(email, password));
  };

  return (
    <div className={classes.login}>
      <div className="content-holder">
        <div className="login-content">
          <img src={bulb} alt="bulb img" className="img" />
          <div className="logo-image">
            <img
              src="https://res.cloudinary.com/hologram/image/upload/v1648736951/bpzlatenj5xveytrccli.png"
              className="img-holder"
              style={{ width: "16rem" }}
            />
          </div>
          <div className="title">
            <span>Welcome to</span>
            <h1>Smart Home</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="email">Email Address:</label>
              <input
                type={"text"}
                name="email"
                className="email"
                placeholder="Enter your email . . ."
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="error-field">{uiError ? uiError.email : ""}</div>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password:</label>
              <input
                type={"password"}
                name="password"
                className="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="error-field">
                {uiError ? uiError.password : ""}
                {error ? error.message : ""}
              </div>
            </div>
            <div
              className="submit-field"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button type="submit">Login</button>
              <span>
                Don't have an account ?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <b
                    style={{
                      color: "#17c317",
                      cursor: "pointer",
                    }}
                  >
                    Signup
                  </b>
                </Link>
              </span>
            </div>
          </form>
        </div>
        {/* <div className="login-illustration">
          <div className="img-holder">
            <div className="bg-stretch"></div>
          </div>
        </div> */}
        <div className="image-content">
          <div className="img-holder">
            <div className="bg-stretch"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Login);
