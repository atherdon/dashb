import React from 'react';

import Table from 'components/Table/Table';
import brands from 'data/brands';
import { columns } from './tableColumns';

const Brands = () => {
  const dataSource = brands.map((item, index) => {
    return {
      key: index,
      ...item
    };
  });

  return <Table dataSource={dataSource} columns={columns} />;
};

export default Brands;
