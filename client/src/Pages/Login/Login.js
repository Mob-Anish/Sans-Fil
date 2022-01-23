// import axios from 'axios';
import imageOne from "../../Assets/img/login-illus.png";
// import imageBg from "../../Assets/img/bg1.jpg";
import bulb from "../../Assets/img/bulb.png";
import loginIllus from "../../Assets/img/loginIllus-1.png";
// import loginSvg from "../../Assets/svg/wave.svg";
import injectSheet from "react-jss";

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
        "& img": {
          top: "6.2rem",
          left: "7rem",
          position: "absolute",
          height: "19rem",
          width: "15rem",
        },
      },
      "& form": {
        marginTop: "6rem",
        display: "flex",
        flexDirection: "column",
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
          "&.email": {
            marginBottom: "3rem",
          },
          "&:focus": {
            outline: "none",
          },
        },
        "& button": {
          marginTop: "5rem",
          width: "30%",
          color: "#ffffff",
          cursor: "pointer",
          border: "none",
          background: "purple",
          padding: "1.5rem 2.5rem",
          fontSize: "2.2rem",
          textTransform: "uppercase",
          borderRadius: "3rem",
          fontFamily: "Quicksand",
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
        background: "red",
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

const Login = ({ classes }) => {
  return (
    <div className={classes.login}>
      <div className="content-holder">
        <div className="login-content">
          <img src={bulb} alt="bulb img" />
          <div className="logo-image">
            <h1>Sans Fil</h1>
          </div>
          <div className="title">
            <span>Welcome to</span>
            <h1>Smart Home</h1>
          </div>
          <form>
            <label for="email">Email Address:</label>
            <input
              type={"text"}
              name="email"
              className="email"
              placeholder="Enter your email . . ."
              required
            />
            <label for="password">Password:</label>
            <input
              type={"password"}
              name="password"
              className="password"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
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