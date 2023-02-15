import React, { useEffect, useState } from "react";
import store from './store/store';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from "./pages/login/Login";
import Main from "./pages/Main";
import Register from "./pages/register/Register";
import ForgetPassword from "./pages/register/ForgetPassword";
import ChangePassword from "./pages/register/ChangePassword";
import Recipe from "./pages/recipe";
import Statistics from "./pages/statistics/Statistics";
import { Provider, useSelector } from "react-redux";
import Forum from "./pages/forum/components";

function App() {
  const checkAuth = useSelector(state => state.auth.positionCallApiCheckAuth);
  const userStr = sessionStorage.getItem("user");
  const [user, setUser] = useState(JSON.parse(userStr) || '');

  useEffect(() => {
    if(userStr){
      setUser(JSON.parse(userStr));
    }else{
      setUser('');
    }
  }, [checkAuth]);

  return (
    <Provider store={store} >
      <Router> 
        <React.Fragment>
          <Switch>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/statistic" render={() => <Statistics />}></Route>
          <Route exact path="/change-password" component={ChangePassword}></Route>
          <Route exact path="/forgot-password" component={ChangePassword}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forum" component={Forum}></Route>
          <Route exact path="/forget-password" component={ForgetPassword}></Route>
          <Route exact path="/">
            {!user ?  <Redirect to="/login" /> : <Main /> } 
          </Route> 
          <Route exact path="/recipe">
            {!user ?  <Redirect to="/login" /> : <Recipe /> } 
          </Route>              
          </Switch>
        </React.Fragment> 
       
      </Router>
    </Provider>
  );
}

export default App;
