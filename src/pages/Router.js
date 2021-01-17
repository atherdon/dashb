import React from 'react';
import { Menu } from 'antd';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import TOPAuthors from './TOPAuthors';
import StepsPage from './StepsPage';
import ProgressBar from './ProgressBar';
// Data
import progressData from 'data/progress';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Dashboard</Link>
      </div>
      <div>
        <Link to="/progress-bar">Progress Bar</Link>
      </div>

      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/top-authors" component={TOPAuthors} />
        <Route path="/steps-page" component={StepsPage} />
        <Route
          path="/progress-bar"
          component={(props) => <ProgressBar {...props} data={progressData} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
