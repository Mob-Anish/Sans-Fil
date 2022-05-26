import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const ErrorMessage = ({ reset }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const action = () => {
    if (reset) {
      dispatch({ type: reset });
    }
    navigate(location.pathname);
  };

  return (
    <>
      <div>
        <h1 style={{ color: "red", fontSize: "5rem" }}>
          Something went wrong 😅😅
        </h1>
        <button onClick={action}>Close</button>
      </div>
    </>
  );
};

export default ErrorMessage;
