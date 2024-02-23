import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/login.js";
import Dashboard from "./pages/dashboard.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" Component={Login}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
        </Routes>
      </Router>
    )
  }
}