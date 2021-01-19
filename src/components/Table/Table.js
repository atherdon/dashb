import React from 'react';
import { Table as AntDTable } from 'antd';

export const Table = ({ dataSource, columns }) => (
  <AntDTable dataSource={dataSource} columns={columns} />
);
