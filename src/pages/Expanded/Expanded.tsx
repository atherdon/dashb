import { TableExpanded } from 'components';
import React from 'react';

import expandable from 'data/expandable3';

const Expanded = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>
    }
  ];

  return (
    <>
      <TableExpanded columns={columns} dataSource={expandable} />
    </>
  );
};

export default Expanded;
