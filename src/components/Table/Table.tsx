import React from 'react';
import { Table as AntDTable } from 'antd';

export const Table = ({ dataSource, columns }: { dataSource: any; columns: any }) => (
  <AntDTable dataSource={dataSource} columns={columns} />
);
