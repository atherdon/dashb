import React from "react";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import App from "./pages/App";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;