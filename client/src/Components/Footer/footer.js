import "./footer.css";

const footer = () => {
  const now = new Date();

  return (
    <div className="footer">
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>SansFil</h1>
      <h2>&copy; {now.getFullYear()} All rights Reserved | SansFil Team 🤙</h2>
    </div>
  );
};

export default footer;
