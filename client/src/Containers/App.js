import "./App.css";
import store from "../store";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home";
import SansFil from "../Pages/Dashboard/SansFil";
import * as routes from "./../Constants/routes";
import { setAuthToken } from "../Utils/setAuthToken";
import { logout, setCurrentUser } from "../Actions/userActions";
import * as userConstants from "../Constants/userConstants";
import Admin from "../Pages/Admin/Admin";

if (localStorage.userInfo) {
  const data = JSON.parse(localStorage.userInfo);
  const decoded = jwt_decode(data.token);

  //Set auth token header Auth
  setAuthToken(data.token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(data.data));

  if (data.data.user.accessToken) {
    store.dispatch({ type: userConstants.USER_AUTHORIZE, payload: data.data });
  }

  if (data.data.user.role === "admin") {
    store.dispatch({ type: userConstants.IS_ADMIN, payload: data.data });
  }

  // Check for expired time jwt token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logout());
    // Redirect
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.LOGIN} element={<Login />} exact={true} />
        <Route path={routes.SIGNUP} element={<Signup />} exact={true} />
        <Route path={routes.DASHBOARD} element={<SansFil />} exact={true} />
        <Route path={routes.ADMIN} element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
