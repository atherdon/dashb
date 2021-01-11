import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

import "./styles.scss";

const Dashboard = () => {
  return (
    <div className="cards">
      <div className="site-card-wrapper">
        <Row justify="space-between" wrap align="middle" gutter={[0,24]}>
          <Col flex="300px">
            <Card
              title="TOP Authors"
              extra={<Link to="tables">More</Link>}
              hoverable
            >
              <p>20 stories</p>
              <p>+counter</p>
            </Card>
          </Col>
          <Col flex="300px">
            <Card title="BAA" hoverable>
              <p>20 stories</p>
              <p>+counter</p>
            </Card>
          </Col>
          <Col flex="300px">
            <Card title="Featured TOP Stories" hoverable>
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
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
