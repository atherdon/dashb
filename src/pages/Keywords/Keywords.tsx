import React, { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import DropdownFilter from './DropdownFilter/DropdownFilter';
import SearchInput from './SearchInput/SearchInput';
import { Table } from 'components';
import { tableColumns } from './tableColumns';
// Data
import devices from 'data/keywords/Devices.json';
import clicks from 'data/keywords/Clicks-Position.json';
import countries from 'data/keywords/Countries.json';
import pages from 'data/keywords/Pages.json';
import queries from 'data/keywords/Queries.json';
import appearance from 'data/keywords/Appearance.json';

const { Title } = Typography;

const Keywords = () => {
  const [keyword, setKeyword] = useState('Device');
  const [dataSource, setDataSource] = useState<any>(null);
  const columns = tableColumns(keyword);

  useEffect(() => {
    switch (keyword) {
      case 'Device': {
        const dataSource: any = devices.map((item, index) => {
          return {
            key: index,
            ...item
          };
        });
        setDataSource(dataSource);
        break;
      }
      case 'Date': {
        const dataSource: any = clicks.map((item, index) => {
          return {
            key: index,
            ...item
          };
        });
        setDataSource(dataSource);
        break;
      }
      case 'Country': {
        const dataSource: any = countries.map((item, index) => {
          return {
            key: index,
            ...item
          };
        });
        setDataSource(dataSource);
        break;
      }
      case 'Page': {
        const dataSource: any = pages.map((item, index) => {
          return {
            key: index,
            ...item
          };
        });
        setDataSource(dataSource);
        break;
      }
      case 'Query': {
        const dataSource: any = queries.map((item, index) => {
          return {
            key: index,
            ...item
          };
        });
        setDataSource(dataSource);
        break;
      }
      case 'Search Appearance': {
        const dataSource: any = appearance.map((item, index) => {
          return {
            key: index,
            ...item
          };
        });
        setDataSource(dataSource);
        break;
      }
    }
  }, [keyword]);

  console.log(dataSource);

  const handlerSearch = (searchText: any) => {
    const filteredEvents = dataSource.filter((item: any) => {
      const title = item[keyword].toLowerCase();
      return title.includes(searchText);
    });

    setDataSource(filteredEvents);
  };

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
          <SearchInput onSearch={handlerSearch} />
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
