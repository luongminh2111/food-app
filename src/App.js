import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./pages/login/Login";
import Main from "./pages/Main";
import Register from "./pages/register/Register";
import ForgetPassword from "./pages/register/ForgetPassword";
import ChangePassword from "./pages/register/ChangePassword";
import Recipe from "./pages/recipe";
import Statistics from "./pages/statistics/Statistics";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/statistic" render={() => <Statistics />}></Route>
          <Route exact path="/change-password" component={ChangePassword}></Route>
          <Route exact path="/forgot-password" component={ChangePassword}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forget-password" component={ForgetPassword}></Route>
          <Route exact path="/" render={() => <Main />}></Route>
          <Route exact path="/recipe"  render={() => <Recipe />}></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
