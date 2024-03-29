import React from 'react';
import { Button, Checkbox, Dropdown, Menu, Spin, TableProps } from 'antd';
import moment from 'moment';

import { Table } from 'components';
import { Article } from 'models/gql';
import { useGetManyArticleQuery } from 'models/gql';

const TOPAutors = () => {
  const { data, loading } = useGetManyArticleQuery({
    variables: {
      where: {
        type: 'top-authors'
      }
    }
  });

  const DATE_FORMAT = 'MM.DD.YYYY';
  const columns: TableProps<Article>['columns'] = [
    {
      title: 'Draft url',
      dataIndex: 'url',
      key: 'url',
      render: (_, row) => <a href={row.url}>{row.url}</a>
    },
    {
      title: 'Is Published',
      dataIndex: 'isPublished',
      key: 'isPublished',
      render: (_, row) => <Checkbox value={row.isPublished} />
    },
    // {
    //   title: 'Email',
    //   dataIndex: 'email',
    //   key: 'email',
    //   render: (_, row) => <a>{row.email}</a>
    // },
    {
      title: 'Updated',
      dataIndex: 'updated',
      key: 'updated',
      render: (_, row) => moment(row.updated).format(DATE_FORMAT)
    },
    // {
    //   title: 'Published',
    //   dataIndex: 'Published',
    //   key: 'published',
    //   render: (item: any) =>
    //     item && <Checkbox checked={item.toLowerCase() === 'true' ? true : false} />
    // },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      render: (_, row) => moment(row.created).format(DATE_FORMAT)
    },
    {
      title: 'Edited',
      dataIndex: 'edited',
      key: 'edited',
      render: (_, row) => moment(row.edited).format(DATE_FORMAT)
    },
    {
      title: 'Published',
      dataIndex: 'published',
      key: 'published',
      render: (_, row) => {
        // item = item ? item.toString().toUpperCase() : '';
        // const isRejected = item.includes('REJECTED');
        // const value = isRejected ? item.replace('REJECTED', '').trim() : item;

        // return (
        //   value && (
        //     <>
        //       {isRejected && <Tag color="red">REJECTED</Tag>}
        //       {value}
        //     </>
        //   )
        // );
        return moment(row.published).format(DATE_FORMAT);
      }
    },
    {
      title: 'Avg time story',
      dataIndex: 'avgTimeStory',
      key: 'avgTimeStory'
    },
    {
      title: 'Avg time ALL story',
      dataIndex: 'avgAllTimeStory',
      key: 'avgAllTimeStory'
    },
    {
      title: '',
      dataIndex: 'rejected',
      key: 'rejected',
      render: () => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">Rejected</Menu.Item>
            </Menu>
          }
          trigger={['click']}>
          <Button>Rejected</Button>
        </Dropdown>
      )
    }
  ];

  const dataSource = data?.getManyArticle.items?.map((item) => {
    return {
      key: item?.id,
      ...item
    };
  });

  return loading ? (
    <Spin />
  ) : (
    <Table dataSource={dataSource as Readonly<Article[] | undefined>} columns={columns} />
  );
};

export default TOPAutors;
