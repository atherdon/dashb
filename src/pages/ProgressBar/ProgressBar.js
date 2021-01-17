import React, { useState, useEffect } from 'react';
import { Row, Col, Progress, Typography } from 'antd';

const { Text } = Typography;

const ProgressBar = ({ data }) => {
  const [percentAvg, setPercentAvg] = useState(0);
  const [percentReal, setPercentReal] = useState(0);
  const [percentNext, setPercentNext] = useState(0);

  const percentCount = (number, real) => {
    return Math.round((real * 100) / number);
  };

  console.log(data);

  useEffect(() => {
    setPercentAvg(percentCount(data.avg, data.real));
    setPercentReal(percentCount(data.plan, data.real));
    setPercentNext(percentCount(data.next, data.perDay));
  }, []);

  return (
    <>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}>
          <Row>
            <Text strong>AVG number per week&quot;(200 stories)</Text>
            <Progress percent={percentAvg} />
          </Row>
          <Row>
            <Text strong>Real number that we must hit&quot;(260 stories)</Text>
            <Progress percent={percentReal} />
          </Row>
          <Row>
            <Text strong>Next goal 280(40 stories per day)</Text>
            <Progress percent={percentNext} />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProgressBar;
