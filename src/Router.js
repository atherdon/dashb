import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Dashboard} from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
    </BrowserRouter>
  );
};

export default Router;