import React from 'react';
import { Table as AntDTable } from 'antd';

const Table = ({ dataSource, columns }) => {
  return <AntDTable dataSource={dataSource} columns={columns} />;
};

export default Table;
