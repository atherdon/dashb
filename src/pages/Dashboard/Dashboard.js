import React from 'react';
import { Card, Row, Col } from 'antd';
import { StyledCards } from './styles';
import { TopAuthors, Baa, StepsPage, Keywords } from 'data/links/CartMoreLink/CartMoreLink';

const Dashboard = () => {
  return (
    <StyledCards>
      <Row justify="space-between" wrap align="middle" gutter={[24, 24]}>
        <Col flex="300px">
          <Card title="TOP Authors" extra={<TopAuthors />} hoverable>
            <p>20 stories</p>
            <p>+counter</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="BAA" extra={<Baa />} hoverable>
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
          <Card title="Steps" hoverable extra={<StepsPage />}>
            <p>20 stories</p>
            <p>+counter</p>
          </Card>
        </Col>
        <Col flex="300px">
          <Card title="Keywords" hoverable extra={<Keywords />}>
            <p>20 stories</p>
            <p>+counter</p>
          </Card>
        </Col>
      </Row>
    </StyledCards>
  );
};

export default Dashboard;
