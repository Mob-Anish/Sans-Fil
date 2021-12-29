import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SansFil from "../Pages/Dashboard/SansFil";
import * as routes from "./../Constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} exact />
        <Route path={routes.HOME} element={<SansFil />} />
      </Routes>
    </Router>
  );
}

export default App;
