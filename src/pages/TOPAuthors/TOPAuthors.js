import React from 'react';

import { Table } from 'components';
import topAutors from 'data/top-authors';
import { topAuthorLinks } from "data/TopAuthorLinks";
import { columns } from './tableColumns';

const TOPAutors = () => {
    const dataSource = topAutors.map((item, index) => {
        return {
            key: index,
            ...item,
            'Draft url': topAuthorLinks[index]
        };
    });
    console.log(dataSource)
    return <Table dataSource={dataSource} columns={columns} />;
};

export default TOPAutors;
