import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
