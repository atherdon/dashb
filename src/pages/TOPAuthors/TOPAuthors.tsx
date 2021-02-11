import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table } from 'components';
import { columns } from './tableColumns';
import { getTopAuthors } from 'store/thunk';
import { gql, useQuery } from '@apollo/client';
import { Author, Query } from 'models/gql';

const GET_MANY_AUTHOR = gql`
  query {
    getManyAuthor {
      url
      email
      isPublished
      created
      edited
      updated
      published
      avgTimeStory
      avgAllTimeStory
    }
  }
`;

const TOPAutors = () => {
  const { data } = useQuery<Query>(GET_MANY_AUTHOR);
  const dataSource = data?.getManyAuthor?.map((item, index) => {
    return {
      key: index,
      ...item
    };
  });

  return <Table dataSource={dataSource} columns={columns} />;
};

export default TOPAutors;
