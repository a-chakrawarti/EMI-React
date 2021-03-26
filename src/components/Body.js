import React from "react";
import Home from "./Home";
import Result from "./Result";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
};

export default Body;
