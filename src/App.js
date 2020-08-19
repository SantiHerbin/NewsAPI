import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
