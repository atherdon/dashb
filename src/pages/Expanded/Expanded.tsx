import { TableExpanded } from 'components';
import React from 'react';
import columns from './tableColumns';

// Data
import expandable from 'data/expandable';

const Expanded = () => (
  <>
    <TableExpanded columns={columns} dataSource={expandable} />
  </>
);

export default Expanded;
