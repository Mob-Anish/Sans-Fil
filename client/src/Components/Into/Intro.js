import "./intro.css";
import { Link } from "react-router-dom";

const Intro = () => {
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
            <li>About</li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
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
          <button>Products</button>
        </div>
        <div className="img-holder">
          <div className="bg-image"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
