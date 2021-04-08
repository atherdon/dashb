import React from 'react';
import { Table as AntDTable, TableProps } from 'antd';
// import { ColumnsType } from 'antd/lib/table';

export const Table = <T extends Record<string, unknown>>({
  dataSource,
  columns
}: {
  dataSource: TableProps<T>['dataSource'];
  columns: TableProps<T>['columns'];
}) => <AntDTable dataSource={dataSource} columns={columns} />;
