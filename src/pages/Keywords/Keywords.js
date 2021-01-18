import React from 'react';
import { Row, Col, Typography } from 'antd';
import DropdownFilter from './Dropdown/Dropdown';
import SearchInput from './SearchInput/SearchInput';

const { Title } = Typography;

const Keywords = () => {
  return (
    <Row justify="space-between" align="middle">
      <Col offset={1}>
        <Title level={2}>by counries</Title>
      </Col>
      <Col offset={9}>
        <DropdownFilter />
      </Col>
      <Col pull={1}>
        <SearchInput />
      </Col>
    </Row>
  );
};

export default Keywords;
