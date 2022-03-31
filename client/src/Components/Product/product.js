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
              It is an wireless system that can be connected through SansFil web
              and mobile application. It can connect the wide range of
              appliances.
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
