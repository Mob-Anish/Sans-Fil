import { useState } from "react";
import "./emailVerification.css";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../../Actions/userActions";
import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import * as routes from "../../Constants/routes";

const emailVerification = () => {
  const [otpCode, setOtpCode] = useState("");
  const [uiError, setUiError] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userAuthData = useSelector((state) => state.userLogin);
  const registerData = useSelector((state) => state.userRegister);

  const { userInfo, error } = userAuthData;
  const { isAuthenticated, userData } = registerData;

  useEffect(() => {
    if (userInfo) {
      navigate(routes.DASHBOARD);
    }
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUiError("");

    if (!otpCode) return setUiError({ otp: "OTP Field is required 😅" });

    dispatch(userAction.emailVerification(otpCode));
  };

  return isAuthenticated === false ? (
    <Navigate to={routes.HOME} />
  ) : (
    <div className="email--verify__container">
      <div className="content-holder">
        <h1>Verify your Email Address</h1>
        <div className="info-tag">
          Our SansFil team emailed you a six digit code to{" "}
          {userData ? userData.email : ""}
        </div>
        <div className="info-tag">
          Enter the code below to confirm your email address.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type={"text"}
              name="otp"
              className="otp-code"
              placeholder="Enter your otp code here ..."
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
            />
          </div>
          <div className="error-field">{uiError ? uiError.otp : ""}</div>
          <div className="error-field">{error ? error.message : ""}</div>
          <button type={"submit"}>Verify</button>
        </form>
        <div className="info-tag info-tag-warning">
          Make sure keep this window open or your data will go boom 💥 💥
        </div>
      </div>
    </div>
  );
};

export default emailVerification;
