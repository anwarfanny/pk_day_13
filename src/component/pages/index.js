import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-route-dom";
import Navbar from "../navbar/navbar";
import Home from "../pages/home/home.js";
import Student from "../pages/student/student.js";
import API from "../pages/API/API.js";

const Index = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route path="/student" component={Student} />
            <Route path="/API" component={API} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Index;
