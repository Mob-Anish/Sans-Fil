import "./intro.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as routes from "../../Constants/routes";
import * as userAction from "../../Actions/userActions";

const Intro = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userAuthData = useSelector((state) => state.userInfo);

  const { isAuthenticated, userInfo } = userAuthData;

  // OnClick logout event
  const logout = () => {
    dispatch(userAction.logout());
    navigate(routes.HOME);
  };

  return (
    <div className="intro">
      <div className="header">
        <div className="logo">
          <h1>SansFil</h1>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#Products">Products</a>
            </li>
            <li>
              <a href="#AboutUs">About Us</a>
            </li>
            {isAuthenticated ? (
              <ul>
                <li className="auth-user">
                  <div className="img-holder">
                    <div className="bg-image"></div>
                  </div>
                  <div style={{ marginLeft: ".5rem" }}>{userInfo.name}</div>
                  <div className="prof-dropdown">
                    <h2
                      style={{ padding: "1rem 2rem", borderRadius: "1rem" }}
                      onClick={logout}
                    >
                      Logout
                    </h2>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="register-link">
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li className="login">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="intro-tag">
          <h1>Control your</h1>
          <h1>home ✌️</h1>
          <p style={{ marginTop: "2rem", fontSize: "2rem" }}>
            A smart home with advanced features that
          </p>
          <p style={{ fontSize: "2rem" }}>
            you can control through a web or mobile application.
          </p>
          <button>
            <a href="#Products">Products</a>
          </button>
        </div>
        <div className="img-holder">
          <div className="bg-image"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
