import About from "../../Components/About/about";
import Footer from "../../Components/Footer/footer";
import Intro from "../../Components/Into/Intro";
import Product from "../../Components/Product/product";
import "./Home.css";

const Home = () => {
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
