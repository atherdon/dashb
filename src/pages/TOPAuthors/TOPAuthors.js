import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table } from 'components';
import { columns } from './tableColumns';
import { getTopAuthors } from 'store/thunk';

const TOPAutors = () => {
  const dispatch = useDispatch();
  const { topAuthors } = useSelector((state) => ({
    topAuthors: state.topAuthors
  }));

  useEffect(() => {
    dispatch(getTopAuthors());
  }, []);

  const dataSource = topAuthors.map((item, index) => {
    return {
      key: index,
      ...item
    };
  });

  return <Table dataSource={dataSource} columns={columns} />;
};

export default TOPAutors;
