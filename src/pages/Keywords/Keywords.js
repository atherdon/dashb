import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import DropdownFilter from './DropdownFilter/DropdownFilter';
import SearchInput from './SearchInput/SearchInput';
import { Table } from 'components';
import { tableColumns } from './tableColumns';
// Data
import devices from 'data/keywords/Devices';
import clicks from 'data/keywords/Clicks-Position';
import countries from 'data/keywords/Countries';
import pages from 'data/keywords/Pages';
import queries from 'data/keywords/Queries';
import appearance from 'data/keywords/Appearance';

const { Title } = Typography;

const Keywords = () => {
  const [keyword, setKeyword] = useState('Device');
  const columns = tableColumns(keyword);

  let dataSource;
  switch (keyword) {
    case 'Device': {
      dataSource = devices.map((item, index) => {
        return {
          key: index,
          ...item
        };
      });
      break;
    }
    case 'Date': {
      dataSource = clicks.map((item, index) => {
        return {
          key: index,
          ...item
        };
      });
      break;
    }
    case 'Country': {
      dataSource = countries.map((item, index) => {
        return {
          key: index,
          ...item
        };
      });
      break;
    }
    case 'Page': {
      dataSource = pages.map((item, index) => {
        return {
          key: index,
          ...item
        };
      });
      break;
    }
    case 'Query': {
      dataSource = queries.map((item, index) => {
        return {
          key: index,
          ...item
        };
      });
      break;
    }
    case 'Search Appearance': {
      dataSource = appearance.map((item, index) => {
        return {
          key: index,
          ...item
        };
      });
      break;
    }
  }

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col offset={1}>
          <Title level={2}>by {keyword.toLowerCase()}</Title>
        </Col>
        <Col offset={9}>
          <DropdownFilter setKeyword={setKeyword} />
        </Col>
        <Col pull={1}>
          <SearchInput />
        </Col>
      </Row>
      <Row>
        <Col offset={1} span={22}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  );
};

export default Keywords;
