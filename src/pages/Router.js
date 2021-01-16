import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import TOPAuthors from './TOPAuthors/TOPAuthors';
import StepsPage from './StepsPage/StepsPage';
import styled from 'styled-components';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Dashboard</Link>
      </div>

      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/top-authors" component={TOPAuthors} />
        <Route path="/steps-page" component={StepsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
