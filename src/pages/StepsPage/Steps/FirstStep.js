import { React } from 'react';
import Table from 'components/Table';
import topAutors from '../../../data/top-authors';
import { columns } from './tableColumns';

const FirstStep = () => {
  const dataSource = topAutors.map((item, index) => {
    return {
      key: index,
      ...item
    };
  });

  return <Table columns={columns} dataSource={dataSource} />;
};

export default FirstStep;
