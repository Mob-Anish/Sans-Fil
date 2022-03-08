import "./aboutUs.css";

const aboutUs = () => {
  const now = new Date();

  return (
    <div className="aboutus--container">
      <h1>About Us</h1>
      <div className="description">
        SansFil is an wireless home automation system applied in any appliances of your personal home.
        It will provide a smooth user experience and portability to the user through the wireless connection.
        You can connect to any appliance that need the electricity supply. We will provide both mobile and web application 
        where you can easily connect to your devices through it. 
      </div>
    </div>
  );
};

export default aboutUs;
