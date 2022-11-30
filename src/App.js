import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import ForgetPassword from "./pages/register/ForgetPassword";
import ChangePassword from "./pages/register/ChangePassword";
import Recipe from "./pages/recipe";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/change-password" component={ChangePassword}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forget-password" component={ForgetPassword}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/recipe" component={Recipe}></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
