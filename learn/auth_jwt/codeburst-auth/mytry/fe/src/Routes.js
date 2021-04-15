import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
    // Redirect,
} from "react-router-dom";
import React from 'react';

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFount/NotFoud";

// function to guard for private access
const authGuard = Component => {
    return localStorage.getItem("token") ? 
    ( <Component /> ) 
    : 
    ( <Redirect to="/login" />);
};



// thing
const Routes = (props) => (
    <Router {...props}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" render={authGuard(Dashboard)} />
        <Route exact path="/" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );export default Routes;