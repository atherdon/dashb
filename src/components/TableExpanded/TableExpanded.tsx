import React from 'react';
import { Table, Typography } from 'antd';

export const TableExpanded = ({ columns, dataSource }: { dataSource: any; columns: any }) => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p style={{ margin: 0 }}>
          {record.articles.map((articleLink: string, index: number) => (
            <>
              <Typography.Link key={index} href={articleLink}>
                {articleLink}
              </Typography.Link>
              <br />
            </>
          ))}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable'
    }}
    dataSource={dataSource}
  />
);
