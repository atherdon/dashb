import React from 'react';
import { Menu } from 'antd';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import TOPAuthors from './TOPAuthors/TOPAuthors';
import StepsPage from './StepsPage/StepsPage';
import ProgressBar from './ProgressBar/ProgressBar';
import Brands from './Brands/Brands';
import Keywords from './Keywords/Keywords';
// Data
import progressData from 'data/progress';

const Router = () => {
  return (
    <BrowserRouter>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/progress-bar">Progress Bar</Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/top-authors" component={TOPAuthors} />
        <Route path="/baa" component={Brands} />
        <Route path="/steps-page" component={StepsPage} />
        <Route
          path="/progress-bar"
          component={(props) => <ProgressBar {...props} data={progressData} />}
        />
        <Route path="/keywords" component={Keywords} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
