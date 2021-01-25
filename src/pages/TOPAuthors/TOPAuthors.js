import React from 'react';

import { Table } from 'components';
import topAutors from 'data/top-authors';
import { columns } from './tableColumns';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const TOPAutors = () => {
  const dataSource = topAutors.map((item, index) => {
    return {
      key: index,
      ...item
    };
  });

  return <Table dataSource={dataSource} columns={columns} />;
};

export default withAuthenticationRequired(TOPAutors, {
  onRedirecting: () => <div>Loading</div>
});
