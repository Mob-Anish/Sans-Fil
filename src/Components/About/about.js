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
          <span style={{ fontSize: "2.5rem", textAlign: "justify" }}>
            SansFil is an wireless home automation system applied in any
            appliances of your personal home. It will provide a smooth user
            experience and portability to the user through the wireless
            connection. You can connect to any appliance that need the
            electricity supply. We will provide both mobile and web application
            where you can easily connect to your devices through it.
          </span>
        </div>
      </div>
    </div>
  );
};

export default about;
