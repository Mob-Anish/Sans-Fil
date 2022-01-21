import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import SansFil from "../Pages/Dashboard/SansFil";
import * as routes from "./../Constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} exact />
        <Route path={routes.SIGNUP} element={<Signup />} exact />
        <Route path={routes.DASHBOARD} element={<SansFil />} />
      </Routes>
    </Router>
  );
}

export default App;
