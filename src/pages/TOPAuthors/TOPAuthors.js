import React from 'react';

import Table from 'components/Table';
import topAutors from '../../data/top-authors';
import { columns } from './tableColumns';

const TOPAutors = () => {
  const dataSource = topAutors.map((item, index) => {
    return {
      key: index,
      ...item
    };
  });

  return <Table dataSource={dataSource} columns={columns} />;
};

export default TOPAutors;
