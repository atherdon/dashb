import React from 'react';
import { Table } from 'antd';

export const TableExpanded = ({ columns, dataSource }) => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: (record) => record.name !== 'Not Expandable'
    }}
    dataSource={dataSource}
  />
);
