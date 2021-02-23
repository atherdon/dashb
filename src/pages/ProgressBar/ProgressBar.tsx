import React, { useState, useEffect } from 'react';
import { Row, Col, Progress, Typography } from 'antd';
import { Table } from 'components';
import editors from 'data/editors';

const { Text, Title } = Typography;

const ProgressBar = ({ data }: { data: any }) => {
  const [percentAvg, setPercentAvg] = useState(0);
  const [percentReal, setPercentReal] = useState(0);
  const [percentNext, setPercentNext] = useState(0);

  const percentCount = (number: any, real: any) => {
    return Math.round((real * 100) / number);
  };

  const dataSource = editors.map((item, index) => {
    return {
      key: index,
      ...item
    };
  });

  useEffect(() => {
    setPercentAvg(percentCount(data.avg, data.real));
    setPercentReal(percentCount(data.plan, data.real));
    setPercentNext(percentCount(data.next, data.perDay));
  }, []);

  const columns = [
    {
      title: 'Editors',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Edited',
      dataIndex: 'edited',
      key: 'edited'
    },
    {
      title: 'Edited, %',
      dataIndex: 'editedPercent',
      key: 'editedPercent'
    },
    {
      title: 'Published',
      dataIndex: 'published',
      key: 'published'
    },
    {
      title: 'Published, %',
      dataIndex: 'publishedPercent',
      key: 'publishedPercent'
    },
    {
      title: 'Rejected',
      dataIndex: 'rejected',
      key: 'rejected'
    },
    {
      title: 'Rejected, %',
      dataIndex: 'rejectedPercent',
      key: 'rejectedPercent'
    }
  ];

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
      <Row>
        <Col xs={{ span: 22, offset: 1 }}>
          <Title level={2}>Editors</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 22, offset: 1 }}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  );
};

export default ProgressBar;
