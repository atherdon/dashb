import React from 'react';
import {Card, Row, Col} from 'antd';
import './styles.scss';

const Dashboard = () => {
  return(
  <div className="cards">
    <div className="site-card-wrapper">
    
    <Row justify="space-between" align="middle">
      <Col flex="300px">
      <Card title="TOP Authors">
      <p>20 stories</p>
            <p>+counter</p>
      </Card>
      </Col>
      <Col flex="300px">
      <Card title="TOP Authors">
      <p>20 stories</p>
            <p>+counter</p>
      </Card>
      </Col>
      <Col flex="300px">
      <Card title="TOP Authors">
      <p>20 stories</p>
            <p>+counter</p>
      </Card>
      </Col>
    </Row>
  
  
</div>
    </div>
  )
}

export default Dashboard;
