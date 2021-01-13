import React from "react";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Tables from "./Tables/Tables";
import Steps from "./Steps/Steps";
import styled from "styled-components";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Dashboard</Link>
      </div>

      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/tables" component={Tables} />
        <Route path="/steps" component={Steps} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
