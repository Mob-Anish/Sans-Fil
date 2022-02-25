import "./product.css";

const product = () => {
  return (
    <div className="product" id="Products">
      <h1>Products</h1>
      <div className="product-cards">
        <div className="card card1">
          <div className="img-holder">
            <div className="bg-image"></div>
          </div>
          <button>Buy</button>
        </div>
        <div className="card card2" style={{ marginLeft: "3rem" }}>
          <div className="img-holder">
            <div className="bg-image"></div>
          </div>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default product;
