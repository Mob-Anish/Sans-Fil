import "./about.css";

const about = () => {
  return (
    <div className="about" id="AboutUs">
      <h1 style={{ fontSize: "3rem", textAlign: "center" }}>About Us</h1>
      <span className="border-bottom"></span>
      <div className="description" style={{ marginTop: "8rem" }}>
        <div className="img-holder">
          <div className="bg-image"></div>
        </div>
        <div className="content">
          <span style={{ fontSize: "2.5rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </span>
        </div>
      </div>
    </div>
  );
};

export default about;
