import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import TOPAuthors from './TOPAuthors';
import StepsPage from './StepsPage';

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
