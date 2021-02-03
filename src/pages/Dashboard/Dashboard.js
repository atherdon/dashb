import React from 'react';
import { Card, Row, Col } from 'antd';
import { StyledCards } from './styles';
import { cards } from 'data/cards';

const Dashboard = () => {
  return (
    <StyledCards>
      <Row justify="space-between" wrap align="middle" gutter={[24, 24]}>
        {
          cards.map(Val => (
            <Col flex="300px" key={Val.title}>
              <Card
                title={Val.title}
                extra={Val.extra ? <Val.extra /> : null}
                hoverable={Val.hoverable}
              >
                {Val.content}
              </Card>
            </Col>
          ))
        }
      </Row>
    </StyledCards>
  );
};

export default Dashboard;
