import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import HomePage from "./views/HomePage";
import SponsorshipPage from "./views/SponsorshipPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import NotFound from "./views/NotFound";
import ForgotPasswordPageSend from "./views/ForgotPasswordPageSend"
import ForgotPasswordPageInput from "./views/ForgotPasswordPageInput"
import ForgotPasswordPageChange from "./views/ForgotPasswordPageChange"
import DashboardPage from "./views/DashboardPage";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/sponsor" component={SponsorshipPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/forgotpasswordpagesend" component={ForgotPasswordPageSend} />
      <Route path="/forgotpasswordpageinput" component={ForgotPasswordPageInput} />
      <Route path="/forgotpasswordpagechange" component={ForgotPasswordPageChange} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
