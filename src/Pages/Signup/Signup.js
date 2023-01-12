import { useEffect, useState } from "react";
import imageOne from "../../Assets/img/image1.png";
import bulb from "../../Assets/img/bulb.png";
import loginIllus from "../../Assets/img/loginIllus-1.png";
import injectSheet from "react-jss";
import { Link, useNavigate } from "react-router-dom";
import * as routes from "../../Constants/routes";
import * as userConstants from "../../Constants/userConstants";
import * as userAction from "../../Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../Components/Message/errorMessage";
import { validation } from "../../Utils/signupValidation";
// import { toast } from "react-toastify";

// toast.configure();

const styles = {
  signup: {
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
      "& .signup-content": {
        padding: "4.5rem 0 5rem 26rem",
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
        marginTop: "4.5rem",
        "& .input-field": {
          display: "flex",
          flexDirection: "column",

          "& .error-field": {
            fontSize: "1.5rem",
            color: "red",
            height: "1.5rem",
          },

          "&:not(last-child)": {
            marginBottom: "1.5rem",
          },
        },
        "& label": {
          fontSize: "2rem",
          fontWeight: "bold",
        },
        "& input": {
          padding: "10px",
          width: "40rem",
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
      "& .signup-illustration": {
        position: "absolute",
        bottom: "12rem",
        "& .img-holder": {
          height: "25rem",
          width: "25rem",
          "& .bg-stretch": {
            background: `url(${loginIllus})`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        },
      },
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
        marginBottom: "3rem",
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
            "@media (max-width: 1680px)": {
              width: "86%",
            },
          },
        },
      },
    },
  },
};

const Signup = ({ classes }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");

  const navigate = useNavigate();

  const userRegisterData = useSelector((state) => state.userRegister);

  const { error, success } = userRegisterData;

  const dispatch = useDispatch();

  // Redirect after successful signup
  useEffect(() => {
    if (success) {
      // toast.success("Verify your Email Address", { autoClose: 1000 });
      setTimeout(() => {
        navigate(routes.EMAIL_VERIFICATION);
      }, 1700);
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(address);

    const errors = validation(name, email, address, password);

    if (errors) return setSignupError(errors);

    // Dispatch action
    dispatch(userAction.register(name, email, address, password));
  };

  return (
    <div className={classes.signup}>
      {error && error.Error ? (
        <ErrorMessage reset={userConstants.USER_REGISTER_RESET} />
      ) : (
        <div className="content-holder">
          <div className="signup-content">
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
                <label htmlFor="name">Name:</label>
                <input
                  type={"text"}
                  name="name"
                  className="name"
                  placeholder="Enter your name . . ."
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="error-field">
                  {signupError ? signupError.name : ""}
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="email">Email Address:</label>
                <input
                  type={"text"}
                  name="email"
                  className="email"
                  placeholder="Enter your email . . ."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="error-field">
                  {signupError ? signupError.email : ""}
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="address">Address:</label>
                <input
                  type={"text"}
                  name="address"
                  className="address"
                  placeholder="Enter your address . . ."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="error-field">
                  {signupError ? signupError.address : ""}
                </div>
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
                  {signupError ? signupError.password : ""}
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
                <button type="submit">Signup</button>
                <span>
                  Already have an account ?{" "}
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <b
                      style={{
                        color: "#17c317",
                        cursor: "pointer",
                      }}
                    >
                      Login
                    </b>
                  </Link>
                </span>
              </div>
            </form>
          </div>
          <div className="signup-illustration">
            <div className="img-holder">
              <div className="bg-stretch"></div>
            </div>
          </div>
          <div className="image-content">
            <div className="img-holder">
              <div className="bg-stretch"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default injectSheet(styles)(Signup);
