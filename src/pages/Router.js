import React from 'react';
import { Menu, Row, Col, Layout } from 'antd';
import { Switch, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// Components
import Dashboard from './Dashboard/Dashboard';
import TOPAuthors from './TOPAuthors/TOPAuthors';
import StepsPage from './StepsPage/StepsPage';
import ProgressBar from './ProgressBar/ProgressBar';
import Brands from './Brands/Brands';
import Keywords from './Keywords/Keywords';
import Expanded from './Expanded/Expanded';
import ProtectedRoute from 'auth/ProtectedRoute';
import { AuthButton, Breadcrumbs } from 'components';
// Data
import progressData from 'data/progress';
import styled from 'styled-components';
// Header Links
import { DashboardLink, ProgressBarLink, ExpandedLink } from 'components/Links/HeaderLinks/HeaderLinks';

const { Header, Content } = Layout;

const StyledContent = styled(Content)`
  padding: 40px 60px;
`;

const Router = () => {
  const { logout, user } = useAuth0();

  return (
    <Layout>
      <Header>
        <Row justify="space-between" align="middle">
          <Col flex="500px">
            <Menu theme="dark" mode="horizontal">
              <Menu.Item>
                <DashboardLink />
              </Menu.Item>
              <Menu.Item>
                <ProgressBarLink />
              </Menu.Item>
              <Menu.Item>
                <ExpandedLink />
              </Menu.Item>
            </Menu>
          </Col>
          <Col>
            <AuthButton user={user} logout={logout} />
          </Col>
        </Row>
      </Header>
      <StyledContent>
        <Breadcrumbs />
        <Switch>
          <ProtectedRoute path="/" exact component={Dashboard} />
          <ProtectedRoute path="/top-authors" component={TOPAuthors} />
          <ProtectedRoute path="/baa" component={Brands} />
          <ProtectedRoute path="/steps-page" component={StepsPage} />
          <ProtectedRoute
            path="/progress-bar"
            component={(props) => <ProgressBar {...props} data={progressData} />}
          />
          <ProtectedRoute path="/keywords" component={Keywords} />
          <ProtectedRoute path="/expanded" component={Expanded} />
        </Switch>
      </StyledContent>
    </Layout>
  );
};

export default Router;
