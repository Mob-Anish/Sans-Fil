import About from "../../Components/About/about";
import Footer from "../../Components/Footer/footer";
import Intro from "../../Components/Intro/Intro";
import Product from "../../Components/Product/product";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as routes from "../../Constants/routes";

const Home = () => {
  const navigate = useNavigate();

  const userAuthData = useSelector((state) => state.userInfo);

  const { isAuthenticated } = userAuthData;

  useEffect(() => {
    // if (isAuthorized) {
    //   navigate(routes.DASHBOARD);
    // }

    // if (isAdmin) {
    //   navigate(routes.ADMIN);
    // }
    if (isAuthenticated) {
      navigate(routes.DASHBOARD);
    }
  });

  return (
    <div className="sansfil--home">
      <Intro />
      <Product />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
