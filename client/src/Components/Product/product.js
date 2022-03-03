import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as routes from "../../Constants/routes";
import * as userAction from "../../Actions/userActions";

const product = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userAuthData = useSelector((state) => state.userInfo);

  const { isAuthenticated } = userAuthData;

  // const loginToBuy = () => {
  //   navigate(routes.LOGIN);
  // };

  // const buyProduct = () => {
  //   dispatch(userAction.buyProduct());
  // };

  return (
    <div className="product" id="Products">
      <h1>Products</h1>
      <div className="product-cards">
        <div className="card card1">
          <div className="img-holder">
            <div className="bg-image"></div>
          </div>
          <div className="description">
            <h1>About</h1>
            <p style={{ fontSize: "2rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            {/* {isAuthenticated ? (
              <button onClick={buyProduct}>Buy</button>
            ) : (
              <button onClick={loginToBuy}>Login to buy</button>
            )} */}
          </div>
        </div>
        <div className="card card2" style={{ marginLeft: "10rem" }}>
          <div className="img-holder">
            <div className="bg-image"></div>
          </div>
          <div className="description">
            <h1>About</h1>
            <p style={{ fontSize: "2rem" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            {/* {isAuthenticated ? (
              <button onClick={buyProduct}>Buy</button>
            ) : (
              <button onClick={loginToBuy}>Login to buy</button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
