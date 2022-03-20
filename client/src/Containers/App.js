import "./App.css";
import store from "../store";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home";
import SansFil from "../Pages/Dashboard/SansFil";
import * as routes from "./../Constants/routes";
import { logout, setCurrentUser } from "../Actions/userActions";
import * as userConstants from "../Constants/userConstants";
import Admin from "../Pages/Admin/Admin";

if (localStorage.token) {
  const data = JSON.parse(localStorage.token);
  const decoded = jwt_decode(data);

  // Check for expired time jwt token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logout());
    // Redirect
    window.location.href = "/login";
  }
}

if (localStorage.userInfo) {
  const data = JSON.parse(localStorage.userInfo);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(data));

  // if (data.user.accessToken) {
  //   store.dispatch({ type: userConstants.USER_AUTHORIZE, payload: data });
  // }

  if (data.role === "admin") {
    store.dispatch({ type: userConstants.IS_ADMIN, payload: data });
  }
}

function App() {
  //console.log(process.env);

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
