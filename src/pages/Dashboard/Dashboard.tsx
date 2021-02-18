import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { StyledCards } from './styles';

const Dashboard = () => {
  return (
    <StyledCards>
      <Row justify="space-between" wrap align="middle" gutter={[24, 24]}>
        <Col flex="300px">
          <Card title="TOP Authors" extra={<Link to="/top-authors">More</Link>} hoverable>
            <p>20 stories</p>
            <p>+counter</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Evergreen" extra={<Link to="/baa">More</Link>} hoverable>
            <p>20 stories</p>
            <p>+counter</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Featured TOP Stories" hoverable>
            <p>desc</p>
            <p>desc</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Managed Accounts" hoverable>
            <p>desc</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Stats" hoverable>
            <p>desc</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Edited Stories" hoverable>
            <p>desc</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Today Submined stories" hoverable>
            <p>desc</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Search" hoverable>
            <p>desc</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Published Stories" hoverable>
            <p>desc</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Reports" hoverable>
            <p>desc</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Steps" hoverable extra={<Link to="steps-page">More</Link>}>
            <p>20 stories</p>
            <p>+counter</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Keywords" hoverable extra={<Link to="keywords">More</Link>}>
            <p>20 stories</p>
            <p>+counter</p>
          </Card>
        </Col>
      </Row>
    </StyledCards>
  );
};

export default Dashboard;
